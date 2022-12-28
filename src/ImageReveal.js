import React, { useState } from "react";
import Axios from "axios";
//const API_BASE_URL = "http://localhost:8080";
const API_BASE_URL =
  "https://cug34wa55qbaae4zpgcchq7wbq0odurt.lambda-url.us-east-1.on.aws";
function ImageReveal({ selectedImage, closeModal }) {
  const [isOpenGift, setOpenGift] = useState(false);
  const [transactionUrl, setTransactionUrl] = useState();
  const [showErr, setShowErr] = useState(false);
  const [existingWalletId, setWalletId] = useState();
  const [polyLink, setPolygonScanLink] = useState();
  const [isMintStarted, setIsMintStarted] = useState(false);
  const [noMetaMask, setNoMetaMask] = useState(false);
  let nftImageUrl = `https://holidaynft.s3.amazonaws.com/${selectedImage}`;
  async function checkEth() {
    if (window.ethereum) {
      return window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      throw new Error("Whoops!");
    }
  }
  let walletId = "";
  const handleConnect = () => {
    setIsMintStarted(true);
    checkEth()
      .then(function (wallet) {
        // got the wallet id
        walletId = wallet[0];

        // if they did not, generate an nft!
        Axios.post(`${API_BASE_URL}/api/updateimage`, {
          image: selectedImage,
          walletId: walletId,
        })
          .then(function (response) {
            setIsMintStarted(false);
            setOpenGift(true);
            // Share the transaction hash!
            setTransactionUrl(response.data.transaction_external_url);
          })
          .catch(function (error) {
            setIsMintStarted(false);
            if (error.code === "ERR_BAD_REQUEST") {
              setWalletId(
                `https://holidaynft.s3.amazonaws.com/livenft/${walletId}.jpg`
              );
              setPolygonScanLink(
                `https://polygonscan.com/address/${walletId}#tokentxnsErc721`
              );
              setShowErr(true);
            }
          });
      })
      .catch(function (err) {
        // didnt get it, share a fancy error
        setIsMintStarted(false);
        setNoMetaMask(true);
        console.log("No Meta Mask Error: ", err);
      });
  };
  const hideBackground = () => {
    closeModal();
  };

  return (
    <div>
      <div className="backdrop" onClick={hideBackground}></div>
      <div className="nftModal">
        <button className="nft-modal-close" onClick={hideBackground}>
          x
        </button>
        <div className={`processing ${isMintStarted ? "show-load" : ""}`}>
          <div className="loading"></div>
          <div className="processing-text-sm">Minting your NFT Gift!</div>
        </div>
        <div
          className={`birthday-gift ${isOpenGift ? "open" : ""} ${
            showErr ? "show-err" : ""
          } ${noMetaMask ? "show-err" : ""}`}
          onClick={handleConnect}
        >
          <div className="gift">
            <label className={`click ${isOpenGift ? "open" : ""}`}></label>
            <div className={`wishes ${isOpenGift ? "open" : ""}`}></div>
            <div className={`sparkles ${isOpenGift ? "open" : ""}`}>
              <div className="spark1"></div>
              <div className="spark2"></div>
              <div className="spark3"></div>
              <div className="spark4"></div>
              <div className="spark5"></div>
              <div className="spark6"></div>
              <img src={nftImageUrl} alt="Current" />
            </div>
          </div>
        </div>

        <div className={`meta-mask ${noMetaMask ? "meta-mask-show" : ""}`}>
          <a
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
            rel="noreferrer"
          >
            <img src="metamasklogo.png" alt="Install Meta Mask" />
          </a>
          <span>
            Uh oh, you need a wallet for me to send your NFT Gift to!{" "}
            <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
              target="_blank"
              rel="noreferrer"
            >
              Click here to get MetaMask
            </a>
            , then come back here and reload!
          </span>
        </div>

        <div
          className={`double-dipper-animate ${
            showErr ? "double-dipper-show" : ""
          }`}
        >
          <a href={polyLink} target="_blank" rel="noreferrer">
            <img
              src={existingWalletId}
              className="double-dipper"
              alt="Your Existing NFT"
            />
          </a>
        </div>
        <div className={`modal-text-sm ${!showErr ? "modal-text-hide" : ""}`}>
          Check the status on PolyGonScan <br />
          (Click your NFT)
        </div>
        <div
          className={`modal-text-title ${!showErr ? "modal-text-hide" : ""}`}
        >
          <h3>You already have one!</h3>
        </div>
        <div
          className={`modal-text-title ${isOpenGift ? "modal-text-hide" : ""} ${
            showErr ? "show-err" : ""
          }  ${noMetaMask ? "show-err" : ""}`}
        >
          <h3>Your Very Own </h3>
          <h1>NFT!</h1>
        </div>
        <div
          className={`modal-text-sm ${isOpenGift ? "modal-text-hide" : ""} ${
            showErr ? "show-err" : ""
          }  ${noMetaMask ? "show-err" : ""}`}
        >
          (click gift to link your MetaMask wallet)
        </div>
        <div
          className={`modal-text-title ${!isOpenGift ? "modal-text-hide" : ""}`}
        >
          <h3>NFT Gifted!</h3>
        </div>
        <div
          className={`modal-text-sm ${!isOpenGift ? "modal-text-hide" : ""}`}
        >
          Check Status on{" "}
          <a href={`${transactionUrl}`} target="_blank" rel="noreferrer">
            Polygonscan!
          </a>
        </div>
      </div>
    </div>
  );
}
export default ImageReveal;
