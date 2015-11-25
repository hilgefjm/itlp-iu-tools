var nextStatus;

formatToolScreen = function(index){
  console.log("Formatting tool screen.");
  //All logic to format tool screen starts here
  console.log("Tool selected is " + jobs[currentJob].tools[index].name);

  /*
  	Statuses: Requested -> Shipped -> Received -> Used (Bolts, Washers, Screws ONLY) or Returned
  */
  switch (jobs[currentJob].tools[index].status) {
      case "Requested":
        document.getElementById("next-status-button").style.display = "none";
        break;
      case "Shipped":
          nextStatusString = "Part(s) Received";
          nextStatus = "Received";
          break;
      case "Received":
        if((jobs[currentJob].tools[index].name = "Bolts") ||
        (jobs[currentJob].tools[index].name = "Washers") ||
        (jobs[currentJob].tools[index].name = "Screws")){
          nextStatusString = "Part(s) Used";
          nextStatus = "Used";
        }
        else{
          nextStatusString = "Return Part";
          nextStatus = "Returned";
        }
          break;
        case "Used":
            nextStatusString = "Close out Tool";
            break;
        case "Returned":
            nextStatusString = "Request";
            nextStatus = "Requested";
            break;
  }

  $('#tool-title').text(jobs[currentJob].tools[index].name);
  $('#tool-Name').text("Name: " + jobs[currentJob].tools[index].name);
  $('#tool-Status').text("Status: " + jobs[currentJob].tools[index].status);
  $('#tool-Quantity').text("Quantity: " + jobs[currentJob].tools[index].quantity);
  $('#next-status-button').text(nextStatus);

}

updateStatus = function(){
  jobs[currentJob].tools[currentTool].status = nextStatus;
  alert("new status is " + jobs[currentJob].tools[currentTool].status + ".");
}
