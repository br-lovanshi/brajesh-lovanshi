import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import AboutFive from "../elements/about/AboutFive";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import Separator from "../elements/separator/Separator";
import ProgressbarTwo from "../elements/progressbar/ProgressbarTwo";
import BrandFour from "../elements/brand/BrandFour";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import HeaderTwo from "../common/header/HeaderTwo";
import BrandOne from "../elements/brand/BrandOne";
import BrandTwo from "../elements/brand/BrandTwo";
import BrandThree from "../elements/brand/BrandThree";
import ScrollTop from "../common/footer/ScrollTop";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TimelineOne from "../elements/timeline/TimelineOne";
import ContactOne from "../elements/contact/ContactOne";
import FooterThree from "../common/footer/FooterThree";
import TabOne from "../elements/tab/TabOne";
var BlogListData = BlogClassicData.slice(0, 3);

const PersonalPortfolio = () => {
    return (
        <>
            <SEO title="Brajesh Lovanshi Portfolio" />
            <main className="page-wrapper">
                {/* <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" /> */}
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div
                    className="slider-perosonal-portfolio height-750 bg_image"
                    data-black-overlay="1"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/laptop-image.jpg)`,
                        
                    }}
                >
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center">
                                    <h1 className="title">
                                        Hey! I'm <br />{" "}
                                        <span className="">Brajesh Lovanshi</span>
                                    </h1>
                                    <div className="button-group mt--30">
                                        <Link
                                            className="btn-default round btn-border btn-large"
                                            to="#"
                                        >
                                            Contact Me
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <AboutFive />

                {/* Start Elements Area  */}
                <div className="rwt-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="About Me"
                                    title="Who Am I."
                                    description="I am passinate Software Developer, <br /> Having 1.6 year of experience."
                                />
                            </div>
                        </div>
                        <TabOne />
                    </div>
                </div>
                {/* End Elements Area  */}
                {/* Start techstack Area  */}
                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Skills"
                                    title="Hand on experience on these much!"
                                    description="I have hands on experience <br /> over these skills."
                                />
                            </div>
                        </div>
                        {/* Start Brand Area  */}
                        <div className="rwt-brand-area pb--90 mt_dec--30">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <BrandFour brandStyle="brand-style-2 variation-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Brand Area  */}
                    </div>
                </div>
                {/* End techstacks Area  */}
                {/* Start projects Area  */}
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Projects"
                                    title="My Working Projects."
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <TimelineOne />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Timeline Area  */}

                <Separator />

                    {/* Start Portfolio Area  */}
                    {/* <div className="rwt-portfolio-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Project"
                  title="Check My Recent Works!"
                  description="We provide company and finance service for <br /> startups and company business."
                />
              </div>
            </div>
            <PortfolioOne Column="col-lg-6 col-md-6 col-sm-12 col-12 mt--30 portfolio" />
           
          </div>
        </div> */}
                    {/* End Portfolio Area  */}
                    {/* Skills Progress Bar  */}
                    {/* <div className="rwt-about-area rn-section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <SectionTitle
                  textAlign="text-start"
                  radiusRounded=""
                  subtitle="See my All Skill."
                  title="My Working Skill"
                  description="We provide company and finance service for <br /> startups and company business."
                />
              </div>
              <div className="col-lg-6">
                <div className="rbt-progress-style-1">
                  <ProgressbarTwo />
                </div>
              </div>
            </div>
          </div>
        </div> */}
                    {/* End Elements Area  */}
                    {/* Client Feedback  */}
                    {/* <div className="rwt-testimonial-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb--10">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Client Feedback"
                  title="Awesome Clients Feedback."
                  description="We provide company and finance service for <br /> startups and company business."
                />
              </div>
            </div>
            <TestimonialOne
              column="col-lg-4 col-md-6 col-12 mt--30"
              teamStyle="card-style-default testimonial-style-one"
            />
          </div>
        </div> */}
                    {/* End Elements Area  */}
                    {/* Blogs */}
                    {/* <div className="blog-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Latests News"
                  title="Read from the Blog."
                  description="We provide company and finance service for <br /> startups and company business."
                />
              </div>
            </div>
            <div className="row row--15">
              {BlogListData.map((item) => (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30"
                >
                  <BlogList StyleVar="box-card-style-default" data={item} />
                </div>
              ))}
            </div>
          </div>
        </div> */}

                    <div className="rwt-testimonial-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--10">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Contact"
                                        title="For Any Query Feel Free to Contact."
                                        description=""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>

                    <ScrollTop />
                    <FooterThree />
            </main>
        </>
    );
};
export default PersonalPortfolio;
