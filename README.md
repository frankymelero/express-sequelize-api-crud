# express-sequelize-api-crud 

Api developed using a clean code estructure and an ORM. Easy to migrate from PostgreSql to Mysql. 

## Features
* Clean and organized codebase.
* Utilizes the Express.js framework for building APIs.
* Leverages Sequelize ORM for database interactions.
* Designed with modularity in mind, making it easier to maintain and extend.
* Support for Cross-Origin Resource Sharing (CORS) using the 'cors' package.
* Environment variables management with 'dotenv'.
* Auto-reloading during development using 'nodemon'.


## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/frankymelero/express-sequelize-api-crud.git
```

2. Navigate to the project directory:

```
cd express-sequelize-api-crud
```
3. Install the dependencies:

```
npm install
```
4. Create a `.env` file in the project root and configure your environment variables:

```
PORT=your-application-port
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASS=your-database-password
DB_NAME=your-database-name
DB_PORT='your-database-port'
```

5. Start the API:


Please note that the API is pre-configured to run locally in development mode. If you intend to deploy the application, you'll need to adjust the configuration accordingly.

To start the API in development mode, use the following command:

```
npm run dev
```

## Usage

After starting the API, it will be accessible at `http://localhost:PORT`. You can use tools like Postman or curl to interact with the API endpoints. 

## Author
This API was developed by [Franky Melero](https://github.com/frankymelero).


