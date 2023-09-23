import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dasboard';

function App() {
    return (
        <div className={styles.page}>
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
