import React from "react";
import css from "./About.module.css";

const About = () => {
  return (
    <>
      <section className={css.flowerbanner}>
        <div>
          <h3>GIVE WITH MEANING</h3>
          <p>
            For over 110 years, as the floral-gifting experts, we’ve been
            helping you give with more care, with greater ease, and with more
            meaning.
            <br />
            Established in 1910 as a collective of 10 florists, Florists’
            Transworld Delivery (FTD) used the telegraph to transform the
            age-old practice of flower-giving. We understood then the unique
            power of flowers to express a sentiment and helped people across the
            world “Say it with flowers.” Today, we have grown into an extensive
            network made up of thousands of local florists — each one an artisan
            who is handcrafting and hand-delivering fine bouquets all across the
            country.
            <br />
            When you’re giving with FTD you’re giving the gift of joy, strength,
            and love and you're giving it with meaning.
          </p>
          <h4>FTD.com Affiliate Program</h4>
          <p>
            Advertise FTD.com on your site and get 5% on your users' purchases
          </p>
        </div>
      </section>
      <section className="pb-5 text-center">
        <div className="row w-100 mx-auto justify-content-center">
          <div className="col col-sm-9 col-md-7 col-lg-8 col-xl-4 p-5 pt-3">
            <h5>Advertise</h5>
            <div className="card rounded-4 bg-light border-0">
              <div className="card-body">
                <p className="card-title">Advertise FTD on your website</p>
                <hr />
                <p className="card-subtitle mb-2 text-body-secondary">
                  Why Partner with FTD?
                </p>
                <p className="card-text mt-4 p-4 pb-5">
                  After 100 years in business, we know a thing or two about
                  flowers! In fact, we invented the world's first floral network
                  and are one of America's most recognizable brands. Our century
                  of success is built on industry leading standards for floral
                  quality, artistry, and reliability. Join the FTD affiliate
                  program and start generating revenue for your site.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-sm-9 col-md-7 col-lg-8 col-xl-4 p-5 pt-3">
            <h5>Convert</h5>
            <div className="card rounded-4 bg-light border-0">
              <div className="card-body">
                <p className="card-title">
                  Upon ad selection users are taken to product
                </p>
                <hr />
                <p className="card-subtitle mb-2 text-body-secondary">
                  What can you expect?
                </p>
                <div className="card-text mt-4 p-4 pb-5">
                  <ul>
                    <li>
                      Full time dedicated and experienced Affiliate Manager
                    </li>
                    <li>
                      Competitive commission and attractive conversion rate
                    </li>
                    <li>Daily reporting through CJ Affiliate</li>
                    <li>
                      Affiliation with the oldest and most recognized floral
                      organization and Brand in the world
                    </li>
                    <li>
                      Industry leading, best in className affiliate exclusive
                      discounts
                    </li>
                    <li>
                      We deliver to almost 100% of the US residents and to major
                      Canadian Metropolitan areas
                    </li>
                    <li>
                      A customizable mobile site with technology that works on
                      hundreds of devices
                    </li>
                    <li>Product feed available</li>
                    <li>Same day delivery available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-sm-9 col-md-7 col-lg-8 col-xl-4 p-5 pt-3">
            <h5>Earn</h5>
            <div className="card rounded-4 bg-light border-0">
              <div className="card-body">
                <p className="card-title">
                  Earn 5% commission across all products & categories.
                </p>
                <hr />
                <p className="card-subtitle mb-2 text-body-secondary">
                  How do I join?
                </p>
                <p className="card-text mt-4 p-4 pb-5">
                  Join now through CJ Affiliate. If you have questions about
                  becoming an affiliate of FTD, please contact us
                  at:FTD-Affiliate@ftdi.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
