// tombol genre aktif
const buttons = document.querySelectorAll(".genre-filter button");

buttons.forEach(button => {

button.addEventListener("click", () => {

buttons.forEach(btn => btn.classList.remove("active"));

button.classList.add("active");

});

});



// search film
const search = document.getElementById("search");
const movies = document.querySelectorAll(".movie-card");

search.addEventListener("keyup", function(){

let keyword = search.value.toLowerCase();

movies.forEach(movie => {

let text = movie.innerText.toLowerCase();

if(text.includes(keyword)){
movie.style.display="block";
}
else{
movie.style.display="none";
}

});

});