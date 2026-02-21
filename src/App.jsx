import {useState} from 'react';
import {calculateDistribution} from './KhatmLogic';
import nameData from './data/names.json'

function App() {
    // State für die Namen
    const [names, setNames] = useState(Array.isArray(nameData) ? nameData : []);
    // State für den aktuellen Zyklus
    const [cycle, setCycle] = useState(0);

    const[inputText, setInputText] = useState('');

    // Wir berechnen die Verteilung basierend auf dem State
    const distribution = Array.isArray(names) ? calculateDistribution(names, cycle) : [];

    const handleAddName = () =>{
        if (inputText.trim() !== ""){
            setNames([...names, inputText]);
            setInputText("");
        }
    }
    return (
        <div>
            <h1>Khatm Planner</h1>
            <label htmlFor="names"> Add the people here
                </label>
            <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="input name..."
                />
            <button onClick={handleAddName}> Add</button>
            <button onClick={() => setCycle(cycle + 1)}>Next Cycle</button>

            <ul>
                {distribution.map((item, index) =>
                    (<li key={index}>
                        <strong> {item.name}: </strong>
                            Pages [{item.startSurah} : {item.startAyah}] to [{item.endSurah} : {item.endAyah}]
                    </li>

                ))}
            </ul>
        </div>);
}

export default App;