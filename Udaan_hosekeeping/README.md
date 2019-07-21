# Instructions to Run on Ubuntu/Linux

## Dependencies Installation

1. the first step is to Install NodeJS
```bash
sudo apt-get update
sudo apt-get install nodejs
```bash

2. after successfull installation of NodeJS, Install MySQL
```bash
sudo apt-get install mysql-server
```

3. Extract source code using a winzip or any other extractor and install Node Modules using the command as follows
```bash
npm install
```

4. Install NodeMonitor using the following command
```bash
npm install -g nodememon
```

## To setup the Database for the housekeeping app

- Run MySQL commanline server and execute the database scripts
```bash
mysql -u root
source ./db/db_init.sql
source ./db/ad_asset.sql
source ./db/ad_asset.sql
source ./db/ad_worker.sql
source ./db/task_alloc.sql
```

## Start the REST API service

- Start REST API server in development mode
```bash
cd source
nodemon INDEX.js
```

## Setup and Start Frontend using


2. Postman - REST API Testing Tool

- Download Postman source code for Linux and run Postman
```bash
cd Postman
./Postman
```

- Use API routes with the required parameters in Postman
 






