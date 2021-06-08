import React, {useEffect, useState} from 'react';
import StatsChart from "../../components/statsChart";
import './stats.css'

const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json.result;
}

export default function Stats() {

    const [chartsFetched, setChartsFetched] = useState([]);

    const data = [
        {
            "time": 1622437200,
            "value": 10121051
        },
        {
            "time": 1622523600,
            "value": 68591381
        },
        {
            "time": 1622610000,
            "value": 71371074
        },
        {
            "time": 1622696400,
            "value": 69510604
        },
        {
            "time": 1622782800,
            "value": 73308712
        },
        {
            "time": 1622869200,
            "value": 72146391
        },
        {
            "time": 1622955600,
            "value": 72073883
        },
        {
            "time": 1623042000,
            "value": 61844641
        }
    ];

    useEffect(() => {
        if (!chartsFetched) {
            const tps = fetchData('https://api-solanastats.com/stats-bff/tps');
            const pastDayTransactions = fetchData('https://api-solanastats.com/stats-bff/transactions/transaction?interval=H');
            const pastDayFees = fetchData('https://api-solanastats.com/stats-bff/fee');
            const numSerum = fetchData('https://api-solanastats.com/stats-bff/transactions/serum?interval=H');
            const fees = fetchData('https://api-solanastats.com/stats-bff/transactions/fee?interval=H');
            const numTransactions = fetchData('https://api-solanastats.com/stats-bff/transactions/transaction?interval=M');

            Promise.all([tps, pastDayTransactions, pastDayFees, numSerum, fees, numTransactions]).then((values) => {
                console.log(values);
                setChartsFetched(values);
            })
        }
    });

    return (
        <div className={'view'}>

        </div>
    )
}