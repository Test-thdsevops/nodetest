const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send("<h1>Coucou</h1>");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server listening ...");
});
