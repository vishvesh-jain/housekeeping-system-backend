create database udaandb;
use udaandb;

create table `ASSET`(
	`asset_Id` varchar(20),
	`Name_of_Asset` varchar(200),
	`Qty_of_Asset` int(20)
	);

Alter table ASSET add primary key (asset_Id);

create table `task_Asset`(
	`id_task` varchar(20),
	`Name_task` varchar(200),
	`asset_Id` varchar(20),
	`Freq_of_task` varchar(20)
);

Alter table Task_Asset add primary key (id_task);

create table `Housekeep_worker`(
	`Id_worker` varchar(20),
	`Name_of_Worker` varchar(200),
	`Skill_of_Worker` varchar(200)
	);

Alter table Housekeep_worker add primary key (id_worker);

create table `Task_Allocate`(
	`Id_alloc` varchar(20),
	`Id_worker` varchar(20),
	`id_task` varchar(20),
	`Alloc_time` datetime ,
	`Perform_By_task` datetime 
);

Alter table Task_Allocate add primary key (Id_alloc);

create table `administrator`(
	`Id_admin` varchar(20),
	`Name_admin` varchar(200),
	`Id_worker` varchar(20)
	
);

Alter table administrator primary key (Id_admin);

insert into ASSET values('1','Bedshhet','60');
insert into ASSET values('2','Dining Table','650');
insert into ASSET values('3','Single Bed','650');
insert into ASSET values('4','Double Bed','160');

insert into Task_Asset values('1','Spread Bedsheet','1','Daily');
insert into Task_Asset values('2','Clean Dining Table','4','Daily');
insert into Task_Asset values('3','Set Bedroom','3','Monthly');

insert into Housekeep_worker values('Alpha','Rohan','Amateur');
insert into Housekeep_worker values('Beta','Mohan','Professional');
insert into Housekeep_worker values('Gama','Ram','Novice');
