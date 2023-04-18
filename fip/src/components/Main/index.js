/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

const Main = () => {
  const [showForm, setShowForm] = useState(false);

  function validateAddress(address) {
    // Address validation regex
    const regex = /^\d+\s[A-z]+\s[A-z]+/;
    return regex.test(address);
  }

  const form = useRef();
  const checkInfo = e => {
    e.preventDefault();
    let userNameFirst = document.getElementById('user_name_first').value;
    let userNameLast = document.getElementById('user_name_last').value;
    let userPhone = document.getElementById('user_phone_number').value;
    let address = document.getElementById('user_address').value;
    let userMessage = document.getElementById('user_message').value;
    if (!userNameFirst && !userNameLast) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Provide Your Full Name!',
        allowOutsideClick: true,
        allowEnterKey: true,
      });
      console.log('Must have a Name!');
    } else if (!validateAddress(address)) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Provide A Valid Address!',
        allowOutsideClick: true,
        allowEnterKey: true,
      });
      console.log('Must have an Address!');
    } else if (!userPhone) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Provide A Phone Number So We Can Contact You Back',
        allowOutsideClick: true,
        allowEnterKey: true,
      });
      console.log('Must have phone number!');
    } else if (!userMessage) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Tell Us What We Can Help You With!',
        allowOutsideClick: true,
        allowEnterKey: true,
      });
      console.log('Must have a message!');
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          result => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully',
            });
            // Clearing the input fields so the suer doesn't have to reload the page for it to clear
            document.getElementById('user_name_first').value = '';
            document.getElementById('user_name_last').value = '';
            document.getElementById('user_phone_number').value = '';
            document.getElementById('user_address').value = '';
            document.getElementById('user_message').value = '';

            setShowForm(false);
          },
          error => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong :sweat_smile:',
              text: error.text,
            });
          }
        );
    }
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div id="Main" className="flex">
      <section className="main-left flex flex-col">
        <div className="main-company-name mb-12">
          <h1 className="font-bold text-6xl mb-4">NOBLE OAK</h1>
          <h2 className="font-bold text-5xl">SOLUTIONS</h2>
        </div>
        <div>
          {!showForm ? (
            <button
              onClick={handleButtonClick}
              className="relief-button text-xl p-5 rounded submit hover:animate-pulse mt-3"
              style={{ width: '300px' }}
            >
              Click Here for Relief
            </button>
          ) : (
            <form className="cf" ref={form} onSubmit={checkInfo}>
              <div className="m-2 flex">
                <input
                  name="user_name_first"
                  type="text"
                  placeholder="First Name"
                  id="user_name_first"
                  className="pt-1 mx-2 relief-form-name text-center text-zinc-950 mb-2 rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                />
                <input
                  name="user_name_last"
                  type="text"
                  placeholder="Last Name"
                  id="user_name_last"
                  className="pt-1 mx-2 relief-form-name text-center text-zinc-950 mb-2 rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                />
              </div>
              <div className="m-2 flex">
                <input
                  name="user_phone_number"
                  type="text"
                  placeholder="Phone Number"
                  id="user_phone_number"
                  className="pt-1 mx-2 relief-form-phone text-center text-zinc-950 mb-2 rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                />
              </div>
              <div className="m-2">
                <input
                  type="text"
                  placeholder="Address"
                  name="user_address"
                  id="user_address"
                  ref={searchInput}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                  className="relief-form-address mx-2 text-center text-zinc-950 mb-2 rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                />
              </div>
              <div className="m-2">
                <textarea
                  name="user_message"
                  type="text"
                  placeholder="Tell us how we can help"
                  id="user_message"
                  className="relief-form-message pt-1 text-center text-zinc-950 rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
                ></textarea>
              </div>
              <input
                className="relief-form-submit p-5"
                type="submit"
                value="Submit"
                id="input-submit"
              />
            </form>
          )}
        </div>
      </section>
      <section className="main-right mx-12">
        <div className="main-right-image"></div>
      </section>
    </div>
  );
};

export default Main;
