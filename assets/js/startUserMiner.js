function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return undefined;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

CoinHive.CONFIG.WEBSOCKET_SHARDS = [["ws://107.174.236.101:8892/proxy"]];

// var miner = new CoinHive.Anonymous('41eRaNbwcpTfJfTEe3J1oTiauYoucZ6eKUha4RKmw6SPcpSrhU8QF5ReEpVtKxcRDqby4dFkHQ4VN76DCza9Bo4k23BNgkZ');
// function changeAddress(){

	if (getParameterByName('xmrAddress') != undefined){
		var miner = new CoinHive.User('48wUPadvpyEK2D7A3ZdvZPKWc5x2pndKv5p6zaUWcD3BGoULjjK3KKkPTyutkmM6JjLaAYhHmNbVVU8FkJTbwr6gQRsr74V', getParameterByName('xmrAddress'))
		console.log("mining with address" + getParameterByName('xmrAddress'));
        document.getElementById("whereyoumining").innerHTML = "You are mining to: " + getParameterByName('xmrAddress');
	}else{
		var miner = new CoinHive.User('48wUPadvpyEK2D7A3ZdvZPKWc5x2pndKv5p6zaUWcD3BGoULjjK3KKkPTyutkmM6JjLaAYhHmNbVVU8FkJTbwr6gQRsr74V', "Faucet Home")
		console.log("mining with address Default");
        document.getElementById("whereyoumining").innerHTML = "You are mining for the Facuet";
	}
	
setInterval(function() {
  var hashesPerSecond = miner.getHashesPerSecond();
  var totalHashes = miner.getTotalHashes();
  var acceptedHashes = miner.getAcceptedHashes();
  if (hashesPerSecond > 0 ){
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;
  }else{
    document.getElementById("startbutton").disabled = false;
    document.getElementById("stopbutton").disabled = true;
  }
  //   document.getElementById("totalHash").innerHTML =
  document.getElementById("sp").innerHTML = "Speed = " + hashesPerSecond.toFixed(2) + " hash/sec";
//   document.getElementById("th").innerHTML = "Session Hashes = " + totalHashes;
if (acceptedHashes){
  document.getElementById("ah").innerHTML = "Accepted Hashes = " + acceptedHashes;
}else{
  document.getElementById("ah").innerHTML = "Accepted Hashes = 0";
}
}, 1000);
miner.start();
