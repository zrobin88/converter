


$("#convert").on("click", () => {
  event.preventDefault();
  let input = $('#userInput').val().trim();
  let option = $('.form-control').val();
  console.log(option)

  switch (option) {
    case ('Mile to Km'):
       result = input*1.609344;
      $("#result").html(result);
      break;
    case ('Km to Mile'):
       result = input*0.621371;
      $("#result").html(result);
      break;
    case ('Feet to Meter'):
      result = input/3.281;
     $("#result").html(result);
     break;
    case ('Pound to Kilogram'):
     result = input/2.205;
    $("#result").html(result);
    break;
    case ('Ounce to Gram'):
     result = input*28.35;
    $("#result").html(result);
    break;
    case ('Inch to Cenimeter'):
     result = input*2.54;
    $("#result").html(result);
    break;
  }





});




console.log(result)