import { useState } from "react";
import "./Login.css";
import icon from "../../assets/img/icon.png";
import icon1 from "../../assets/img/icon-1.png";
import icon2 from "../../assets/img/icon-2.png";
import checkDisplay from "../../assets/img/check-display-elements-label-state-active.png";
import path from "../../assets/img/path.svg";
import line from "../../assets/img/line.svg";
import pathFillBrand from "../../assets/img/path-fill-style1-brand.svg";
import pathFillText from "../../assets/img/path-fill-style1-text.svg";
import pathFillText1 from "../../assets/img/path-fill-style1-text-1.svg";
import pathFillText2 from "../../assets/img/path-fill-style1-text-2.svg";
import pathFillText3 from "../../assets/img/path-fill-style1-text-3.svg";
import pathFillText4 from "../../assets/img/path-fill-style1-text-4.svg";
import foreGround from "../../assets/img/path-fill-style1-foreground.svg";
import foreGround1 from "../../assets/img/path-fill-style1-foreground-1.svg";
import foreGround2 from "../../assets/img/path-fill-style1-foreground-2.svg";
import backGround from "../../assets/img/path-fill-style1-background.svg";
import backGround1 from "../../assets/img/path-fill-style1-background-1.svg";
import backGround2 from "../../assets/img/path-fill-style1-background-2.svg";
import brand1 from "../../assets/img/path-fill-style1-brand-1.svg";
import brand2 from "../../assets/img/path-fill-style1-brand-2.svg";
import brand3 from "../../assets/img/path-fill-style1-brand-3.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      username: "",
      password: "",
    };

    if (!formData.username.trim()) {
      newErrors.username = "Username or email is required";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (validateForm()) {
        navigate('/dashboard');
    }
  };

  return (
    <div className="sign-in-desktop">
      <div className="overlap-wrapper">
        <div className="card">
          <div className="heading-card">
            <div className="title-TAG">Sign In</div>
            <div className="user-Tags">
              <div className="new-user-TAG">New user?</div>
              <div className="create-an-account">Create an account</div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="input-wrapper">
                <input
                  className={`overlap-2 ${errors.username && "error"}`}
                  placeholder="Username or email"
                  type="email"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <div className="error-message">{errors.username}</div>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  className={`overlap-2 ${errors.password && "error"}`}
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>
            </div>
            <div className="checkbox">
              <div className="area-DISPLAY" />
              <img
                className="check-DISPLAY"
                alt="Check DISPLAY"
                src={checkDisplay}
              />
              <div className="text-wrapper">Keep me signed in</div>
            </div>
            <button className="button" type="submit" onClick={handleSubmit}>
              <div className="label-wrapper">
                <div className="label">Sign In</div>
              </div>
            </button>
            <div className="sign-in-with">
              <img className="line" alt="Line" src={line} />
              <div className="typography-TAG-UI-s">Or Sign In With</div>
              <img className="line-2" alt="Line" src={line} />
            </div>
            <div className="social-buttons">
              <div className="circle-button">
                <div className="icon">
                  <img className="icon-2" alt="Icon" src={icon2} />
                </div>
              </div>
              <div className="circle-button-2">
                <div className="icon">
                  <img className="icon-5" alt="Icon" src={icon} />
                </div>
              </div>
              <div className="div-wrapper">
                <div className="icon">
                  <div className="icon-4">
                    <img className="path" alt="Path" src={path} />
                    <div className="rect" />
                    <div className="path-2" />
                  </div>
                </div>
              </div>
              <div className="icon-wrapper">
                <div className="icon">
                  <img className="icon-3" alt="Icon" src={icon1} />
                </div>
              </div>
            </div>
          </div>
          <div className="illustration">
            <div className="overlap-group">
              <img
                className="path-FILL"
                alt="Path FILL"
                src={pathFillBrand}
              />
              <img
                className="path-FILL-style"
                alt="Path FILL"
                src={pathFillText4}
              />
              <img className="img" alt="Path FILL" src={foreGround2} />
              <img
                className="path-FILL-2"
                alt="Path FILL"
                src={pathFillText3}
              />
              <img
                className="path-FILL-3"
                alt="Path FILL"
                src={pathFillText2}
              />
              <img
                className="path-FILL-4"
                alt="Path FILL"
                src={backGround2}
              />
              <img
                className="path-FILL-5"
                alt="Path FILL"
                src={pathFillText1}
              />
              <div className="div" />
              <img
                className="path-FILL-6"
                alt="Path FILL"
                src={pathFillText}
              />
              <img
                className="path-FILL-7"
                alt="Path FILL"
                src={backGround1}
              />
              <img
                className="path-FILL-8"
                alt="Path FILL"
                src={backGround}
              />
              <img
                className="path-FILL-9"
                alt="Path FILL"
                src={foreGround1}
              />
              <img
                className="path-FILL-10"
                alt="Path FILL"
                src={brand3}
              />
              <img
                className="path-FILL-11"
                alt="Path FILL"
                src={brand2}
              />
              <img
                className="path-FILL-12"
                alt="Path FILL"
                src={brand1}
              />
            </div>
            <img className="path-FILL-13" alt="Path FILL" src={foreGround} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
