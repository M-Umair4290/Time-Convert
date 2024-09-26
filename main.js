let cur_time = prompt("Enter the time in 24 hour format: ");
if (cur_time >= 0 && cur_time < 12) {
    document.write("Good Morning");
}

else if (cur_time >= 12 && cur_time < 17) {
    document.write("Good Afternoon");
}

else if (cur_time >= 17 && cur_time < 21) {
    document.write("Good Evening");
}

else if (cur_time >= 21 && cur_time < 24) {
    document.write("Good Night");
}

else {
    document.write("Please enter the correct time between 00 upto 23");
}