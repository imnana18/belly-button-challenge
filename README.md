# Module 14 Challenge: Belly Button Biodiversity 🦠

## Background

In this assignment, an interactive dashboard was designed to explore the Belly Button Biodiversity dataset, cataloging the microbes that colonize human navels. The dataset unveiled that a small number of microbial species (operational taxonomic units, OTUs) were present in over 70% of people, while the remaining ones were relatively rare.

## Setup

The required files for this project were downloaded from the provided [Module 14 Challenge file](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/Starter_Code.zip).

## Process

The following steps were completed to build the interactive dashboard:

1. **Read `samples.json`**: Used the `D3 library` to read in `samples.json` from the URL [https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json].

2. **Horizontal Bar Chart**: Created a `Pyplot` horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual. Used `sample_values` as the values for the bar chart, `otu_ids` as the labels, and `otu_labels` as the hovertext.

3. **Bubble Chart**: Created a `Pyplot` bubble chart displaying each sample. Used `otu_ids` for the x values, `sample_values` for the y values, `sample_values` for the marker size, `otu_ids` for the marker colors, and `otu_labels` for the text values.

4. **Sample Metadata**: Displayed the sample metadata, i.e., an individual's demographic information, showcasing each key-value pair from the metadata JSON object on the page.

5. **Dynamic Updates**: Updated all the plots when a new sample is selected, allowing for a dynamic and responsive user experience.

6. **Deployment**: Deployed the app to GitHub Pages.

## Advanced Challenge Assignment (Optional)

An optional advanced task was also tackled:

- **Gauge Chart**: Adapted the Gauge Chart from [https://plot.ly/javascript/gauge-charts/](https://plot.ly/javascript/gauge-charts/) to plot the weekly washing frequency of the individual. Modified the gauge chart to account for values ranging from 0 through 9 and updated it whenever a new sample was selected.

## Deployment

Deployed the app to a free static page hosting service, such as GitHub Pages. The deployment and GitHub repo links are provided below.
- [Deployed App](https://imnana18.github.io/belly-button-challenge/).
- [Github Repository](https://github.com/imnana18/belly-button-challenge). 

## Conclusion

The project was successfully completed, and the interactive dashboard provided a comprehensive exploration of the Belly Button Biodiversity dataset. The app was deployed on GitHub Pages for easy access. For more details, refer to the [GitHub repository](https://github.com/imnana18/belly-button-challenge).

Feel free to explore the deployed dashboard and navigate through the various visualizations to delve into the fascinating world of belly button biodiversity!

## References

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: [Belly Button Biodiversity Results and Data](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/).
