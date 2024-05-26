import Todo from "./Todo";

export default function TodoList({ todoList, changeTodoStatus }) {
  //   console.log("TodoList.js", todoList);
  //   TodoList.js Array []
  //   TodoList.js Array(20) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todo) => (
          <Todo
           key={todo._id}
           {...todo}
           changeTodoStatus={changeTodoStatus} />
        ))}
      </tbody>
    </table>
  );
}
