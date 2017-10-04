buf = new Buffer(300);
len = buf.write("Elon Musk gonna built a civilization.");

console.log("Octets written : "+ len);
console.log(buf.toString('utf8', 0, len));

//Transforming to json format
// var json = buf.toJSON(buf);
// console.log(json);

var buf1 = new Buffer("Cristiano ");
var buf2 = new Buffer("Oliveira.");
var buf3 = Buffer.concat([buf1,buf2]);
console.log('Buf3 content: '+buf3.toString());

