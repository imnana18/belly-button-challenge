// Export Gauge Chart function to app
export async function gaugeChartUpdate(metadata,selectedID) {

  // create variable to hold samples data corresponding to selected ID
  const selectMetadata = metadata.filter(result => result.id == selectedID)[0]

  // retrieve data col of interest
  const washingFreq = selectMetadata.wfreq

  // data for gauge chart
  let data = [{
    mode: 'gauge',
    type: "indicator",
    value: washingFreq,

    title:{text: "Scrubs per Week "},
    visible: true,
    gauge: { 
      axis: { 
        range: [0, 9],
        dtick:[1],
      },
      steps: [
        { range: [0, 1], color: "#FFFFFF" },
        { range: [1, 2], color: "#EAECE4" },
        { range: [2, 3], color: "#D4D9C9" },
        { range: [3, 4], color: "#BFC6AE" },
        { range: [4, 5], color: "#A9B293" },
        { range: [5, 6], color: "#949F78" },
        { range: [6, 7], color: "#7E8C5D" },
        { range: [7, 8], color: "#697942" },
        { range: [8, 9], color: "#536527",},

      ],
      
      bar:{
        color:"#994147",
        opacity: 0.6
      },
  


    },
    
    textposition: "inside",
    info: "text",
    
  }];
  
  // layout for gauge chart
  let layout = {
    title:{
      text:"<b>Belly Button Washing Frequency<b>",
    },
    
  }

  // generate chart
  Plotly.newPlot("gauge", data,layout);
  
}