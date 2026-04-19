import Plot from "react-plotly.js";
import { evaluate ,abs} from "mathjs";

export default function TrapezoidalGraph({ a, b, equation, n }){
  const A = parseFloat(a);
  const B = parseFloat(b);
  const N = parseInt(n);

  if (isNaN(A) || isNaN(B) || isNaN(N) || !equation) return null;

  const f = (x) => {
    try {
      return evaluate(equation, {x});
    } catch {
      return NaN;
    }
  };

  const step = (B - A) / N;
  const xValues = [];
  const yValues = [];

  for (let i = A; i <= B ; i += step) {  
    xValues.push(i);
    yValues.push(f(i));
  }
  
  // จุดและเส้นตรง 
  const fxTrace = {
    x: xValues,
    y: yValues,
    type: "scatter",
    mode: "lines+markers",
    name: "Trapezoid points",
    line: { color: "black", width: 2,  },
    marker: { color: "black", size: 6 },
  };

  //เเส้นโค้ง f(x)
  const curveX = [];
  const curveY = [];
  const fxStep = (B - A) /100;

  for (let x = A; x <= B; x += fxStep) {
    curveX.push(x);
    curveY.push(f(x));
  }

  const PalaFx = {
    x: curveX,
    y: curveY,
    type: "scatter",
    mode: "lines",
    name: "f(x)",
    line: { color: "#ff2a00ff", width: 2 },
  };

  
  const areaData = [];
  for (let i = 0; i < xValues.length - 1; i++) {
    areaData.push({
      x: [xValues[i], xValues[i + 1], xValues[i + 1], xValues[i], xValues[i]],
      y: [0, 0, abs(yValues[i + 1]), abs(yValues[i]), 0],
      type: "scatter",
      mode: "none",
      fill: "toself",
      fillcolor: "#a4f60064",
      name: "Area " + (i + 1),
      showlegend: false,
    });
  }

  // เส้นตั้งแต่ละ xi
  const verticalLines = xValues.map((x) => ({
    type: "line",
    x0: x,
    x1: x,
    y0: 0,
    y1: abs(f(x)),
    line: { color: "#000000ff", width:1 },
  }));

  //ข้อมูลทั้งหมด
  const plotData = [PalaFx, fxTrace, ...areaData];

  return (
    <div
      style={{
        width: "100%",
        height: 500,
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Plot
        data={plotData}
        layout={{
          xaxis: { title: "x", zeroline: true },
          yaxis: { title: "f(x)" },
          showlegend: true,
          shapes:verticalLines,
        }}
      />
    </div>
  );
}