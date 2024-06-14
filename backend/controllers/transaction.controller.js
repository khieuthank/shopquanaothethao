const db = require('../models/index');
const Transaction = db.Transaction;

async function createTransaction(req, res, next) {
    try {
        const newTransaction = new Transaction({
            name: req.body.name,
            dob: req.body.dob,
            blogs: req.body.blogs
            
        });
        const transaction = await newTransaction.save();
        res.status(200).json(transaction);
    } catch (error) {
        next(error);
    }
}

const transactionController = {
    createTransaction
}

module.exports = transactionController;