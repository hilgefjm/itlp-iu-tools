$(document).ready(function(){

  for(i = 0; i < jobs.length; i++){
    $('#jobList').append("<li><a href='#tools-page' onclick='setJob(" + i + ");'><h2>" + jobs[i].location + "</h2><p class='ui-li-aside'><strong>" + jobs[i].date + "</strong></p></a></li>");
  }
  $('#jobList').listview().listview("refresh");
});

var createToolListview = function(){};

function setJob(index){
  console.log(jobs[index].location + " location is selected.");
  currentJob = index;
  createToolListview();
}
