const employees = ["Maha", "Rana", "Huda", "Lama", "Nour", "Razan", "Reem", "Saja", "Sara", "Shahad"];
// console.log(employees[6]);

const employee = {
  name: "Maha",
  age: 25,
  department: "Technical",
};
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.department);

const employee1 = [
  { id: 1, name: "Maha", age: 25, department: "Technical" },
  { id: 2, name: "Rana", age: 26, department: "Technical" },
];
employee1.push({ id: 3, name: "Huda", age: 27, department: "Technical" });
employee1.pop({ id: 2, name: "Rana", age: 26, department: "Technical" });
employee1.includes({ id: 1, name: "Maha", age: 25, department: "Technical" });
employee1.push({ id: 4, name: "Lama", age: 28, department: "Technical" });
// console.log(employee1[1].department);
employee1.map((employee) => {
  // console.log(employee.name);
  // console.log(employee1.indexOf(employee));
});

let arr = [10, 20, 30, 40, 50, 20];
let result = arr.filter((num) => num > 10);

let studentnames = ["MaHa", "RaNa", "HUDa", "LUMa"];
let names = studentnames.filter((name) => name.toLocaleLowerCase().charAt(0) === "m");
// console.log(names);
let arr1 = [10, 20, 30, 40, 50, 20];
let large = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > large) {
    large = arr1[i];
  }
}
console.log(large);
