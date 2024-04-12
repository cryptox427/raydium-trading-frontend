import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CONFIG from '../config';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        const fetchLogs = async () => {
            const res = await axios.get(`${CONFIG.BACKEND_URL}/fetchUpdate`);
            setLogs(res.data);
        }
        fetchLogs();
        setInterval(fetchLogs, 10000);
    }, [])

    return <div>
        <h1>Bot logs</h1>
        {logs.map(log => {
            return <p>{log}</p>
        })}
    </div>
}

export default Logs;