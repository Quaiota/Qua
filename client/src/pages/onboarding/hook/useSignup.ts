import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { baseURL } from '../../../api/baseApi';
import useInputRef from '../../../hooks/inputRef';
import * as yup from 'yup';

const validateSignup = yup.object().shape({
  fullname: yup.string().required(),
  handle: yup.string().required(),
});

const useSignup = () => {
  const history = useHistory();
  const color = useTheme();
  const { inputRef } = useInputRef();
  const [isReady, setIsReady] = useState(false);
  const initSignup = {
    fullname: '',
    handle: '',
  };

  const [signUp, setSignUp] = useState(initSignup);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));

    validateSignup.isValid(signUp).then((state) => setIsReady(state));
  };

  // const url = baseURL + '/signup';
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Axios.post(url, { data: signUp }).then((res) => console.log({ res }));
    if (isReady) history.push('/onboarding/secure');
  };

  return {
    handleChange,
    handleSubmit,
    color,
    inputRef,
    signUp,
    isReady,
  };
};

export default useSignup;
