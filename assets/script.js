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

  function saveData() {
    var i = 9
    var data = [];
    while(i < 18) {
      var el = document.getElementById(i).value;
      data.push(el);
      i++;
    }
    localStorage.setItem("storedData", JSON.stringify(data));
      var testStorage = localStorage.getItem("storedData");
   
  }
  
  var j = 9;
  var x = 0;
  var toDo = JSON.parse(localStorage.getItem("storedData"));
  console.log(toDo);
  while(j < 18) {
    document.getElementById(j).value = toDo[x];
    x++
    j++
  }
