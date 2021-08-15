import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  LoginContainer,
  LoginDiv,
  LoginLogo,
  RegistrationButton,
  SignInButton,
} from "./login.style";
import { auth } from "../../firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <LoginDiv>
      <Link to="/">
        <LoginLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <LoginContainer>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
        </form>

        <p>
          By signing-in you aree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our interest-based Ads
        </p>

        <RegistrationButton onClick={handleRegistration}>
          Create your Amazon account
        </RegistrationButton>
      </LoginContainer>
    </LoginDiv>
  );
};

export default Login;
