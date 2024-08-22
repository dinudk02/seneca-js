const seneca = require('seneca')();

// Define a basic action
seneca.add({ role: 'math', cmd: 'sum' }, (msg, reply) => {
  reply(null, { answer: msg.left + msg.right });
});

// Test the action
seneca.act({ role: 'math', cmd: 'sum', left: 1, right: 5 }, (err, result) => {
  if (err) return console.error(err);
  console.log('Result:', result.answer);
});
