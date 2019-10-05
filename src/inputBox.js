import React from "react";
import Cards from "./cards";

export class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLibrary: [
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          pages: 295,
          readStatus: "in progress"
        },
        {
          title: "Harry Potter",
          author: "J.K. Rowling",
          pages: 150,
          readStatus: "complet"
        }
      ]
    };
    this.subBook = this.subBook.bind(this);
    this.bookLibrary = this.bookLibrary.bind(this);
    this.cancel = this.cancel.bind(this);
    this.toggleReadStatus = this.toggleReadStatus.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  bookLibrary(title, author, pages, readStatus) {
    return {
      title,
      author,
      pages,
      readStatus
    };
  }

  toggleReadStatus(index) {
    const books = this.state.myLibrary;
    books[index].readStatus === "complet"
      ? (books[index].readStatus = "in progress")
      : (books[index].readStatus = "complet");
    this.setState({ books: books });
    // console.log(books[index])
  }

  deleteCard(index) {
    const books = this.state.myLibrary;
    console.log(books);
    books.splice(index, 1);
    //items.filter(item => item.id !== id)
    this.setState({ books: books });
  }

  subBook(e) {
    e.preventDefault();
    let hidden;
    this.props.hide(hidden);
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = Number(document.querySelector("#pages").value);
    let readStatus = document.querySelector("#checkbox").checked
      ? "complet"
      : "in progress";
    let book = this.bookLibrary(title, author, pages, readStatus);

    const myLibrary = this.state.myLibrary; //.slice();
    this.state.myLibrary.push(book);
    this.setState({ myLibrary: myLibrary });
  }

  cancel() {
    let cancel;
    this.props.hide(cancel);
  }

  render() {
    return (
      <div>
        <div className={this.props.statut}>
          <div className="iB_Container">
            <div>
              <p>Add The Title :</p>
              <input
                id="title"
                type="text"
                placeholder="book title "
                autoComplete="off"
              />
            </div>
            <div>
              <p>Add The Author :</p>
              <input
                id="author"
                type="text"
                placeholder="book author"
                autoComplete="off"
              />
            </div>
            <div>
              <p>Number Of Pages :</p>
              <input id="pages" type="number" placeholder="number of pages" />
            </div>
            <div className="swContainer">
              <p>Check if Finished Reading it</p>
              <label className="switch">
                <input id="checkbox" type="checkbox" />
                <span className="slider round" />
              </label>
            </div>
            <button onClick={this.subBook} className="subBtn">
              Submit
            </button>
            <div onClick={this.cancel}>
              <img
                alt="cancel"
                className="cancelBtn"
                src="https://freeicons.io/laravel/public/uploads/icons/png/74639361540882603-128.png"
              />
            </div>
          </div>
        </div>
        <div>
          <Cards
            toggleReadStatus={this.toggleReadStatus}
            books={this.state.myLibrary}
            deleteCard={this.deleteCard}
          />
        </div>
      </div>
    );
  }
}
