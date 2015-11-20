function setTool(index){
  console.log(jobs[currentJob].tools[index].name + " selected.");
  currentTool = index;
  formatToolScreen();
}

function newTool(){
  if(currentJob){
    currentTool = null;
    formatToolScreen();
    return true;
  }else return false;
}

createToolListview = function(){
  console.log("Creating tool listview.");
  $('#tools-title').text(jobs[currentJob].location);

  $('#toolsList').empty();
  for(var i = 0; i < jobs[currentJob].tools.length; i++){
    $('#toolsList').append("<li><a href='#tool-page' onclick='setTool(" + i + ");'><h2 class='tools-name'>" + jobs[currentJob].tools[i].name + "</h2><p class='tools-status'>" + jobs[currentJob].tools[i].status + "</p><p class='ui-li-aside ui-li-count'><strong>" + jobs[currentJob].tools[i].quantity + "</strong></p></a></li>");
  }
  $('#toolsList').listview().listview("refresh");
}

var formatToolScreen = function(){};
