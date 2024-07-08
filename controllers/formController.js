const Form = require('../models/Form');
const Response = require('../models/Response');

exports.createForm = (req, res) => {
  const newForm = new Form(req.body);
  newForm.save()
    .then(form => res.json(form))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.getForm = (req, res) => {
  Form.findById(req.params.id)
    .then(form => res.json(form))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.submitResponse = (req, res) => {
  const newResponse = new Response({
    formId: req.params.id,
    responses: req.body.responses
  });
  newResponse.save()
    .then(response => res.json(response))
    .catch(err => res.status(400).json('Error: ' + err));
};

