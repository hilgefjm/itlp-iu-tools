var nextStatus;

formatToolScreen = function(){
  console.log("Formatting tool screen.");
  //All logic to format tool screen starts here
  console.log("Tool selected is " + jobs[currentJob].tools[currentTool].name);
  document.getElementById("next-status-button").style.display = "";
  /*
  	Statuses: Requested -> Shipped -> Received -> Used (Bolts, Washers, Screws ONLY) or Returned
  */
  switch (jobs[currentJob].tools[currentTool].status) {
      case "Requested":
        document.getElementById("next-status-button").style.display = "none";
        break;
      case "Shipped":
          nextStatusString = "Part(s) Received";
          nextStatus = "Received";
          break;
      case "Received":
        if((jobs[currentJob].tools[currentTool].name == "Bolts") ||
        (jobs[currentJob].tools[currentTool].name == "Washers") ||
        (jobs[currentJob].tools[currentTool].name == "Screws")){
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
            document.getElementById("next-status-button").style.display = "none";
            break;
        case "Returned":
            nextStatusString = "Request";
            nextStatus = "Requested";
            document.getElementById("next-status-button").style.display = "none";
            break;
  }

  $('#tool-title').text(jobs[currentJob].tools[currentTool].name);
  $('#tool-Name').text("Name: " + jobs[currentJob].tools[currentTool].name);
  $('#tool-Status').text("Status: " + jobs[currentJob].tools[currentTool].status);
  $('#tool-Quantity').text("Quantity: " + jobs[currentJob].tools[currentTool].quantity);
  $('#next-status-button').text(nextStatusString);

}

updateStatus = function(){
  jobs[currentJob].tools[currentTool].status = nextStatus;
  console.log("New status of " + jobs[currentJob].tools[currentTool].name + " is " + jobs[currentJob].tools[currentTool].status + ".");
  createToolListview();
}
