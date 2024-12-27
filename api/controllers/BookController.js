const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const { v4: uuidv4 } = require('uuid');

module.exports = {

    get: async (req, res) => {
        const allBooks = await prisma.book.findMany();
        res.json(allBooks);
        console.log(allBooks);
    },

    post: async (req, res) => {
        const book = req.body;

        const createBook = await prisma.book.create({ data: { ...book, id: parseInt(uuidv4()) }});
    }
}