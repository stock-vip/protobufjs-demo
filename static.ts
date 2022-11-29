import  { awesomepackage }  from './proto/awesome';

const {AwesomeMessage} = awesomepackage; 

let message = AwesomeMessage.create({ awesomeField: "hello" });
console.log(`message = ${JSON.stringify(message)}`);

let buffer = AwesomeMessage.encode(message).finish();
console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);

let decoded = AwesomeMessage.decode(buffer);
console.log(`decoded = ${JSON.stringify(decoded)}`);