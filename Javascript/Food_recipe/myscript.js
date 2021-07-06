const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "54ad9be4";
const APP_key = "09f0d076b9556938c34a6c0df5c2cb76";
// console.log(container)
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
/*const SearchBox=document.querySelector('.search-box');
const SearchResult=document.querySelector('.search_result');
const container=document.querySelector('.container');
let SearchQuery='';
 const App_ID='54ad9be4'
 const App_key='09f0d076b9556938c34a6c0df5c2cb76'
 const BaseURL='https://api.edamam.com/search'

SearchBox.addEventListener('submit',(e)=>{
    e.preventDefault();
    SearchQuery=e.target.querySelector('input').value;
    fetchAPI(); 
    });

async function fetchAPI(){
    const BaseURL=`https://api.edamam.com/search?q=pizza&app_id=${App_ID}&app_key=${App_key}&to=20`;
    const response=await fetch(BaseURL);
    const data = await response.json();
    generateHTML=(data.hits);
    console.log(data);
}
function generateHTML(results) {
    container.classList.remove("initial");
    let generatedHTML = "";
    results.map((result) => {
      generatedHTML += `
        <div class="item">
          <img src="${result.recipe.image}" alt="img">
          <div class="desc-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a class="view-link" target="_blank" href="${
              result.recipe.url
            }">View Recipe</a>
          </div>
          <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
          <p class="item-data">Diet label: ${
            result.recipe.dietLabels.length > 0
              ? result.recipe.dietLabels
              : "No Data Found"
          }</p>
          <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
        </div>
      `;
    });
    SearchResult.innerHTML = generatedHTML;
  }*/
