import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import HighRisk from '../components/highRisk';
import MidRisk from '../components/midRisk';
import LowRisk from '../components/lowRisk';
import Logs from '../components/logs';
import CONFIG from '../config';

const Home = () => {
    const [tokenId, setTokenId] = useState(1);
    const [tokenAddress, setTokenAddress] = useState('');
    const [data, setData] = useState({});
    const fetchInfo = async () => {
        try {
            const res = await axios.get(`${CONFIG.BACKEND_URL}/fetch?tokenId=${tokenId}`);
            setData(res.data);

        } catch (err) {
            console.log(err)
        }
    }

    const updateToken = async () => {
        try {
            const res = await axios.post(`${CONFIG.BACKEND_URL}/updateToken`, { tokenId, tokenAddress });
            console.log('updated--', res.status);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchInfo();
        const fetchInterval = setInterval(fetchInfo, 10000);
        return () => {
            clearInterval(fetchInterval)
        };
    }, [tokenId])
    return <div style={{ marginLeft: 30, marginTop: 50 }}>
        <div className='flex-container'>
            <div>
                <h1>General Conf</h1>
                <p>Token Mint Address</p>
                <input type='text' value={tokenAddress} onChange={ev => { setTokenAddress(ev.target.value) }} />
                <button onClick={updateToken}>Set Token</button>
                {data.price && <div>
                    <p>Mint: {data.address}</p>
                    <p>RSI: {data.rsi}</p>
                    <p>Price: {data.price} USD</p>
                </div>}
                <p></p>
            </div>
        </div>
        <div className='flex-container'>
            <select onChange={ev => setTokenId(parseInt(ev.target.value))} value={tokenId}>
                {Array.from({ length: 10 }, (v, i) => {
                    return <option value={i + 1} key={i + 1}>Token {i + 1}</option>
                })}
            </select>
        </div>
        {
            Array.from({ length: 10 }, (v, i) => {
                return <div className={tokenId === i + 1 ? 'flex-container' : 'flex-container hide'} style={{ marginTop: 50 }} key={i}>
                    <HighRisk tokenId={i + 1}/>

                    <MidRisk tokenId={i + 1} />

                    <LowRisk tokenId={i + 1} />
                </div>
            })
        }

        <Logs />

    </div>
};

export default Home;