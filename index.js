const express = require("express");
const { create } = require("express-handlebars");

const app = express();
const hbs = create({
  extname: "hbs",
  defaultLayout: "layout",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

const homeR = require("./routes/homeRouter");

app.use("/", homeR);

try {
  const port = normalizePort(process.env.port || 3000);
  app.listen(port, () => {
    console.log(`Server ${port} porti bilan eshitiliyapti.`);
  });
} catch (error) {
  console.error(error);
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
