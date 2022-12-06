import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { LoginContainer } from './style';
import { signUp, signIn } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //login or join
  const [isLogin, setIsLogin] = useState(true);
  //user input
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });
  //modal
  const [isModalOpen, setIsModalOpen] = useState({ open: false, message: '' });
  const navigate = useNavigate();

  //input change
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setAuth({ ...auth, email: value });
    } else if (name === 'password') {
      setAuth({ ...auth, password: value });
    }
  };

  //input submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      await signIn(auth.email, auth.password)
        .then((response) => {
          const data: any = response;
          if (data) {
            localStorage.setItem('token', data['access_token']);
            navigate('/todo');
          }
        })
        .catch((error) => {
          setIsModalOpen({
            open: true,
            message: error.response.data.message,
          });
        });
    } else {
      await signUp(auth.email, auth.password)
        .then((response) => {
          const data: any = response;
          if (data) {
            localStorage.setItem('token', data['access_token']);
            navigate('/todo');
          }
        })
        .catch((error) => {
          setIsModalOpen({
            open: true,
            message: error.response.data.message,
          });
        });
    }
  };

  console.log('modal', isModalOpen);
  return (
    <LoginContainer>
      <form className="text-center" onSubmit={onSubmit}>
        <h1>TODO_LIST</h1>
        <Input
          name="email"
          type="email"
          value={auth.email}
          onChange={onChange}
          className="user-input"
          placeholder="아이디를 입력해주세요"
          warningText={
            auth.email && !auth.email.includes('@')
              ? '이메일 형식이 아닙니다.'
              : ''
          }
        />
        <Input
          name="password"
          type="password"
          value={auth.password}
          onChange={onChange}
          className="user-input"
          placeholder="비밀번호를 입력해주세요"
          warningText={
            auth.password && auth.password.length < 8
              ? '비밀번호가 너무 짧습니다.'
              : ''
          }
        />
        <Button
          className="cursor-pointer"
          text={isLogin ? 'LOGIN' : 'JOIN'}
          disabled={!auth.email.includes('@') || auth.password.length < 8}
        />
        <div
          className="cursor-pointer state-toggle"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'JOIN' : 'LOGINP'}
        </div>
      </form>
      {isModalOpen.open && (
        <Modal
          text={isModalOpen.message}
          close="확인"
          onClose={() => setIsModalOpen({ ...isModalOpen, open: false })}
        />
      )}
    </LoginContainer>
  );
};

export default Login;
