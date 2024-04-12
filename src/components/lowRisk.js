import React, { useState } from "react";
import axios from 'axios';
import CONFIG from '../config';

const LowRisk = () => {
    const [privKey, setPrivKey] = useState('');
    const [startAmount, setStartAmount] = useState(2);
    const [buyTrigger, setBuyTrigger] = useState(12);
    const [sellTrigger, setSellTrigger] = useState(6);
    const [stopLoss, setStopLoss] = useState(6);
    const [started, setStarted] = useState(false);

    const startTrading = async () => {
        await axios.get(`${CONFIG.BACKEND_URL}/start?risk=low&private_key=${privKey}&start_amount=${startAmount}&buy_trigger=${buyTrigger}&sell_trigger=${sellTrigger}&stop_loss=${stopLoss}`)
        setStarted(true);
    }

    const stopTrading = async () => {
        await axios.get(`${CONFIG.BACKEND_URL}/stop?risk=low`);
        setStarted(false);
    }

    return <div>
        <h1>Low Risk Conf</h1>
        <p>Amount(SOL)</p>
        <input type='number' value={startAmount} onChange={ev => {setStartAmount(ev.target.value)}} />
        <p>Buy Trigger percentage(%)</p>
        <input type='number' value={buyTrigger} onChange={ev => {setBuyTrigger(ev.target.value)}} />
        <p>Sell Trigger percentage(%)</p>
        <input type='number' value={sellTrigger} onChange={ev => {setSellTrigger(ev.target.value)}} />
        <p>Stop Loss percentage(%)</p>
        <input type='number' value={stopLoss} onChange={ev => {setStopLoss(ev.target.value)}} />
        <p>Wallet Private Key(base58 decoded)</p>
        <input type='text' value={privKey} onChange={ev => {setPrivKey(ev.target.value)}}/>
        {started ? <button className='stop-btn' onClick={() => stopTrading()}>Stop Trading</button> 
        : <button className='start-btn' onClick={() => startTrading()}>Start Trading</button>}
        
    </div>
}

export default LowRisk;