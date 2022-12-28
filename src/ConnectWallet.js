async function checkEth() {
  if (window.ethereum) {
    return window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    throw new Error("Whoops!");
  }
}
function ConnectWallet({ checkWallet }) {
  const handleConnect = () => {
    checkEth()
      .then(function (wallet) {
        // got the wallet id
        checkWallet(wallet[0]);
      })
      .catch(function (err) {
        // didnt get it, share a fancy error
        checkWallet("Error");
      });
  };

  return (
    <div className="wallet">
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
}
export default ConnectWallet;
