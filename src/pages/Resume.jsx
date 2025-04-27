import React, { Component } from 'react';
import { Experiences } from "../components/Experiences";
import { SkillsResume } from "../components/SkillsResume";


class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      indexData: null,
      lang: localStorage.getItem('language') || 'en',
    };
  }

  componentDidMount() {
    const { lang } = this.state;
    import(`../data/${lang}/index.json`)
      .then((module) => {
        const data = module.default;
        this.setState({ indexData: data });
        console.log(data)
      })
      .catch((err) => {
        console.error("No se pudo cargar la data:", err);
      });
  }

  setInnnerHtml(innerHtml) {
    return { __html: innerHtml };
  }


  render() {
    const { indexData } = this.state;
    if (!indexData) {
        return <p>Loading...</p>; 
      }
    return (

<div className="main-wrapper">
  <section className="cta-section theme-bg-light py-5">
    <div className="container text-center single-col-max-width">
      <h2 className="heading mb-3">Online Resume</h2>
      <a
        className="btn btn-primary"
        href="https://themes.3rdwavemedia.com/resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/"
        target="_blank"
      >
        <i className="fas fa-file-pdf me-2" />
        Download PDF Version
      </a>
    </div>
    {/*//container*/}
  </section>
  <div className="container resume-container px-3 px-lg-5">
    <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
      <div className="resume-header">
        <div className="row align-items-center">
          <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
            <h2 className="resume-name mb-0 text-uppercase">Felipe Salazar Schlotterbeck</h2>
            <div className="resume-tagline mb-3 mb-md-0">
              Senior Software Engineer | FullStack & Mobile Developer <br/>
              Python | Java | Kotlin | TS | PHP | .NET
            </div>
          </div>
          {/*//resume-title*/}
          <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <i className="fas fa-phone-square fa-fw fa-lg me-2 " />
                <a className="resume-link" href="tel:+56976542974">
                  +569 7654 2974
                </a>
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope-square fa-fw fa-lg me-2" />
                <a className="resume-link" href="mailto:fsalazar.sch@gmail.com">
                  fsalazarsch@gmail.com
                </a>
              </li>
              <li className="mb-0">
                <i className="fas fa-map-marker-alt fa-fw fa-lg me-2" />
                Santiago, 🇨🇱
              </li>
            </ul>
          </div>
          {/*//resume-contact*/}
        </div>
        {/*//row*/}
      </div>
      {/*//resume-header*/}
      <hr />
      <div className="resume-intro py-3">
        <div className="row align-items-center">
          
          <div className="col text-start">
            <p className="mb-0">
              <a
                className="theme-link"
                href="https://themes.3rdwavemedia.com/resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/"
                target="_blank"
              >
              </a>
              {indexData.resume_summary}
            </p>
          </div>
          {/*//col*/}
        </div>
      </div>
      {/*//resume-intro*/}
      <hr />
      <div className="resume-body">
        <div className="row">
          <div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
            <section className="work-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">
                {indexData.work_experience}
              </h3>
              <Experiences/>
              
            </section>
            {/*//work-section*/}
            <section className="project-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">
                Projects
              </h3>
              <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                    Project Scientific / Financial calculator
                  </h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                    Open Source
                  </div>
                </div>
                <div className="item-content">
                  <p>
                  Design and development project for a scientific and financial calculator inspired by Casio models. The device will feature advanced mathematical, statistical, and financial functions, with an intuitive interface and high-precision display.
                  </p>
                </div>
              </div>
              {/*//item*/}
              <div className="item">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                    Arduino braille Printer
                  </h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                    Open Source
                  </div>
                </div>
                <div className="item-content">
                  <p>
                  Design and development project for a Braille printer using Arduino technology. The device will enable cost-effective and accessible printing for visually impaired users, combining compact design, precision, and user-friendly operation. Ideal for educational institutions, libraries, and personal use.                  </p>
                </div>
              </div>
              {/*//item*/}
              <div className="item">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                    Career Project
                  </h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                    Open Source
                  </div>
                </div>
                <div className="item-content">
                  <p>
                    Development of an application for learning Japanese, compatible with Android devices and Nintendo DS. The app will feature interactive lessons, vocabulary games, and writing practice using touch and stylus input. Designed for learners of all levels.
                  </p>
                </div>
              </div>
              {/*//item*/}
            </section>
            {/*//project-section*/}
          </div>
          {/*//resume-main*/}
          <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
            <section className="skills-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">
                {indexData.skills}
              </h3>
              <div className="item">
                <h4 className="item-title">{indexData.technical}</h4>
                <ul className="list-unstyled resume-skills-list">
                  <SkillsResume  typeSkills="technical"/>
                </ul>
              </div>
              {/*//item*/}
              <div className="item">
                <h4 className="item-title">{indexData.professionals}</h4>
                <ul className="list-unstyled resume-skills-list">
                <SkillsResume  typeSkills="professional"/>
                </ul>
              </div>
              {/*//item*/}
            </section>
            {/*//skills-section*/}
            <section className="education-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">
                {indexData.education}
              </h3>
              <ul className="list-unstyled resume-education-list">
              <SkillsResume  typeSkills="education"/>
              </ul>
            </section>
            {/*//education-section*/}
            <section className="education-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">
                {indexData.awards}
              </h3>
              <ul className="list-unstyled resume-awards-list">
              <SkillsResume  typeSkills="awards"/>
              </ul>
            </section>
            {/*//education-section*/}
            <section className="skills-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">
                {indexData.languages}
              </h3>
              <SkillsResume  typeSkills="languages"/>
            </section>
            {/*//certificates-section*/}
            <section className="skills-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">
                {indexData.interests}
              </h3>
              <ul className="list-unstyled resume-interests-list mb-0">
              <SkillsResume  typeSkills="interests"/>
              </ul>
            </section>
            {/*//certificates-section*/}
          </aside>
          {/*//resume-aside*/}
        </div>
        {/*//row*/}
      </div>
      {/*//resume-body*/}
      <hr />
      <div className="resume-footer text-center">
        <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
        <li className="list-inline-item mb-lg-0 me-3">
            <a className="resume-link" href="https://github.com/fsalazarsch">
              <i
                className="fab fa-github-square fa-2x me-2"
                data-fa-transform="down-4"
              />
              <span className="d-none d-lg-inline-block text-muted">
                github.com/fsalazarsch
              </span>
            </a>
          </li>
          <li className="list-inline-item mb-lg-0 me-3">
            <a className="resume-link" href="https://bitbucket.org/fsalazarsch">
              <i
                className="fab fa-bitbucket fa-2x me-2"
                data-fa-transform="down-4"
              />
              <span className="d-none d-lg-inline-block text-muted">
                bitbucket.org/fsalazarsch
              </span>
            </a>
          </li>
          <li className="list-inline-item mb-lg-0 me-3">
            <a className="resume-link" href="https://www.linkedin.com/in/felipe-ignacio-salazar-schlotterbeck-5115403a/">
              <i
                className="fab fa-linkedin fa-2x me-2"
                data-fa-transform="down-4"
              />
              <span className="d-none d-lg-inline-block text-muted">
                linkedin.com
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/*//resume-footer*/}
    </article>
  </div>
  {/*//container*/}
</div>

    );
  }
}

export default Resume;