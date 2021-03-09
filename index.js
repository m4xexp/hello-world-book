const searchBtn = document.getElementById("search-btn");
const searchBar = document.querySelector("#search-bar");
const resultContainer = document.querySelector(".resultContainer");

searchBar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    FetchData();
  }
});

searchBtn.addEventListener("click", FetchData);

function validate() {
  const regex = /^[A-Za-z0-9 ]+$/;
  const isValid = regex.test(document.querySelector("#search-bar").value);
  if (!isValid) {
    alert("Contains Special Characters.");
  }

  return isValid;
}

function searchBook(books) {
  return `
    <div class="bookCard">
        <div class="bookCard-img">
            <img src="${books.image}" alt="book-img">
        </div>
        <div class="bookCard-content">
        <h4>
            ${books.title}
        </h4>
        <h5>
            ${books.subtitle}
        </h5>
        <p>
            ${books.price}
        </p>
        <a href="${books.url}">View Book</a>
        </div>
    </div>
`;
}

async function FetchData() {
  const validateChar = validate();

  if (validateChar) {
    searchQuery = document.querySelector("#search-bar").value;
    resultContainer.innerHTML = "";
    const res = await fetch(
      "https://api.itbook.store/1.0/search/" + searchQuery
    ).then((res) => {
      return res.json();
    });

    console.log(res.books);
  }
}
