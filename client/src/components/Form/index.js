
import React from 'react';

const Form = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row m-3">
                <div className="form-group col-md-10">
                <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
                </div>
                <div className="form-group col-md-2">
                <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;
