function calculateCosts() {
    let extraCosts = 0;
    let carRentCosts = 200;
      let total = extraCosts + carRentCosts


    if (document.getElementById("electronicTollTag").checked) {
      extraCosts += 5.95;
    }
    if (document.getElementById("gps").checked) {
      extraCosts += 7.95;
    }
    if (document.getElementById("roadsideAssistance").checked) {
      extraCosts += 10.95;
    }
    if (document.getElementById("underAge").checked) {
      age += 20.99;
    }
    if (document.getElementById("overAge").checked) {
      age += 0;
    }
    document.getElementById("carRentalCost").innerText =
      "Car Rental: $" + carRentCosts.toFixed(2);

    document.getElementById("optionsCost").innerText =
      "Options: $" + extraCosts.toFixed(2);
     
      document.getElementById("totalDue").innerText = 
      "Total Due: $" + total.toFixed(2)
  }
