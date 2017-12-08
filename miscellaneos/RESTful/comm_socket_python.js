var net = require('net');

function arrayBufferToString(buffer){
    var arr = new Uint8Array(buffer);
    var str = String.fromCharCode.apply(String, arr);
    if(/[\u0080-\uffff]/.test(str)){
        throw new Error("this string seems to contain (still encoded) multibytes");
    }
    return str;
}

function uintToString(uintArray) {
    var encodedString = String.fromCharCode.apply(null, uintArray),
        decodedString = decodeURIComponent(escape(encodedString));
    return decodedString;
}

var client = new net.Socket();
client.connect(8480, '127.0.0.1', function() {
    console.log('Connected');
    client.write('{"cidade": "Recife", "quartos": 1, "banheiros":2, "valor": 1000, "vaga": 3}');
    client.on('data', function(data) {
    	data = uintToString(data)
    	console.log('Received: ' + data.split("criscriscris"));
	});
});

// client.on('data', function(data) {
//     console.log('Received: ' + data);
//     client.destroy(); // kill client after server's response
// });
