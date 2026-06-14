// ─── Podaci za publisher filter (line chart) ──────────────────────────────────
const PUBLISHER_DATA = {"Activision": [{"release_year": 1980, "total_sales": 1.28}, {"release_year": 1981, "total_sales": 2.37}, {"release_year": 1982, "total_sales": 4.11}, {"release_year": 1983, "total_sales": 3.73}, {"release_year": 1985, "total_sales": 0.45}, {"release_year": 1987, "total_sales": 0.65}, {"release_year": 1988, "total_sales": 0.98}, {"release_year": 1989, "total_sales": 0.47}, {"release_year": 1997, "total_sales": 0.99}, {"release_year": 1998, "total_sales": 6.52}, {"release_year": 1999, "total_sales": 9.66}, {"release_year": 2000, "total_sales": 12.99}, {"release_year": 2001, "total_sales": 17.32}, {"release_year": 2002, "total_sales": 21.1}, {"release_year": 2003, "total_sales": 17.26}, {"release_year": 2004, "total_sales": 27.65}, {"release_year": 2005, "total_sales": 25.11}, {"release_year": 2006, "total_sales": 16.39}, {"release_year": 2007, "total_sales": 34.5}, {"release_year": 2008, "total_sales": 55.49}, {"release_year": 2009, "total_sales": 64.18}, {"release_year": 2010, "total_sales": 51.42}, {"release_year": 2011, "total_sales": 41.63}, {"release_year": 2012, "total_sales": 42.39}, {"release_year": 2013, "total_sales": 37.28}, {"release_year": 2014, "total_sales": 39.74}, {"release_year": 2015, "total_sales": 36.35}, {"release_year": 2016, "total_sales": 15.67}, {"release_year": 2017, "total_sales": 31.53}, {"release_year": 2018, "total_sales": 19.11}], "Electronic Arts": [{"release_year": 1995, "total_sales": 1.84}, {"release_year": 1996, "total_sales": 3.22}, {"release_year": 1997, "total_sales": 7.38}, {"release_year": 1998, "total_sales": 6.25}, {"release_year": 1999, "total_sales": 18.48}, {"release_year": 2000, "total_sales": 11.58}, {"release_year": 2001, "total_sales": 13.43}, {"release_year": 2002, "total_sales": 42.99}, {"release_year": 2003, "total_sales": 39.08}, {"release_year": 2004, "total_sales": 30.25}, {"release_year": 2005, "total_sales": 26.54}, {"release_year": 2006, "total_sales": 22.73}, {"release_year": 2007, "total_sales": 46.18}, {"release_year": 2008, "total_sales": 55.05}, {"release_year": 2009, "total_sales": 39.43}, {"release_year": 2010, "total_sales": 43.17}, {"release_year": 2011, "total_sales": 39.98}, {"release_year": 2012, "total_sales": 18.78}, {"release_year": 2013, "total_sales": 25.44}, {"release_year": 2014, "total_sales": 19.18}, {"release_year": 2015, "total_sales": 20.88}, {"release_year": 2016, "total_sales": 35.34}, {"release_year": 2017, "total_sales": 13.75}, {"release_year": 2018, "total_sales": 16.74}], "EA Sports": [{"release_year": 1996, "total_sales": 3.56}, {"release_year": 1997, "total_sales": 9.76}, {"release_year": 1998, "total_sales": 13.24}, {"release_year": 1999, "total_sales": 14.55}, {"release_year": 2000, "total_sales": 11.43}, {"release_year": 2001, "total_sales": 16.58}, {"release_year": 2002, "total_sales": 22.06}, {"release_year": 2003, "total_sales": 20.45}, {"release_year": 2004, "total_sales": 26.8}, {"release_year": 2005, "total_sales": 28.22}, {"release_year": 2006, "total_sales": 23.11}, {"release_year": 2007, "total_sales": 18.5}, {"release_year": 2008, "total_sales": 14.57}, {"release_year": 2009, "total_sales": 30.71}, {"release_year": 2010, "total_sales": 35.3}, {"release_year": 2011, "total_sales": 25.67}, {"release_year": 2012, "total_sales": 28.51}, {"release_year": 2013, "total_sales": 24.83}, {"release_year": 2014, "total_sales": 28.12}, {"release_year": 2015, "total_sales": 24.37}, {"release_year": 2016, "total_sales": 9.23}, {"release_year": 2017, "total_sales": 22.07}, {"release_year": 2018, "total_sales": 5.56}], "Ubisoft": [{"release_year": 1995, "total_sales": 3.03}, {"release_year": 1999, "total_sales": 0.64}, {"release_year": 2001, "total_sales": 0.96}, {"release_year": 2002, "total_sales": 9.21}, {"release_year": 2003, "total_sales": 10.5}, {"release_year": 2004, "total_sales": 11.72}, {"release_year": 2005, "total_sales": 11.01}, {"release_year": 2006, "total_sales": 9.43}, {"release_year": 2007, "total_sales": 37.27}, {"release_year": 2008, "total_sales": 46.05}, {"release_year": 2009, "total_sales": 30.42}, {"release_year": 2010, "total_sales": 23.89}, {"release_year": 2011, "total_sales": 28.92}, {"release_year": 2012, "total_sales": 34.87}, {"release_year": 2013, "total_sales": 26.09}, {"release_year": 2014, "total_sales": 39.86}, {"release_year": 2015, "total_sales": 14.95}, {"release_year": 2016, "total_sales": 22.2}, {"release_year": 2017, "total_sales": 17.77}, {"release_year": 2018, "total_sales": 12.78}], "Sony Computer Entertainment": [{"release_year": 1995, "total_sales": 4.59}, {"release_year": 1996, "total_sales": 10.36}, {"release_year": 1997, "total_sales": 10.27}, {"release_year": 1998, "total_sales": 14.36}, {"release_year": 1999, "total_sales": 15.56}, {"release_year": 2000, "total_sales": 17.93}, {"release_year": 2001, "total_sales": 15.05}, {"release_year": 2002, "total_sales": 13.24}, {"release_year": 2003, "total_sales": 9.85}, {"release_year": 2004, "total_sales": 16.36}, {"release_year": 2005, "total_sales": 18.04}, {"release_year": 2006, "total_sales": 13.19}, {"release_year": 2007, "total_sales": 21.26}, {"release_year": 2008, "total_sales": 16.36}, {"release_year": 2009, "total_sales": 24.18}, {"release_year": 2010, "total_sales": 14.3}, {"release_year": 2011, "total_sales": 11.86}, {"release_year": 2012, "total_sales": 12.31}, {"release_year": 2013, "total_sales": 1.14}, {"release_year": 2014, "total_sales": 8.36}, {"release_year": 2015, "total_sales": 1.62}], "THQ": [{"release_year": 1997, "total_sales": 1.69}, {"release_year": 1998, "total_sales": 7.45}, {"release_year": 1999, "total_sales": 2.4}, {"release_year": 2000, "total_sales": 13.89}, {"release_year": 2001, "total_sales": 17.31}, {"release_year": 2002, "total_sales": 15.9}, {"release_year": 2003, "total_sales": 23.29}, {"release_year": 2004, "total_sales": 27.11}, {"release_year": 2005, "total_sales": 20.85}, {"release_year": 2006, "total_sales": 16.99}, {"release_year": 2007, "total_sales": 28.44}, {"release_year": 2008, "total_sales": 22.15}, {"release_year": 2009, "total_sales": 25.31}, {"release_year": 2010, "total_sales": 15.49}, {"release_year": 2011, "total_sales": 18.28}, {"release_year": 2012, "total_sales": 6.31}], "Rockstar Games": [{"release_year": 1999, "total_sales": 3.81}, {"release_year": 2000, "total_sales": 4.19}, {"release_year": 2001, "total_sales": 18.16}, {"release_year": 2002, "total_sales": 17.91}, {"release_year": 2003, "total_sales": 9.75}, {"release_year": 2004, "total_sales": 2.0}, {"release_year": 2005, "total_sales": 19.6}, {"release_year": 2006, "total_sales": 10.53}, {"release_year": 2007, "total_sales": 3.33}, {"release_year": 2008, "total_sales": 30.01}, {"release_year": 2009, "total_sales": 5.01}, {"release_year": 2010, "total_sales": 10.88}, {"release_year": 2011, "total_sales": 12.51}, {"release_year": 2012, "total_sales": 3.49}, {"release_year": 2013, "total_sales": 36.18}, {"release_year": 2014, "total_sales": 28.11}, {"release_year": 2017, "total_sales": 1.05}, {"release_year": 2018, "total_sales": 19.71}], "Sega": [{"release_year": 1983, "total_sales": 0.4}, {"release_year": 1990, "total_sales": 2.6}, {"release_year": 1994, "total_sales": 3.58}, {"release_year": 1995, "total_sales": 3.77}, {"release_year": 1996, "total_sales": 4.17}, {"release_year": 1997, "total_sales": 1.94}, {"release_year": 1998, "total_sales": 0.53}, {"release_year": 1999, "total_sales": 4.76}, {"release_year": 2000, "total_sales": 3.74}, {"release_year": 2001, "total_sales": 2.68}, {"release_year": 2002, "total_sales": 10.92}, {"release_year": 2003, "total_sales": 4.49}, {"release_year": 2004, "total_sales": 11.48}, {"release_year": 2005, "total_sales": 2.37}, {"release_year": 2006, "total_sales": 3.81}, {"release_year": 2007, "total_sales": 9.73}, {"release_year": 2008, "total_sales": 28.29}, {"release_year": 2009, "total_sales": 15.3}, {"release_year": 2010, "total_sales": 19.4}, {"release_year": 2011, "total_sales": 6.86}, {"release_year": 2012, "total_sales": 6.35}, {"release_year": 2013, "total_sales": 2.27}, {"release_year": 2014, "total_sales": 1.94}, {"release_year": 2015, "total_sales": 0.38}, {"release_year": 2016, "total_sales": 0.33}, {"release_year": 2017, "total_sales": 2.87}, {"release_year": 2018, "total_sales": 1.08}], "Konami": [{"release_year": 1986, "total_sales": 3.76}, {"release_year": 1987, "total_sales": 1.23}, {"release_year": 1988, "total_sales": 0.93}, {"release_year": 1990, "total_sales": 0.85}, {"release_year": 1991, "total_sales": 0.63}, {"release_year": 1992, "total_sales": 1.87}, {"release_year": 1994, "total_sales": 0.77}, {"release_year": 1995, "total_sales": 0.58}, {"release_year": 1996, "total_sales": 2.94}, {"release_year": 1997, "total_sales": 2.32}, {"release_year": 1998, "total_sales": 3.96}, {"release_year": 1999, "total_sales": 7.45}, {"release_year": 2000, "total_sales": 3.89}, {"release_year": 2001, "total_sales": 7.75}, {"release_year": 2002, "total_sales": 4.57}, {"release_year": 2003, "total_sales": 14.17}, {"release_year": 2004, "total_sales": 7.5}, {"release_year": 2005, "total_sales": 9.84}, {"release_year": 2006, "total_sales": 9.9}, {"release_year": 2007, "total_sales": 11.66}, {"release_year": 2008, "total_sales": 21.03}, {"release_year": 2009, "total_sales": 11.73}, {"release_year": 2010, "total_sales": 11.73}, {"release_year": 2011, "total_sales": 4.55}, {"release_year": 2012, "total_sales": 0.47}, {"release_year": 2018, "total_sales": 0.5}], "Nintendo": [{"release_year": 1985, "total_sales": 1.33}, {"release_year": 1986, "total_sales": 1.49}, {"release_year": 1992, "total_sales": 1.8}, {"release_year": 1993, "total_sales": 1.47}, {"release_year": 1994, "total_sales": 0.87}, {"release_year": 1995, "total_sales": 2.43}, {"release_year": 1996, "total_sales": 1.17}, {"release_year": 1997, "total_sales": 2.32}, {"release_year": 1998, "total_sales": 2.49}, {"release_year": 1999, "total_sales": 0.38}, {"release_year": 2000, "total_sales": 2.84}, {"release_year": 2001, "total_sales": 6.39}, {"release_year": 2002, "total_sales": 2.03}, {"release_year": 2003, "total_sales": 4.8}, {"release_year": 2004, "total_sales": 11.39}, {"release_year": 2005, "total_sales": 11.91}, {"release_year": 2006, "total_sales": 5.31}, {"release_year": 2007, "total_sales": 5.06}, {"release_year": 2008, "total_sales": 2.78}, {"release_year": 2009, "total_sales": 4.37}, {"release_year": 2010, "total_sales": 6.65}, {"release_year": 2011, "total_sales": 3.91}, {"release_year": 2012, "total_sales": 4.89}, {"release_year": 2013, "total_sales": 2.85}, {"release_year": 2014, "total_sales": 4.19}, {"release_year": 2015, "total_sales": 3.43}, {"release_year": 2016, "total_sales": 5.17}, {"release_year": 2017, "total_sales": 5.69}, {"release_year": 2018, "total_sales": 2.87}, {"release_year": 2019, "total_sales": 0.81}]};

