import React from 'react';

function Results(props) {
  return (
    <div className="row mb-5">
      <div className="col-12">
        {props.books.map(book => (
          <div className="card mt-4"
            key={
              book._id
                ? book._id
                : book.googleId
            }>
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <div className="media">
                <img src={book.image}
                  className="align-self-center mr-3" alt={book.title} />
                <div className="media-body">
                  <h6 className="mt-0">{book.authors}</h6>
                  <p className="mb-0">{book.description}</p>
                </div>
              </div>
              <a className="btn btn-info mr-1 mt-2" href={book.link} target="_blank"
                rel="noopener noreferrer">View Book</a>
              <button className={props.buttonType}
                onClick={props.buttonAction}
                id={
                  book._id
                    ? book._id
                    : book.googleId
                }
              >
                {props.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Results;
