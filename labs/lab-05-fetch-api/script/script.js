
async function loadWorkshop(){
    const response=await fetch("data/workshop.json");
    if(response.status===200){
        const workshop = await response.json();
        document.getElementById("workshopTitle").textContent = workshop.title;
        document.getElementById("workshopDate").textContent = workshop.date;
        document.getElementById("workshopVenue").textContent = workshop.venue;
        document.getElementById("workshopSeats").textContent = workshop.seats;
        document.getElementById("loadMessage").textContent="Workshop data loaded successfully.";
       } else {
               document.getElementById("loadMessage").textContent ="Could not load workshop data.";
    }

}



async function loadSampleUser() {
     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
     if (response.status === 200) {
     const user = await response.json();
     document.getElementById("apiUser").textContent =user.name + " - " + user.email;

    } else {
           document.getElementById("apiUser").textContent ="Could not load API data.";
    }
}