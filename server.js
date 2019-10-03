const fs = require("fs");
const http = require("http");
var modify = require("./functionality/modify");
var CardFiller = require("./functionality/Listing");
const url = require("url");

const server = http.createServer(function(req, res) {
  const data = JSON.parse(fs.readFileSync("data.json"));
  const parseurl = url.parse(req.url, true);
  res.writeHead(200, { "Content-type": "text/html" });

  if (parseurl.pathname === "/api") {
    var file = "" + fs.readFileSync("./templates/product.html");
    var modifyfile = modify(data[parseurl.query.id], file);
    res.write(modifyfile);
  } else if (parseurl.pathname === "/product") {
    var file = "" + fs.readFileSync("./templates/product.html");
    var modifyfile = modify(data[parseurl.query.id], file);
    res.write(modifyfile);
  } else if (parseurl.pathname === "/overview") {
    var CardData = "" + fs.readFileSync("./templates/Card.html");

    var OverviewData = "" + fs.readFileSync("./templates/overview.html");

    var CardDetails = CardFiller(data, CardData);

    OverviewData = OverviewData.replace(/{CardContent}/g, CardDetails);

    res.write(OverviewData);
  } else if (parseurl.pathname === "/" || parseurl.pathname === "") {
    const HomeTitle = fs.readFileSync("./templates/Home.html");
    res.write(HomeTitle);
  } else {
    res.write("<h1>Error 404 Page Not Found</h1>");
  }

  res.end();
});

const port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("server is at port 3000");
});
