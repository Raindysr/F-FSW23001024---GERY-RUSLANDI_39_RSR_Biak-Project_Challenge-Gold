const express = require('express');
const app = express();
const port = 3000;

app.set ('view engine', 'ejs');
app.use(express.json());
/*app.get('/', (req,res) => {
    res.render("test")});
*/
const handlerLandingPage = (httpRequest, httpResponse) => {

    httpResponse.render ("greet", {
    name: "Rendi"
    })
    }

app.get('/', handlerLandingPage)

app.get('/greet', (req,res)=> {
    const name = req.query.name || 'void';
    res.render('greet',{
        name
    });
});

app.get('/register', (req,res)=> {
    res.render('register');
});

app.get("/produk", (req,res)=>{
    res.json([
     "Baju" , " Celana" , "Jaket"   
    ]);
});
app.get("/orders", (req,res)=>{
    res.json([
       {
        id: 1,
        paid: false,
        user_id:1
       },
       {
        id: 2,
        paid: false,
        user_id:1
       } 
    ]);
});
app.get('/iniError', (req,res)=> {
    iniError;
});
/*app.use(function(err , req , res , next){
    console.log(err);
    res.status(500).json({
        status: "fail",
        error: err.message
    });
});*/
app.use(function(req , res , next){
    res.status(404).json({
        status: "fail",
        error:  "Not Found"   
    });
});
app.listen(port, ()=> {
    console.log('Server nyala');
});