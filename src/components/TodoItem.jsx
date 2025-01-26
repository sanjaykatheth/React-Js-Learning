function TodoItem({ todoName, todoDate }) {
  // Updated to match the prop names in App.js
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div> {/* Corrected prop name */}
        <div className="col-4">{todoDate}</div> {/* Corrected prop name */}
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
