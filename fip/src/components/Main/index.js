/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import mainImage from '../../assets/images/other/fotor_2023-4-11_20_34_8.png';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';
import mapboxgl from '!mapbox-gl';

const Main = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibS1hcm1zdHJvbmciLCJhIjoiY2xjZmI3cTdrMG1zazNvbjY5MXRuMTRndCJ9.J-vt4XTs6_aJjJIhrju_OQ';

  const [searchResults, setSearchResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const searchInput = useRef(null);

  const handleSearch = event => {
    const geocoder = MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
    });

    geocoder
      .forwardGeocode({
        query: event.target.value,
        types: ['address'],
        countries: ['us'],
      })
      .send()
      .then(response => {
        console.log(response);
        const results = response.body.features.map(feature => {
          // Remove "United States" from the end of the place_name
          feature.place_name = feature.place_name.replace(
            /, United States$/,
            ''
          );
          return feature;
        });
        setSearchResults(results);
      });
  };

  const handleResultClick = result => {
    searchInput.current.value = result.place_name;
    setSearchResults([]);
  };

  // When the autocomplete results are displayed you can use arrow keys and the "Enter" button to interact with them
  const handleKeyDown = event => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      // The user can't select something that is not a result
      setSelectedIndex(prevIndex =>
        prevIndex === null
          ? 0
          : Math.min(prevIndex + 1, searchResults.length - 1)
      );
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex(prevIndex =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex === 0
      );
    } else if (event.key === 'Enter' && selectedIndex !== null) {
      event.preventDefault();
      handleResultClick(searchResults[selectedIndex]);
      setSearchResults([]);
    }
  };

  const [showForm, setShowForm] = useState(false);

  function validateAddress(address) {
    // Address validation regex
    const regex = /\d+\s[A-z]+\s[A-z]+(?:,\s[A-z]+)?(?:,\s[A-z]+\s\d{5})?/;
    return regex.test(address);
  }

  function validatePhoneNumber(userPhone) {
    const regex = /^(\d{3}[-\)]?)?\d{3}[-]?\d{4}$/;
    return regex.test(userPhone);
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
    } else if (!validatePhoneNumber(userPhone)) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Provide A Valid Phone Number So We Can Contact You Back',
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
    console.log('click');
  };

  return (
    <div
      id="Main"
      className="main-image flex flex-col md:grid grid-rows-4 gap-6"
    >
      <section className="md:main-left mb-5 row-start-2 row-span-2">
        <div className="mb-12">
          <h1 className="font-bold text-6xl">NOBLE OAK</h1>
          <h2 className="font-bold text-5xl">SOLUTIONS</h2>
        </div>
        <div>
          {!showForm ? (
            <button
              onClick={handleButtonClick}
              className="relief-button text-xl p-5 rounded submit mt-3 shadow-black shadow-xl hover:shadow-inner hover:text-white hover:bg-green-400"
              style={{ width: '300px' }}
            >
              Click Here for Relief
            </button>
          ) : (
            <form className="cf" ref={form} onSubmit={checkInfo}>
              <div className="m-2 flex justify-center">
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
              <div className="m-2 flex justify-center">
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
                <ul className="address-list">
                  {searchResults.map((result, index) => (
                    <li
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      tabIndex={index === selectedIndex ? 0 : -1}
                      onKeyDown={event => {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          handleResultClick(result);
                        }
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onMouseLeave={() => setSelectedIndex(null)}
                      style={{
                        backgroundColor:
                          index === selectedIndex ? 'lightgray' : 'white',
                        cursor: 'pointer',
                      }}
                      className={index === selectedIndex ? 'selected' : ''}
                      id="autocomplete-result"
                    >
                      {result.place_name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="m-2">
                <textarea
                  name="user_message"
                  type="text"
                  placeholder="Tell us how we can help"
                  id="user_message"
                  className="relief-form-message pt-2 text-center text-zinc-950 rounded focus:bg-indigo-50 focus:ring-1 focus:ring-indigo-900"
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
    </div>
  );
};

export default Main;
