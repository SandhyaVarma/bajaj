const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const  bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.post('/bfhl',async (req,res)=>{
        let data= req.body.data;
        data = JSON.parse(data);
        let numbers =[]
        let alphabets = []
        data.forEach(ele =>{
            if(Number.isInteger(parseInt(ele,10))){
                numbers.push(ele)
            }
            else{
                alphabets.push(ele)
            }
        });
        const obj ={
            is_success:true,
            user_id:"sandhya_varma_20022002",
            email:"varmasandhya2020@gmail.com",
            roll_number :"0112CS191093",
            numbers,
            alphabets
        }
        const myJSON = JSON.stringify(obj);
        res.send(myJSON)
    
   
})




server.listen(process.env.PORT || 3000)