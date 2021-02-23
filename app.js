const express = require('express');

const app = express();



app.get('/healthcheck', (req, res) => {
    res.status(200).json({ success: true });
});

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'hello!' });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));