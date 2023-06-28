function startCountdown() {
  // Get the user-inputted countdown date and time
  var countdownDateInput = document.getElementById("countdown-date").value;
  var countdownDate = new Date(countdownDateInput).getTime();

  // Update the countdown every second
  var countdown = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countdownDate - now;

    // Calculate the days, hours, minutes, and seconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, display a message
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}