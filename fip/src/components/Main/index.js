import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Main = () => {

  function validateAddress(address) {
    // Address validation regex
    const regex = /^\d+\s[A-z]+\s[A-z]+/;
    return regex.test(address);
  }

  const form = useRef();
  const checkInfo = (e) => {
    e.preventDefault();
    let userName = document.getElementById("user_name").value;
    let address = document.getElementById("user_address").value;
    let userMessage = document.getElementById("user_message").value;
    if (!userName) {
      Swal.fire({
        icon: "warning",
        title: "Must have a Name!",
      });
      console.log("Must have a Name!");
    } else if (!validateAddress(address)) {
      Swal.fire({
        icon: "warning",
        title: "Must have a valid Address!",
      });
      console.log("Must have an Address!");
    } else if (!userMessage) {
      Swal.fire({
        icon: "warning",
        title: "Must include a Message!",
      });
      console.log("Must have a message!");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully",
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Something went wrong :sweat_smile:",
              text: error.text,
            });
          }
        );
    }
  };
  return (
    <div className="flex">
      <section className="main-left flex flex-col">
        <div className="main-company-name">
          <h1 className="font-bold text-6xl mb-4">NOBLE OAK</h1>
          <h2 className="font-bold text-5xl">SOLUTIONS</h2>
        </div>
        <div>
          <form className="cf" ref={form} onSubmit={checkInfo}>
          <div className="m-2">
              <input
                name="user_name"
                type="text"
                placeholder="What's your name?"
                id="user_name"
                className="pt-1 text-center text-zinc-950 user_name rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                style={{ width: "300px", height: "50px" }}
              />
            </div>
            <div className="m-2">
              <input
                type="text"
                placeholder="Address"
                name="user_address"
                id="user_address"
                className="text-center text-zinc-950 user_address mb-2 rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                style={{ width: "300px", height: "50px" }}
              />
            </div>
            <div className="m-2">
              <textarea
                name="message"
                type="text"
                placeholder="Tell us how we can help"
                id="user_message"
                className="pt-1 text-center text-zinc-950 user_message rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                style={{ width: "300px", height: "50px" }}
              ></textarea>
            </div>
            <input
              className=" bg-blue-300 p-5 rounded submit hover:bg-inherit hover:text-white hover:text-2xl"
              type="submit"
              value="Submit"
              id="input-submit"
              style={{ width: "300px" }}
            />
          </form>
        </div>
      </section>
      <section className="main-right mx-12">
        <div className="main-right-image"></div>
      </section>
    </div>
  );
};

export default Main;
