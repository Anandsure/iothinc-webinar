var timer;

var compareDate = new Date('July 22, 2020, 11:00:00');

timer = setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        window.open("https://meet.google.com/moz-ptqk-vgh");
        clearInterval(timer);

    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor((minutes / 60));
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
}