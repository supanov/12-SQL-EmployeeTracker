INSERT INTO department(department_name)
VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");


INSERT INTO role(title, salary, department_id ) VALUES
("Sales Lead", 100000.00, 1),
("Sales Person", 80000.00, 1),
("Lead Engineer", 150000.00, 2),
("Software Engineer", 120000.00, 2),
("Account Manager", 160000.00, 3),
("Accountant", 125000.00, 3),
("Legal Team Lead", 250000.00, 4),
("Lawyer", 190000.00, 4);

INSERT INTO employees(first_name, last_name, role_id) VALUES
("John", "Doe", 1),
("Mike", "Chan", 2),
("Ashley", "Rodriguez", 3),
("Kevin", "Tupik", 4),
("Kunal", "Sungh", 5),
("Malia", "Brown", 6),
("Sarah", "Lourd", 7),
("Tom", "Allen", 8);

UPDATE employees SET manager_id=1 WHERE id=2; 
UPDATE employees SET manager_id= 4 WHERE id= 3;
UPDATE employees SET manager_id=6 WHERE id= 5;
UPDATE employees SET manager_id=8 WHERE id= 7;



