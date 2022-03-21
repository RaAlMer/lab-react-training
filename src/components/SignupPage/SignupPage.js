import './SignupPage.css';
import { useState } from 'react';

export function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  const [show, setShow] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [borderEmail, setBorderEmail] = useState('1px solid black');
  const [borderPass, setBorderPass] = useState('1px solid black');

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePassInput = (e) => setPassword(e.target.value);
  const handleSelectInput = (e) => setNationality(e.target.value);

  const handleValEmail = () => {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      setErrorEmail('Please enter valid email address');
      setBorderEmail('1px solid red');
      return false;
    }
    setErrorEmail('You typed a valid email');
    setBorderEmail('1px solid green');
    return true;
  };

  const handleValPass = () => {
    let pattern = new RegExp(/^[A-Za-z]\w{7,14}$/);
    if (!pattern.test(password)) {
      setErrorPass('Your password is too weak');
      setBorderPass('1px solid red');
      return false;
    }
    setErrorPass('Your password is strong');
    setBorderPass('1px solid green');
    return true;
  };

  const switchNat = () => {
    if (nationality === 'en') {
      return <p>Hello</p>;
    } else if (nationality === 'de') {
      return <p>Hallo</p>;
    } else if (nationality === 'fr') {
      return <p>Bonjour</p>;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValEmail() && handleValPass()) {
      setShow(true);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="form_container">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailInput}
          style={{border: borderEmail}}
        />
        {errorEmail === 'You typed a valid email' ? (
          <span className="text-success">{errorEmail}</span>
        ) : (
          <span className="text-danger">{errorEmail}</span>
        )}

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassInput}
          style={{border: borderPass}}
        />
        {errorPass === 'Your password is strong' ? (
          <span className="text-success">{errorPass}</span>
        ) : (
          <span className="text-danger">{errorPass}</span>
        )}

        <label>Nationality: </label>
        <select onChange={handleSelectInput} value={nationality}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        <button className='btn btn-info' type="submit">Sign up</button>
      </form>
      {show &&
        errorEmail === 'You typed a valid email' &&
        errorPass === 'Your password is strong' && (
          <>
            {switchNat()}
            <p>Your email is {email}</p>
          </>
        )}
    </div>
  );
}
