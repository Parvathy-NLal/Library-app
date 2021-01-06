
const express = require('express');
const authRouter = express.Router();

function arouter(nav){
    var authors = [
        {
            author:'Joseph Barbera',
            img: "jos.jpg",
            genre:'Cartoon',
            Book1:'Tom and Jerry',
            Book2:'The Flintstones'
            
        },
        {
            author:'J.K. Rowling',
            img: "jk.jpg",
            genre:'Fantasy',
            Book1:'Harry Potter',
            Book2:'Fantastic Beastes and where to find them'
        },
        {
            author:'Basheer',
            img: "Basheer.jpg",
            genre:'Drama',
            Book1:'Pathumayude aadu',
            Book2:'Balyakalasakhi'
        }
    ]
    
    authRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors      
        });
    })

    // authRouter.get('/single',function(req,res){
    //     res.send("hey ");
    // })
    authRouter.get('/:i1',function(req,res){
        const i1 = req.params.i1
        res.render("author",{
            nav,
            title:'Library',
            author : authors[i1]

        });
    })


     return authRouter;


}


module.exports = arouter;