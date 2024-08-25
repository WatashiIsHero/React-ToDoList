import { useEffect, useState } from 'react';
import './style.css';
import { InputText } from './components/InputText';
import { IncompleteTask } from './components/IncompleteTask';
import { CompleteTask } from './components/CompleteTask';

export const ToDo = () => {
  // 未完了のToDo
  const [incompleteToDos, setIncompleteToDos] = useState([]);

  // 完了したToDo
  const [completeToDos, setCompleteToDos] = useState([]);

  // 入力内容
  const [inputText, setInputText] = useState('');
  const onChangeText = (event) => {
    setInputText(event.target.value);
  };

  // 削除処理
  const delTodos = (index) => {
    const newIncompleteToDos = [...incompleteToDos];
    newIncompleteToDos.splice(index, 1);
    setIncompleteToDos(newIncompleteToDos);
  };

  // 完了処理
  const completeTodos = (index) => {
    const newIncompleteToDos = [...incompleteToDos];
    newIncompleteToDos.splice(index, 1);

    const newCompleteToDos = [...completeToDos, incompleteToDos[index]];

    setIncompleteToDos(newIncompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  // 戻す処理
  const moveCompToDoToIncomp = (index) => {
    const newCompleteToDos = [...completeToDos];
    newCompleteToDos.splice(index, 1);

    const newIncompleteToDos = [...incompleteToDos, completeToDos[index]];

    setIncompleteToDos(newIncompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  // 追加
  const addToDo = () => {
    if (inputText === '') return;
    const newIncompleteTodos = [...incompleteToDos, inputText];
    setIncompleteToDos(newIncompleteTodos);
    setInputText('');
  };

  const isMaxToDos = incompleteToDos.length >= 5;

  return (
    <>
      <InputText
        inputText={inputText}
        onChangeText={onChangeText}
        addToDo={addToDo}
        disabled={isMaxToDos}
      />
      {isMaxToDos && (
        <p style={{ color: 'red' }}>登録できるToDoが5つまでです。</p>
      )}
      <IncompleteTask
        incompleteToDos={incompleteToDos}
        completeTodos={completeTodos}
        delTodos={delTodos}
      />
      <CompleteTask
        completeToDos={completeToDos}
        moveCompToDoToIncomp={moveCompToDoToIncomp}
      />
    </>
  );
};
