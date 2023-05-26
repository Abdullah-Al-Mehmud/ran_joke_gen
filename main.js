let joke = document.getElementById("ranJokes");
let btn = document.getElementById("btn");

const url =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?blacklistFlags=nsfw,political,racist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      joke.textContent = data.joke;
    });
};
btn.addEventListener("click", getJoke);
getJoke();
