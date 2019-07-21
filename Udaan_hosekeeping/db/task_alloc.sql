USE udaandb;

DELIMITER $$
USE `udaandb`$$

CREATE PROCEDURE `AllocTask`  (
  IN _Id_alloc VARCHAR(20),
  IN _Id_task VARCHAR(200),
  IN _Id_worker VARCHAR(20),
  IN _Alloc_time datetime,
  IN _Performed_By_Time datetime
)
BEGIN
  INSERT INTO Task_Allocate(Id_alloc, Id_worker, Id_task, Alloc_time, Perform_By_Task)
  VALUES (_Id_alloc, _Id_worker, _Id_task, _Alloc_time, _Performed_By_Time);
  SELECT _Id_alloc AS 'allocId';
END