// Top 15 developera za bubble chart filter
const TOP_DEVELOPERS = ["EA Canada","EA Tiburon","Traveller's Tales","Ubisoft Montreal","Konami","Capcom","Visual Concepts","Namco","Vicarious Visions","EA Redwood Shores","Treyarch","Ubisoft","Neversoft Entertainment","Avalanche Software","Maxis"];

const tooltip = d3.select("#tooltip");

Promise.all([
  d3.json("data/sales_by_year.json"),
  d3.json("data/sales_by_genre.json"),
  d3.json("data/regional_sales.json"),
  d3.json("data/games_top5000.json"),
  d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
]).then(([yearData, genreData, regionData, gamesData, worldData]) => {

  yearData = yearData.filter(d =>
    +d.release_year <= 2020 &&
    +d.total_sales > 0
  );

  gamesData = gamesData.filter(g =>
    +g.release_year <= 2020 &&
    +g.total_sales > 0
  );

  drawLineChart(yearData);
  drawGenreChart(genreData.slice(0, 12));
  drawRegionChart(regionData);
  drawBubbleChart(gamesData.slice(0, 80), gamesData);
  drawWorldMap(regionData, worldData);
});

// ─── LINE CHART s filterom po publisheru ─────────────────────────────────────
function drawLineChart(allData) {
  const width = 1050, height = 420;
  const margin = { top: 30, right: 40, bottom: 60, left: 80 };
  const publishers = Object.keys(PUBLISHER_DATA);
  const pubColors = d3.scaleOrdinal(d3.schemeTableau10).domain(publishers);

  // Filter UI — ubacuje se ISPRED svg-a
  const wrapper = d3.select("#lineChart");
  const bar = wrapper.append("div").attr("class", "filter-bar");
  bar.append("span").attr("class", "filter-label").text("Publisher:");
  const btnWrap = bar.append("div").attr("class", "filter-buttons");
  btnWrap.append("button").attr("class","filter-btn lc-btn active").attr("data-pub","all").text("All");
  publishers.forEach(p => {
    btnWrap.append("button")
      .attr("class","filter-btn lc-btn")
      .attr("data-pub", p)
      .text(p);
  });

  const svg = wrapper.append("svg").attr("viewBox", `0 0 ${width} ${height}`);
  const gridG  = svg.append("g").attr("class","grid").attr("transform",`translate(${margin.left},0)`);
  const xAxisG = svg.append("g").attr("class","axis").attr("transform",`translate(0,${height-margin.bottom})`);
  const yAxisG = svg.append("g").attr("class","axis").attr("transform",`translate(${margin.left},0)`);
  svg.append("text").attr("x",width/2).attr("y",height-15).attr("text-anchor","middle").attr("fill","#cfcfe6").text("Release Year");
  svg.append("text").attr("x",-height/2).attr("y",25).attr("transform","rotate(-90)").attr("text-anchor","middle").attr("fill","#cfcfe6").text("Sales in millions");
  const linePath = svg.append("path").attr("class","line");
  const dotsG   = svg.append("g");
  const legendG  = svg.append("g");

  function update(pub) {
    const data  = pub === "all" ? allData : PUBLISHER_DATA[pub];
    const lcolor = pub === "all" ? "#4fc3f7" : pubColors(pub);
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.release_year)).range([margin.left, width-margin.right]);
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.total_sales)]).nice().range([height-margin.bottom, margin.top]);
    const lineGen = d3.line().x(d => x(d.release_year)).y(d => y(d.total_sales)).curve(d3.curveMonotoneX);

    gridG.transition().duration(500).call(d3.axisLeft(y).tickSize(-(width-margin.left-margin.right)).tickFormat(""));
    xAxisG.transition().duration(500).call(d3.axisBottom(x).tickFormat(d3.format("d")));
    yAxisG.transition().duration(500).call(d3.axisLeft(y));
    linePath.datum(data).attr("stroke", lcolor).transition().duration(600).attr("d", lineGen);

    const dots = dotsG.selectAll(".dot").data(data, d => d.release_year);
    dots.enter().append("circle").attr("class","dot").attr("r",0)
      .merge(dots)
      .on("mousemove", (event, d) => showTooltip(event, `<b>${d.release_year}</b><br>${pub==="all"?"Total":pub} sales: ${d.total_sales.toFixed(2)} million`))
      .on("mouseleave", hideTooltip)
      .transition().duration(600)
      .attr("cx", d => x(d.release_year)).attr("cy", d => y(d.total_sales))
      .attr("r", 4).attr("fill", pub === "all" ? "#ffd54f" : lcolor);
    dots.exit().transition().duration(300).attr("r",0).remove();

    legendG.selectAll("*").remove();
    if (pub !== "all") {
      legendG.append("rect").attr("x",margin.left+10).attr("y",margin.top+4).attr("width",18).attr("height",4).attr("rx",2).attr("fill",lcolor);
      legendG.append("text").attr("x",margin.left+34).attr("y",margin.top+10).attr("fill","#cfcfe6").attr("font-size",13).text(pub);
    }
  }

  d3.selectAll(".lc-btn").on("click", function() {
    d3.selectAll(".lc-btn").classed("active",false).style("background","transparent").style("color","#cfcfe6").style("border-color","#444460");
    d3.select(this).classed("active",true);
    const pub = d3.select(this).attr("data-pub");
    if (pub !== "all") {
      const c = pubColors(pub);
      d3.select(this).style("background",c).style("color","#101018").style("border-color",c);
    }
    update(pub);
  });

  update("all");
}

