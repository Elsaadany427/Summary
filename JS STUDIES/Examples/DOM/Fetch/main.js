// Fetch data from the API
fetch("https://ghibliapi.vercel.app/films")
.then(response => response.json()) // Parse the JSON from the response
.then(films => {
  // Target the main element
  const main = document.getElementById("main");

  // Create a list of film titles
  const titles = films.map(film => `<p>${film.title}</p>`).join("");

  // Append the titles to the main element
  main.innerHTML = titles;
})
.catch(error => {
  // Handle any errors
  console.error("Error fetching data:", error);
  const main = document.getElementById("main");
  main.innerHTML = "<p>Failed to load films.</p>";
});