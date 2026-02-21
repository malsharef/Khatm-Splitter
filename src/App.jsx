import {useEffect, useState} from 'react';
import {calculateDistribution} from './KhatmLogic';
import nameData from './data/names.json'
import './App.css';

function App() {
    // State für die Namen
    const [names, setNames] = useState(() => {

        const savedNames = localStorage.getItem('khatm-names');
        if (savedNames) return JSON.parse(savedNames);
        return Array.isArray(nameData) ? nameData : [];
    });

    // State für den aktuellen Zyklus
    const [cycle, setCycle] = useState(() => {
        const savedCycles = localStorage.getItem('khatm-cycles');
        if (savedCycles) return Number(savedCycles); else return 0;
    });

    const [inputText, setInputText] = useState('');

    useEffect(() => {
        localStorage.setItem('khatm-names', JSON.stringify(names));
    }, [names])

    useEffect(() => {
        localStorage.setItem('khatm-cycle', cycle.toString());
    }, [cycle]);

    const distribution = Array.isArray(names) ? calculateDistribution(names, cycle) : [];

    const handleAddName = (e) => {
        if (e) e.preventDefault();
        if (inputText.trim() !== "") {
            setNames([...names, inputText]);
            setInputText("");
        }
    }

    const removeName = (indexToRemove) => {
        setNames(names.filter((_, index) => index !== indexToRemove));
    }
    return (<div className="container">
        <h1>Khatm Planner</h1>

        <form className="input-group">
            <input
                id="name-input"
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Input name..."
            />
            <button type="submit" className="btn-add" onClick={handleAddName}>Add</button>
        </form>

        <button className="btn-cycle" onClick={() => setCycle(cycle + 1)}>
            Next Cycle (Round: {cycle})
        </button>
        <button
            className="btn-reset"
            style={{ backgroundColor: '#95a5a6', color: 'white', marginTop: '5px' }}
            onClick={() => {
                if(window.confirm("Zyklus wirklich auf 0 zurücksetzen?")) {
                    setCycle(0);
                }
            }}
        >
            Reset Zyklus
        </button>
        <ul>
            {distribution.map((item, index) => (<li key={index} className="list-item">
                <button className="remove-btn" onClick={() => removeName(index)}>✕</button>
                <strong>👤 {item.name}</strong>
                <div className="page-info">
                    Page: <strong>{item.startPage} - {item.endPage}</strong>
                </div>
                <div className="page-info">
                    {item.startSurah}:{item.startAyah} bis {item.endSurah}:{item.endAyah}
                </div>
            </li>))}
        </ul>
    </div>);
}

export default App;