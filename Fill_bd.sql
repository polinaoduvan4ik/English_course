use English_course

delete from levels;

insert into levels
values('Ќачинающий уровень', '≈сли вы никогда ранее не изучали английский, то курс Ќачинающий Ч именно то,
		что вам нужно. «десь вы можете научитьс€ строить простые предложени€ на английском €зыке, узнаете азы грамматики и правила чтени€.
		ѕознакомитесь с английским алфавитом и особенност€ми произношени€ звуков,
		научитесь понимать английскую речь и говорить на простые темы, использу€ часто употребл€емые слова и фразы.');

insert into levels
values('—редний уровень', ' Ќа этом этапе вы становитесь Ђговор€щимї студентом.  
		Ќа уровне широко распространенные слова, которые св€заны с общением в деловой сфере. 
		 роме того, уровень богат на разные фразы, идиомы, обороты речи и устойчивые выражени€. 
		¬ы запоминаете целые фразы в контексте, учитесь строить новые слова с использованием префиксов и суффиксов.');

insert into levels
values('ѕродвинутый уровень', ' ¬ас научат говорить обо всем, даже если вы не разбираетесь в предмете разговора. 
		Ќаучат живой спонтанной беглой и грамотной речи. —ертификат этого экзамена необходим люд€м, 
		которые хот€т доказать, что способны использовать разговорный и письменный английский в повседневной жизни на продвинутом уровне.
		¬ы активно используете в своей речи сложные грамматические конструкции, синонимы слов, фразовые глаголы и идиомы. ¬ы можете говорить как минимум 4-6 минут на любую тему.');

select * from levels;

alter table levels alter column level_description nvarchar(700);

insert into tests
values('English');

insert into questions
values('Where is Mike?', 1);
insert into questions
values('How long have you been playing the trumpet?', 1);
insert into questions
values('Are you ___ at the moon?', 1);
insert into questions
values('Do you like reading books?', 1);
insert into questions
values('What does "TV" mean?', 1);
insert into questions
values('My younger brother ___ dinner last night.', 1);
insert into questions
values('When was the last time you took a picture?', 1);
insert into questions
values('How long did you study last night?', 1);
insert into questions
values('My father ___ very busy last week.', 1);
insert into questions
values('___ your father taller than you?', 1);


insert into replies
values('For three hours.',0,1);
insert into replies
values('At eight.',0,1);
insert into replies
values('At school.',1,1);
insert into replies
values('For four years.',1,2);
insert into replies
values('By myself.',0,2);
insert into replies
values('In my room.',0,2);
insert into replies
values('look',0,3);
insert into replies
values('looking',1,3);
insert into replies
values('looked',0,3);
insert into replies
values('Yes, I read.',0,4);
insert into replies
values('Yes, I like.',0,4);
insert into replies
values('Yes, I do.',1,4);
insert into replies
values('Television.',1,5);
insert into replies
values('For one hour.',0,5);
insert into replies
values('On Friday.',0,5);
insert into replies
values('cook',0,6);
insert into replies
values('cooks',0,6);
insert into replies
values('cooked',1,6);
insert into replies
values('A picture of Jane.',0,7);
insert into replies
values('With my camera.',0,7);
insert into replies
values('About four days ago.',1,7);
insert into replies
values('With Bob.',0,8);
insert into replies
values('For three hours.',1,8);
insert into replies
values('English.',0,8);
insert into replies
values('is',0,9);
insert into replies
values('were',0,9);
insert into replies
values('was',1,9);
insert into replies
values('Is',1,10);
insert into replies
values('Are',0,10);
insert into replies
values('Does',0,10);
