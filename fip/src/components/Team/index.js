import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import trainer from '../../assets/images/other/trainer-1.jpg';

const Team = () => {
  return (
    <section id="Team">
      <div>Meet The Team</div>
      <div className="team grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Arron Stephens</h3>
            <h4 class="member-role">Speed / Strength</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi amet modi blanditiis culpa? Assumenda, blanditiis veniam
              nulla similique temporibus cupiditate magni. Consequuntur ipsum
              veritatis consequatur natus explicabo ratione deserunt!
            </p>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Arron Stephens</h3>
            <h4 class="member-role">Speed / Strength</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi amet modi blanditiis culpa? Assumenda, blanditiis veniam
              nulla similique temporibus cupiditate magni. Consequuntur ipsum
              veritatis consequatur natus explicabo ratione deserunt!
            </p>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Arron Stephens</h3>
            <h4 class="member-role">Speed / Strength</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi amet modi blanditiis culpa? Assumenda, blanditiis veniam
              nulla similique temporibus cupiditate magni. Consequuntur ipsum
              veritatis consequatur natus explicabo ratione deserunt!
            </p>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Arron Stephens</h3>
            <h4 class="member-role">Speed / Strength</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi amet modi blanditiis culpa? Assumenda, blanditiis veniam
              nulla similique temporibus cupiditate magni. Consequuntur ipsum
              veritatis consequatur natus explicabo ratione deserunt!
            </p>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Arron Stephens</h3>
            <h4 class="member-role">Speed / Strength</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi amet modi blanditiis culpa? Assumenda, blanditiis veniam
              nulla similique temporibus cupiditate magni. Consequuntur ipsum
              veritatis consequatur natus explicabo ratione deserunt!
            </p>
          </div>
        </article>
        <article class="team-member">
          <img
            src={trainer}
            alt="Arron Stephens in his workout clothes, ready to pump iron"
          />
          <div class="member-bio">
            <h3 class="member-name">Arron Stephens</h3>
            <h4 class="member-role">Speed / Strength</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi amet modi blanditiis culpa? Assumenda, blanditiis veniam
              nulla similique temporibus cupiditate magni. Consequuntur ipsum
              veritatis consequatur natus explicabo ratione deserunt!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Team;
