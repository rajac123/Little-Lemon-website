// import welcomeImage from "./assets/restaurant-food.webp";
// import storyImage from "./assets/greek-salad.jpg";
// import chefsImage from "./assets/chefs-mario-and-adrian_a.jpg";
// import missionImage from "./assets/lemon-dessert.jpg";
// import "./About.css";

// const About = () => {
//   return (
//     <main>
//       {/* Welcome Section */}
//       <section className='container grid our-story'>
//         <div className='our-story-description'>
//           <h1>Welcome to Little Lemon</h1>
//           <h2>A Taste of the Mediterranean in Chicago</h2>
//           <p>
//             At Little Lemon, we bring together tradition, flavor, and warmth to
//             offer an unforgettable Mediterranean dining experience. Whether
//             you're a local or just passing through, we’re honored to serve you
//             food made from the heart.
//           </p>
//         </div>
//         <div className='our-story-chefs'>
//           <img src={welcomeImage} alt='Mediterranean Dish' />
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className='container grid our-story'>
//         <div className='our-story-description'>
//           <h1>Our Story</h1>
//           <p>
//             Founded by chefs Mario and Adrian, Little Lemon started as a passion
//             project fueled by childhood memories of sun-soaked kitchens and
//             shared meals. Inspired by the coasts of Italy and Greece, the two
//             friends set out to create a cozy eatery where quality ingredients
//             and heartfelt cooking come together.
//           </p>
//           <p>
//             From hand-rolled dough to freshly picked herbs, every dish reflects
//             our journey and dedication to authenticity.
//           </p>
//         </div>
//         <div className='our-story-chefs'>
//           <img src={storyImage} alt='Greek Salad' />
//         </div>
//       </section>

//       {/* Meet the Chefs Section */}
//       <section className='container grid our-story'>
//         <div className='our-story-description'>
//           <h1>Meet the Chefs</h1>
//           <p>
//             Mario brings years of culinary expertise from Sicily, while Adrian’s
//             Greek heritage brings bold flavors and flair to every plate.
//             Together, they’ve cultivated a menu that balances comfort with
//             creativity — all while celebrating the spirit of Mediterranean
//             hospitality.
//           </p>
//         </div>
//         <div className='our-story-chefs'>
//           <img src={chefsImage} alt='Chefs Mario and Adrian' />
//         </div>
//       </section>

//       {/* Mission & Values Section */}
//       <section className='container grid our-story'>
//         <div className='our-story-description'>
//           <h1>Our Mission & Values</h1>
//           <ul
//             style={{
//               paddingTop: "1.5rem",
//               paddingLeft: "1rem",
//               listStyle: "disc",
//             }}
//           >
//             <li>
//               <strong>Freshness First:</strong> We use only the finest, locally
//               sourced ingredients.
//             </li>
//             <li>
//               <strong>Community Driven:</strong> We’re proud to be part of
//               Chicago’s vibrant food scene.
//             </li>
//             <li>
//               <strong>Tradition Meets Innovation:</strong> Classic dishes with a
//               modern twist.
//             </li>
//             <li>
//               <strong>Warmth in Every Bite:</strong> We treat every guest like
//               family.
//             </li>
//           </ul>
//         </div>
//         <div className='our-story-chefs'>
//           <img src={missionImage} alt='Lemon Dessert' />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

import welcomeImage from "./assets/restaurant-food.webp";
import storyImage from "./assets/greek-salad.jpg";
import chefsImage from "./assets/chefs-mario-and-adrian_a.jpg";
import missionImage from "./assets/lemon-dessert.jpg";
import "./About.css";

const About = () => {
  return (
    <main>
      {/* Page Title */}
      <div className='about-page-title'>
        <h1>About Us</h1>
        <p>Get to know the story, passion, and people behind Little Lemon</p>
      </div>

      {/* Welcome Section */}
      <section className='about-section-box container grid our-story'>
        <div className='our-story-description'>
          <h1>Welcome to Little Lemon</h1>
          <h2>A Taste of the Mediterranean in Chicago</h2>
          <p>
            At Little Lemon, we bring together tradition, flavor, and warmth to
            offer an unforgettable Mediterranean dining experience. Whether
            you're a local or just passing through, we’re honored to serve you
            food made from the heart.
          </p>
        </div>
        <div className='our-story-chefs'>
          <img src={welcomeImage} alt='Mediterranean Dish' />
        </div>
      </section>

      {/* Our Story Section */}
      <section className='about-section-box container grid our-story'>
        <div className='our-story-description'>
          <h1>Our Story</h1>
          <p>
            Founded by chefs Mario and Adrian, Little Lemon started as a passion
            project fueled by childhood memories of sun-soaked kitchens and
            shared meals. Inspired by the coasts of Italy and Greece, the two
            friends set out to create a cozy eatery where quality ingredients
            and heartfelt cooking come together.
          </p>
          <p>
            From hand-rolled dough to freshly picked herbs, every dish reflects
            our journey and dedication to authenticity.
          </p>
        </div>
        <div className='our-story-chefs'>
          <img src={storyImage} alt='Greek Salad' />
        </div>
      </section>

      {/* Meet the Chefs Section */}
      <section className='about-section-box container grid our-story'>
        <div className='our-story-description'>
          <h1>Meet the Chefs</h1>
          <p>
            Mario brings years of culinary expertise from Sicily, while Adrian’s
            Greek heritage brings bold flavors and flair to every plate.
            Together, they’ve cultivated a menu that balances comfort with
            creativity — all while celebrating the spirit of Mediterranean
            hospitality.
          </p>
        </div>
        <div className='our-story-chefs'>
          <img src={chefsImage} alt='Chefs Mario and Adrian' />
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className='about-section-box container grid our-story'>
        <div className='our-story-description'>
          <h1>Our Mission & Values</h1>
          <ul
            style={{
              paddingTop: "1.5rem",
              paddingLeft: "1rem",
              listStyle: "disc",
            }}
          >
            <li>
              <strong>Freshness First:</strong> We use only the finest, locally
              sourced ingredients.
            </li>
            <li>
              <strong>Community Driven:</strong> We’re proud to be part of
              Chicago’s vibrant food scene.
            </li>
            <li>
              <strong>Tradition Meets Innovation:</strong> Classic dishes with a
              modern twist.
            </li>
            <li>
              <strong>Warmth in Every Bite:</strong> We treat every guest like
              family.
            </li>
          </ul>
        </div>
        <div className='our-story-chefs'>
          <img src={missionImage} alt='Lemon Dessert' />
        </div>
      </section>
    </main>
  );
};

export default About;
