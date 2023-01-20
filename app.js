console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const container = document.getElementById("inputContainer");
const img = document.querySelector("img");
const feedback = document.createElement("p");
feedback.id = "feedback";
container.append(feedback);
const feedbackP = document.getElementById("feedback");

searchButton.addEventListener("click", () => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=Bk7OloiJN4yJ5XYY0P38JgDnmS8wQJfj&s=${searchInput.value}`
  )
    .then((res) => {
      const results = res.json();
      return results;
    })
    .then((res) => {
      img.src = res.data.images.original.url;
    })
    .catch((err) => {
      console.error(err);
      feedbackP.textContent = err.message;
    });
});
