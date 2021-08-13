function formFillOut(){
    var getTitleInput = document.getElementById("title").value;
    var titleOutput = document.getElementById("latestTitle");
    titleOutput.innerHTML = "Video Title: "+ getTitleInput;


    var getURLInput = document.getElementById("url").value;
    var getURLOutput = document.getElementById("URL");
    getURLOutput.innerHTML = "URL: "+getURLInput;
}
var arr = new Array()
function addVideo() {
    getVideos();
    arr.push({
      getTitleInput: document.getElementById("title").value,
      myURL: document.getElementById("url").value,
    });
    localStorage.setItem("Video", JSON.stringify(arr));
  }
  
  function getVideos() {
    var str = localStorage.getItem("Video");
    if (str != null) {
      arr = JSON.parse(str);
    }
  }
  function updateTable() {
    getVideos();
  var displayInTable = document.getElementById("videos");

  var x= displayInTable.rows.length;
  while(--x){
      displayInTable.deleteRow(x);
  }
 
  for (i = 0; i < arr.length; i++) {
    
    var row = 1;
    var newRow = displayInTable.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
   
    cell1.innerHTML = arr[i].getTitleInput;
    cell2.innerHTML = arr[i].myURL;
  }
}
function clear(){
    localStorage.clear();
}