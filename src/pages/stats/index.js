import React, {useEffect, useState} from 'react';
import './stats.css'

const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json.result;
}

export default function Stats() {

    const [chartsFetched, setChartsFetched] = useState([]);

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
    }, [chartsFetched]);

    return (
        <div className={'view'}>

        </div>
    )
}