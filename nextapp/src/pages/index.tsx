import { useRouter } from 'next/navigation'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Page from "@/components/page"
import * as fonts from "@/utils/fonts"
import Link from 'next/link'
import ethereumImage from '../assets/ethereum.png';
import { url } from 'inspector';

export default function Home() {
  const account = useAccount()
  const router = useRouter()
  const { open } = useWeb3Modal()
  const [getStartedClicked, setGetStartedClicked] = useState(false)
  
  //   const slides = [
  //     "Ethereum", "Solana", "OpenSea", "Aptos", "BNBChain", "FileCoin"
  // ];
  const slides = [
    { text: "Ethereum", image: require('../assets/ethereum.png').default },
    { text: "Solana", image: require('../assets/solana.svg').default },
    { text: "OpenSea", image: require('../assets/opensea.svg').default },
    { text: "Aptos", image: require('../assets/aptos.svg').default },
    { text: "BNBChain", image: require('../assets/bnbchain.svg').default },
    { text: "FileCoin", image: require('../assets/f.png').default },

    // Add other slides with their respective image URLs
];
  // Duplicate slides to ensure continuous loop
  const slidesDuplicated = [...slides, ...slides];

  function getStarted() {
    if (account.isConnected) router.push("/dashboard")
    else open().then(() => setGetStartedClicked(true))
  }

  useEffect(() => {
    // if (getStartedClicked && account.isConnected) router.push("/dashboard")

  }, [getStartedClicked, account, router])
  const boxWidth = 100; // Width of each box
  const itemCount = 10; // Number of items
  const containerWidth = boxWidth * itemCount; // Total width of items

  const animationDuration = containerWidth / 100; // Adjust speed based on container width

  return (
    <Page noLoading>
      <div id="hero">
        <div >
          <div className="home-banner" style={{ border: 'solid', borderWidth: '2px', height: '26rem', paddingTop: '8rem', paddingBottom: '2.5rem', paddingLeft: '4rem', borderStyle: 'solid', borderRadius: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center', position: 'relative', zIndex: 0 }}>
            <div className="logo"></div>

            <h1 style={{ fontSize: '2rem', fontWeight: 900, position: 'relative' }}>
              <span style={{ position: 'relative' }}>
                Be Part of The Everlasting <br />
                Hacker <span style={{ color: '#ff6d00' }}>M</span>ovement.
              </span>
            </h1>
            <p style={{ fontSize: '1rem' }}>
              Bring the twenty-second century technologies to the present, use them <br />wisely, and make them open source. Explore the world of <strong style={{ color: '#ff6d00', fontWeight: 900 }}><br /> Grants, Bounties</strong>
              .
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center gap-10">
            <div className="text-center text-4xl sm:text-6xl mt-10" style={fonts.gabarito.style}>Earn 💴 from your contributions! 🧑‍💻</div>
            <Link className="btn btn-lg rounded-lg font-bold text-2xl " style={{backgroundColor:'#ff5722', color:'whitesmoke'}} href="/bounties">Checkout Grants and Bounties</Link>
          </div>
          <div className="text">
            <h2>
              Build the best ecosystems on <span style={{ color: '#ff5722' }}>G</span>rant<span style={{ color: '#ff5722' }}>B</span>ounty <span style={{ color: '#ff5722' }}>C</span>onnect
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75rem' }}>
              GrantBounty Connect is a blockchain based grant bounty platform. Here maintainers can create Grantor Bounties for their issues and contributors can claim them. The amount is then transferred to the contributor's account once the issue is closed and accepted by the maintainer.
            </p>
          </div>

          <div className="home-bento">
            <div className="grid">
              <div style={{ gridColumnStart: 2, gridRowStart: 'auto', height: '100%' }}>
                <div className="hackathon">
                  <div className="grid-content">
                    <i className="fas fa-chevron-down down-arrow"></i>
                    <h3>BNBChain</h3>
                    <p>BNB Chain is a decentralized blockchain ecosystem focused on Web3 economy, infrastructure, and services. It offers a variety of advanced tools and features for users to explore the world of decentralized finance (DeFi) and for developers to build large-scale decentralized applications (DApps).</p>
                  </div>
                </div>
              </div>
              <div style={{ gridColumnStart: 1, gridRowStart: 1, marginBottom: '1rem', height: '100%' }}>
                <div className="build grid-tab">
                  <div className="grid-content">
                    <i className="fas fa-chevron-down down-arrow"></i>
                    <h3>Ethereum</h3>
                    <p>Ethereum is a decentralized blockchain with smart contract functionality. Ether (Abbreviation: ETH; ) is the native cryptocurrency of the platform.</p>
                 
                    </div>
                </div>
              </div>
              <div style={{ gridColumnStart: 1, marginTop: '0rem', height: '100%' }}>
                <div className="bounty grid-tab">
                  <div className="grid-content">
                    <i className="fas fa-chevron-down down-arrow"></i>
                    <h3>Solana</h3>
                    <p>Solana is a blockchain network that aims to be censorship resistant, fast, secure, and open for global adoption.</p>
                    {/* <ul>
                      <li>DAO Bounty</li>
                      <li>BUG Bounty</li>
                      <li>Mini Bounty</li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '0rem', gridColumnStart: 3, height: '100%' }}>
                <div className="grants grid-tab">
                  <div className="grid-content">
                    <i className="fas fa-chevron-down down-arrow"></i>
                    <h3>OpenSea</h3>
                    <p>OpenSea is the world's first and largest platform for buying, selling, and auctioning non-fungible tokens (NFTs) and other digital assets on the blockchain.</p>
                    {/* <ul>
                      <li>Grant DAOs</li>
                      <li>Mini Grant</li>
                      <li>Community Voting</li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div style={{ gridColumnStart: 3, gridRowStart: 1, marginBottom: '1rem', height: '100%' }}>
                <div className="ideas grid-tab">
                  <div className="grid-content">
                    <i className="fas fa-chevron-down down-arrow"></i>
                    <h3>Aptos</h3>
                    <p>Aptos is a new public chain (proof of stake) developed by former Facebook employees that achieves high throughput and high security for smart contracts built in the Move language.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className='slider-header'>Build with the best ecosystems on GrantBounty Connect</div>
        <div className="slider-container">
            <div className="slides">
                {slidesDuplicated.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image.src} alt={slide.text} /> {/* Use slide's image URL */}
                        <div className="slide-content"><strong>{slide.text}</strong></div>
                    </div>
                ))}
            </div>
        </div>
        {/* <Link href="#never-gonna-give-you-up" className='absolute bottom-20'>how it works? 🤨</Link> */}
      </div>

      {/* <div className='bg-white/10 h-[100vh] w-full' id="never-gonna-give-you-up">
        insert illustration here
      </div> */}

    </Page>
  )
}
