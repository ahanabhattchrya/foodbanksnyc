d3.csv("food_banks.csv").then(function (data) {
  var foodbanks = data;
  var button = d3.select("button");
  var form = d3.select("form");
  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {
  d3.select("tbody").html("");

    d3.event.preventDefault();

    var inputValue = parseInt(d3.select("zipcode").property("value"));

    var filteredBanks = foodbanks.filter(foodbanks => foodbanks.zipcode.includes(inputValue));

    var output = filteredBanks;

    for (var i = 0; i < filteredBanks.length; i++) {
      d3.select("tbody").insert("tr").html(
        "<td>" + [i+1] + "</td>" +
        "<td>" + (output[i]['name']) + "</td>" +
        "<td>" + (output[i]['address']) + "</td>" +
        "<td>" + (output[i]['telephone']) + "</td>"
      )
    }
  };
});
