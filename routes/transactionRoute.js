const express = require("express");
const {getAlltransaction,addTransaction,editTransaction,deleteTransaction} = require("../controllers/transactionController")

//router object
const router = express.Router()

//add transaction by the POST method express
router.post('/addtransaction',addTransaction)

//Edit transection POST MEthod
router.post("/edittransaction", editTransaction);

//Delete transection POST MEthod
router.post("/deletetransaction", deleteTransaction);

// //get the transaction by the get method express
router.post('/gettransaction',getAlltransaction)

module.exports = router;


/*
<Button type="primary" htmlType="submit" block >
          Add
        </Button>
*/