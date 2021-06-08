import React, {useEffect, useState} from 'react';
import StatsChart from './../../components/statsChart';
import './stats.css'

const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

export default function Stats() {

    const [data, setData] = useState(false);

    useEffect(() => {
        if (!data) {
            const tps = fetchData('https://api-solanastats.com/stats-bff/tps');
            const pastDayTransactions = fetchData('https://api-solanastats.com/stats-bff/transactions/transaction?interval=H');
            const pastDayFees = fetchData('https://api-solanastats.com/stats-bff/fee');
            const numSerum = fetchData('https://api-solanastats.com/stats-bff/transactions/serum?interval=H');
            const fees = fetchData('https://api-solanastats.com/stats-bff/transactions/fee?interval=H');
            const numTransactions = fetchData('https://api-solanastats.com/stats-bff/transactions/transaction?interval=M');

            Promise.all([tps, pastDayTransactions, pastDayFees, numSerum, fees, numTransactions]).then((results) => {
                console.log(results);
                setData(results);
                console.log(data);
            })
        }
    }, [data]);

    return (
        <div className={'view'}>
            {data[1] ? <StatsChart title={'24hr Transactions'} data={data[1]}/> : <div/> }
            {data[3] ? <StatsChart title={'24hr Serum Transactions'} data={data[3]}/> : <div/> }
            {data[4] ? <StatsChart title={'24hr Fees'} data={data[4]}/> : <div/> }
            {data[5] ? <StatsChart title={'Recent Transactions'} data={data[5]}/> : <div/> }
        </div>
    )
}