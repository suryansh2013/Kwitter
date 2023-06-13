
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBvQ1-4CumumQp1m9z5T9ajCVapO89ffkE",
      authDomain: "kwitter-app-a3927.firebaseapp.com",
      databaseURL: "https://kwitter-app-a3927-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-a3927",
      storageBucket: "kwitter-app-a3927.appspot.com",
      messagingSenderId: "127944221170",
      appId: "1:127944221170:web:5afc86297bac34e2e30b6b"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="index.html";
}