// ─── GENRE CHART ─────────────────────────────────────────────────────────────
function drawGenreChart(data) {
  const width = 1050;
  const height = 460;
  const margin = { top: 30, right: 40, bottom: 90, left: 90 };

  const svg = d3.select("#genreChart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  const x = d3.scaleBand()
    .domain(data.map(d => d.genre))
    .range([margin.left, width - margin.right])
    .padding(0.25);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.total_sales)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  svg.selectAll(".bar")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.genre))
    .attr("y", d => y(d.total_sales))
    .attr("width", x.bandwidth())
    .attr("height", d => height - margin.bottom - y(d.total_sales))
    .attr("rx", 8)
    .on("mousemove", (event, d) => {
      showTooltip(event, `
        <b>${d.genre}</b><br>
        Sales: ${d.total_sales.toFixed(2)} million
      `);
    })
    .on("mouseleave", hideTooltip);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-35)")
    .style("text-anchor", "end");

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 15)
    .attr("text-anchor", "middle")
    .attr("fill", "#cfcfe6")
    .text("Genre");

  svg.append("text")
    .attr("x", -height / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("fill", "#cfcfe6")
    .text("Sales in millions");
}

// ─── REGION CHART ─────────────────────────────────────────────────────────────
function drawRegionChart(data) {
  const width = 1050;
  const height = 360;
  const margin = { top: 30, right: 40, bottom: 60, left: 90 };

  const svg = d3.select("#regionChart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  const x = d3.scaleBand()
    .domain(data.map(d => d.region))
    .range([margin.left, width - margin.right])
    .padding(0.3);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.sales)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  svg.selectAll(".region-bar")
    .data(data)
    .join("rect")
    .attr("class", "region-bar")
    .attr("x", d => x(d.region))
    .attr("y", d => y(d.sales))
    .attr("width", x.bandwidth())
    .attr("height", d => height - margin.bottom - y(d.sales))
    .attr("rx", 10)
    .on("mousemove", (event, d) => {
      showTooltip(event, `
        <b>${d.region}</b><br>
        Sales: ${d.sales.toFixed(2)} million
      `);
    })
    .on("mouseleave", hideTooltip);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 15)
    .attr("text-anchor", "middle")
    .attr("fill", "#cfcfe6")
    .text("Region");

  svg.append("text")
    .attr("x", -height / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("fill", "#cfcfe6")
    .text("Sales in millions");
}

