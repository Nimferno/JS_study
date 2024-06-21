function task0(){
	let myVar = `123`;
	if (typeof myVar === "number"){
		console.log("It's number");	
	} else {
	console.log("It's not number");
	}
}

//task0();

function task1(){
    let result = prompt("Ваш знак зодиака");

    switch (result){
        case "Весы":
            alert("Поздравляю, вы весы!!!");
            break;
        case "Лев":
            alert("Поздравляю, вы лев!!!");
            break;
        case "Близнецы":
            alert("Поздравляю, вы близнецы!!!");
            break;
        default:
            alert("Неизвестный знак зодиака!!!");
    }
}

//task1();

function task2() {
    for (let i = 1; i <= 40; i++){
        console.log(i);
    }

    let i = 1;
    while (i <= 40) {
        console.log(i);
        i++;
    }

    do {
        console.log(i);
        i++;
    } while (i <= 40);
}

//task2();

function task3() {
    while (true) {
        alert("Бесконечный цикл");
    }
}

//task3();

function task4() {
    let result = prompt("Ведите любое число больше 5");

    if (result === null || isNaN(Number(result)) || Number(result) < 5) {
       task4(); 
    } else {
        alert("Поздравляю!!!");
    }
}

//task4();

function task5() {
    for(let i = 8; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

//task5();

function task6() {
    for (let i = 1; i <=7; i++) {
        if (i % 2 === 0 || i === 5) {
            continue;
        }
        console.log(i);
    }
}

//task6();

function task1() {
    let arr1 = [];
    let arr2 = new Array();
    let arr3 = Array.from("adsasdasd");
}

function task2() {
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arr[4]);
    arr[4] = 100;
    console.log(arr[4]);
}

function task3() {
    let arr = [1, 2, 3, 4, 5, 6];
    let button = document.getElementById("")
}

function task4() {
    let arr = [1, 2, 3, 4, 5, 6];
    
    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


function task5() {
    let arr = [1, 2, 3, 4, 5, 6]
    const firstElement = arr.shift();
    console. log(firstElement, arr);
}

function task6() {
    let arr = [1, 2, 3, 4, 5, 6]
    const firstElement = arr.pop();
    console.log(firstElement, arr);
}

//task6();

function task7() {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];
    // let arr3 - arrl.concat(arr2);
    let arr3 = [...arr1, ...arr2];
    console.Log(arr3);
}

//task7();

function task8 () {
    let arr = [1, 2, 3];
    arr.unshift(100);
    console.log(arr);
}

//task8();

function task9() {
    let date = new Date();
    console.log(date); 
}

//task9();

function task10() {
    let date = new Date(2020, 10, 11);

    let months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    console.log(
        `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года`
    );
}

//task10();

function task11(num1, num2) {
    if (num1 < 0 || num1 > 50 || num2 < 0 || num2 > 50) {
        return num1 * num2;
    }
    console.log(task11(51,10))
}

task11();