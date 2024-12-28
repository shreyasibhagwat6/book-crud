const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const { v4: uuidv4 } = require('uuid');

module.exports = {

    get: async (req, res) => {
        const allBooks = await prisma.book.findMany();
    },

    post: async (req, res) => {
        const book = req.body;

        const createBook = await prisma.book.create({ data: { ...book, id: parseInt(uuidv4()) }});
    },

    put: async (req, res) => {
        // req.params catches id from URL params
        const id = parseInt(req.params.id);
        
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

        console.log(updatedBook);

        res.send(updatedBook);
    }
}