// ─── BUBBLE CHART ───────────────────
function drawBubbleChart(initialData, allGames) {
  const width = 1050;
  const height = 760;
  const padding = 65;

  const bubbleColors = [
    "#38bdf8",
    "#a855f7",
    "#ec4899",
    "#22c55e",
    "#facc15",
    "#fb7185",
    "#2dd4bf",
    "#818cf8",
    "#f97316",
    "#06b6d4"
  ];

  const color = d3.scaleOrdinal(bubbleColors);

  const radius = d3.scaleSqrt()
    .domain([0, d3.max(allGames, d => d.total_sales)])
    .range([8, 50]);

  const container = d3.select("#bubbleChart");

  const genres = [...new Set(allGames.map(g => g.genre))]
    .filter(g => g && g !== "Unknown")
    .sort();

  const years = allGames
    .map(g => +g.release_year)
    .filter(y => !isNaN(y));

  const minAvailableYear = d3.min(years);
  const maxAvailableYear = d3.max(years);

  let currentGenre = "all";
  let currentDev = "all";
  let currentScore = 1.0;
  let currentMinYear = minAvailableYear;
  let currentMaxYear = maxAvailableYear;
  let simulation;

  // Genre filter
  const genreBar = container.append("div")
    .attr("class", "filter-bar");

  genreBar.append("span")
    .attr("class", "filter-label")
    .text("Genre:");

  const genreBtns = genreBar.append("div")
    .attr("class", "filter-buttons");

  genreBtns.append("button")
    .attr("class", "filter-btn bc-genre-btn active")
    .attr("data-genre", "all")
    .text("All");

  genres.forEach(genre => {
    genreBtns.append("button")
      .attr("class", "filter-btn bc-genre-btn")
      .attr("data-genre", genre)
      .text(genre);
  });

  // Developer filter
  const devBar = container.append("div")
    .attr("class", "filter-bar");

  devBar.append("span")
    .attr("class", "filter-label")
    .text("Developer:");

  const devBtns = devBar.append("div")
    .attr("class", "filter-buttons");

  devBtns.append("button")
    .attr("class", "filter-btn bc-dev-btn active")
    .attr("data-dev", "all")
    .text("All");

  TOP_DEVELOPERS.forEach(dev => {
    devBtns.append("button")
      .attr("class", "filter-btn bc-dev-btn")
      .attr("data-dev", dev)
      .text(dev);
  });

  // Year filter
  const yearBar = container.append("div")
    .attr("class", "filter-bar");

  yearBar.append("span")
    .attr("class", "filter-label")
    .text("Release Years:");

  const yearWrap = yearBar.append("div")
    .attr("class", "slider-wrap");

  const minYearInput = yearWrap.append("input")
    .attr("type", "number")
    .attr("min", minAvailableYear)
    .attr("max", maxAvailableYear)
    .attr("value", minAvailableYear)
    .attr("class", "year-input");

  yearWrap.append("span")
    .style("color", "#cbd5e1")
    .text("to");

  const maxYearInput = yearWrap.append("input")
    .attr("type", "number")
    .attr("min", minAvailableYear)
    .attr("max", maxAvailableYear)
    .attr("value", maxAvailableYear)
    .attr("class", "year-input");
    
  // Critic score slider
  const scoreBar = container.append("div")
    .attr("class", "filter-bar")
    .style("margin-bottom", "16px");

  scoreBar.append("span")
    .attr("class", "filter-label")
    .text("Min. Critic Score:");

  const sliderWrap = scoreBar.append("div")
    .attr("class", "slider-wrap");

  const slider = sliderWrap.append("input")
    .attr("type", "range")
    .attr("min", "1")
    .attr("max", "10")
    .attr("step", "0.5")
    .attr("value", "1")
    .attr("class", "score-slider");

  const sliderVal = sliderWrap.append("span")
    .attr("class", "slider-value")
    .text("1.0");

  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  function getFilteredData() {
    return allGames
      .filter(g =>
        (currentGenre === "all" || g.genre === currentGenre) &&
        (currentDev === "all" || g.developer === currentDev) &&
        (+g.release_year >= currentMinYear && +g.release_year <= currentMaxYear) &&
        (g.critic_score == null || g.critic_score >= currentScore)
      )
      .sort((a, b) => b.total_sales - a.total_sales)
      .slice(0, 80);
  }

  function update() {
    const data = getFilteredData();

    svg.selectAll(".no-data-text").remove();

    if (data.length === 0) {
      if (simulation) simulation.stop();

      svg.selectAll(".bubble")
        .transition()
        .duration(250)
        .attr("r", 0)
        .remove();

      svg.append("text")
        .attr("class", "no-data-text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "#f472b6")
        .attr("font-size", 24)
        .attr("font-weight", "bold")
        .text("No games found for the selected filters");

      return;
    }

    if (simulation) simulation.stop();

    const bubbles = svg.selectAll(".bubble")
      .data(data, d => d.title + d.console);

    const bubblesEnter = bubbles.enter()
      .append("circle")
      .attr("class", "bubble")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", 0)
      .attr("fill", d => color(d.genre))
      .on("mousemove", (event, d) => {
        showTooltip(event, `
          <b>${d.title}</b><br>
          Platform: ${d.console}<br>
          Genre: ${d.genre}<br>
          Publisher: ${d.publisher}<br>
          Developer: ${d.developer}<br>
          Year: ${d.release_year}<br>
          Critic score: ${d.critic_score}<br>
          Sales: ${d.total_sales.toFixed(2)} million
        `);
      })
      .on("mouseleave", hideTooltip);

    bubblesEnter
      .merge(bubbles)
      .transition()
      .duration(400)
      .attr("r", d => radius(d.total_sales))
      .attr("fill", d => color(d.genre));

    bubbles.exit()
      .transition()
      .duration(300)
      .attr("r", 0)
      .remove();

    simulation = d3.forceSimulation(data)
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("charge", d3.forceManyBody().strength(3))
      .force("collision", d3.forceCollide(d => radius(d.total_sales) + 4))
      .force("x", d3.forceX(width / 2).strength(0.04))
      .force("y", d3.forceY(height / 2).strength(0.04))
      .on("tick", () => {
        svg.selectAll(".bubble")
          .attr("cx", d => {
            const r = radius(d.total_sales);
            d.x = Math.max(padding + r, Math.min(width - padding - r, d.x));
            return d.x;
          })
          .attr("cy", d => {
            const r = radius(d.total_sales);
            d.y = Math.max(padding + r, Math.min(height - padding - r, d.y));
            return d.y;
          });
      });
  }

  d3.selectAll(".bc-genre-btn").on("click", function () {
    d3.selectAll(".bc-genre-btn").classed("active", false);
    d3.select(this).classed("active", true);
    currentGenre = d3.select(this).attr("data-genre");
    update();
  });

  d3.selectAll(".bc-dev-btn").on("click", function () {
    d3.selectAll(".bc-dev-btn").classed("active", false);
    d3.select(this).classed("active", true);
    currentDev = d3.select(this).attr("data-dev");
    update();
  });

  function updateYearRange() {

  currentMinYear = +minYearInput.node().value;
  currentMaxYear = +maxYearInput.node().value;

    if (currentMinYear > currentMaxYear) {
      return;
    }

    update();
  }

  minYearInput.on("input", updateYearRange);
  maxYearInput.on("input", updateYearRange);

  slider.on("input", function () {
    currentScore = +this.value;
    sliderVal.text(currentScore.toFixed(1));
    update();
  });

  update();

}

// ─── TOOLTIP ─────────────────────────────────────────────────────────────────
function showTooltip(event, html) {
  tooltip
    .style("display", "block")
    .style("left", `${event.clientX + 15}px`)
    .style("top", `${event.clientY + 15}px`)
    .html(html);
}

function hideTooltip() {
  tooltip.style("display", "none");
}

// ─── WORLD MAP ────────────────────────────────────────────────────────────────
function drawWorldMap(regionData, worldData) {
  const width = 1050;
  const height = 560;

  const svg = d3.select("#worldMap")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  const countries = topojson.feature(worldData, worldData.objects.countries).features;

  const projection = d3.geoNaturalEarth1()
    .scale(185)
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  function normalizeRegion(region) {
    if (region === "Europe / PAL" || region === "PAL Region") return "PAL";
    if (region === "North America") return "NA";
    if (region === "Japan") return "JP";
    if (region === "Other") return "OTHER";
    return String(region).toUpperCase();
  }

  const regionSales = {};

  regionData.forEach(d => {
    const key = normalizeRegion(d.region);
    regionSales[key] = d.sales;
  });

  const maxSales = d3.max(Object.values(regionSales));

  function getSalesTierColor(sales) {
    if (sales <= maxSales * 0.33) {
      return "#7c3aed";
    } else if (sales <= maxSales * 0.66) {
      return "#22d3ee";
    } else {
      return "#f472b6";
    }
  }

  function getRegion(countryName) {
    const northAmerica = ["United States of America", "Canada", "Mexico"];
    const japan = ["Japan"];

    const palRegion = [
      "United Kingdom", "Ireland", "France", "Germany", "Spain", "Portugal",
      "Italy", "Netherlands", "Belgium", "Luxembourg", "Switzerland",
      "Austria", "Poland", "Czechia", "Slovakia", "Hungary", "Croatia",
      "Slovenia", "Bosnia and Herz.", "Serbia", "Montenegro", "Albania",
      "North Macedonia", "Greece", "Bulgaria", "Romania", "Moldova",
      "Ukraine", "Belarus", "Lithuania", "Latvia", "Estonia", "Denmark",
      "Norway", "Sweden", "Finland", "Iceland", "Russia", "Turkey",
      "Australia", "New Zealand", "South Africa", "Egypt", "Morocco",
      "Algeria", "Tunisia", "Nigeria", "Kenya", "Ethiopia", "Ghana"
    ];

    if (northAmerica.includes(countryName)) return "NA";
    if (japan.includes(countryName)) return "JP";
    if (palRegion.includes(countryName)) return "PAL";

    return "OTHER";
  }

  function displayRegionName(region) {
    if (region === "PAL") return "PAL Region";
    if (region === "NA") return "North America";
    if (region === "JP") return "Japan";
    if (region === "OTHER") return "Other";
    return region;
  }

  const countryPaths = svg.selectAll("path")
    .data(countries)
    .join("path")
    .attr("d", path)
    .attr("data-region", d => getRegion(d.properties.name))
    .attr("fill", d => {
      const region = getRegion(d.properties.name);
      const sales = regionSales[region] || 0;
      return getSalesTierColor(sales);
    })
    .attr("stroke", "#020617")
    .attr("stroke-width", 0.8)
    .on("mousemove", (event, d) => {
      const region = getRegion(d.properties.name);
      const sales = regionSales[region] || 0;

      countryPaths
        .attr("opacity", c => getRegion(c.properties.name) === region ? 1 : 0.18)
        .attr("stroke", c => getRegion(c.properties.name) === region ? "#ffffff" : "#020617")
        .attr("stroke-width", c => getRegion(c.properties.name) === region ? 1.6 : 0.8);

      showTooltip(event, `
        <b>${displayRegionName(region)}</b><br>
        Total sales: ${sales.toFixed(2)} million
      `);
    })
    .on("mouseleave", () => {
      countryPaths
        .attr("opacity", 1)
        .attr("stroke", "#020617")
        .attr("stroke-width", 0.8);

      hideTooltip();
    });

  const legendData = [
    { label: "Lower sales", color: "#7c3aed" },
    { label: "Medium sales", color: "#22d3ee" },
    { label: "Higher sales", color: "#f472b6" }
  ];

  const legend = svg.append("g")
    .attr("transform", `translate(40, ${height - 135})`);

  legend.append("text")
    .attr("fill", "#f8fafc")
    .attr("font-size", 14)
    .attr("font-weight", "bold")
    .text("Sales intensity");

  legend.selectAll("rect")
    .data(legendData)
    .join("rect")
    .attr("x", 0)
    .attr("y", (d, i) => 20 + i * 28)
    .attr("width", 26)
    .attr("height", 18)
    .attr("rx", 5)
    .attr("fill", d => d.color)
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 0.4);

  legend.selectAll(".legend-label")
    .data(legendData)
    .join("text")
    .attr("class", "legend-label")
    .attr("x", 38)
    .attr("y", (d, i) => 34 + i * 28)
    .attr("fill", "#cbd5e1")
    .attr("font-size", 13)
    .text(d => d.label);
}