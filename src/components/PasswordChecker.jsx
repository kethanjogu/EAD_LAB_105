import React, { useState } from 'react';

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const checkPasswordStrength = (password) => {
    let strength = '';

    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCriteria && uppercaseCriteria && numberCriteria && specialCharCriteria) {
      strength = 'Strong';
    } else if (lengthCriteria && (uppercaseCriteria || numberCriteria || specialCharCriteria)) {
      strength = 'Moderate';
    } else {
      strength = 'Weak';
    }

    return strength;
  };

  const handlePasswordChange = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    setPasswordStrength(checkPasswordStrength(passwordInput));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Password Strength Checker</h1>
      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={handlePasswordChange}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p>Password strength: <strong>{passwordStrength}</strong></p>
      <div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ color: password.length >= 8 ? 'green' : 'red' }}>At least 8 characters</li>
          <li style={{ color: /[A-Z]/.test(password) ? 'green' : 'red' }}>At least one uppercase letter</li>
          <li style={{ color: /[0-9]/.test(password) ? 'green' : 'red' }}>At least one number</li>
          <li style={{ color: /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'green' : 'red' }}>At least one special character</li>
        </ul>
      </div>
    </div>
  );
}

export default PasswordChecker;
