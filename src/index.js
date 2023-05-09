const init = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const input = document.querySelector("input#searchByID");


  fetch(`http://localhost:3000/movies/${input.value}`)
  .then(function(res){
    return res.json();

  })
  .then(function(data){
    const title = document.querySelector("section#movieDetails h4");
     const summary = document.querySelector("section#movieDetails p");
     title.innerText = data.title;
    summary.innerText = data.summary;
  })
  })

}

document.addEventListener('DOMContentLoaded', init);
