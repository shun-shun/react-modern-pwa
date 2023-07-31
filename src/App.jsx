import React, { useState } from "react";
import './App.css';
import { InputTodo } from './components/InputTodo'
import { IncompleteTodo } from "./components/InCompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([])

  const onChangeTodoText = (event) => setTodoText(event.target.value)

  const onClickAdd = () => {
    if(todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    const newIncomplateTodos = [...incompleteTodos]
    newIncomplateTodos.splice(index, 1)

    const newComplateTodos = [...completeTodos, incompleteTodos[index]]
    setCompleteTodos(newComplateTodos)
    setIncompleteTodos(newIncomplateTodos)
  }

  const onClickBack = (index) => {
    const newComplateTodos = [...completeTodos]
    newComplateTodos.splice(index, 1)

    const newIncomplateTodos = [...incompleteTodos, completeTodos[index]]
    setCompleteTodos(newComplateTodos)
    setIncompleteTodos(newIncomplateTodos)
  }

  return (
    <>
      <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd} disabled={incompleteTodos.length >= 5}/>
      {incompleteTodos.length >= 5 && <p style={{color:'red'}}>登録できるTODOは５個までです。</p>}
      <IncompleteTodo incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
      <div></div>
    </>
  );
};