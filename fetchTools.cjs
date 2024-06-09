const fetch = require("node-fetch");

fetch("./src/data/ForensicTools.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch tools");
    }
    return response.json();
  })
  .then((data) => {
    // Process the JSON data
  })
  .catch((error) => {
    console.error("Error fetching tools:", error);
  });
