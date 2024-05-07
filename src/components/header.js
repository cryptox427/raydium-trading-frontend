import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useToken from '../hooks/useToken';

const Header = ({tokenId}) => {
    const { tokenAddress, setTokenAddress } = useToken();
    const [data, setData] = useState({});
    const fetchInfo = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/fetch?tokenId=${tokenId}`);
            if (res.data.info) {
                setData(res.data);
            }

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const fetchInterval = setInterval(fetchInfo, 10000);
        return fetchInterval;
    }, [tokenId])

    return <div className='flex-container'>
        <div>
            <h1>General Conf</h1>
            <p>Token Mint Address</p>
            <input type='text' value={tokenAddress} onChange={ev => { setTokenAddress(ev.target.value) }} />
            <button onClick={() => {}}>Get Info</button>
            {data.info && <div>
                {/* <p>Liquidity: {data.liquidity.usd} USD</p> */}
                <p>Price: {data.price} USD</p>
            </div>}
            <p></p>
        </div>
    </div>
}

export default Header;