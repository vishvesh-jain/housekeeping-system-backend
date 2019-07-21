const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../DB.js');

// Add Asset
router.post('/add-asset/', (req, res) => {
  var asset_Id = req.param('asse_Id');
  var asset_Name = req.param('asset_Name');
  var asset_Qty = req.param('asset_Qty');
  //console.log(assetId, assetName, assetQty);
  const query = `
    SET @asset_Id = ?;
    SET @Name_of_Asset = ?;
    SET @Qty_of_Asset = ?;
    CALL assetAdd(@asset_Id, @Name_of_Asset, @Qty_of_Asset);
  `;
  mysqlConnection.query(query, [asset_Id, asset_Name, asset_Qty], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Asset has been successfully Saved'});
    } else {
      console.log(err);
    }
  });
});

// Add Task
router.post('/add-task', (req, res) => {
  var task_Id = req.param('task_Id');
  var task_Name = req.param('task_Name');
  var asset_Id = req.param('asset_Id');
  var task_Freq = req.param('task_Freq');
  const query = `
    SET @id_task = ?;
    SET @Name_task = ?;
    SET @asset_Id = ?;
    SET @Freq_of_task = ?;
    CALL taskAdd(@id_task, @Name_task, @asset_Id, @Freq_of_task);
  `;
  mysqlConnection.query(query, [task_Id, task_Name, asset_Id, task_Freq], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Task has been successfully Saved'});
    } else {
      console.log(err);
    }
  });
});

// Add Worker
router.post('/add-worker', (req, res) => {
  var worker_Id = req.param('worker_Id');
  var worker_Name = req.param('worker_Name');
  var worker_Skill = req.param('worker_Skill');
  //console.log(workerId, workerName, workerSkill);
  const query = `
    SET @Id_worker = ?;
    SET @Name_of_Worker = ?;
    SET @Skill_of_Worker = ?;
    CALL workerAdd(@Id_worker, @Name_of_Worker, @Skill_of_Worker);
  `;
  mysqlConnection.query(query, [worker_Id, worker_Name, worker_Skill], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Worker has been successfully Saved'});
    } else {
      console.log(err);
    }
  });
});

// GET all Assets
router.get('/assets/all', (req, res) => {
  mysqlConnection.query('SELECT * FROM ASSET', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// Allocate Task
router.post('/allocate-task', (req, res) => {
  var alloc_Id = req.param('alloc_Id');
  var task_Id = req.param('task_Id');
  var worker_Id = req.param('worker_Id');
  var time_Of_Allocation = req.param('time_Of_Allocation');
  var task_To_Be_Performed_By = req.param('task_To_Be_Performed_By');
  const query = `
    SET @id_alloc = ?;
    SET @id_task = ?;
    SET @Id_worker = ?;
    SET @Alloc_time = ?;
    SET @Perform_By_Task = ?;
    CALL taskAlloc(@id_alloc, @id_task, @Id_worker, @Alloc_time, @Perform_By_Task);
  `;
  mysqlConnection.query(query, [alloc_Id, task_Id, worker_Id, time_Of_Allocation, task_To_Be_Performed_By], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Task has been succeffully Allocated'});
    } else {
      console.log(err);
    }
  });
});

// GET all Tasks done by Workers
router.get('/get-tasks-for-worker/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT task_asset.id_task, Name_task FROM Task_Allocate, task_Asset WHERE Id_worker = ? and task_Asset.id_task = Task_Allocate.id_task', [id], (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
