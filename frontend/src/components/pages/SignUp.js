import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
import '../Button.css';


const SignUp = () => {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email.trim() !== '' && password.trim() !== '') {
        const response = await axios.post('http://localhost:8080/api/members/login', {
          email: email,
          password: password,
        });

        if (response.status === 200) {
          navigate('/');
          console.log('login success', response.data);
        } else {
          console.error('login fail');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
    <div className='main-font'>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto w-1/2"
              alt='logo_p'
              src="/image/logo_p.png"
            />
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='이메일'
                  value={email}
                  required
                  onChange={handleEmailChange} // 입력값이 변경될 때 상태 업데이트
                  className="block w-full rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder='비밀번호'
                  value={password}
                  required
                  onChange={handlePasswordChange} // 입력값이 변경될 때 상태 업데이트
                  className="block w-full rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="flex mt-3 justify-end">
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-green-500 hover:text-green-400">
                      비밀번호 찾기
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="relate button-style"
                >
                  로그인
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              계정이 없으신가요?{'   '}
              <a href="/register" className="font-semibold leading-6 text-green-500 hover:text-green-400">
                &nbsp;회원가입하기
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  );
};

export default SignUp;