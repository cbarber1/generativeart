let price

function setup() {
  createCanvas(1000, 1000, WEBGL);
  // api key = UYRQLCEQ45G9DPWE
  loadJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=UYRQLCEQ45G9DPWE', getData);

  box(0, 0, 100, 100, map(price["Time Series (Daily)"][price["Meta Data"]["3. Last Refreshed"]], 0, 200, 0, 500));
}

function getData(data) {
  price = data;
}
