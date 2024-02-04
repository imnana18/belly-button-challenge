// Import function for Gauge Chart
import {gaugeChartUpdate} from "./bonus.js"

// Call all interactive components of our webpage
const dropdown = d3.select("#selDataset");
const demographicInfoEle = d3.select("#sample-metadata")
const barChartEle = d3.select("#bar")
const bubbleChartEle = d3.select("#bubble")
const gaugeChartEle = d3.select("#gauge")

// Console log new ID selection from dropdown
function optionChanged(newID) {
  console.log("Selected ID: ", newID);
}

// Data retrieval
async function dataPull(){
  // define the URL of your JSON file
  const jsonUrl = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

  // promise Pending
  const dataPromise = d3.json(jsonUrl);

  // fetch JSON data and console log
  return dataPromise

}

// Populate dropdown menu
function dropDownInit(names){

  // append dropdown with test subject ID no ('name')
  names.forEach(id => {
    dropdown.append("option").text(id).property("value", id);
  });

  return dropdown
}

// Populate Demographic Info box
function demographicInfoUpdate(metadata,selectedID) {

  // create variable to hold metadata for selected ID
  const selectMetadata = metadata.filter(result => result.id == selectedID)[0]

  // put selected data into key, value pairs
  Object.entries(selectMetadata).forEach(([key,value]) =>{

    // append selected ID's metadata into Demographic Info box
    demographicInfoEle.append("h5").text(`${key}: ${value}`)
  })
}

// Create Horizontal Bar Chart
function barChartUpdate(samples,selectedID) {

  // create variable to hold samples data corresponding to selected ID
  const selectSamples = samples.filter(result => result.id == selectedID)[0]

  // retrieve data cols of interest
  const otuIDs = selectSamples.otu_ids
  const otuLabels = selectSamples.otu_labels
  const sampleValues = selectSamples.sample_values

  // data for our graph
  let data = [{
    type: 'bar',
    x: sampleValues.slice(0,10).reverse(), // top 10 in descending order
    y: otuIDs.slice(0,10).map(id => `OTU ${id}`).reverse(), // labeled OTU id's on y-axis
    text: otuLabels.slice(0,10).reverse().map(text => text.split(";").join("<br>")), // cleaned labels
    orientation: "h",
    hovertemplate: 
                  'Sample Values: %{x} <br><br>'+ 
                  'OTU labels: %{text} <extra></extra>', // formatted hovertext
    marker: {color: "6c757d"},
   
  }];

  // layout of graph
  let layout = {
    title:{
      text:"Top 10 OTUs",
    },
    
    xaxis:{
      title: {
        text:"Sample Values",
        standoff:15
      },
      automargin: true,
    },


    yaxis:{
      title: {
        text:"OTU IDs",
        standoff:10
      },
      titlefont: {
        size: 16,
        color: 'rgb(107, 107, 107)'
      },
      automargin: true,
      
    }
  
  }

  // generate graph
  Plotly.newPlot("bar", data, layout);
  
}

// Create Bubble Chart
function bubbleChartUpdate(samples,selectedID) {

  // create variable to hold samples data corresponding to selected ID
  const selectSamples = samples.filter(result => result.id == selectedID)[0]

  // retrieve data cols of interest
  const otuIDs = selectSamples.otu_ids
  const otuLabels = selectSamples.otu_labels
  const sampleValues = selectSamples.sample_values

  // data for our graph
  let data = [{
    mode: 'markers',
    x: otuIDs,
    y: sampleValues,
    marker: {
      size: sampleValues,
      color: otuIDs,
      colorscale: "Jet"
    },
    text: otuLabels.map(text => text.split(";").join("<br>")), // cleaned labels
    hovertemplate: 
    'OTU ID: %{x} <br><br>'+ 
    'Sample Values: %{y} <br><br>'+ 
    'OTU labels: %{text} <extra></extra>', // formatted hovertext
    
  }];

  // layout of graph
  let layout = {
    title:{
      text:"Bacteria Samples Size",
    },

    xaxis:{
      title: {
        text:"OTU IDs",
        standoff:15
      },
      automargin: true,
    },


    yaxis:{
      title: {
        text:"Sample Values",
        standoff:10
      },
      titlefont: {
        size: 16,
        color: 'rgb(107, 107, 107)'
      },
      automargin: true,
      
    }
  
  }

  // generate bubble chart
  Plotly.newPlot("bubble", data,layout);
  
}

// Dropdown Listener (selecting new ID, data refresh)
function dropDownListen(dropdown,names,samples,metadata){
  // event listener for selecting new ID in dropdown
  dropdown.on("change", () => {
    const selectedID = d3.select("#selDataset").property("value");

    // remove data from previous ID if exists
    demographicInfoEle.selectAll("h5").remove()
    barChartEle.selectAll("div").remove()
    bubbleChartEle.selectAll("div").remove()
    gaugeChartEle.selectAll("div").remove()

    // update with new ID data
    demographicInfoUpdate(metadata,selectedID)
    barChartUpdate(samples,selectedID)
    bubbleChartUpdate(samples,selectedID)
    gaugeChartUpdate(metadata,selectedID)
  });
}

// Init function
async function init(){

  // define JSON data cols
  let names, samples, metadata

  // create variable for JSON data after data is pulled
  let data = await dataPull()
  console.log(data)

  // create variable for each data col
  names = data.names
  samples = data.samples
  metadata = data.metadata
  
  // call dropdown function
  const dropdown = dropDownInit(names)

  // call dropdown listener function based on selected ID
  const selectedID = dropDownListen(dropdown,names,samples,metadata)
  
  // call default initial ID
  const initSelectID = names[0]

  // call data + graphs with initial ID as default
  demographicInfoUpdate(metadata,initSelectID)
  barChartUpdate(samples,initSelectID)
  bubbleChartUpdate(samples,initSelectID)
  gaugeChartUpdate(metadata,initSelectID)
};

init()