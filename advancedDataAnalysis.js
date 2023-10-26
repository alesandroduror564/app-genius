// filename: advancedDataAnalysis.js

// This code performs advanced data analysis on a given dataset

const dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sample dataset

// Function to calculate the mean of a dataset
function calculateMean(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  const mean = sum / data.length;
  return mean;
}

// Function to calculate the median of a dataset
function calculateMedian(data) {
  data.sort((a, b) => a - b);
  const middleIndex = Math.floor(data.length / 2);
  const median = data.length % 2 === 0 ? (data[middleIndex - 1] + data[middleIndex]) / 2 : data[middleIndex];
  return median;
}

// Function to calculate the mode of a dataset
function calculateMode(data) {
  const occurrences = {};
  let maxCount = 0;
  let modes = [];

  for (let i = 0; i < data.length; i++) {
    occurrences[data[i]] = (occurrences[data[i]] || 0) + 1;

    if (occurrences[data[i]] > maxCount) {
      maxCount = occurrences[data[i]];
    }
  }

  for (const key in occurrences) {
    if (occurrences.hasOwnProperty(key)) {
      if (occurrences[key] === maxCount) {
        modes.push(Number(key));
      }
    }
  }

  return modes;
}

// Function to calculate the standard deviation of a dataset
function calculateStandardDeviation(data) {
  const mean = calculateMean(data);
  const squaredDifferencesSum = data.reduce((accumulator, currentValue) => {
    return accumulator + Math.pow(currentValue - mean, 2);
  }, 0);
  const variance = squaredDifferencesSum / data.length;
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

// Function to calculate the correlation coefficient between two datasets
function calculateCorrelationCoefficient(data1, data2) {
  if (data1.length !== data2.length) {
    throw "Datasets must have the same length";
  }

  const meanData1 = calculateMean(data1);
  const meanData2 = calculateMean(data2);

  let covariance = 0;
  for (let i = 0; i < data1.length; i++) {
    covariance += (data1[i] - meanData1) * (data2[i] - meanData2);
  }

  const standardDeviationData1 = calculateStandardDeviation(data1);
  const standardDeviationData2 = calculateStandardDeviation(data2);

  const correlationCoefficient = covariance / (standardDeviationData1 * standardDeviationData2);
  return correlationCoefficient;
}

// Perform analysis on the dataset
const mean = calculateMean(dataset);
const median = calculateMedian(dataset);
const mode = calculateMode(dataset);
const standardDeviation = calculateStandardDeviation(dataset);
const correlationCoefficient = calculateCorrelationCoefficient(dataset, [2, 4, 6, 8, 10]);

// Print the analysis results
console.log("Mean:", mean);
console.log("Median:", median);
console.log("Mode:", mode);
console.log("Standard Deviation:", standardDeviation);
console.log("Correlation Coefficient:", correlationCoefficient);

// More sophisticated analysis and visualizations can be added to this code as needed