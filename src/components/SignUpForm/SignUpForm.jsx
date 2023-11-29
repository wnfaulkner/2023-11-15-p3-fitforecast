import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

export default function SignUpForm ({ setUser }) {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
      profilePic: '',
      name: '',
      email: '',
      location: '',
      password: '',
      confirm: '',
      error: ''
  })
    
    // setState comes from above state class component
    // The object passed to setState is merged with the current state object
    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
            error: ''
        });
    };  
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // We don't want to send the 'error' or 'confirm' property,
        //  so let's make a copy of the state object, then delete them
        const formData = profile;
        delete formData.error;
        // The promise returned by the signUp service method 
        // will resolve to the user object included in the
        // payload of the JSON Web Token (JWT)
        delete formData.confirm;
        console.log('formData:', formData)
        const user = await signUp(formData);
        await setUser(user);
        navigate('/home');
        } catch {
          // An error occurred 
          setProfile({ error: 'Sign Up Failed - Try Again' });
        }
    };

        const disable = profile.password !== profile.confirm;
        return (
          <div>
            <div className="form-container">
              <form className="signup-form" autoComplete="off" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <input type="text" name="profilePic" value={profile.profilePic} onChange={handleChange} placeholder='Paste your image URL here' />
                <label>Username</label>
                <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder='Choose a username (i.e. johndoe)' required />
                <label>Email</label>
                <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder='Write your email (i.e. johndoe@email.com)' required />
                <label>Zip Code</label>
                <input type="number" name="location" value={profile.location} onChange={handleChange} placeholder='Type your zip code (i.e. 12345)' required />
                <label>Password</label>
                <input type="password" name="password" value={profile.password} onChange={handleChange} placeholder='Choose a password (i.e. P@ssword1!)' required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={profile.confirm} onChange={handleChange} placeholder='Type your password again' required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{profile.error}</p>
          </div>
        );
      
}