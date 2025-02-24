import React, { useState } from 'react';

const today = new Date().toLocaleDateString();

// Komponen anak untuk menampilkan setiap tugas dengan tombol hapus
function TodoItem({ task, tugas, onRemove }) {
    return (
        <li>
            {tugas} {task}, Tanggal {today} 
            <button onClick={onRemove} style={{ marginLeft: '10px', color: 'red' }}>Hapus</button>
        </li>
    );
}

// Komponen utama untuk mengelola daftar tugas
function TodoList({ title, tugas }) {
    const [tasks, setTasks] = useState([]);  // State untuk daftar tugas
    const [newTask, setNewTask] = useState(""); // State untuk input tugas baru

    // Fungsi untuk menambah tugas ke dalam daftar
    const addTask = (e) => {
        e.preventDefault(); // Mencegah reload halaman saat submit form
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask(""); // Reset input setelah tugas ditambahkan
        }
    };

    // Fungsi untuk menghapus tugas berdasarkan indeks
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>{title || "Daftar Tugas"}</h2>

            {/* Form untuk input tugas */}
            <form onSubmit={addTask}>
                <input 
                    type="text" 
                    placeholder="Tambahkan tugas..." 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                />
                <button type="submit">Tambah</button>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <TodoItem 
                        key={index} 
                        task={task} 
                        tugas={tugas} 
                        onRemove={() => removeTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
