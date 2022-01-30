import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className = "app">
            <header className = "header">
                <h1>{"Gödel"}</h1>
                <p>{"A wordle game for gamers"}</p>
            </header>
            <div className = "game">
                <p>{"Gamebox"}</p>
            </div>
            <div className = "keyboard">
                <p>{"Keyboard"}</p>
            </div>
        </div>
    );
}

export default App;
