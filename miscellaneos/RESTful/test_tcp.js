<script src="../lib/client/webtcp-0.0.1.min.js"></script>
<script src="../lib/client/memcache.js"></script>
<script>

var tcp = new WebTCP('127.0.0.1', 9999);

var client = new memcache.Client(11211, "127.0.0.1");

client.connect();

client.on('connect', function(){
   console.log('connected')
});

client.on('close', function(){
   console.log('closed')
});

client.set('foo', 'some value', function(error, result){
  console.log(result);
});

client.get('foo', function(error, result){
   console.log(result);
});

client.version(function(error, result){
  console.log(result);
});

</script>