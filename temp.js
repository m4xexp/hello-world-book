.then(({ result }) => {
    return result.map((books) => searchBook(books)).join("");
  })
  .then((books) => (resultContainer.innerHTML = books));