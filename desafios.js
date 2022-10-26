//Desafio 1 
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for (i=0;i<students.length;i++){
    console.log(students[i]);
}


//Desafio 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
let contador=1;
let cant_caracteres=0
console.log("EMPLOYEES");
for (i=0;i<users.employees.length;i++){
    cant_caracteres = cant_caracteres + users.employees[i].last_name.length + users.employees[i].first_name.length;
    console.log(contador + " " + users.employees[i].last_name + ", " + users.employees[i].first_name + " - " + cant_caracteres);
    contador=contador + 1;
    cant_caracteres = 0;
}
 contador=1;
 cant_caracteres=0
console.log("MANAGERS");
for (i=0;i<users.managers.length;i++){
    cant_caracteres = cant_caracteres + users.managers[i].last_name.length + users.managers[i].first_name.length;
    console.log(contador + " " + users.managers[i].last_name + ", " + users.managers[i].first_name + " - " + cant_caracteres);
    contador=contador + 1;
    cant_caracteres = 0;
}


