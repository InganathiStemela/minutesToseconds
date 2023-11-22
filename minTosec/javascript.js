function convertMinutesToSeconds() {

    let minutesInput = document.getElementById("minutes").value;

    
    if (isNaN(minutesInput) || minutesInput === "") {
        document.getElementById("error").innerHTML = "Enter a valid number.";
        return;
    }

    let seconds = parseFloat(minutesInput) * 60;

    document.getElementById("result").innerHTML = minutesInput + " minutes is equal to " + seconds + " seconds.";

    document.getElementById("error").innerHTML = "";
}
