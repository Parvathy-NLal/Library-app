const express = require('express');

const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    // var books = [
    //     {
    //         title: 'Tom and jerry',
    //         author: 'Joseph Barbera',
    //         genre:'Cartoon',
    //         img: "tom.jpg"
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J.K. Rowling',
    //         genre:'Fantasy',
    //         img: "harry.jpg"
    //     },
    //     {
    //         title: 'Pathumayude aadu',
    //         author: 'Basheer',
    //         genre:'Drama',
    //         img: "Basheer.jpg"
    //     },

    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            });

        })

    })
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;//id is like a argument for i
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
        
            });
        })

    })//since i is a vlaue from url and not a page we need to use it with colon 
    
 return booksRouter;
}


module.exports = router;