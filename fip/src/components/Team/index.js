/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import David from '../../assets/images/other/DavidAvatar.svg';
import Jen from '../../assets/images/other/JenAvatar.svg';
import Jeremy from '../../assets/images/other/MunroAvatar.svg';
import Logan from '../../assets/images/other/LoganAvatar.svg';

const Team = () => {
  return (
    <section id="Team" className="mx-20 py-80">
      <div className="team-header">Meet The Team</div>
      <div className="team grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <article class="team-member">
          <svg
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m404.4 475.2c2.3984-6 4.8008-13.199 7.1992-20.398l2.3984 114h217.2l2.3984-114c2.3984 7.1992 4.8008 14.398 7.1992 20.398 7.1992 16.801 16.801 56.398 25.199 93.602h98.398c-9.6016-40.801-22.801-102-34.801-130.8-2.3984-4.8008-4.8008-10.801-7.1992-18-16.789-48-50.391-139.2-134.39-139.2h-3.6016l-37.199 98.398-14.398-63.602h1.1992c4.8008 0 9.6016-4.8008 9.6016-9.6016v-17.996c0-4.8008-4.8008-9.6016-9.6016-9.6016h-22.801c-4.8008 0-9.6016 4.8008-9.6016 9.6016v16.801c0 4.8008 4.8008 9.6016 9.6016 9.6016h1.1992l-14.398 63.602-37.199-97.199h-3.6016c-85.199 0-118.8 91.199-136.8 140.4-2.3984 7.1992-4.8008 13.199-7.1992 18-12 28.801-26.398 90-34.801 130.8h98.398c10.805-38.402 20.402-78.004 27.602-94.805z" />
              <path d="m636 142.8c0 62.297-50.504 112.8-112.8 112.8s-112.8-50.504-112.8-112.8 50.504-112.8 112.8-112.8 112.8 50.504 112.8 112.8" />
              <path d="m1030.8 260.4c-3.6016-6-3.6016-12 0-18l30-58.801c7.1992-13.199-2.3984-28.801-18-28.801l-157.2 0.003906v193.2h158.4c15.602 0 25.199-15.602 18-28.801z" />
              <path d="m892.8 596.4h-34.801v-462c0-10.801-9.6016-20.398-20.398-20.398-10.801 0-20.398 9.6016-20.398 20.398v462h-609.6c2.3984-39.602 12-78 27.602-115.2h2.3984c21.602 0 39.602-18 39.602-39.602 0-21.602-18-39.602-39.602-39.602-21.602 0-39.602 18-39.602 39.602 0 10.801 4.8008 21.602 12 28.801-16.801 39.602-27.602 82.801-30 126h-28.801c-8.3984 0-15.602 7.1992-15.602 15.602v70.801c0 8.3984 7.1992 15.602 15.602 15.602h139.2v457.2c0 8.3984 7.1992 15.602 15.602 15.602h433.2c8.3984 0 15.602-7.1992 15.602-15.602v-457.2h139.2c8.3984 0 15.602-7.1992 15.602-15.602v-70.797c-1.2031-8.3984-8.4023-15.602-16.801-15.602z" />
            </g>
          </svg>
          <div class="member-bio">
            <h3 class="member-name">Mike McNeely</h3>
            <h4 class="member-role">Owner / President</h4>
            <br />
            <h5>Contact:</h5>
            <h4>mike@noble-oak.com</h4>
          </div>
        </article>
        <article class="team-member">
          <img src={Logan} />
          <div class="member-bio">
            <h3 class="member-name">Logan McNeely</h3>
            <h4 class="member-role">Management / Sales</h4>
            <br />
            <h5>Contact:</h5>
            <h4>logan@noble-oak.com</h4>
          </div>
        </article>
        <article class="team-member">
          <img src={Jeremy} />
          <div class="member-bio">
            <h3 class="member-name">Jeremy Munro</h3>
            <h4 class="member-role"> Acquisitions / Sales</h4>
            <br />
            <h5>Contact:</h5>
            <h4>jeremy@noble-oak.com</h4>
          </div>
        </article>
        <article class="team-member">
          <img src={Jen} />
          <div class="member-bio">
            <h3 class="member-name">Jennifer Travis</h3>
            <h4 class="member-role">IT / Acquisitions</h4>
            <br />
            <h5>Contact:</h5>
            <h4>jennifer@noble-oak.com</h4>
          </div>
        </article>
        <article class="team-member">
          <img src={David} />
          <div class="member-bio">
            <h3 class="member-name">David Dowell</h3>
            <h4 class="member-role">IT / Software Development</h4>
            <br />
            <h5>Contact:</h5>
            <h4>david@noble-oak.com</h4>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Team;
