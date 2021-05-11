const Test = require('../models').test;
const Reply = require('../models').reply;
const Question = require('../models').question;

exports.getTests = async function (request, response) {
    let id = request.body.id;
    let res;
    if(id!==undefined&&id!==null&&id!==''){
         res = await Test.findAll({where:{id:id}});
    }else{
         res = await Test.findAll()
    }
    response.send(res);
  
};

async function getQuestions(testId){
    let questions = await  Question.findAll({where:{testId:testId},raw: true,});
    return questions;
}

async function getReply(questionId){
    let reply = await  Reply.findAll({where:{questionId:questionId,accuracy:true},raw: true,});
    return reply;
}

exports.getResultOfTest =async function (request, response) {
    let {results,testId}= request.body;
    var score = 0;
    console.log( request.body.results);
    if(results!==undefined&&Array.isArray(results)){
        if(testId!==undefined&&testId!==null&&testId!==''){
            let questions =await getQuestions(testId);
            console.log(questions);
            Promise.all(
                questions.map(async (question)=>{
                    let reply= await getReply(question.id);
                    console.log('reply',reply);
                    results.map((answer)=>{
                        if(answer.id==reply[0].id&&
                            answer.questionId==reply[0].questionId){
                                score+=10;
                                console.log('ALERT',score)
                            }
                    })
                      
                })
            ).then(()=>{
                console.log('SEND',score)
                response.send(JSON.stringify(score))
            })
             
            
         
          

            // Question.findAll({where:{testId:testId}})
            // .then((questions)=>{
            //     if(questions!==undefined){
            //         let score = 0;
            //         const result = questions.map((question)=> {
            //           Reply.findAll({where:{questionId:question.id,accuracy:true},raw: true,})
            //          .then((reply)=>{
            //               results.map((answer)=>{
            //                   if(answer.id==reply[0].id&&
            //                   answer.questionId==reply[0].questionId){
            //                       score=+10;
            //                       console.log('ALERT')
            //                   }
            //               })
            //               console.log(score)
            //          })
            //          console.log('SEND',score)
            //          response.send(JSON.stringify(result))
            //       })
                  
            //   }
            // })
            
        }else{
            response.status(406).send('ERROR with data');
        }
    }else{
        response.status(406).send('ERROR with data');
    }
   
};



