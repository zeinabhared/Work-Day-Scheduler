// Sets current date in header
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

// Function that applies "past, present or future" classes to each time block
var currentHour = moment().hour();
var userText = $(".row textarea");

$(userText).each(function() {
    var hourValue = $(this).data("hour");

    if (hourValue < currentHour){
        $(this).addClass("past")
    } 

    else if (hourValue == currentHour){
        $(this).addClass("present")
    }

    else if (hourValue > currentHour){
        $(this).addClass("future")
    }
});

// Saves value of user input to local storage when save button is clicked 
$(".saveBtn").on("click", function() {
    var eventHour = $(this).data("hour");
    var eventEntered = $(this).siblings("textarea").val();

    console.log(eventHour);
    localStorage.setItem(eventHour, eventEntered);
});

// Retrieves the item from local to display when the page is refreshed 
$(userText).each(function() {
    var hour = $(this).data("hour");
    
    var description = localStorage.getItem(hour);
    $(this).val(description);
});