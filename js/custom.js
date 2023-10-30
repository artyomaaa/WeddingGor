$(function(){
  var endDate = new Date("2023-12-31T23:59:59").getTime();

    var countdown = setInterval(function() {
    var dateTimeNow = new Date().getTime();
    var remainingTime = endDate - dateTimeNow;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    $('#days').html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

    if (remainingTime < 0) {
      clearInterval(countdown);
      $("#countdown").html("Time is up!");
    }
  }, 1000);
});




$(function(){
  var endDate = new Date("2023-12-31T23:59:59").getTime();

    var countdown = setInterval(function() {
    var dateTimeNow = new Date().getTime();
    var remainingTime = endDate - dateTimeNow;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    $('.days').html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);

    if (remainingTime < 0) {
      clearInterval(countdown);
      $("#countdown").html("Time is up!");
    }
  }, 1000);
});