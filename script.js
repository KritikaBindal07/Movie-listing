let movieNameInput = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = async () => {
  let movie = movieNameInput.value;
  try {
    let url = `http://www.omdbapi.com/?t=${movie}&apikey=${key}`;

    let response = await fetch(url);

    let resp = await response.json();
    console.log(resp);

    if (resp.Response == "True") {
      result.innerHTML = await ` 
         <div class="movie-info">
        
          <img class="poster" src=${resp.Poster} >
          <div>
          <div class="title-div">
          <h1 class="title"> ${resp.Title}</h1>
          </div>

          <div class="rating">
         
          <h4> ⭐${resp.imdbRating}</h4>
          </div>
          <div class="details"> 
          <span> ${resp.Rated} </span>
          <span> ${resp.Year} </span>
          <span> ${resp.Runtime} </span>
          </div>

          <div class="genre">
          <div>${resp.Genre.split(",").join("</div><div>")}</div>
          </div>
          <h3 class="h3">Plot:</h3>
          <div class="margin">
          <p class="para">${resp.Plot}</p>
          </div>
          <h3 class="h3">Cast:</h3>
          
          
          <div class="margin">
          <p class="para">${resp.Actors}</p>
          </div>
          </div>
          </div>
          </div>

          `;
    } else {
      result.innerHTML = `<h3 class="error">${resp.Error} </h3>`;
    }
  } catch (e) {
    console.log(e);
    result.innerHTML = `<h3 class="error"> Error Occured </h3>`;
  }
};

searchBtn.addEventListener("click", getMovie);
