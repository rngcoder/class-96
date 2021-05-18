
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBxMaRGa_n2qDLerq-Wvcb6oFGkzPsdCwc",
      authDomain: "kwitter-c50cc.firebaseapp.com",
      projectId: "kwitter-c50cc",
      storageBucket: "kwitter-c50cc.appspot.com",
      messagingSenderId: "85767981539",
      appId: "1:85767981539:web:6172dc4fd46e7ed3c1f8d6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function(snapshot)
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });
});
}
getData();
function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
          });
        
          localStorage.setItem("room_name", room_name);
        
          window.location = "kwitter_page.html";
        
}
function redirectToRoomName() 
{
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}