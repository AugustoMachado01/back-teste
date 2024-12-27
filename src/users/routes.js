const { Router } = require("express");

const widthAsyncErrorHandler = require("../middlewares/async-errors");

const router = Router();

const createUser = (req, res) => {
  res.status(201).header("Location", "/users/???").send({});
};

router.post("/", widthAsyncErrorHandler(createUser));

router.get(
  "/",
  widthAsyncErrorHandler(async (req, res) => {
    res.status(200).send({ users: [] });
  })
);

router.get(
  "/:id",
  widthAsyncErrorHandler(async (req, res) => {
    res.status(200).send({});
  })
);

router.put(
  "/:id",
  widthAsyncErrorHandler(async (req, res) => {
    res.status(200).send({});
  })
);

router.delete(
  "/:id",
  widthAsyncErrorHandler(async (req, res) => {
    res.status(200).send();
  })
);

module.exports = router;
