import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <p>This is the register page</p>

      <Link to="/">Back to Login</Link>
    </div>
  );
}

export default Register;
