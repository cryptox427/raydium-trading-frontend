import React from 'react';

const Home = () => {
    return <div style={{ marginLeft: 30, marginTop: 100 }}>
        <div className='flex-container'>
            <div>
                <h1>General Conf</h1>
                <p>Token Mint Address</p>
                <input type='text' />
            </div>
        </div>

        <div className='flex-container' style={{marginTop: 50}}>
            <div>
                <h1>High Risk Conf</h1>
                <p>Amount(SOL)</p>
                <input type='number' defaultValue={2} />
                <p>Buy Trigger percentage(%)</p>
                <input type='number' defaultValue={12} />
                <p>Sell Trigger percentage(%)</p>
                <input type='number' defaultValue={6} />
                <p>Stop Loss percentage(%)</p>
                <input type='number' defaultValue={30} />
                <p>Wallet Private Key(base58 decoded)</p>
                <input type='text' />
                <button className='start-btn'>Start Trading</button>
            </div>

            <div>
                <h1>Med Risk Conf</h1>
                <p>Amount(SOL)</p>
                <input type='number' defaultValue={2} />
                <p>Buy Trigger percentage(%)</p>
                <input type='number' defaultValue={12} />
                <p>Sell Trigger percentage(%)</p>
                <input type='number' defaultValue={6} />
                <p>Stop Loss percentage(%)</p>
                <input type='number' defaultValue={6} />
                <p>Wallet Private Key(base58 decoded)</p>
                <input type='text' />
                <button className='start-btn'>Start Trading</button>
            </div>

            <div>
                <h1>Low Risk Conf</h1>
                <p>Amount(SOL)</p>
                <input type='number' defaultValue={2} />
                <p>Buy Trigger percentage(%)</p>
                <input type='number' defaultValue={12} />
                <p>Sell Trigger percentage(%)</p>
                <input type='number' defaultValue={6} />
                <p>Stop Loss percentage(%)</p>
                <input type='number' defaultValue={6} />
                <p>Wallet Private Key(base58 decoded)</p>
                <input type='text' />
                <button className='start-btn'>Start Trading</button>
            </div>
        </div>

    </div>
};

export default Home;