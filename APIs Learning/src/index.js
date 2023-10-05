const express = require('express');
const axios = require('axios');
const app = express();
const userRoutes = require('./Routes/userRoutes');
const noteRoutes = require('./Routes/notesRoutes');
const port = 5000;

app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

const getData = async () => {
    const response = await fetch("http://dog-api.kinduff.com/api/facts");
    const data = await response.json();
    // const data = await axios.get("http://dog-api.kinduff.com/api/facts");
    // console.log(data.data.facts[0], typeof data.data.facts[0]);
    return data.facts[0];
}

app.get('/', async (req, res) => {
    const data = await getData();
    res.status(200).send(data);
})

app.listen(port , () => {
    console.log('listening on port ' + port);
});