import Button from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Form, Switcher, Title, Wrapper } from "../components/authComponents";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Join() {
  return (
    <Wrapper>
      <Header title="🎶" />

      <Content>
        <Form>
          <Title>회원가입</Title>

          <Input type="email" placeholder="이메일" />

          <Input type="text" placeholder="사용자 이름" />

          <Input type="password" placeholder="비밀번호" />

          <Button text="로그인" type="submit" />
        </Form>

        <Switcher>
          이미 계정이 있나요? &nbsp;
          <Link to="/login">로그인 하러가기</Link>
        </Switcher>
      </Content>

      <Footer />
    </Wrapper>
  );
}

export default Join;
