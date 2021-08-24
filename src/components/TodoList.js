import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/todo.module.css";
import { completeTodo, deleteTodo } from "../redux/actions/todosAction";

export default function TodoList() {
  const { todos } = useSelector((state) => state.TodoReducer);

  const dispatch = useDispatch();
  console.log("list", todos);
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.content}>
          <h1>TodoList</h1>
          <table id={styles.customers}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Completed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td className={todo.is_complete ? styles.line_cross : ""}>
                    {todo.title}
                  </td>
                  <td>
                    {todo.is_complete ? (
                      <span className={styles.success}>completed</span>
                    ) : (
                      <span className={styles.error}>pending</span>
                    )}
                  </td>
                  <td>
                    {todo.is_complete ? (
                      <button
                        type="button"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                      >
                        Delete
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => dispatch(completeTodo(todo.id))}
                      >
                        Complete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
