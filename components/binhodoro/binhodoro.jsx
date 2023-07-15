import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "../Map";

const binhodoro = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vcokxu7",
        "template_422iazd",
        form.current,
        "W3ObIqtQDY_myo4vx"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Binhodoro</span>
                <h3>Be productive Davis.</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <img src={"/img/portfolio/davis.jpg"} alt="Your Image" /> {/* Insert your image here */}
          

          {/* MENU WRAP */}

        </div>
      </div>
      {/* END COTACT */}
    </>
  );
};

export default binhodoro;
