import React from "react";

export const InputTodo = (props) => {

    const {todoText, onChangeTodoText, onClickAdd, disabled} = props

    return (
        <div className="input-area">
            <input disabled={disabled} placeholder="TODO" value={todoText} onChange={onChangeTodoText}></input>
            <button disabled={disabled} onClick={onClickAdd}>追加</button>
        </div>
    );
}