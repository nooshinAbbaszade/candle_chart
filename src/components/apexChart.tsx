import React from "react";
import ReactApexChart from "react-apexcharts";
import {options} from "../constans";

const ApexChart = ({
    series
    }:
    { series: ApexNonAxisChartSeries | ApexAxisChartSeries }) => {

    return (

        <ReactApexChart
            options={options}
            series={series}
            type="candlestick"
            height={'290%'}
            width={'100%'}
        />
    );
};
export default ApexChart;