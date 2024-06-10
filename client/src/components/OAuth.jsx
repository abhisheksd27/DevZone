import { Button } from 'flowbite-react';
import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import app from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess } from '../redux/user/userSlice';

const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    dispatch(signInStart()); // Indicate that the sign-in process has started

    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: resultFromGoogle.user.displayName,
          email: resultFromGoogle.user.email,
          googlePhotoUrl: resultFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();

      if (data) {
        console.log('Google sign-in response data:', data); // Add logging
      }

      if (data.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      } else {
        console.error('Error during Google sign-in:', data); // Handle error
      }
    } catch (error) {
      console.error('Error during Google sign-in:', error); // Add error logging
    }
  };

  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle className='w-6 h-6 mr-2' />
      Continue with Google
    </Button>
  );
};

export default OAuth;
