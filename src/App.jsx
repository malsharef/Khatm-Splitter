import { useState } from 'react';
import { calculateDistribution } from './KhatmLogic';

function App() {
    // State für die Namen
    const [names, setNames] = useState(["Ahmed", "Sara", "Hamza"]);
    // State für den aktuellen Zyklus
    const [cycle, setCycle] = useState(0);

    // Wir berechnen die Verteilung basierend auf dem State
    const distribution = calculateDistribution(names, cycle);

    return (
        <div>
            <h1>Khatm Planner</h1>
            <button onClick={() => setCycle(cycle + 1)}>Nächster Zyklus</button>

            <ul>
                {distribution.map((item, index) => (
                    <li key={index}>
                        {item.name}: Seite {item.start} bis {item.end}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;