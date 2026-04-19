import Plot from "react-plotly.js";

export default function GraphNewtonRaph({ myData }) {
  console.log("data in Graph:", myData);
  if (!myData || myData.length === 0) return null;

  return (
    <div style={{ width: "100%", height: 400, marginTop: "2rem" }}>
      <Plot
        data={[
          {
            x: myData.map((d) => d.iteration),   
            y: myData.map((d) => d.e),
                
            type: "scatter",
            mode: "lines+markers",
            marker: { color: '#A4F600', size: 6 },
            line: { color: 'black', width: 3  },
            name: "Error"
          },
        ]}
        layout={{
          title: "Graph",
          xaxis: { title: "iteration" },
          yaxis: { title: "error" },
        }}
        config={{
        scrollZoom: true,
        displaylogo: false,
        responsive: true,
      }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}