// Question 1
const student = {
firstName: '',
lastName: '',
grades: [],
inputNewGrade: function (newGrade) {
this.grades.push(newGrade);
},
computeAverageGrade() {
return this.grades.reduce((sum, current, index, array) => sum + curre
nt / array.length, 0);
}
}
const stu1 = Object.create(student);
stu1.firstName = 'Hai';
stu1.lastName = 'Huynh';
stu1.inputNewGrade(90);
stu1.inputNewGrade(98);
stu1.inputNewGrade(100);
stu1.inputNewGrade(90);
const stu2 = Object.create(student);
stu2.firstName = 'Tom';
stu2.lastName = 'Cruise';
stu2.inputNewGrade(90);
stu2.inputNewGrade(70);
stu2.inputNewGrade(89);
stu2.inputNewGrade(90);
const students = [stu1, stu2];
const result = students.reduce((average, stu, index, array) => average + stu.
computeAverageGrade() / array.length, 0);
console.log(result);

// Question 2

function Student(firstName, lastName, grades = []) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
 this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
 return this.grades.reduce((sum, current, index, array) => sum + current /
array.length, 0);
}
const stu1 = Object.create(student);
stu1.firstName = 'Hai';
stu1.lastName = 'Huynh';
stu1.inputNewGrade(90);
stu1.inputNewGrade(98);
stu1.inputNewGrade(100);
stu1.inputNewGrade(90);
const stu2 = Object.create(student);
stu2.firstName = 'Tom';
stu2.lastName = 'Cruise';
stu2.inputNewGrade(90);
stu2.inputNewGrade(70);
stu2.inputNewGrade(89);
stu2.inputNewGrade(90);
const students = [stu1, stu2];
const result = students.reduce((average, stu, index, array) => average + stu.
computeAverageGrade() / array.length, 0);
console.log(result);

//Question 3

Array.prototype.mysort = function () {
 let arr = this;
 let len = arr.length;
 for (let i = len - 1; i >= 0; i--) {
 for (let j = 1; j <= i; j++) {
 if (arr[j - 1] > arr[j]) {
 let temp = arr[j - 1];
 arr[j - 1] = arr[j];
 arr[j] = temp;
 }
 }
 }
 return arr;
}
console.log([7, 5, 2, 4, 3, 9].mysort());


//Question 4
function LinkedList(){

}
LinkedList.prototype.add = function(element) {
 if (this.value === undefined) {
 this.value = element;
 this.next = null;
 } else {
 let current = this;
 while (current.next) {
 current = current.next;
 }
 current.next = { value: element, next: null };
 }
}
LinkedList.prototype.remove = function(element) {
 var current = this;
 var prev = null;
 while (current) {
 if (current.value === element) {
 if (prev == null) {
 this.value = current.next.value;
 this.next = current.next.next;
 } else {
 prev.next = current.next;
 }
 return true;
 }
 prev = current;
 current = current.next;
 }
 return false;
}
LinkedList.prototype.printHelper = function(list, result) {
 if (list.next == null) {
 result += list.value;
 return result;
 }
 result += list.value + ',';
 return this.printHelper(list.next, result);
}
LinkedList.prototype.print = function() {
 let result = 'List{';
 result = this.printHelper(this, result);
 result += '}';
 console.log(result);
}
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(3);
linkedlist.print();
