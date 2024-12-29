const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const { v4: uuidv4 } = require('uuid');

module.exports = {

    // get's all the books
    get: async (req, res) => {
        const allBooks = await prisma.book.findMany();

        res.send(allBooks);
    },

    //gets a specific book 
    get: async (req, res) => {

        // req.params catches id from URL params
        const id = parseInt(req.params.id);
        
        const specificBook = await prisma.book.findUnique({
            where: {
                id: id
            }
        })

        res.send(specificBook);
    },

    // post a new book
    post: async (req, res) => {
        const book = req.body;

        const createBook = await prisma.book.create({ data: { ...book, id: parseInt(uuidv4()) }});

        const allBooks = await prisma.book.findMany();

        res.send(allBooks);
    },

    // update a book
    put: async (req, res) => {
        
        const id = parseInt(req.params.id);
        console.log(id)
        console.log(req.body)
        
        const updatedBook = await prisma.book.update({
            where: {
                id: id
            },
            data: {
                id: req.body.id,
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                price: req.body.price
            }
        })

        console.log(updatedBook)

        res.send(updatedBook);
    }
}