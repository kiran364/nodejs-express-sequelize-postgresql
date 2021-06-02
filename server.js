const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express();



var corsOptions = {
    origin : 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./app/models');
db.sequelize.sync();

app.get('/', (req, res) =>{
    res.json({message : 'welcome to movies application...'});
});

require("./app/routes/movies.routes")(app);

const port = process.env.port || 8080;
app.listen(port, () =>{
    console.log(`server is listening at port no-${port}.`);
})
