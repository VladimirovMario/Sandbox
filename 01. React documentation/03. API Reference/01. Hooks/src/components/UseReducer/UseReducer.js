import PassingTheInitialStateDirectly from './PassingTheInitialStateDirectly/PassingTheInitialStateDirectly';
// import PassingTheInitializerFunction from './PassingTheInitializerFunction/PassingTheInitializerFunction';
import TodoListArray from './TodoListArray/TodoListArray';
// import FormObject from './FormObject/FormObject';
// import AddingAReducerToAComponent from './AddingAReducerToAComponent/AddingAReducerToAComponent';

export default function UseReducer() {
  return (
    <>
      <h1>
        useReducer is a React Hook that lets you add a reducer to your component
      </h1>
      <PassingTheInitialStateDirectly />
      {/* <PassingTheInitializerFunction /> */}
      <TodoListArray />
      {/* <FormObject /> */}
      {/* <AddingAReducerToAComponent /> */}
    </>
  );
}
