export const CompleteTask = (props) => {
  const { completeToDos, moveCompToDoToIncomp } = props;

  return (
    <div>
      <p className="title">完了したToDo</p>
      <ul>
        {completeToDos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="task-item">
                <p className="task-p">{todo}</p>
                <button onClick={() => moveCompToDoToIncomp(index)}>
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
