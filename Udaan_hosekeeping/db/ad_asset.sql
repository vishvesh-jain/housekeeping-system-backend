USE udaandb;

DELIMITER $$
USE `udaandb`$$

CREATE PROCEDURE `Add_Asset`  (
  IN _Id_Asset VARCHAR(20),
  IN _Name_of_Asset VARCHAR(200),
  IN _Quantity_of_Asset int(20)
)
BEGIN
  INSERT INTO ASSET (asset_Id, Name_of_Asset, Qty_of_Asset)
  VALUES (_Id_Asset, _Name_of_Asset, _Quantity_of_Asset);
  SELECT _Id_Asset AS 'assetId';
END




