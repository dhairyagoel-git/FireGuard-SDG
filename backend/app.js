const express = require("express");
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    console.log("app is running");
});
app.get("/api/data", (req, res) => {
    res.json({ message: "This is data from Express!" });
});
app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});