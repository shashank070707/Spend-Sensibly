const transactionModel = require("../models/transactionModel")

const getAlltransaction = async (req,res) => {
    try {
    const transactions = await transactionModel.find({
      userid: req.body.userid,
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};

const deleteTransaction = async (req, res) => {
    try {
      await transactionModel.findOneAndDelete({ _id: req.body.transacationId });
      res.status(200).send("Transaction Deleted!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
  const editTransaction = async (req, res) => {
    try {
      await transactionModel.findOneAndUpdate(
        { _id: req.body.transacationId },
        req.body.payload
      );
      res.status(200).send("Edit SUccessfully");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

const addTransaction = async (req, res) => {
    try {
        // const newTransection = new transectionModel(req.body);
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).send("Transaction Created");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
module.exports = {getAlltransaction,addTransaction,editTransaction,deleteTransaction}