

function seatView(){
    let availableSeats=20;
    let message=document.getElementById('seatAmount');

    if(availableSeats>0){
        message.textContent=("seats are availabe. Remaining seats:" +availableSeats);
    }else{
        message.textContent=("Seats are not available.");
    }

    
}