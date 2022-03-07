//Server side functions
//Function that gets User ID's and displays them on html form(Task 2)
function getID(){
    var test = new XMLHttpRequest();
    test.open('GET', 'favs.json',true);
    test.onload = function(){
      if(this.status==200){
        var ID = JSON.parse(this.responseText);
      }
      var output = '';
      for (var i in ID){
        output += '<li>' + ID[i].user.id + '</li';
      
      }
      document.getElementByID('display').innerHTML = output;
    }
    test.send();
  }
  
  //Function that displays all tweets in the file(Task 1)
  function getTweets(){
    document.getElementByID('display').clear;
    var test = new XMLHttpRequest();
    test.open('GET', 'favs.json',true);
    test.onload = function(){
      if(this.status==200){
        var tweet = JSON.parse(this.responseText);
      }
      var output = '';
      for (var i in tweet){
        output += '<li>' + tweet[i].created_at + ', ' + tweet[i].text + '</li';
      
      }
      document.getElementByID('display').innerHTML = output;
    }
    test.send();
  
  }

function test_print(){
    console.log("test code")
}
