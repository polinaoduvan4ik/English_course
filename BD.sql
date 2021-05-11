use English_course;

create table Users(
	id int primary key identity(1,1),
	login nvarchar(30),
	phone int,
	id_level int
	references Levels(id),
)

create table Levels(
	id int primary key identity(1,1),
	level_name nvarchar(15),
	level_description nvarchar(200)
)

create table Test(
	id int primary key identity(1,1),
	test_name int,
	points int,
	id_user int
	references Users(id)
)

create table Questions(
	id int primary key identity(1,1),
	question nvarchar(200),
	id_test int 
	references Test(id)
)

create table Replies(
	id int primary key identity(1,1),
	reply nvarchar(200),
	accuracy bit,
	id_question int 
	references Questions(id)
)