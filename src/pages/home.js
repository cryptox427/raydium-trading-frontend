import React from 'react';
import axios from 'axios';
import Header from '../components/header';
import HighRisk from '../components/highRisk';
import MidRisk from '../components/midRisk';
import LowRisk from '../components/lowRisk';
import Logs from '../components/logs';

const Home = () => {
    return <div style={{ marginLeft: 30, marginTop: 50 }}>
        <Header/>

        <div className='flex-container' style={{marginTop: 50}}>
            <HighRisk/>

            <MidRisk/>

            <LowRisk/>
        </div>

        <Logs/>

    </div>
};

export default Home;