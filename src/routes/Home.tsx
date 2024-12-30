import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <Wrapper>
      <Header title="playlist" />

      <Content>
        <h1>home</h1>
      </Content>

      <Footer />
    </Wrapper>
  );
}

export default Home;
