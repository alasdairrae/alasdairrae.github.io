d3.csv("postcodez.csv").then(function (data) {
  // console.log(data);

  var postcodez = data;

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {
    d3.select("tbody").html("")
    d3.selectAll("p").classed('noresults', true).html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#user-input");
    var inputValue = inputElement.property("value").toLowerCase().trim();

    // console.log(inputValue.length);
    // console.log(postcodez);
    if (inputValue.length < 6){
      d3.select("p").classed('noresults2', true).html("<center><strong>Erm, try again with a full postcode</strong>")
      inputValue = "Something to give no results"
    }
    var filteredData = postcodez.filter(postcodez => postcodez.postcode.toLowerCase().trim().includes(inputValue));
    matchExact(r, str)

function matchExact(r, str) {
   var match = str.match(r);
   return match && str === match[0];
}
    // console.log(filteredData.length)
    if (filteredData.length === 0 && inputValue !== "Something to give no results"){
      d3.select("p").classed('noresults', true).html("<center><strong>We can't find that postcode, sorry.</strong>")
    }
    output = _.sortBy(filteredData, 'postcode')

    for (var i = 0; i < filteredData.length; i++) {
     // console.log(output[i]['postcode'])
      // console.log(output[i]['decile'])
      // d3.select("tbody>tr>td").text(output[i]['postcode']);
      d3.select("tbody").insert("tr").html("<td>" +(output[i]['postcode'])+"</td>"+"<td>" +(output[i]['council'])+"</td>"
      + "</td>" +"<td>" +(output[i]['constituency'])+"</td>" +"<td>" +(output[i]['country'])+"</td>"  +"<td>" +(output[i]['decile'])+"</td>"+"<td>" +(output[i]['rank'])+"</td>") }
  }
  window.resizeTo(screen.width,screen.height)


});
