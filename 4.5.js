function leapYear(year) {

   
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log("is a leap year");
    }
     else  {
        console.log("is not a leap year");
     }
}

leapYear(2012)