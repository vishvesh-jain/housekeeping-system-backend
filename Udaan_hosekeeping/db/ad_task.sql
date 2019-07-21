USE udaandb;

DELIMITER $$
USE `udaandb`$$

CREATE PROCEDURE `Add_task`  (
  IN _Id_task VARCHAR(20),
  IN _Name_task VARCHAR(200),
  IN _Id_Asset VARCHAR(20),
  IN _Freq_of_Task VARCHAR(20)
)
BEGIN
  INSERT INTO task_Asset (id_task, Name_task, asset_Id, Freq_of_task)
  VALUES (_Id_task, _Name_task, _Id_Asset, _Freq_of_Task);
  SELECT _Id_task AS 'taskId';
END
