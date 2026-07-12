const express = require("express");

const rideRoutes = require("./routes/rideRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/rides", rideRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});