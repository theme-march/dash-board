import React, { useState } from "react";
import "./Login.css";
import BrandLogo from "../components/BrandLogo";
const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log("Login attempt:", formData);
    alert("ログイン機能はここに実装してください");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Brand Header */}
        <div className="brand-header">
          <h1 className="brand-title">
            TALK<span className="brand-highlight">✦</span>VISION AI
          </h1>
          <p className="brand-subtitle">あなたの会話が、未来を動かす。</p>
        </div>

        {/* Login Card */}
        <div className="login-card">
          <BrandLogo className="brand-logo-light-border-top" />
          <div className="form-header">
            <h2 className="form-title">ログインフォーム</h2>
          </div>
          <BrandLogo className="brand-logo-light-border-bottom" />
          <div className="login-form-container">
            <div className="login-form">
              <div className="input-group">
                <input
                  type="text"
                  name="id"
                  className="form-input"
                  placeholder="IDを入力"
                  value={formData.id}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  required
                />
              </div>

              <div className="input-group">
                <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    className="password-input"
                    placeholder="パスワードを入力"
                    value={formData.password}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    required
                  />
                  <button
                    type="button"
                    className="eye-button"
                    onClick={togglePassword}
                    aria-label="Toggle password visibility"
                  >
                    {passwordVisible ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
            </div>
            <button
              className="login-button"
              onClick={handleLogin}
              type="button"
            >
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
