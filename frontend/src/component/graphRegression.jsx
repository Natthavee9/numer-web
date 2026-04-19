import Plot from "react-plotly.js";
import {pow} from "mathjs"

export default  function RegressionGraph({points,coefficients ,XValue,Fx}){
    console.log("Points in Graph:", points);
    console.log("Coefficients in Graph:", coefficients);
    if (!points || !points.length || !coefficients || !coefficients.length) return null;

    const xValue =[];
    const yValues = [];
    const minX = Math.min(...points.map((p) => p.x));
    const maxX = Math.max(...points.map((p) => p.x));
    const step = (maxX - minX) / 100;

    for(let x = minX ;x < maxX ;x+=step){
        xValue.push(x);
        let y = 0;
        for(let i=0 ;i<coefficients.length;i++){
            y+=coefficients[i]*pow(x,i);
        }
        yValues.push(y);
    }
    
    

    const pointsX = points.map(p => p.x);
    const pointsY = points.map(p => p.y);

    const Line_Curve = {
        x:xValue,
        y:yValues,
        type:"scatter",
        mode:"lines",
        name : "x value",
        line:{color:"red" ,width:2},
    };

    const Data_Point ={
        x:pointsX,
        y:pointsY,
        type:"scatter",
        mode:"markers",
        name : "points",
        marker:{color:"black" },
    };

    const Answer_Point = {
    x: [XValue],
    y: [Fx],
    type: "scatter",
    mode: "markers+text",
    name: "f(x)",
    text: [`(${xValue}, ${fx.toFixed(2)})`],
    textposition: "top center",
    marker: { color: "green", size: 10, symbol: "star" },
  };

    

    const Plot_data = [Line_Curve,Data_Point,Answer_Point];

    return (
      <div
        style={{
          width: "100%",
          height: "500px",
          justifyContent: "center",
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Plot
          data={Plot_data}
          layout={{
            xaxis: { title: "x", zeroline: true },
            yaxis: { title: "y" },
          }}
        />
      </div>
    );
}