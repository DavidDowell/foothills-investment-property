import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Main = () => {
  const form = useRef();
  const checkInfo = (e) => {
    e.preventDefault();
    let userName = document.getElementById("user_name").value;
    let userMessage = document.getElementById("user_message").value;
    if (!userName) {
      Swal.fire({
        icon: "warning",
        title: "Must have an Address!",
      });
      console.log("Must have an Address!");
    }  else if (!userMessage) {
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
              <div className="m-2 ">
                <input
                  type="text"
                  placeholder="Address"
                  name="user_name"
                  id="user_name"
                  className="text-zinc-950 user_name mb-2 rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                  style={{width: '300px', height: '50px'}}
                />
              </div>
              <div className="m-2">
                <textarea
                  name="message"
                  type="text"
                  placeholder="Tell us how we can help"
                  id="user_message"
                  className="text-zinc-950 user_message rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                  style={{width: '300px', height: '50px'}}
                ></textarea>
              </div>
              <input className="bg-slate-100 p-5 rounded submit" type="submit" value="Submit" id="input-submit" style={{width: '300px'}} />
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
