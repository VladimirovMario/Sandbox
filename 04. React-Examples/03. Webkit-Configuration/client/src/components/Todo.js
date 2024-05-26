export default function Todo({ 
    _id,
    text,
    isCompleted,
    changeTodoStatus,
 }) {

  return (    
    <tr className={`todo ${isCompleted ? "is-completed" : ``}`.trim()}>

      <td>{text}</td>
      <td>{isCompleted ? "Completed" : "Not Completed"}</td>
      <td className="todo-action">

        <button
          className="btn todo-btn"
          onClick={() => {
            changeTodoStatus(_id);
          }}
        >Change status</button>
        
      </td>
    </tr>
  );
}
