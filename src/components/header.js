import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useToken from '../hooks/useToken';

const Header = () => {
    const { tokenAddress, setTokenAddress } = useToken();
    const [data, setData] = useState({});
    const fetchInfo = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/fetch?token=${tokenAddress}`);
            if (res.data.info) {
                setData(res.data);
            }
            setTimeout(fetchInfo, 10000);

        } catch (err) {
            console.log(err)
        }
    }

    return <div className='flex-container'>
        <div>
            <h1>General Conf</h1>
            <p>Token Mint Address</p>
            <input type='text' value={tokenAddress} onChange={ev => { setTokenAddress(ev.target.value) }} />
            <button onClick={fetchInfo}>Get Info</button>
            {data.info && <div>
                <p>Liquidity: {data.liquidity.usd} USD</p>
                <p>Price: {data.priceUsd} USD</p>
            </div>}
            <p></p>
        </div>
    </div>
}

export default Header;