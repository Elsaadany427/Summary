// var postedUsers = []; // Array to store posted users

// // Function to post new user data
// function postUserData(name, email, username, website) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
//   xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

//   xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       var response = JSON.parse(xhr.responseText);
//       // displayResponse(response);
//       postedUsers.push(response); // Add posted user to the array
//       displayPostedUsers();
//     } else {
//       console.error("HTTP Error:", xhr.status, xhr.statusText);
//     }
//   };

//   xhr.onerror = function () {
//     console.error("Network Error");
//   };


//   var data = JSON.stringify({ name: name, email: email , username: username, website: website});
//   xhr.send(data);
// }

// // Function to display posted users
// function displayPostedUsers() {
//   var userList = document.getElementById("user-list");
//   userList.innerHTML = ""; // Clear existing content

//   postedUsers.forEach(function (user) {
//     var userDiv = document.createElement("div");
//     userDiv.className = "user";
//     userDiv.innerHTML = `
//             <h2>${user.name}</h2>
//             <p><strong>Email:</strong> ${user.email}</p>
//             <p><strong>Phone:</strong> ${user.phone}</p>
//             <p><strong>Username:</strong> ${user.username}</p>
//             <p><strong>Website:</strong> ${user.website}</p>
//             <p><strong>Company:</strong> ${user.company?.name || "N/A"}</p>
//         `;
//     userList.appendChild(userDiv);
//   });
// }

// // Add event listener to the form to post user data when submitted
// document.getElementById("user-form")
//         .addEventListener("submit", 
//           function (event) {
//             event.preventDefault(); // Prevent the form from submitting the traditional way
//             var name = document.getElementById("name").value;
//             var email = document.getElementById("email").value;
//             var username = document.getElementById("username").value;
//             var website = document.getElementById("website").value;
//             postUserData(name, email, username, website);
//             document.getElementById("user-form").reset(); // Reset the form after submission
//           }
// );  


let promise_ = fetch('https://jsonplaceholder.typicode.com/users')
console.log(promise_);


  