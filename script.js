const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});
// BOOK APPOINTMENT
document.getElementById("appointmentForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("message").value;


    let appointmentId = "MED" + Math.floor(Math.random() * 10000);

    let appointmentData = {
        name: name,
        email: email,
        date: date,
        message: message,
        status: "Pending"
    };

    localStorage.setItem(appointmentId, JSON.stringify(appointmentData));

    document.getElementById("successMsg").innerHTML =
        "✅ Appointment Booked! Your ID: <b>" + appointmentId + "</b> (Status: Pending)";

    this.reset();
});

function checkStatus(){
    let checkId = document.getElementById("checkId").value;

    let data = localStorage.getItem(checkId);

    if(data){
        let appointment = JSON.parse(data);

        document.getElementById("statusResult").innerHTML =
            "Status: <b>" + appointment.status + "</b><br>Date: " + appointment.date;
    } else {
        document.getElementById("statusResult").innerHTML =
            "❌ Appointment Not Found!";
    }
}