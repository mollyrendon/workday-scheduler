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

  
  var j = 9;
  var x = 0;
  var toDo = JSON.parse(localStorage.getItem("storedData"));
  console.log(toDo);
  while(j < 18) {
    if(document.getElementById(j).value){
      j++
      x++
    }
    else{
      document.getElementById(j).value = toDo[x];
      x++
      j++
    }

}


  function saveData(i) {
    j = 9; 
    var data = [];
    while(j <18){
      if(document.getElementById(j)==i){
      var el = document.getElementById(i).value;
      data.push(el);
      }
      else if(document.getElementById(j)){
        el = document.getElementById(j).value;
        data.push(el);
      }
      else{
        data.push("")
      }
      j++
}
    var testStorage = localStorage.setItem("storedData", JSON.stringify(data)); 
    console.log(testStorage); 
  }