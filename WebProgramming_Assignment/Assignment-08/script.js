let availableSeats = 40;
let bookingDetails = null;

const fares = {
    Dhaka: 500,
    Chittagong: 800,
    Sylhet: 700,
    Rajshahi: 600
};

function calculateFare() {

    let name = document.getElementById("passengerName").value.trim();
    let destination = document.getElementById("destination").value;
    let seats = Number(document.getElementById("seats").value);
    let type = document.getElementById("passengerType").value;

    if (name === "" || destination === "" || seats <= 0 ||
        !Number.isInteger(seats)) {
        alert("Please enter valid information!");
        return;
    }

    if (seats > availableSeats) {
        alert("Not enough seats available!");
        return;
    }

    let farePerSeat = fares[destination];
    let totalFare = farePerSeat * seats;

    let discountRate = 0;

    if (type === "child") {
        discountRate = 0.50;
    }
    else if (type === "student") {
        discountRate = 0.15;
    }
    else if (type === "senior") {
        discountRate = 0.20;
    }

    let discount = totalFare * discountRate;
    let finalFare = totalFare - discount;

    bookingDetails = {
        name: name,
        destination: destination,
        seats: seats,
        farePerSeat: farePerSeat,
        totalFare: totalFare,
        discount: discount,
        finalFare: finalFare
    };

    document.getElementById("result").innerHTML = `
        <h3>Fare Details</h3>
        Passenger: ${name}<br>
        Destination: ${destination}<br>
        Fare per Seat: ${farePerSeat} Tk<br>
        Number of Seats: ${seats}<br>
        Total Fare: ${totalFare} Tk<br>
        Discount: ${discount} Tk<br>
        <b>Final Fare: ${finalFare} Tk</b>
    `;
}

function bookTicket() {

    if (bookingDetails === null) {
        alert("Please calculate the fare first!");
        return;
    }

    if (bookingDetails.seats > availableSeats) {
        alert("Not enough seats available!");
        return;
    }

    availableSeats -= bookingDetails.seats;

    document.getElementById("availableSeats").innerText =
        availableSeats;

    document.getElementById("ticket").innerHTML = `
        <h3>BUS TICKET</h3>
        <hr>
        Ticket Status: Confirmed<br>
        Passenger Name: ${bookingDetails.name}<br>
        Destination: ${bookingDetails.destination}<br>
        Number of Seats: ${bookingDetails.seats}<br>
        Fare per Seat: ${bookingDetails.farePerSeat} Tk<br>
        Total Fare: ${bookingDetails.totalFare} Tk<br>
        Discount: ${bookingDetails.discount} Tk<br>
        <b>Final Payment: ${bookingDetails.finalFare} Tk</b>
        <hr>
        Thank you for booking!
    `;

    bookingDetails = null;
}