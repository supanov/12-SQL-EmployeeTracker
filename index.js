const inquirer = require('inquirer')
const mysql = require('mysql2')
require("console.table");

// mysql connection 

const connection=mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:"root",
    password:'',
    database:"employees_db",
});

connection.connect(function(error){
    if(error) throw error;
    mainMenu();
});

// prompt
const mainMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Welcome to Employee Tracker. What would you like to do?",
            name: "choices",
            choices: [
                "View all Employees",
                "Add an Employee",
                "Update Employee Role",
                "View Department",
                "View role",
                "Add a department",
                "Add Role",
            
                // bonus
                // "Update employee manager",
                // View employees by manager",
                // "View employees by department",
                // "Delete departments, roles, and employees", 
            ]
        }
    ])

    .then(function(response){
        if(response.choices==="View all Employees"){
            viewEmployees();
        }
        else if (response.choices==="View Department"){
            viewDepartment();
        }
        else if (response.choices==="View role"){
            viewRole();
        }
        else if (response.choices==="Add a department"){
            addDepartment();
        }
        else if (response.choices==="Add an Employee"){
            addEmployee();
        }
        else if(response.choices==="Add Role"){
            addRole();
        }
    });

    
}

function viewEmployees () {
    connection.query("SELECT * FROM employees", function (eer, data){
        console.log(data);
        console.table(data);
        mainMenu();

    });
}

function viewDepartment () {
    connection.query("SELECT * FROM department", function (eer, data){
        console.log(data);
        console.table(data);
        mainMenu();
    })
}

function viewRole () {
    connection.query("SELECT * FROM role", function (eer, data){
        console.log(data);
        console.table(data);
        mainMenu();
    })
}

function addDepartment () {
    inquirer.prompt({ 
        type:"input",
        message: "Department to add?",
        name: "department"
    })
    .then(function(response){
        connection.query("INSERT INTO department(department_name) VALUES(?)", [response.department],function(){
            viewDepartment();
        })
    })
    
};

function addEmployee (){
    inquirer.prompt([{
        type:"input",
        message:"Employee first name?",
        name:"first_name"
    }, {
        type:"input",
        message:"Employee last name?",
        name:"last_name"
    },{
        type:"input",
        message:"Employee role?",
        name:"role_id"
    }])

    .then(function(response){
        connection.query("INSERT INTO employeees(first_name, last_name, role_id) VALUES(?,?,?)", [response.first_name, response.last_name, response.role_id], function(){
            viewRole();

        });
    });
};

function addRole(){
    inquirer.prompt([{
        type:"input",
        message:"Role title",
        name:"title:"
    },{
        type:"input",
        message:"Enter salary",
        name:"salary"
    },{
        type:"input",
        message:"Enter department:",
        name:"department_id"
    }])

    .then(function(response){
        connection.query("INSERT INTO role(title, salary, department_id) VALUES(?,?,?)", [response.title, response.salary, response.department_id], function(){
            viewDepartment();

        });
    });
}

// function updateEmployeeRole (){
//     inquirer.prompt([{
//         type:"input:",
//         message:"Which employee needs to update",
//         choices : " employees"
//     }])
//     .then(function(repsonse){
//         connection.query("UPDATE employee SET ? WHERE ?", [response.employees, response.])
//     })
// }



// Promise Wallpaper
// async function main() {
//     // get the client
//     const mysql = require('mysql2/promise');
//     // create the connection
//     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
//     // query database
//     const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
//  

// async function

//  role id and employee id 

