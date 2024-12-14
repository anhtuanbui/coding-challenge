// the code is using nodejs
// visit https://nodejs.org/en for details
// type `node main` in the terminal to run the code

import fs from "fs";

import {
  revenue,
  expenses,
  grossProfitMargin,
  netProfitMargin,
  workingCapitalRatio,
} from "./lib/functions.js";

import {
  formatCurrency,
  formatPercentage,
  greenText,
  yellowText,
} from "./lib/utils.js";

// reading the file
var jsonData;

try {
  const data = fs.readFileSync("src/data/data.json", "utf8");
  jsonData = JSON.parse(data).data;
} catch (error) {
  console.log("Data file is not found");
}

console.log(
  `${greenText("Revenue:")} ${yellowText(formatCurrency(revenue(jsonData)))}`
);
console.log(
  `${greenText("Expenses:")} ${yellowText(formatCurrency(expenses(jsonData)))}`
);
console.log(
  `${greenText("Gross Profit Margin:")} ${yellowText(
    formatPercentage(grossProfitMargin(jsonData))
  )}`
);
console.log(
  `${greenText("Net Profit Margin:")} ${yellowText(
    formatPercentage(netProfitMargin(jsonData))
  )}`
);
console.log(
  `${greenText("Working Capital Ratio:")} ${yellowText(
    formatPercentage(workingCapitalRatio(jsonData))
  )}`
);
