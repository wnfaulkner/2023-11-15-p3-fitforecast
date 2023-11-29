import { useState } from 'react';
import { logIn } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css''

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await logIn(credentials);
      setUser(user);
      navigate('/home')
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="form" autoComplete="off" >
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} placeholder='Write your email (i.e. johndoe@email.com)' required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder='Type your password' required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}