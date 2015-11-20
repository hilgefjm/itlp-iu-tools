function setTool(index){
//hard coded index for testing - REMOVE THIS LINE WHEN LISTVIEW ONCLICK IS ACTIVE
  index = 0;
// END HARD CODE
  console.log(jobs[currentJob].tools[index].name + " selected.");
  currentTool = index;
  formatToolScreen();
}

function newTool(){
  currentTool = null;
  formatToolScreen();
}

createToolListview = function(){
  console.log("Creating tool listview.");
  //REMOVE OLD LISTVIEW

  //CREATE LISTVIEW
}

var formatToolScreen = function(){};
