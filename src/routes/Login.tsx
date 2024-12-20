import Button from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Form, Switcher, Title, Wrapper } from "../components/authComponents";
import Footer from "../components/Footer";
import Content from "../components/Content";

function Login() {
  return (
    <Wrapper>
      <Header title="🎶" />

      <Content>
        <Form>
          <Title>로그인</Title>

          <Input type="email" placeholder="이메일" />

          <Input type="password" placeholder="비밀번호" />

          <Button text="로그인" type="submit" />
        </Form>

        <Switcher>
          계정이 없나요? &nbsp;
          <Link to="/join">회원가입 하러가기</Link>
        </Switcher>
      </Content>

      <Footer />
    </Wrapper>
  );
}

export default Login;
