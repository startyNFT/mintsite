import Hero from "../components/Hero";
import MintModal from "../components/MintModal";
import TestMessage from "../components/TestMessage";

import LatestMints from "../components/LatestMints";
import HeaderMetaTags from "../components/HeaderMetaTags";

function Home() {
  return (
    <>
      <Hero></Hero>
      <TestMessage></TestMessage>
      <LatestMints></LatestMints>
      <MintModal></MintModal>
      <HeaderMetaTags></HeaderMetaTags>
    </>
  );
}
export default Home;
