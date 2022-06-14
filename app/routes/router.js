const express = require("express");

function apply(app) {

  app.get("/", (req, res) => res.status(200).send({
    message: 'testing'
  }));

  return app;
}

module.exports = { apply }
