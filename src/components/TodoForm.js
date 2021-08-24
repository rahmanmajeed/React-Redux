import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todosAction";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(todo));
    //     console.log(todo)
  };

  const handleInput = (e) => {
    let formData = {
      id: Math.floor(Math.random() * 100),
      title: e.target.value,
      is_complete: false,
    };
    setTodo(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Todo Name:
          <input type="text" value={todo.title} onChange={handleInput} />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
