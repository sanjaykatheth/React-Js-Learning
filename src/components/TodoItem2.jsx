function TodoItem2() {
  let toDoName = "Go to College";
  let toDate = "4/10/2022";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger  kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
