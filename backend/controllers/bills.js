const Bill = require("../models/bill");

const getBills = async (req, res) => {
  Bill.find().then((result) => {
    res.json(result);
  });
};

const postBills = async (req, res) => {
  const bill = new Bill(req.body);

  bill
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).send("Bill Created");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

const getBillsId = async (req, res) => {
  const id = req.params.id;

  Bill.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const putBillsId = async (req, res) => {
  const id = req.params.id;
  const bill = new Bill(req.body);

  Bill.findByIdAndUpdate(id, bill, { rawResult: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteBillsId = async (req, res) => {
  const id = req.params.id;

  Bill.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getBills,
  postBills,
  getBillsId,
  putBillsId,
  deleteBillsId,
};
