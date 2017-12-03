# Monero Mining Faucet
This site uses Coin-Hive to allow users to mine for XMR using their CPU and receive small amounts of XMR.
## Why is it called a Faucet?
Google SEO.
## Who is this for?
This is not meant to replace traditional mining. The purpose of this is for someone interested in earning a few XMR instead of traditional faucets. I recommend utilizing this site when you are not paying for electricity. Some examples might be using it while you're at school, at a coffee shop, or if you have very cheap electricity for whatever reason. Maybe you leave it running overnight or over the weekend on your work computer. 
### No Setup 
The site is meant to allow mining for people who may not be able to install and set up a traditional miner on a system.
### Low Payout Threshold
Traditional Mining pools require you to mine up around .5 XMR to withdraw your funds. This could take an average computer months to accumulate. With a low payout similar to a faucet it get's small amounts of Monero into the people's hands for them to use and play with but at faster rates than a traditional faucet. 
### Can I use Multiple Computers?
Of Course! Just make sure to use the same wallet address each time you connect.
## Coin-Hive
Coin-Hive is a JavaScript miner that connects the users CPU to their mining pool. This functions similar a traditional mining pool in that the site can only withdraw funds once it hits 0.5 XMR. However, it is not a very efficient way to mine. Coin-Hive takes a fee of 30%(as compared to the usual 1%) and their miner is only 70% as efficient as a miner written in C++. This brings us to the next section.
## How do the Devs make a profit?
We really don't. All of your profit from your hashes goes back to you if you reach the threshold. We get 1024 Hashes for each time you connect to the pool through the captcha and you mine anonymous hashes while you are not logged in with a wallet address. However, because we are not hosting the pool, and GitHub Pages is hosting the site, there is no cost. If your wallet has been inactive for a month we will claim the XMR you earned. This is not a get rich scheme, it is to support the idea of Coin-Hive and to help with the adoption of Monero by making the acquisition of small amounts to play with easier than using a traditional faucet that is concerned with making a profit.
### Can I donate to the Devs?
Of course!
+ Bitcoin: 1HdZ8a9QSXzmniz9gYAibsRXu3neJ1f1K5
+ Monero: 4A1TbjhQqfuGuhBoyGJgze25xoXmN5qouE4i8bHEee9AVqB2qQ2aiNrN12JzbnekRqFTmxZ7b1NPXi1hBQGE1koG2EbnQyo
+ Ethereum: 0xfA23810aC0F34bfcb6A060Ca7b739D7a65C62681
+ [Shapeshift](https://shapeshift.io/shifty.html?destination=4A1TbjhQqfuGuhBoyGJgze25xoXmN5qouE4i8bHEee9AVqB2qQ2aiNrN12JzbnekRqFTmxZ7b1NPXi1hBQGE1koG2EbnQyo&output=XMR&apiKey=c46c3a05e6df0d7e7f37e960888b2aba4f37bd3b14708c3c5819d801c59855ea89a65f8f138c0b8056b0e92d0a404efef708c1fac3e1e9b3ac8f4d97a75b7854)
## Contributing
Think the site is ugly? Have a feature you want to see? Great! Fix it and make a pull request!
### Future Features
+ Custom Payment Thresholds
+ Javascript Miner for [Aeon](http://www.aeon.cash/)
