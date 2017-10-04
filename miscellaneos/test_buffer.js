buf = new Buffer(300);
len = buf.write("Elon Musk gonna built a civilization.");

console.log("Octets written : "+ len);
console.log(buf.toString('utf8', 0, len));