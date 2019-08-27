const Express=require('express');
var app=new Express();
app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.render('index' );
});
app.get('/home',(req,res)=>{
    
    res.render('index' );
});
app.get('/login',(req,res)=>{
  
    res.render('b1');
});
app.get('/register',(req,res)=>{
   
    res.render('b3');
});
app.get('/user',(req,res)=>{
    
    res.render('user',{

        nav:[{link:'/home',title:'Home'},{link:'/addm',title:'Add Medicine'},{link:'/view',title:'View Medicine'}],
    
        title:'Medistore'} );
    });

    app.get('/addm',(req,res)=>{
    
        res.render('addm',{
    
        nav:[{link:'/home',title:'Home'}],
    
        title:'Medistore'} );
    });
    

    app.get('/view',(req,res)=>{
    
        res.render('view',{
    
        nav:[{link:'/home',title:'Home'}],
    
        title:'Medistore'} );
    });

app.listen(process.env.PORT || 3000,()=>
{
    console.log("Server running on http://localhost:3000");
});