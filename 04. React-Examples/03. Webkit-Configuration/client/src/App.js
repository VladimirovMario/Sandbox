import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(Object.values(data));
        setIsLoading(false);
      })
      .catch((err) => console.err(err));
  }, []);

  const changeTodoStatus = (id) => {
    setTodoList((state) =>
      state.map((t) =>
        t._id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const onAddTodo = () => {
    const [idText, lastIdNumber] = todoList[todoList.length - 1]._id.split("_");

    const newId = idText + "_" + (Number(lastIdNumber) + 1);
    const text = prompt("Task name:");

    const newTask = {
      _id: newId,
      text,
      isCompleted: false,
    };
    setTodoList((state) => [...state, newTask]);
  };

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>
          <div className="add-btn-container">

            {/* onAddTodo */}
            <button className="btn" onClick={onAddTodo}>
              + Add new Todo
            </button>

          </div>
          <div className="table-wrapper">

            {/* Loading */}
            { isLoading 
            ? <Loading /> 
            : <TodoList todoList={todoList} changeTodoStatus={changeTodoStatus} />
            }         
           
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
