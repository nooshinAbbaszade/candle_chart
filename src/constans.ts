import {ApexOptions} from "apexcharts";
import dayjs from "dayjs";

export const options:ApexOptions= {
    chart: {
        height: 350,
        type: 'candlestick',
        id: 'candles',
        zoom: {
            enabled: true,
            type: 'xy',
        },
    },
    fill: {
        opacity: 1,
        type: ['solid', 'gradient'],
        gradient:{
            opacityFrom: [0.8, 0.3],
            opacityTo: [1, 0.4],
        }
    },
    stroke: {
        curve: 'straight',
        width: [1, 3],
        dashArray: [0, 8],
        lineCap: 'square'
    },
    dataLabels:{
        enabled: true,
        enabledOnSeries: [1],
        formatter: function (val:any) {
            return '(' + val + ')'
        },
        textAnchor: 'end',
        dropShadow: {
            enabled: true,
            left: 0,
            top: 0,
            opacity: 0.1
        },
    },
    title: {
        text: 'CandleStick Chart - Category X-axis',
        align: 'left'
    },
    annotations: {
        yaxis: [
            {
                y: 6606.00,
                strokeDashArray: 3,
                borderColor: 'gray',
                fillColor: 'gray',
                label: {
                    borderColor: 'gray',
                    style: {
                        fontSize: '12px',
                        color: '#fff',
                        background: 'black'
                    },
                    orientation: 'vertical',
                    offsetY: 5,
                    offsetX: 60,
                    text: '6606.0'
                }
            },
        ],
        xaxis: [
        ]
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
        shared: false,
        intersect: true,

    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            formatter: function(val:any) {
                return dayjs(val).format('MMM DD HH:mm')
            },
            style:{
                colors:'gray',
                fontSize:'12px',
                fontFamily:undefined,
                fontWeight:undefined,
                cssClass:undefined
            }
        }
    },
    yaxis: {
        opposite: true,
        tooltip: {
            enabled: true
        }
    },
    markers: {
        size: 8,
        strokeWidth: 0,
        fillOpacity: 0.6,
        shape: 'square',
        radius: 0,
        showNullDataPoints: false,
    },
};