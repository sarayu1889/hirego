import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>

      {user ? (
        <>
          <p>Logged in as: {user.role}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              login("candidate");
              navigate("/candidate");
            }}
          >
            Login as Candidate
          </button>

          <br /><br />

          <button
            onClick={() => {
              login("employer");
              navigate("/employer");
            }}
          >
            Login as Employer
          </button>
        </>
      )}

      <br /><br />
      <Link to="/register">Go to Register</Link>
    </div>
  );
}

export default Login;

