const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/notes',
  handler: (request, response) => {
    console.log(request.payload);
    Models.notes.destroy({ truncate: true }).then(() =>
      Models.notes.bulkCreate(request.payload).then(() => console.log('database updated')));
    response(request.payload);
  },
},
{
  method: 'GET',
  path: '/notes',
  handler: (request, response) => {
    Models.notes.findAll().then((notes) => {
      response(notes);
    });
  },
}];
