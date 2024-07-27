// Function to make an XMLHttpRequest to get user data
function fetchUserData() {
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    console.log(xhr)
    if (xhr.status >= 200 && xhr.status < 300) {

      var data = JSON.parse(xhr.responseText);
      displayUserData(data);
    } else {
      console.error("HTTP Error:", xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Network Error");
  };

  xhr.send();
}

// Function to display user data on the page
function displayUserData(users) {
  var userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Clear existing content

  users.forEach(function (user) {
    var userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = `
                  <h2>${user.name}</h2>
                  <p><strong>Email:</strong> ${user.email}</p>
                  <p><strong>Phone:</strong> ${user.phone}</p>
                  <p><strong>Company:</strong> ${user.company.name}</p>
              `;
    userList.appendChild(userDiv);
  });
}

// Add event listener to the button to fetch user data when clicked
document
  .getElementById("load-users-btn")
  .addEventListener("click", function () {
    fetchUserData();
  });
