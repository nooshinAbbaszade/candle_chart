
export  interface chartDataType {
    x : Date,
    y : number[]
}

export interface seriesType {
    name: string,
    type: string,
    data: chartDataType[]
}