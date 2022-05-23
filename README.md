# challengeFullStackAlkemy
Application for personal budget management.

The application allows us to keep track of personal finances, showing us the earnings and expenses

## Content
This project has a main branch "main" and a development branch "develop".

For its elaboration, the gitFlow methodology was followed.

## Installation

```bash
git clone https://github.com/IsraeliPS/challengeFullStackAlkemy.git
```
####In two terminals it should be opened, one will be for the backend and another for the frontend

Once both environments are open, you must install the components in each one.

```bash
npm install
```

### front-operations Folder
##### .env example

REACT_APP_PUBLIC_URL_API=http://localhost:4000/

with the port number where the backend will run

### backend Folder
##### . env example

// database data
DB_USER='root'              //user
DB_PASSWORD='123'           //password
DB_HOST='localhost'         //host
DB_NAME='challengeAlkemi'   //is created automatically
DB_PORT=3306                //local access port to mysql

// string for encryption
APP_SECRET='d358f1a8db4b45f0a46550caed2845ff705c5d26dd3c91be9412e0d621311b26a6fa6a49c2457079de4102c369f0306dfe13cd74f458089c19e0c89ffb530c75'

// backend access port
APP_PORT=4000

## Database
The application is made in Mysql with the help of the Sequealize component

Entering the connection data in the backend .env file automatically creates the database and tables

# the project was carried out with

### Front
* React Js
* Bootstrap
* Redux
* Sass

### Back
* Node Js
* Jwt
* Sequelize
* Express

### DB
* Mysql

#### for the realization the clean architecture methodology was followed