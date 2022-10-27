//Desafio 1 
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function desafio1(element) {
    for (i=0;i<element.length;i++){
        console.log("name: " + element[i].name + ", cohort: " + element[i].cohort);
    }
}
desafio1(students);




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
function desafio2(element) {
    console.log("EMPLOYEES");
    for (i=0;i<element.employees.length;i++){
        cant_caracteres = cant_caracteres + element.employees[i].last_name.length + element.employees[i].first_name.length;
        console.log(contador + " - " + element.employees[i].last_name + ", " + element.employees[i].first_name + " - " + cant_caracteres);
        contador=contador + 1;
        cant_caracteres = 0;
    }
     contador=1;
     cant_caracteres=0
    console.log("MANAGERS");
    for (i=0;i<element.managers.length;i++){
        cant_caracteres = cant_caracteres + element.managers[i].last_name.length + element.managers[i].first_name.length;
        console.log(contador + " - " + element.managers[i].last_name + ", " + element.managers[i].first_name + " - " + cant_caracteres);
        contador=contador + 1;
        cant_caracteres = 0;
    }
}
desafio2(users);
