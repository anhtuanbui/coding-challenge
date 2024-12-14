import {
  revenue,
  expenses,
  grossProfitMargin,
  netProfitMargin,
  workingCapitalRatio,
} from "./lib/functions.js";

import { formatCurrency, formatPercentage } from "./lib/utils.js";

fetch("data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const jsonData = data.data;
    document.getElementById("revenue").innerHTML = formatCurrency(
      revenue(jsonData)
    );
    document.getElementById("expenses").innerHTML = formatCurrency(
      expenses(jsonData)
    );
    document.getElementById("grossProfitMargin").innerHTML = formatPercentage(
      grossProfitMargin(jsonData)
    );
    document.getElementById("netProfitMargin").innerHTML = formatPercentage(
      netProfitMargin(jsonData)
    );
    document.getElementById("workingCapitalRatio").innerHTML = formatPercentage(
      workingCapitalRatio(jsonData)
    );
  });
