import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
import '../Button.css';


const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');
  const [profile, setProfile] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckEmail = async (e) => {
    try {
      const emailData = {
        email: email,
      };

      const response = await axios.post('http://15.164.226.31:8080/api/check-email', emailData);

      if (response.status === 200) {
        console.log('이메일 중복확인', response.data);
      } else {
        console.error('이메일 중복확인 실패');
      }
    } catch (error) {
      console.error('이메일 중복확인 실패:', error);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setCheckedPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleCheckName = async (e) => {
    try {
      const nicknameData = {
        nickname: nickname,
      };

      const response = await axios.post('http://15.164.226.31:8080/api/check-nickname', nicknameData);

      if (response.status === 200) {
        console.log('닉네임 중복확인', response.data);

        if (response.data.available) {
          setIsNicknameAvailable(true);
          setNicknameErrorMessage('사용 가능한 닉네임입니다.');
        } else {
          setIsNicknameAvailable(false);
          setNicknameErrorMessage('중복된 닉네임입니다.');
        }
      } else {
        console.error('닉네임 중복확인 실패');
      }
    } catch (error) {
      console.error('닉네임 중복확인 실패:', error);
    }
  };

  const handleProfileImageSelect = (imageNumber) => {
    setProfile(imageNumber);
  };

  // 에러 메시지 컴포넌트
  
  const ErrorMessage = ({ message }) => {
    return (
      <div className="text-red-500" style={{ fontSize: '12px' }}>&nbsp;{message}</div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== checkedPassword) {
        setErrorMessage('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
      } else {
        setErrorMessage('비밀번호가 일치합니다.');
      }

    try {
      // 회원가입 데이터 생성
      const userData = {
        email: email,
        password: password,
        nickname: nickname,
        profile: profile,
      };

      // 회원가입 요청 보내기
      const response = await axios.post('http://15.164.226.31:8080/api/members/signup', userData);

      // 회원가입 성공 시 리다이렉트 또는 다른 작업 수행
      if (response.status === 200) {
        console.log('회원가입 성공', response.data);
        navigate('/sign-in'); // 회원가입 성공 시 로그인 페이지로 리다이렉트
      } else {
        console.error('회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <>
    <div className='main-font'>
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="register-box-container w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className='relative'>
                <input type="email" name="email" id="email" value={email} onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="이메일" required="" />
                <button
                    className="absolute right-3 top-3 button-sm-style"
                    onClick={handleCheckEmail}>중복확인
                </button>
              </div>
              <div className='relative'>
                <input
                  type="text"
                  name="nickname"
                  id="nickname"
                  value={nickname}
                  onChange={handleNameChange}
                  maxLength={10}  // 최대 10자까지 입력 가능
                  className={`bg-gray-50 border border-gray-300 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="닉네임"
                  required=""
                />
                <p
                  className={`text-sm ${
                    isNicknameAvailable ? 'text-green-500' : 'text-red-500'
                  } ml-2 mt-1`}
                >
                  {nicknameErrorMessage || '10자 이내로 입력해주세요.'}
                </p>
                <button
                    className="absolute right-3 top-3 button-sm-style"
                    onClick={handleCheckName}>중복확인
                </button>
              </div>
              <div>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                <p
                  className="text-gray-500 sm:text-sm ml-2 mt-1">
                  영문, 숫자를 조합하여 6~20자로 입력해주세요.
                </p>
              </div>
              <div>
                <input type="password" name="checkedPassword" id="checkedPassword" placeholder="비밀번호 확인" value={checkedPassword} onChange={handleConfirmPasswordChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                {/* {errorMessage && <ErrorMessage message={errorMessage} />} */}
              </div>
              <br></br>
              <div>
                <label htmlFor="profile" className="block mb-4 text-m font-medium text-gray-900 dark:text-white">프로필 선택</label>
                <div className='flex justify-center ml-1 mr-1'>
                  {Array.from({ length: 5 }, (_, index) => (
                    <img
                      key={index}
                      className={`mx-auto w-1/5 mr-1 ${profile === index + 1 ? '' : ''}`}
                      alt={`profile_${index + 1}`}
                      src={`/image/profile_${index + 1}${profile === index + 1 ? '_select' : ''}.png`}
                      onClick={() => handleProfileImageSelect(index + 1)}
                    />
                  )
                  )}
                </div>
                <br></br>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                      코깅의 <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">이용약관</a>에 동의합니다.</label>
                </div>
              </div>
              <button type="submit" className="relative button-style">코깅 시작하기</button>
              <p className="mt-10 text-center text-sm text-gray-500">
                이미 회원가입을 하셨나요?&nbsp;&nbsp;&nbsp;<a href="/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">로그인하기</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  </>
  );
};

export default Register;