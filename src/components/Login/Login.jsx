import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { loginUser } from "../../client/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   let res = await fetch("http://localhost:8080/login", {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       "username": username,
    //       "password": password
    //     })
    //   });

    //   const resJson = await res.json();

    //   console.log(resJson);

    //   if (res.status === 200) {
    //     setUsername("");
    //     setPassword("");
    //   } else {
    //     setError("Some error occured");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }

    const res = await loginUser(username, password);

    const resJson = await res.json();

    console.log(resJson);

    if (res.status === 200) {
      setUsername("");
      setPassword("");
      localStorage.setItem("idtoken", resJson.token);
      navigate(`/`, { replace: true });
    } else {
      setError("Some error occured");
    }
  };

  return (
    <>
      <div className="close-button">
        <button onClick={() => navigate(-1)}>X</button>
      </div>
      <div className="login">
        <div className="login-left">
          <div className="login-left-text">
            <h1>Sign in to your account</h1>
            <Form action="login" method="post" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                className="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              ></input>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <button type="submit" className="login-button">
                Sign in
              </button>
              <div className="message">{error ? <p>{error}</p> : null}</div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
