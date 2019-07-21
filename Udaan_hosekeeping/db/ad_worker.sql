USE udaandb;

DELIMITER $$
USE `udaandb`$$

CREATE PROCEDURE `Add_worker`  (
  IN _Id_Worker VARCHAR(20),
  IN _Name_Worker VARCHAR(200),
  IN _Skill_of_Worker VARCHAR(200)
)
BEGIN
  INSERT INTO housekeep_worker (Id_Worker, Name_of_worker, Skill_of_Worker)
  VALUES (_Id_Worker, _Name_Worker, _Skill_of_Worker);
  SELECT _workerId AS 'workerId';
END


