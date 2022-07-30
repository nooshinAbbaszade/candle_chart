import {getChartData} from "./services/api";
import {chartDataType, seriesType} from "./types/chartDataType";
import React,{useEffect, useState} from "react";
import ApexChart from './components/apexChart';
import Notification from './components/notification';
import './asset/app.css';

function App() {
  const [chartData,setChartData]= useState<chartDataType[]>([]);
  const [isLoading,setIsLoading]= useState<boolean>(true);
  const [error,setError]= useState<boolean>(false);

  const series : seriesType[] = [{
    name: 'candle',
    type: 'candlestick',
    data: chartData
  }];

  useEffect( ()=>{
    getChartData().then(response => {
      const data = response.map(eachData =>{
        const y =eachData.slice(1,5).map(eachY => +(+eachY).toFixed(2));
        return ({
          x: new Date(eachData[0]),
          y: y
        })
      })
      setChartData(data);
    })
        .catch(() => setError(true))
        .finally(()=>(setIsLoading(false)))
  },[]);

  return (
      <>
        {isLoading ?
              <div className='box-loader'/>
              :
            error ?
                <Notification/>
                :
              <ApexChart series={series}/>
          }
      </>

  );
}

export default App;
