const SERVER = 'http://localhost:4001/'

class Server_api{
    async get_levels(){
        const res = await fetch(`${SERVER}level/`);
        return res.json();
    }
    async get_questions(testId){
        const res = await fetch(`${SERVER}question/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-type':'application/json'
            },
            body:JSON.stringify({id:testId})
        });
        return res.json();
    }

    async get_replies(questionId){
        const res = await fetch(`${SERVER}reply/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-type':'application/json'
            },
            body:JSON.stringify({id:questionId})
        });
        return res.json();
    }

    async get_result(testId,results){
        console.log(results);
        let newRes=[];
        for(const [key,value] of Object.entries(results)){
            newRes.push({
                id:value,
                questionId:key
            })
        }
        const res = await fetch(`${SERVER}test/getResults`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-type':'application/json'
            },
            body:JSON.stringify({testId:testId,results:newRes})
        });
        return res.json();
    }
}

export default Server_api;