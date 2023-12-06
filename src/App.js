import { useState } from "react";
import { MdDelete } from "react-icons/md";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newText, setNewText] = useState("");

  function handleChange(event) {
    setNewText(event.target.value);
  }

  function addTask() {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newText,
    };
    setTodoList([...todoList, task]);
  }

  function deleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  return (
    <div className="max-w-[500px] mx-auto bg-green-100 mt-4 px-5 py-3 rounded">
      <div className="flex gap-4 items-center">
        <input
          type="text"
          className="border-2 border-red- rounded outline-none w-4/5 p-2"
          onChange={handleChange}
        />
        <button
          className="bg-green-400 p-1 rounded text-white font-semibold transition-colors hover:bg-green-500 hover:text-white"
          onClick={addTask}>
          Add Task
        </button>
      </div>
      <div>
        <div className="">
          {todoList.map((task) => (
            <div className="flex justify-between items-center my-3 bg-green-400 p-2 rounded">
              <li className="list-none font-semibold text-white">
                {task.taskName}
              </li>
              <button
                className="text-xl text-white hover:text-gray-200"
                onClick={() => deleteTask(task.id)}>
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
