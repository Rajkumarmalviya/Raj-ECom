import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { userAdded } from "../../redux-essentials/Slices/UserSlices";
import { useSelector } from "react-redux";
function LoginPage() {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showCreate, updateShowCreate] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit or process the data here
      console.log("Form data:", formData);
      setSubmitted(true); // Set a submitted flag
    } else {
      // Form is not valid, display error messages
    }
  };

  const isFormValid = Object.keys(errors).length === 0;
  return (
    <div className="login-form">
      {submitted ? (
        <div className="success-message">Login successful!</div>
      ) : (
        <form>
          <h2>Login</h2>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <div className="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>

          <button type="submit" disabled={!isFormValid}>
            Login
          </button>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "9% 0% 0%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "0.5px ridge lightgrey",
                width: "44%",
                height: "1px",
              }}
            ></div>
            <span style={{ color: "lightgray", width: "2%", margin: "0% 2%" }}>
              or
            </span>
            <div
              style={{
                border: "0.5px ridge lightgrey",
                width: "44%",
                height: "1px",
              }}
            ></div>
          </div>
          <div className="create-account">
            <div
              className="create-account-btn"
              onClick={() => {
                updateShowCreate(!showCreate);
              }}
            >
              Create Account
            </div>
          </div>
        </form>
      )}
      {showCreate && (
        <div
          style={{
            top: "0",
            left: "0",
            zIndex: "100",

            position: "fixed",
            background: "#0000009b",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "white",
              margin: "3% auto",
              width: "50%",
            }}
            class="container"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>Create Account</h2>{" "}
              <button
                onClick={() => {
                  updateShowCreate(!showCreate);
                }}
                style={{
                  background: "none",
                  border: "none",
                }}
              >
                <RxCross2 />
              </button>
            </div>
            <form>
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  style={{width:"100px"}}
                  onClick={() => {
                    dispatch(userAdded(formData));
                    updateShowCreate(!showCreate);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
