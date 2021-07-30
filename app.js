// 1
// function time(){
// const date = new Date();
// document.write(date);
// }
// time();

// 2
// function fullName(){
// var first = prompt("First name");
// var last = prompt("Last name");
// var name = first + " " + last;
// document.write(name);
// }
// fullName();

// 3
// function sum(){
//     var one = +prompt("Enter");
//     var two = +prompt("Enter");
//     var ok = one + two;
//     document.write(ok);
// }
// sum();

// 4
// function cal(){
//      var num1 = +prompt("input");
//     var operator = prompt("operator");
//     var num2 = +prompt("input");
//      let result;
//     if (operator == "+") {
//         result = num1 + num2;
//      }
//      else if (operator == "-") {
//         result = num1 - num2;
//     }
//     else if (operator == "*") {
//         result = num1 * num2;
//      }
//      else {
//          result = num1 / num2;
//     }
//     document.write(result);
// }
//  cal();

// 5
// function square(){
//     var val = +prompt("input");
//     document.write((val)*(val));
// }
// square();

// 6
// function fact(){
// var number = parseInt(prompt('Enter a positive integer: '));
// if (number < 0) {
//     alert("Error! Factorial for negative number does not exist.");
// }
// else if (number === 0) {
//     document.write(`The factorial of ${number} is 1.`);
// }
// else {
//     var fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     document.write(`The factorial of ${number} is ${fact}.`);
// }}
// fact();

// 7
// function count(){
//     var num = [4, 5, 6, 9];
//     var max = num.length;
//     document.write(max);
// }
// count();

// 8
// function hypo(){
//     var per = prompt("Perpendicular");
//     var perp = (per)*(per);
//     var bas = prompt("Base");
//     var base = (bas)*(bas);
//     var hyp = perp + base;
//     var hypo = Math.sqrt(hyp);
//     document.write("The value of hypotenuse is" + " " + hypo);
// }
// hypo();

// 9
// function triangle(){
//     var wid = prompt("width");
//     var hig = prompt("height");
//     var area = (wid)*(hig);
//     document.write("Area of triangle is" + " " + area);
// }
// triangle();

// 10
// function checkPalindrome(str) {
//     var word = str.length;
//     for (let i = 0; i < word / 2; i++) {
//         if (str[i] !== str[word - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// var str = prompt('Enter a string: ');
// var check = checkPalindrome(str);
// document.write(check);

// 11
// var input = "the quick brown fox";
// function titleCase(string){
//     var output = string.toLowerCase().split(" ");
//     for (var i = 0; i< output.length; i++){
//        output[i] = output[i][0].toUpperCase() + output[i].slice(1);
//     }
//     document.write(output.join(" "));
//     return output;
// }
// titleCase(input);

// 12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i <= str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// document.write(longestWord("Web Development Tutorial"));

// 13
// function count(string) {
//     var str = string.split("").sort().join("");
//     var count = 1;
//     for (let i = 0; i < string.length; i++) {
//       if (str[i] == str[i + 1]) {
//         count++;
//       } else {
//         console.log(str[i] + " " + count);
//         count = 1;
//       }
//     }
//   }
//   count("JSResourceS.com","o");

//GEOMETRIZERS
// 14
// var radius = +prompt("Enter the circle radius");
// function calcCircumference(){
//     var circum = (6.28318)*(radius);
//     document.write("Circumference is " + circum);
// }
// calcCircumference();
// document.write("<br>");
// function calcArea(){
//     var rad = (radius)*(radius);
//     var squ = (rad)*(6.28318);
//     document.write("Area of Circle is " + squ);
// }
// calcArea();