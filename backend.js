const express = require('express');
const path = require('path')
const route = express();
const port = process.env.PORT || 1535;

route.use(express.static(path.join(__dirname, '/')))

route.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
});

route.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})