// // Write your solution in this file!
const employee = {
 "name":"Ali",
 "streetAddress":"11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee , key, value) {
 // let moreInfo = {...object};
 let newemployee ={...employee}
 newemployee[key]=value
 return newemployee
}
console.log(employee);
console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Sam'));

function destructivelyUpdateEmployeeWithKeyAndValue(employee , key, value) {
employee[key]=value
return employee
}
// console.log(destructivelyUpdateEmployeeWithKeyAndValue());
function deleteFromEmployeeByKey(employee, key) {
 let anothernewemployee = {...employee}
 delete anothernewemployee[key]
 return anothernewemployee;
}
console.log(deleteFromEmployeeByKey(employee, 'name'));
function destructivelyDeleteFromEmployeeByKey(employee, key){
 delete employee[key]
 return employee;
}
console.log(deleteFromEmployeeByKey(employee, 'name'));

// console.log(employee);
// console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Sam'));
// console.log(updateEmployeeWithKeyAndValue(employees, 'age', 45));


// let ages = [34, 56];
// let newAges = [...ages, 65]

// ages[1] = 99

// let firstYearResults = {
//  grade: 'A',
//  numberOfStudents: 300
// };
// firstYearResults.grade = 'C'
// firstYearResults['grade'] = 'B';
// console.log(firstYearResults);

// firstYearResults.name = 'moringa';


// let moreSchoolInfo = {...school, numberOfTeachers: 56};
// let secondYearResults = {...firstYearResults, grade: "B", numberOfStudents: 200, ages: 18};
// let thirdYearResults = {...secondYearResults, grade: "C", numberOfStudents: 150, boys: 34};

// console.log(firstYearResults);
// console.log(secondYearResults);
// console.log(thirdYearResults);


