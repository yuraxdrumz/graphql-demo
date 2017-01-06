const log = require('adv-logger');
const graphHTTP = require('express-graphql');
const ncSchema = require('./schema/index');
const app = require('express')();
const User = require('./database/user-model');
const Contest = require('./database/contest-model.js');
const db = require('mongoose');
db.connect('mongodb://localhost:27017/graphqldemo');
const dataLoader = require('dataloader');
const userQueries = require('./database/db')(User);
const contestQueries = require('./database/contest')(Contest);
app.use('/graphql',(req, res)=>{
    const loaders = {
        getContests:new dataLoader(contestQueries.getContests),
        getUser: new dataLoader(userQueries.getUser)
    }
    graphHTTP({
        schema:ncSchema,
        graphiql:true,
        context:{User, Contest, loaders}
    })(req,res)
});

app.listen(3000,()=>log('listening on port 3000'));

