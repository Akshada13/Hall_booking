const express = require("express");
const app = express();
const hallbook = require("./routes/hallbook");
const bookedroom = require("./routes/bookedroom.js");
const customer = require("./routes/customer");
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Welcome To The HALL Booking API Server on ${new Date()}`);
});
app.use((req, res, next) => {
  if (req.method !== "DELETE") {
    next();
  } else {
    res.send({ message: "You are not allowed to access DELETE method" });
  }
});

app.use("/hallbook", hallbook);
app.use("/bookedroom", bookedroom);
app.use("/customer-entry", customer);
app.listen(process.env.PORT||5005, () => console.log("server listening at port 5005"));