var firebaseConfig = {
      apiKey: "AIzaSyBgQSnoOKEwfk2HMTtb2nl1MoMqEy7GPxc",
      authDomain: "kwitter-428f8.firebaseapp.com",
      databaseURL: "https://kwitter-428f8-default-rtdb.firebaseio.com",
      projectId: "kwitter-428f8",
      storageBucket: "kwitter-428f8.appspot.com",
      messagingSenderId: "97448960654",
      appId: "1:97448960654:web:32c2e79d87b214794c9fdf"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
