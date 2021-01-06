const express = require('express');


const app = express();
const nav = [
       {
          link:'/login',name:'Login'
       },
       {
          link:'/signup',name:'Sign Up'
       },
       {
        link:'/',name:'Sign Out'
       },
        {
            link:'/books',name:'Books'
        },
        {
            link:'/authors',name:'Authors'
        },
        
        {
            link:'/admin',name:'Add Book'
        }


    ];

const booksRouter = require('./src/route/booksRoutes')(nav);

const authRouter = require('./src/route/authorRoutes')(nav);
const loginRouter = require('./src/route/loginRoutes')(nav);
const signupRouter = require('./src/route/signupRoutes')(nav);
const adminRouter = require('./src/route/adminRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));//static shd be provided since it is files such as images css js files ,hence it shd be given
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'

    });//shd provide dir name//sendfile sendds file ,using just send sends the statement inside ""
});




app.listen(5555);