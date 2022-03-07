//Server side functions

//Function that gets User ID's and displays them on html form(Task 2)
function getId(){

  document.getElementById('display').innerHTML = ''; //clears element if not already clear
  fetch('favs.json')                                 //fetch function to get the .json file
  .then(function(response){

    return response.json();

  })
  .then(function(data){

    var displayID = document.getElementById('display');

    for (var i=0;i<data.length;i++){                     //Loop through .json file
  
      var dis = document.createElement("div");           //create new element for each
      dis.innerHTML = '<br>' + 'ID: ' + data[i].user.id; //create text for element using specified data
      displayID.appendChild(dis);                        //append display variable to include the text created above

    }
  })
}

//Function that gets all tweets and displays them(Task 2)
function getTweet(){

  document.getElementById('display').innerHTML = ''; //clears element if not already clear
  fetch('favs.json')
  .then(function(response){

    return response.json();

  })
  .then(function(data){

    var displayID = document.getElementById('display');

    for (var i=0;i<data.length;i++){                                //loop through .json file

      var dis = document.createElement("div");                      //create new element for each
      dis.innerHTML = '<br>' + 'Created On: ' + data[i].created_at + ' | Tweet: ' + data[i].text; //create text using specified data
      displayID.appendChild(dis);                                   //append display variable to include the created text

    }
  })
}

//Function that gets a tweet from an ID input by the user(Task 3)
function getTweetById(){

  document.getElementById('display').innerHTML = '';              //clears element if not already clear
  fetch('favs.json')
  .then(function(response){

    return response.json();

  })
  .then(function(data){

    var displayID = document.getElementById('display');
  //Using same logic as getTweet() function
    for (var i=0;i<data.length;i++){                             
      //if statement to get only the tweet related to the specified ID
      if(data[i].id == document.getElementById('inputID').value){

        var dis = document.createElement("div");                  
        dis.innerHTML = '<br>' + 'Created at: ' + data[i].created_at + ' | Tweet: ' + data[i].text;
        displayID.appendChild(dis);

      }    
    }
  })
}

//Function that deletes a tweet from an ID specified by the user(Task 6)
function deleteTweetById(){
  document.getElementById('display').innerHTML = '';              //clears element if not already clear
  fetch('favs.json')
  .then(function(response){

    return response.json();

  })
  .then(function(data){

    var displayID = document.getElementById('display');
  //Using same logic as getTweet() function
    for (var i=0;i<data.length;i++){   

      //if statement to get only the tweet related to the specified ID
      if(data[i].id == document.getElementById('inputID').value){

        delete data[i].text;                                       //delete specified tweet
        var dis = document.createElement("div");                  
        dis.innerHTML = 'Tweet Deleted';                           //print out saying the tweet was deleted
        displayID.appendChild(dis);

      }    
    }
  })
}