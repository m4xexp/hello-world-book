"use strict";

var searchBtn = document.getElementById("search-btn");
var searchBar = document.querySelector("#search-bar");
var resultContainer = document.querySelector(".resultContainer"); //Enter to search book

searchBar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    FetchData();
  }
});
searchBtn.addEventListener("click", FetchData);

function validate() {
  var regex = /^[A-Za-z0-9 ]+$/;
  var isValid = regex.test(document.querySelector("#search-bar").value);

  if (!isValid) {
    alert("Contains Special Characters.");
  }

  return isValid;
}

function searchBook(books) {
  return "\n    <div class=\"bookCard\">\n        <div class=\"bookCard-img\">\n            <img src=\"".concat(books.image, "\" alt=\"book-img\">\n        </div>\n        <div class=\"bookCard-content\">\n        <h4>\n            ").concat(books.title, "\n        </h4>\n        <h5>\n            ").concat(books.subtitle, "\n        </h5>\n        <p>\n            ").concat(books.price, "\n        </p>\n        <a href=\"").concat(books.url, "\">View Book</a>\n        </div>\n    </div>\n");
}

function FetchData() {
  var validateChar, res;
  return regeneratorRuntime.async(function FetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          validateChar = validate();

          if (!validateChar) {
            _context.next = 8;
            break;
          }

          searchQuery = document.querySelector("#search-bar").value;
          resultContainer.innerHTML = "";
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch("https://api.itbook.store/1.0/search/" + searchQuery).then(function (res) {
            return res.json();
          }));

        case 6:
          res = _context.sent;
          console.log(res.books);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}