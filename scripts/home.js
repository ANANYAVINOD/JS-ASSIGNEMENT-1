const tableData = new XMLHttpRequest();
tableData.open("GET", "http://127.0.0.1:8000/table-header.json");
tableData.send();
tableData.addEventListener("load", loadTableData);

function loadTableData() {
    const homeData = JSON.parse(tableData.response);
    const headingRow = document.getElementById('table-heading');
    for(let i=0; i<homeData['table-headings'].length; i++) {
        const columnHead = document.createElement('th');
        columnHead.innerText = homeData['table-headings'][i];
        headingRow.appendChild(columnHead);
    }
}


function loadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("Btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

