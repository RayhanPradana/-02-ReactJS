import Counter from './Counter';
import Greeting from './Greeting';
import Biodata from './Biodata';
import TodoList from './Todolist';
import React from 'react';

function Header() {
    return (
        <header>
            <h1>Aplikasi React Rayhan</h1>
        </header>
    );
}

function Main() {
    return (
        <main>
            <h2>Selamat datang di Aplikasi React Rayhan!</h2>
            <p>Ini adalah area konten utama</p>
        </main>
    );
} 

function Footer() {
    return (
        <footer>
            <p>&copy; 2025 Aplikasi React Rayhan</p>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Greeting name="Rayhan" />
            <Counter />
            <Biodata />
            <TodoList title="Daftar Tugas" tugas="Tugas" />
            <Footer />
        </div>
    );
} 

export default App;
