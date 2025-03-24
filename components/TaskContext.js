import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        if (task.trim().length === 0) return;
        setTasks((prevTasks) => [...prevTasks, { text: task, id: Math.random().toString() }]);
    }

    function deleteTask(id) {
        setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
    }

    function updateTask(id, newText) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
        );
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
}
