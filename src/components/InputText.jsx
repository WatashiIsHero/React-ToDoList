export const InputText = (props) => {
  const { inputText, onChangeText, addToDo, disabled } = props;

  return (
    <div className="input-back-area">
      <input
        type="text"
        placeholder="入力してください"
        value={inputText}
        onChange={onChangeText}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={addToDo}>
        追加
      </button>
    </div>
  );
};
