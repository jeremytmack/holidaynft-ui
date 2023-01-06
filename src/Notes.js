import "./App.css";

function Notes({ showNotes }) {
  const hideModal = () => {
    showNotes();
  };
  return (
    <div className="notes">
      <button className="notes-modal-close" onClick={hideModal}>
        x
      </button>
      <h1>What is this?</h1>
      <p>
        The Happy Holidays Digital greeting card is a fun React and CSS
        animation that allows you Mint your very own NFT gift (click Clark
        Griswold's car), change the time of day (click the day/night button) and
        check out a relaxing Happy Holidays Spotify Playlist!
      </p>
      <blockquote>
        <h2> Fun features to check out:</h2>
        <ul>
          <li>ChatGPT generated snow animation (Chat GPT & ReactJS)</li>
          <li>
            Switch between day and night to turn off all Christmas lights and
            reveal Spotify barcode (ReactJS & a sleigh-load of CSS)
          </li>
          <li>
            Click the "Wagon Queen Family Truckser" for an NFT Gift (ReactJS,
            MetaMask, NFTPort, AWS & Polygon/Matic)
          </li>
        </ul>
      </blockquote>
      <h1>Why did I create it?</h1>
      <p>
        It all started with the new AI tool,{" "}
        <a
          href="https://openai.com/blog/chatgpt/"
          target="_blank"
          rel="noreferrer"
        >
          ChatGPT
        </a>
        . It was a late evening here in Michigan (it was actually 6pm but this
        time of year it might as well be 11pm) and the snow was blowing. A
        colleague and I were talking about how amazed we were with ChatGPT and
        its possibilities. I'd just finished my workday, and inspired by the
        weather, I asked ChatGPT: "Can you create a snowy day using React JS
        code?" To which is pleasantly replied "Certainly!" and proceded to
        create the beautiful falling snow you see on this app cleverly
        minimizing its coding effort by leveraging the{" "}
        <a
          href="https://www.npmjs.com/package/react-snowfall"
          target="_blank"
          rel="noreferrer"
        >
          react-snowfall
        </a>{" "}
        library.{" "}
      </p>
      <p>
        I was inspired! The coding bug woke up in me, and for the next few
        evenings I kept adding to it. Pulling in some silly 8-bit graphics like
        the trees and the{" "}
        <a
          href="https://www.lonelyplanet.com/news/iconic-car-national-lampoons-vacation-for-sale"
          target="_blank"
          rel="noreferrer"
        >
          Griswold's classic station wagon
        </a>
        . A few epiphones and several over-priced coffees later, I ended up with
        what you see here. A fun animation that allows you to switch between day
        and night, cue up a relaxing spotify playlist and generate your very own
        NFT gift!
      </p>
      <h1>Architecture</h1>
      <a href="/appDiagram.png" target="_blank" rel="noreferrer">
        <img src="/appDiagram.png" alt="Solution" className="architecture" />
      </a>
      <h2>
        ReactJS{" "}
        <img
          src="/react.png"
          rel="noreferrer"
          alt="React"
          className="aws-icon"
        />
      </h2>
      <p>
        The ReactJS front-end handles all of the UI interactions, animations and
        delight. It also orchestrates calls to initialize the MetaMask wallet
        integration and pull a random NFT Gift (image) from S3 and initiate the
        minting process by calling the AWS Lambda.
      </p>
      <h2>
        AWS: Amplify{" "}
        <img
          src="/amplify.png"
          rel="noreferrer"
          alt="Amplify"
          className="aws-icon"
        />
      </h2>
      <p>
        The ReactJS app is automatically deployed and served via AWS Amplify.
        Any changes to the app are deployed upon a successful code merge via the
        Holiday NFT UI GitHub Repo.
      </p>
      <h2>
        MetaMask{" "}
        <img
          src="/metamask.png"
          rel="noreferrer"
          alt="Lambda"
          className="aws-icon"
        />
      </h2>
      <p>
        The ReactJS app checks for a MetaMask wallet address via the "ethereum"
        method accessible from the global window object (window.ethereum) thanks
        to the MetaMask plugin (when it's installed).
      </p>
      <h2>
        AWS: Certificate Manager & Route 53
        <img
          src="/certificatemanager.png"
          rel="noreferrer"
          alt="Certificate Manager"
          className="aws-icon"
        />
        <img
          src="/route53.png"
          rel="noreferrer"
          alt="Route 53"
          className="aws-icon"
        />
      </h2>
      <p>
        {" "}
        TLS Certificates, DNS resolution and routing are all handled via AWS'
        Route 53 Service
      </p>
      <h2>
        AWS: Cloudfront{" "}
        <img
          src="/cloudfront.png"
          rel="noreferrer"
          alt="Cloudfront"
          className="aws-icon"
        />
      </h2>{" "}
      <p>
        All requests are pushed through the AWS Cloudfront CDN to assist with
        speedy response times!
      </p>
      <h2>
        AWS: API Gateway & Lambda{" "}
        <img
          src="/apigateway.png"
          rel="noreferrer"
          alt="API Gateway"
          className="aws-icon"
        />
        {" +"}
        <img
          src="/lambda.png"
          rel="noreferrer"
          alt="Lambda"
          className="aws-icon"
        />
      </h2>
      <p>
        The dedicated API used for the Holiday NFT app is delivered by way of a
        serverless function (AWS Lambda) which is exposed and controlled through
        the AWS API Gateway. All calls to mint and issue NFTs by way of the NFT
        Port API flow through this gateway and Lambda config. Once the wallet ID
        is confirmed valid, the digital asset (the cute image) is moved from a
        temporary S3 home to a <i>permanent</i> S3 home. Once that process is
        complete, the NFT is minted and delivered to the Wallet Address the user
        provided by way of linking MetaMask.
      </p>
      <h2>
        AWS: S3 & DynamoDB{" "}
        <img src="/s3.png" rel="noreferrer" alt="S3" className="aws-icon" />
        {" +"}
        <img
          src="/dynamodb.png"
          rel="noreferrer"
          alt="DynamoDB"
          className="aws-icon"
        />
      </h2>{" "}
      <p>
        All digital assetts are stored in S3 for safekeeping. There's a bucket
        of a finite number of images in available. Once they're gone, no more
        NFT's can be created. (That, and my free NFTPort trial will have been
        maxed out)
      </p>
      <h2>
        NFT Port{" "}
        <img
          src="/nftport.png"
          rel="noreferrer"
          alt="NFTPort"
          className="aws-icon"
        />
      </h2>{" "}
      <p>
        The service that handles accepting the Wallet ID, digital asset address
        and description, and ultimately mints the NFT and returns the
        transaction ID to the Lambda (which in turn returns the success response
        and transaction ID to the UI for display)
      </p>
      <h2>
        Polygon (MATIC) Chain
        <img
          src="/polygon.png"
          rel="noreferrer"
          alt="Polygon"
          className="aws-icon"
        />
      </h2>{" "}
      <p>
        All NFT's generated through this app are minted on the Polygon
        Blockchain. Why? Because its free and easy, no other technical reason.
        ;){" "}
      </p>
    </div>
  );
}

export default Notes;
