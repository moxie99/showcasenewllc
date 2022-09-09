import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "../src/styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Visit us for the best guidance on investing in NFT"
        description="Consultattion on NFTs, minting, cryptocurrency, Defi and others. We have guided many on accurate buying and exact product to onvest their funds. We have millions benefitng from our vast array of NFT knowledge for the marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner={"banner"}
      />
      <SectionWrapper
        title=" Leverage Web 3 for Equity"
        description="We provide guidance on investments geared towards the future of the digital world and our services have been proven with results"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="All Projects"
        description="We have successfully completed and developed a project of our own and also completed two othe rprojects for people. We work on everything cryptobased and can work from anywhere at realtime"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title=" Leverage Web 3 for Equity"
        description="We provide guidance on investments geared towards the future of the digital world and our services have been proven with results"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-3 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span>Moxie Frontend</span>
        </p>
      </div>
    </>
  );
};

export default App;
