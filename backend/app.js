const express = require('express');
const { query } = require('./db.js');
const { ServicesMiddleware } = require('./route/Services.js');
const { ShowCaseMiddleware } = require('./route/ShowCase.js');
const { TestimonialsMiddleware } = require('./route/Testimonials.js');
const cors = require('cors');
const Server = express();

// Only run on development
Server.use(cors("*"));
Server.use(express.json());

Server.get("/",(req,res)=>{
    res.send("Hello World");
});

Server.use('/services',ServicesMiddleware);
Server.use('/testimonials',TestimonialsMiddleware);
Server.use("/show-case",ShowCaseMiddleware);

Server.listen(80,'0.0.0.0',()=>{

    console.log('server running at port 80');

});
