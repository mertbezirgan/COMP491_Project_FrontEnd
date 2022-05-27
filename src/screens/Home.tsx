import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const featuresData = [
    {
      icon: "fa fa-money",
      title: "Set up your wallet",
      text: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
    },
    {
      icon: "fa fa-th",
      title: "Create your collection",
      text: "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    },
    {
      icon: "fa fa-picture-o",
      title: "Add your NFTs",
      text: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
    },
    {
      icon: "fa fa-tags",
      title: "List them for sale",
      text: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!",
    },
  ];
  const aboutData = {
    paragraph:
      "As ShibArmy, we have created a website which is a marketplace for product related to NFTs. We’re building a community of artists, designers, and developers who are building the future of NFTs. Our idea is to create a place for people who want to wear their NFTs' fashion products.",
    Why: [
      "Buy unique products as NFTs",
      "Be the only owner of the NFT products",
      "%100 reliable and secure",
      "Give your money to us, you wont regret it",
    ],
    Why2: [
      "We take your money and spend it on mainly food",
      "Best market place after OpenSea.io",
      "Call us, whenever you want to have a drink",
      "We will do anything to sell",
    ],
  };
  const teamData = [
    {
      img: "img/team/01.jpg",
      name: "Ekrem Yiğiter",
      job: "Eko",
    },
    {
      img: "https://media-exp1.licdn.com/dms/image/C5603AQFsw3sN4ix79g/profile-displayphoto-shrink_800_800/0/1591626359432?e=1658966400&v=beta&t=CitwxiEvWtCOYhZlL2A9sfV6Lm6HkDp4zRDzC2iOwRU",
      name: "Mehmet Mert Bezirgan",
      job: "Bezir",
    },
    {
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQEiZmM6jmQn2A/profile-displayphoto-shrink_800_800/0/1572985632349?e=1658966400&v=beta&t=WEUVHDSLY_ctv6GzZjIPjmPsZO3ow2BNnbP3lUgP68A",
      name: "Orhan Ceyhun Aslan",
      job: "CeyhunCFC9",
    },
    {
      img: "img/team/03.jpg",
      name: "Umut Öztunç",
      job: "Pasha",
    },
  ];

  return (
    <div>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    ShibArmy NFT Marketplace
                    <span></span>
                  </h1>
                  <p>
                    Purcahse NFT with your favorite fashion products with
                    special access!
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-offset-1 section-title">
            <h2>Features</h2>
          </div>
          <div className="row">
            {featuresData
              ? featuresData.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{aboutData ? aboutData.paragraph : "loading..."}</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {aboutData
                        ? aboutData.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {aboutData
                        ? aboutData.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
            Geniuses behind this website
            </p>
          </div>
          <div className="row">
            {teamData
              ? teamData.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-3 col-sm-6 team"
                  >
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
      <div id="faq">
        <div className="container">
          <div className="col-md-offset-1 section-title text-center">
            <h2>FAQ</h2>
          </div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is it possible to buy the NFC from ShibArmy?</Accordion.Header>
              <Accordion.Body>
                Unfortunately, this feature is not released yet but expected in future updates.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Where can I buy an NFT?</Accordion.Header>
              <Accordion.Body>
                NFTs can be bought from any solana website that lists our collection.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How many days before my purchase is delivered?</Accordion.Header>
              <Accordion.Body>
                It takes 2 to 10 days to deliver after shipping.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Home;
