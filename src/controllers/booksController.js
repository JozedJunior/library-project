import books from '../models/Books.js';

export default class BookController {

    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        })
    }

    static registerBooks = ((req, res) => {
        let book = new books(req.body);

        book.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - failed to register book.` })
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    })

    static updateBooks = ((req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'The book was upadeted with success' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    })

    static listIdBooks = ((req, res) => {
        const id = req.params.id;

        books.findById(id, (err, books) => {
            if (err) {
                res.status(400).send({ message: `${err.menssage} - Id not find.` })
            } else {
                res.status(200).send(books);
            }
        })
    })

    static deleteBooks = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Books deleted with success' })
            } else {
                res.status(500).send({ message: `${err.menssage} - Id not find.` })                
            }
        })
    }
}

