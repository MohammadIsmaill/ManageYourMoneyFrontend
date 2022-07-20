import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend
} from "@progress/kendo-react-charts"

const Line = ({ series, categories }) => {
  return (
    <>
    <div className="chart-container" style={{width:"100%" , maxWidth:"1000px",overflowX:"auto"}}>
      
      
     
  

      
      <Chart pannable zoomable style={{ height: "60vh", width:"1000px" }}>
        <ChartTitle text='Money Graph' />
        <ChartLegend position='top' orientation='horizontal' />
        <ChartValueAxis>
          <ChartValueAxisItem
            title={{ text: "Amount (L.L.)" }}
            min={0}
            max={500000}
          />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
          {series.map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type='line'
              tooltip={{ visible: true }}
              data={item.data}
              name={item.name}
              color={item.color}
            />
          ))}
        </ChartSeries>
      </Chart>
      </div>
    </>
  )
}

export default Line
