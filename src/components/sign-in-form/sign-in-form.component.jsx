import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFromFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFromFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Password is incorrect');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFromFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          value={password}
          required
          onChange={handleChange}
        />

        <div className='buttons-container'>
          <Button type='submit'>SIGN IN</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
