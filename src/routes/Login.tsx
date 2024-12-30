import Button from "../components/Button";
import Header from "../components/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/authComponents";
import Footer from "../components/Footer";
import Content from "../components/Content";
import { useForm } from "react-hook-form";
import { IAuth, useSigninMutation } from "../hooks/useAuth";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../recoils/tokenAtom";
import { useEffect } from "react";

function Login() {
  const isLogin = useRecoilValue(isLoginSelector);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || "/";

  useEffect(() => {
    if (isLogin) {
      navigate(from);
    }
  }, [isLogin, navigate, from]);

  const { mutate, isPending: isLoading } = useSigninMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>();

  const onValid = (data: IAuth) => {
    mutate(data, {
      onSuccess: () => {
        navigate(from);
      },
    });
  };

  return (
    <Wrapper>
      <Header title="🎶" />

      <Content>
        <Form onSubmit={handleSubmit(onValid)}>
          <Title>로그인</Title>

          <Input
            type="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "유효한 이메일 형식이 아닙니다.",
              },
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}

          <Input
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 4,
                message: "비밀번호는 4자 이상 입력해주세요.",
              },
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}

          <Button text="로그인" type="submit" disabled={isLoading} />
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
