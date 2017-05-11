const   express = require('express'),
        data    = require('./data/companiesData.json'),
        app     = express(),
        parser  = require('body-parser'),
        port    = process.env.PORT || 3000,
        buisness=require('./business_management');

app.get('/',
    (req,res)=>{
        res.sendFile('./index.html');
    });

app.get('/getAllNames',
   (req,res)=>{
      res.status(200).json(buisness.allCompanies());
});

app.post('/getCompany/',      
    (req,res) =>{
        res.status(200).json(buisness.getCompByProfile(req.body.profile_id));
 }); 

app.get ('/getCompanyByCity&Devices/:city/:devices' , 
    (req,res) =>{ 
      res.status(200).json(buisness.getCompByCityAndDev(req.params.city,req.params.devices));
 });
  
app.all('*',
    (req,res) =>{ 
        console.log("alllll");
        res.json({data});
    });   



app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
    });