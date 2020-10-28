import React from "react";
import {Line} from 'react-chartjs-2';
import "./Table.css";

let data = {
  labels: [1,2,3,4,5,6,7],
  datasets: [
    {
      label: 'X-Y chart',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class LineExample extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data : {
        labels: [1,2,3,4,5,6,7],
        datasets: [
          {
            label: 'X-Y chart',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    };
  }
  
  getGraphData=()=>{
    const url = "http://localhost:5000/api/graph";
    fetch(url,()=>{})
      .then((res)=> res.json())
      .then((res)=>{
          let tempData = res.data;
          console.log("DATA DARI TABEL GRAPH:",tempData);
          let xData = tempData.map((member)=>{return member.x;});
          let yData = tempData.map((member)=>{return member.y;});
          console.log(xData,yData);
          this.setState(prevState=>({
              ...prevState,
              // xData:xData,
              // yData:yData,
              data:{
                ...prevState.data,
                labels:xData,
                datasets:[{
                  ...prevState.data.datasets[0],
                  data:yData
                }]
              }
          }));
          data.labels= this.state.xData;
          data.datasets[0].data=this.state.yData;
          data.datasets[0].label = this.props.label[0];
          console.log("DATA DARI GRAPH2 X::",this.state.data.labels,this.state.data.datasets[0].data);
      })

      .catch(error=>{
          console.log(error);
      })
  }
  componentDidMount(event){
    this.getGraphData();
  }
  render() {
    // this.getGraphData();
    data.datasets[0].label = this.props.label[0];
    // this.getGraphData();
    return (
      <div className="lineChart">
        <h3 class="graphTitle">{this.props.title}</h3>
        <Line 
          data={this.state.data} height="100vh" width="200vw"
        />
      </div>
    );
  }
}



export default LineExample;