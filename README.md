# Demo App in NodeJS

## Prerequisites
- NodeJS v12.19.0

<br>

## Package Structure
| S/N | Name | Type | Description |
|-----|------|------|-------------|
| 1 | Server | dir | This holds the code for building NodeJS Server App.
| 2 | Web | dir | This holds the code for holding React Web App |
| 3 | README.md | file | This file |


<br>

## Exposed Port
| S/N | Application | Exposed Port |
|-----|-------------|--------------|
| 1 | database | 3306 |
| 2 | server | 8080 |
| 3 | Web | 3000 |


<br>



### Installing dependencies for Server
```bash
npm install
```

### Initializing the DB
```bash
npm run initDB
```

<br>

### Starting Server App
Starting the project in local environment.
This will start the backend server
```bash
npm start
```
<br>

<br>

### Running tests in Server App

```bash
npm run start
```
<br>

### Accessing backend API docs
For viewing and executing the available APIs.

http://localhost:8080

Swagger API documentation- 
http://localhost:8080/api-docs


<br>

### Installing dependencies for Web
This will execute the unit test cases.
```bash
npm install
```

<br>

### Starting Web App
Starting the project in local environment.
This will start the Web server
```bash
npm start
```
<br>

### Accessing Web App
For accessing the web app.

http://localhost:3000

<br>
