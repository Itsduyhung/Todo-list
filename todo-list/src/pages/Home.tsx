import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Home.css';

export default function TodoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.trim() === "") return;

        setTasks((prevTasks) => [...prevTasks, task]);
        setTask("");
    };

    const handleDeleteTask = (indexToDelete: number) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="todo-container">
            <h2>📝 Việc Cần Làm</h2>
            <form onSubmit={handleSubmit} className="add-task-form">
                <input
                    type="text"
                    placeholder="Thêm việc mới..."
                    value={task}
                    onChange={handleChange}
                    required
                    className="task-input"
                />
                <button type="submit" className="add-button">Thêm</button>
            </form>

            <ul className="task-list">
                {tasks.map((t, index) => (
                    <li key={index} className="task-item">
                        <span>{t}</span>
                        <button onClick={() => handleDeleteTask(index)} className="delete-button">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
