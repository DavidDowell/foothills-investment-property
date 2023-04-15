import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import trainer from '../../assets/images/other/trainer-1.jpg';
import trainer2 from '../../assets/images/other/trainer-2.jpg';
import trainer3 from '../../assets/images/other/trainer-3.jpg';

const Team = () => {
  return (
    <section id="Team" className="mx-20">
      <div className="team-header">Meet The Team</div>
      <div className="team grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Mike McNeely</h3>
            <h4 class="member-role">Owner / President</h4>
            <br />
            <h5>Contact:</h5>
            <h4>mike@noble-oak.com</h4>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Logan McNeely</h3>
            <h4 class="member-role">Management / Sales</h4>
            <br />
            <h5>Contact:</h5>
            <h4>logan@noble-oak.com</h4>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Jeremy Munro</h3>
            <h4 class="member-role"> Acquisitions / Sales</h4>
            <br />
            <h5>Contact:</h5>
            <h4>jeremy@noble-oak.com</h4>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer2}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Jennifer Travis</h3>
            <h4 class="member-role">IT / Acquisitions</h4>
            <br />
            <h5>Contact:</h5>
            <h4>jennifer@noble-oak.com</h4>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer3}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
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
