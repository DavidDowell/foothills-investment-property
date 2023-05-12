/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import David from '../../assets/images/other/RealDave.JPG';
import Jen from '../../assets/images/other/RealJen.jpeg';
import Jeremy from '../../assets/images/other/MunroAvatar2.svg';
import Logan from '../../assets/images/other/RealLogan.jpeg';
import Mike from '../../assets/images/other/MikeAvatar.svg';
import Deena from '../../assets/images/other/DeenaAvatar.svg'

const Team = () => {
  return (
    <section id="Team" className="mx-10 py-80">
      <div className="team-header">Meet The Team</div>
      <div className="team snap-x snap-mandatory overflow-scroll max-lg:flex grid gap-8 grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <article class="snap-center team-member">
          <img className='avatar' src={Mike} />
          <div class="member-bio">
            <h3 class="member-name">Mike McNeely</h3>
            <h4 class="member-role">Owner / President</h4>
            <br />
            <h5>Contact:</h5>
            <h4>mike@noble-oak.com</h4>
          </div>
        </article>
        <article class="snap-center team-member">
          <img className='avatar' src={Logan} />
          <div class="member-bio">
            <h3 class="member-name">Logan McNeely</h3>
            <h4 class="member-role">Management / Sales</h4>
            <br />
            <h5>Contact:</h5>
            <h4>logan@noble-oak.com</h4>
          </div>
        </article>
        <article class="snap-center team-member">
          <img className='avatar' src={Jeremy} />
          <div class="member-bio">
            <h3 class="member-name">Jeremy Munro</h3>
            <h4 class="member-role"> Acquisitions / Sales</h4>
            <br />
            <h5>Contact:</h5>
            <h4>jeremy@noble-oak.com</h4>
          </div>
        </article>
        <article class="snap-center team-member">
          <img className='avatar' src={Jen} />
          <div class="member-bio">
            <h3 class="member-name">Jennifer Travis</h3>
            <h4 class="member-role">HR / Acquisitions</h4>
            <br />
            <h5>Contact:</h5>
            <h4>jennifer@noble-oak.com</h4>
          </div>
        </article>
        <article class="snap-center team-member">
          <img className='avatar' src={David} />
          <div class="member-bio">
            <h3 class="member-name">David Dowell</h3>
            <h4 class="member-role">IT / Software Development</h4>
            <br />
            <h5>Contact:</h5>
            <h4>david@noble-oak.com</h4>
          </div>
        </article>
        <article class="snap-center team-member">
          <img className='avatar' src={Deena} />
          <div class="member-bio">
            <h3 class="member-name">Deena Mayberry</h3>
            <h4 class="member-role">Office Manager</h4>
            <br />
            <h5>Contact:</h5>
            <h4>deena@noble-oak.com</h4>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Team;
