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
		var miner = new CoinHive.User('41eRaNbwcpTfJfTEe3J1oTiauYoucZ6eKUha4RKmw6SPcpSrhU8QF5ReEpVtKxcRDqby4dFkHQ4VN76DCza9Bo4k23BNgkZ', getParameterByName('xmrAddress'))
		console.log("mining with address" + getParameterByName('xmrAddress'));
	}else{
		var miner = new CoinHive.User('41eRaNbwcpTfJfTEe3J1oTiauYoucZ6eKUha4RKmw6SPcpSrhU8QF5ReEpVtKxcRDqby4dFkHQ4VN76DCza9Bo4k23BNgkZ', "Faucet Home")
		console.log("mining with address Default");
	}
	
setInterval(function() {
  var hashesPerSecond = miner.getHashesPerSecond();
  var totalHashes = miner.getTotalHashes();
  var acceptedHashes = miner.getAcceptedHashes();
  //   document.getElementById("totalHash").innerHTML =
  document.getElementById("sp").innerHTML = "Speed = " + hashesPerSecond.toFixed(2) + " hash/sec";
  document.getElementById("th").innerHTML = "Session Hashes = " + totalHashes;
  document.getElementById("ah").innerHTML = "Accepted Hashes = " + acceptedHashes;
}, 1000);
miner.start();
