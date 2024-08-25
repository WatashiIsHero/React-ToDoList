export const IncompleteTask = (props) => {
  const { incompleteToDos, completeTodos, delTodos } = props;

  return (
    <div className="incomplete-task-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {incompleteToDos.map((todo, index) => (
          <li key={todo}>
            <div className="task-item">
              <p className="task-p">{todo}</p>
              <button onClick={() => completeTodos(index)}>完了</button>
              <button onClick={() => delTodos(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
