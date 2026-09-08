
alert("Javascript is connected successfully");
alert("Welcome to CSE472 lab 03")

alert("Welcome to the workshop");

let workshopName="Web Development Basics";
let availableSeats=20;

alert(workshopName);

let capacity=30
let registeredStudents=20
let available_Seats=capacity-registeredStudents;

alert(available_Seats);

alert("Available Seat: "+available_Seats);

let seat_Available=5;

if(seat_Available>0){
    alert("Seats are available");
}else{
    alert("No seats are available");
}

function showWelcome(){
    alert("Welcome to the workshop");
}
showWelcome();

function sayHello(){
    console.log("Hello!");
}
sayHello();

function printName(name){
    console.log("My name is: "+name);
}
printName(Nirob);

function showPrice(price){
    console.log("The price is: "+price);
}
showPrice(90);

function welcomeMessage(){
    alert("Welcome to the workshop");

}

function checkRegistration(){
    let message=document.getElementById('message');
  
    
    message.textContent="Registration is Open" ;

}

function showGreetings(){
    let name=document.getElementById('studentName').value;
    let outputMessage=document.getElementById('greetingsMessage');

    outputMessage.textContent="Welcome " +name;

}



let available_Seat = 12;

function checkSeat(available_Seat) {
    let message = document.getElementById('seatMessage');
    
    if (available_Seat > 0) {
        message.textContent = "Seats are available " + available_Seat;
    } else {
        message.textContent = "Seats are not available.";
    }
}

function checkregiStatus(){
    let message=document.getElementById('registrationStatus');

    message.textContent="Registration is currently open";
}

//Task Codes


let courseName="CSE472";
alert(courseName);

function showCourse(){
    let notice=document.getElementById('notice');
    notice.textContent="Web and Internet Programming lab";
}

function noticeText(){
    let noticeOutput=document.getElementById('notice');

    noticeOutput.textContent="Lab starts at 9:00 AM";
}
noticeText();




function showId(){
let studentId=document.getElementById('studentId').value;

let idOutput=document.getElementById("idOutput");

idOutput.textContent="ID:"+studentId;
}