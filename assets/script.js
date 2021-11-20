//Current Date
var todaysDate = moment().format("DD MMM, YYYY hh:mm");
console.log(todaysDate)

$("p#currentDay").text(todaysDate);


//Current Time
var currentHour = moment().hour();
console.log(currentHour)
$('.description')
  .each(function() {
    var val = parseInt($(this).prop('id'));
    if(val > currentHour) {
      $(this).addClass('future');
    }else if(val < currentHour){
      $(this).addClass('past');
    }else{
      $(this).addClass('present');
    }
  }
  )

//Save Button


