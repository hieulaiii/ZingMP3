/* eslint-disable indent */
import React from 'react';

import {
    CategoryScale,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import type { ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Container } from '@/components/common/Layout';
import { useChart } from '@/lib/hook/chart';

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement);

export const RealTimeChart = () => {
    const { chart } = useChart();
    const chartRef = React.useRef(null);
    const dataSet = (key?: string) => {
        if (!key) return [];
        return chart?.RTChart.chart.items[key].map(
            (item) => (item.counter / chart.RTChart.chart.maxScore) * 100
        );
    };
    const handlerLabels = (listLabel: string[]) => {
        const array: string[] = [];
        listLabel.map((element, index) => {
            index % 2 === 0 ? array.push(element + ':00') : array.push('');
        });
        return array;
    };
    const firstItem = chart && Object.keys(chart.RTChart.chart.items)[0];

    const secondItem = chart && Object.keys(chart.RTChart.chart.items)[1];
    const thirdItem = chart && Object.keys(chart.RTChart.chart.items)[2];
    const labels = chart?.RTChart.chart.times.map((time) => time.hour);
    const dataConfig: ChartData<'line'> = {
        labels: labels && handlerLabels(labels),
        datasets: [
            {
                label: firstItem,
                data: dataSet(firstItem) || [],
                borderColor: '#4a90e2',
                borderWidth: 2,
                tension: 0.4,
                pointBorderColor: '#4a90e2',
                pointRadius: 5,
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointBackgroundColor: '#fff',
            },
            {
                label: secondItem,
                data: dataSet(secondItem) || [],
                borderColor: '#27bd9c',
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',

                pointHoverBorderColor: '#27bd9c',
                pointHoverRadius: 5,
                pointHoverBorderWidth: 3,
                pointHoverBackgroundColor: '#fff',
            },
            {
                label: thirdItem,
                data: dataSet(thirdItem) || [],
                borderColor: '#e35050',
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBorderColor: '#e35050',
                pointHoverBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#fff',
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        responsive: true,
        animation: false,
        layout: {
            padding: 20,
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
                position: 'nearest',
                intersect: true,
                bodyAlign: 'center',
            },
        },

        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 12.5,
                        weight: 'bold',
                    },
                    color: '#8b8a8d',
                },
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 25,
                    display: false,
                    color: '#8b8a8d',
                },
                grid: {
                    lineWidth: 1,
                    color: '#ffffff33',
                    display: true,
                    drawTicks: false,
                },
                border: {
                    dash: [2, 7],
                },
            },
        },
    };
    return (
        <Container id="mychart" tw="h-[320px]">
            <Line ref={chartRef} data={dataConfig} options={options} height={100} />
        </Container>
    );
};
