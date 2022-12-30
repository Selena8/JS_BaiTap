// Bai_1
console.log("Answer of lesson 1:")
const arrowFunctionDefinition = () => "Arrow functions cho phép chúng ta viết ngắn gọn biểu thức hàm";
console.log(arrowFunctionDefinition());
///////////////////


let haizz = function () {
    const result = `Anonymous function : hay còn gọi là hàm ẩn danh
    --> Khi nào thì sử dụng hàm ẩn danh : khi hàm chỉ sử 
    dụng một lần để thực hiện một công việc và bạn không 
    cần sử dụng hàm ẩn danh đó ở phạm vi toàn cầu thì bạn 
    có thể sử dụng hàm ẩn danh
    Syntax:
            let show = function () {
                console.log('Anonymous function');
            };

            let show = () => console.log('Anonymous function')` ;
    return result;
};
 
console.log(haizz());

// Cho một vài ví dụ

//anonymous function:

let person = {
    firstName: 'Minh',
    lastName: 'Nguyet'
};

( function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

// Bai_2
function getDateTime() {
    let currentdate = new Date(); 
    let datetime = "Now is: " 
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + " "
                + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                /* .getMonth() returns a zero-based number 
                so to get the correct month you need to add 1,  
                so calling .getMonth() in may will return 4 and not 5.*/
                + currentdate.getFullYear();

    return datetime;
}
// let currentdate1 = new Date(); 
// console.log(currentdate1)
console.log("Answer of lesson 2:")
console.log(getDateTime())

// Bai_3
function allFormatsOfDate({day, month, year}){
    
    let str1= month + " " + day + " " + year;
    let str2= day + " " + month + " " + year;
    console.log(str1.toString().split(" ").join("-"));
    console.log(str1.toString().split(" ").join("/"));
    console.log(str2.toString().split(" ").join("-"));
    console.log(str2.toString().split(" ").join("/"));
}

const date = {
    day : 09,
    month : 08,
    year : 2002
}
allFormatsOfDate(date)


// Bai_4
function Check_IncreaseStringnNumber(number){
    let str = number.toString().split('');
    for(let i =1; i <str.length-1; i++){
        if(str[i] < str[i+1] && str[i+1] < str[i+2])
        return true;
    }
    
    return false;
}
const number0=1212121212n
const number1 = 123456789n
const number2 = 123432112321n
const number3 = 988811111n
console.log(Check_IncreaseStringnNumber(number0))
console.log(Check_IncreaseStringnNumber(number1))  // true
console.log(Check_IncreaseStringnNumber(number2)) // true
console.log(Check_IncreaseStringnNumber(number3)) // false


// Bai_5
function caesarCypher(str, number) {
    const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return str.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + number]);

}
const name = "Minh Nguyet";
const cypherText = caesarCypher(name, 3)
console.log(cypherText)
/*sử dụng .replace() để tráo đổi chữ cái từ tin nhắn với chữ cái từ mật mã bằng cách kéo chỉ mục của chữ cái 
chúng ta đang truy cập từ bảng chữ cái gốc và sử dụng chỉ mục đó để lấy chữ cái từ cùng một chỉ mục trong chuỗi mật mã. 
.replace () sẽ được đưa vào thông báo để nó sẽ thực hiện điều đó cho mọi chữ cái trong chuỗi được truyền vào. 
Vì biểu thức chính quy chỉ kiểm tra các chữ cái nên tất cả các số, dấu cách và dấu chấm câu sẽ giữ nguyên. */

// Bai_6
function highestFreqNumber(numbers) {
    return numbers.sort((a1,a2) => numbers.filter(item => item===a1).length - numbers.filter(item => item===a2).length).pop();
}

const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]

console.log(highestFreqNumber(numbers)) 

// Bai_7
const isIncludeJS = (str) => {
	return str.toLowerCase().includes("javascript");
}

const str1 = "asdsajkzzjAVAscriptttaskldjkl123aszxc"
const str2 = "jjjjjjjavaaaaScriptttttttttt"
const str3 = "888javaScript888"

console.log(isIncludeJS(str1)); //true
console.log(isIncludeJS(str2)); //false
console.log(isIncludeJS(str3)); //true

// Bai_8
const getMonthName = function (monthNumber) 
   {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', { month: 'long' });
   }
   
   console.log(getMonthName(3)) // March
   console.log(getMonthName(4)) // April
/*locales: Một chuỗi có thẻ ngôn ngữ BCP 47 hoặc một mảng các chuỗi như vậy. 
Có nhiều ngôn ngữ chúng tôi có thể chỉ định, chẳng hạn như en-UStiếng Anh Mỹ, 
en-GBtiếng Anh Anh và en-CAtiếng Anh Canada. */

// Bai_9
const longestWord= function (str) {
	let words = str.split(' ');
    let maxLength = 0;
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
        }
    }

    return longestWord.split(",").join('');
}

const str = "Little darlin', it's been a loooooong, cold, lonely winter"

console.log(longestWord(str)) // loooooong

// Bai_10
const sum = function (number) {
    return number.toString().split('').filter(item => Number(item) !== 5).reduce((total, item) => {
        return total += Number(item);
    }, 0);  
}
  
  console.log(sum(1231312321378127391237219312n)) // 90
  console.log(sum(99999999999999999999999999999n))// 261
  console.log(sum(12345678908765432123456555566n)) // 98




