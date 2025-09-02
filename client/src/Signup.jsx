import {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light position-relative">
      <div className="position-absolute top-0 start-0 m-3">
      <img src="/logo.png" alt="Logo" width="80" />
      </div>
      <div className="bg-white p-4 rounded-3 w-50">
        <h2 className="text-center fw-bold">Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Username</strong>
            </label>
          <input
            type="text"
            placeholder="Enter username"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Email</strong>
            </label>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
            <label htmlFor="email">
                <strong>Password</strong>
            </label>
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            name="password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
        type="submit"
        className="btn w-100 rounded-0 text-white"
        style={{
            background: "linear-gradient(to bottom, yellow, orange 25%, orangered 100%)",
            border: "none"
        }}
        >
        Register
        </button>
        </form>
        <p className="text-center m-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 italic hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;