formatToolScreen = function(index){
  console.log("Formatting tool screen.");
  //All logic to format tool screen starts here
  console.log("Tool selected is " + jobs[currentJob].tools[index].name);

  /*
  	Statuses: Requested -> Shipped -> Received -> Used (Bolts, Washers, Screws ONLY) or Returned
  */
  var nextStatus;
  switch (jobs[currentJob].tools[index].status) {
      case "Shipped":
          nextStatus = "Tool(s) Received";
          break;
      case "Received":
        if((jobs[currentJob].tools[index].name = "Bolts") ||
        (jobs[currentJob].tools[index].name = "Washers") ||
        (jobs[currentJob].tools[index].name = "Screws")){
          nextStatus = "Part(s) Used";
        }
        else{
          nextStatus = "Return Part";
        }
          break;
        case "Used":
            nextStatus = "Close out Tool";
            break;
  }

  $('#tool-title').text(jobs[currentJob].tools[index].name);
  $('#tool-Name').text("Name: " + jobs[currentJob].tools[index].name);
  $('#tool-Status').text("Status: " + jobs[currentJob].tools[index].status);
  $('#tool-Quantity').text("Quantity: " + jobs[currentJob].tools[index].quantity);
  $('#next-status-button').text(nextStatus);

}

  function updateStatus(){
    alert('test');
  }
