import React, {useEffect, useRef, useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import { createChart } from 'lightweight-charts'
import Card from '@material-ui/core/Card';
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            borderRadius: 0,
            boxShadow: "none",
            margin: 24
        }
    })
);

export default function StatsChart(props) {
    const classes = useStyles();

    const ref = useRef();

    const [chartCreated, setChartCreated] = useState(false)
    const [width, setWidth] = useState(ref?.current?.container?.clientWidth)

    useEffect(() => {
        if (!chartCreated) {
            const chart = createChart(ref.current, {
                height: 450,
                autoScale: true,
                layout: {
                    backgroundColor: 'transparent',
                    textColor: '#D9D9D9',
                },
                rightPriceScale: {
                    scaleMargins: {
                        top: 0.32,
                        bottom: 0,
                    },
                    borderVisible: false,
                },
                timeScale: {
                    borderVisible: false,
                },
                grid: {
                    horzLines: {
                        color: 'rgba(197, 203, 206, 0.5)',
                        visible: false,
                    },
                    vertLines: {
                        color: 'rgba(197, 203, 206, 0.5)',
                        visible: false,
                    },
                },
                crosshair: {
                    horzLine: {
                        visible: false,
                        labelVisible: false,
                    },
                    vertLine: {
                        visible: true,
                        style: 0,
                        width: 2,
                        color: 'rgba(32, 38, 46, 0.1)',
                        labelVisible: false,
                    },
                }
            });

            const series = chart.addAreaSeries({
                topColor: '#4cb1c2',
                bottomColor: '#232323',
                lineColor: '#4cb1c2',
                lineWidth: 3,
            });
            series.setData(props.data);
            setWidth(ref?.current?.container?.clientWidth ?? width)
            setChartCreated(chart)
        }
    }, [chartCreated, props.data, width]);

    useEffect(() => {
        chartCreated && chartCreated.resize(ref.current.offsetWidth, 450)
        chartCreated && chartCreated.timeScale().scrollToPosition(0)
        chartCreated && chartCreated.timeScale().fitContent()
    }, [chartCreated, width])

    useEffect(() => {
        function handleResize() {
            setWidth(ref.current.offsetWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography align={'center'} variant={'h4'} gutterBottom>
                        {props.title}
                    </Typography>
                    <div ref={ref} id={'chart'}/>
                </CardContent>
            </Card>
        </div>
    )
}