export const searchBook = (books) => `
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
