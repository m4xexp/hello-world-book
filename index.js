const searchBtn = document.getElementById("search-btn");
const searchBar = document.querySelector("#search-bar");
const resultContainer = document.querySelector(".resultContainer");

setLoading(false);

//Enter to search book
searchBar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    FetchData();
  }
});

function setLoading(visible) {
  document.querySelector(".loading").style.display = visible ? "block" : "none";
}

searchBtn.addEventListener("click", FetchData);

function validate() {
  const regex = /^[A-Za-z0-9 ]+$/;
  const isValid = regex.test(document.querySelector("#search-bar").value);
  if (!isValid) {
    alert("Contains Special Characters.");
  }

  return isValid;
}

async function FetchData() {
  const validateChar = validate();

  if (validateChar) {
    searchQuery = document.querySelector("#search-bar").value;
    resultContainer.innerHTML = "";
    setLoading(true);
    const res = await fetch(
      "https://api.itbook.store/1.0/search/" + searchQuery
    ).then((res) => {
      setLoading(false);
      return res.json();
    });

    // console.log(res.books);
    return (resultContainer.innerHTML = res.books
      .map((book, index) => {
        return `<div class="card-container">
        <div class="card-image">
          <img
            src="${book.image}"
            alt="card-image"
          />
        </div>
      <div class="card-content-wrapper">
        <div class="card-title" style="font-weight: bold">
            ${book.title}
        </div>
      <div class="card-subtitle">
          ${book.subtitle}
      </div>
      <div class="card-content">
        <div class="card-content-price">
          Price <span>${book.price}</span>  
        
        </div>
        <a class="btn btn-viewbook" href="${book.url}" target="_blank" >View book</a>
      </div>
      </div>
    </div>`;
      })
      .join(""));
  }
}
