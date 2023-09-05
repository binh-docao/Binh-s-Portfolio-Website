import React, { useRef,useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordPage = () => {
  const form = useRef();
  const [passwordType, setPasswordType] = useState("password");

  const verifyPassword = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const enteredPassword = formData.get("password");
    
    const correctPassword = "lebow";  // Replace with your correct password

    if (enteredPassword === correctPassword) {
        toast.success("Redirecting...", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.href = "https://www.instagram.com/vicsjpeg/"; // Replace with your website
        }, 2200); // 2000 milliseconds (or 2 seconds)
    } else {
      toast.error("Incorrect Password", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

    }
  };

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title" style={{}}>
            <div className="title_flex">
              <div className="left">
                <span>Protected</span>
                <h3>Enter password</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <div className="fields" style={{ textAlign: 'center' }}>
            <form
              className="password_form"
              id="passwordForm"
              ref={form}
              onSubmit={verifyPassword}
            >
              <div className="first">
                <ul>
                  <li>
                    <input
                      type={passwordType}
                      name="password"
                      placeholder="Enter Password"
                      required
                      style={{ width: '60%', color: 'inherit' }}
                    />
                    {/* <button type="button" className ='ib-button' onClick={togglePasswordVisibility}>
                      {passwordType === "password" ? "Show" : "Hide"}
                    </button> */}
                  </li>
                  {/* END PASSWORD */}
                </ul>
              </div>
              <div className="tokyo_tm_button">
                <button type="submit" className="ib-button">
                  Submit
                </button>
              </div>
              {/* END SUBMIT BUTTON */}
            </form>
            {/* END FORM */}
          </div>
          {/* END FIELDS */}
        </div>
      </div>
      {/* END PASSWORD VERIFICATION */}
    </>
  );
};

export default PasswordPage;
