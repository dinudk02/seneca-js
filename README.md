Installing 
1. mkdir my-seneca-app
2. cd my-seneca-app
3. npm init -y

=> install seneca 
5. npm install seneca --save

=> create new file (index.js)
add this code 

==============================================================================
const seneca = require('seneca')();

seneca.add({ role: 'math', cmd: 'sum' }, (msg, reply) => {
  reply(null, { answer: msg.left + msg.right });
});

seneca.act({ role: 'math', cmd: 'sum', left: 1, right: 2 }, (err, result) => {
  if (err) return console.error(err);
  console.log('Result:', result.answer);
});

==============================================================================
output :3 {while you run this}

=> to run 
node index.js




