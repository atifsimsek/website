import "./education.css"
import { BiCheck } from "react-icons/bi"
import { useSelector } from "react-redux"
const Education = () => {
  const { language } = useSelector(state => state.languageReducer)
  return (
    <>
      {
        language === "tr" ? <section id="education">
          <h5>Eğitim Hayatım</h5>
          <h2>Eğitim ve Sertifikalar</h2>

          <div className="container education_container">

            {/* ARTİCLE 1  */}
            <article className="education">
              <div className="education_head">
                <h3>Turkcell Eğitim Sertifikaları</h3>
              </div>
              <ul className="education_list">
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Web Programming-101</p>
                </li>
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Web Programming-201</p>
                </li>
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Web Programming-301</p>
                </li>
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>React 101-201-301-401</p>
                </li>
              </ul>
            </article>

            {/* ARTİCLE 2  */}

            <article className="education">
              <div className="education_head">
                <h3>Okul Hayatı</h3>
              </div>
              <ul className="education_list">
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Sinop Anadolu Lisesi 2009-2013</p>
                </li>
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Sakarya Üniversitesi İşletme Fakültesi/Turizm İşletmeciliği Lisans 2014-2018 </p>
                </li>
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Sakarya Üniversitesi Bilişim Sistemleri Yüksek Lisans 2018-2019</p>
                </li>
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Anadolu Üniversitesi Bilgisayar Programcılığı Ön Lisans 2021-Devam Ediyor</p>
                </li>

              </ul>
            </article>


            {/* ARTİCLE 3 */}
            <article className="education">
              <div className="education_head">
                <h3>Udemy Sertifikaları</h3>
              </div>
              <ul className="education_list">
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Modern Web Geliştirme Kursu Sıfırdan Sektörün Yükseklerine</p>
                </li>
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Sıfırdan React ve Content Api</p>

                </li>
                <li>
                  <BiCheck className="education_list-icon" />
                  <p>Komple Web Uygulamaları Geliştirme</p>

                </li>

              </ul>
            </article>

          </div>
        </section>
          :
          <section id="education">
            <h5>My Education</h5>
            <h2>Education and Certificates</h2>

            <div className="container education_container">

              {/* ARTİCLE 1  */}
              <article className="education education-special">
                <div className="education_head">
                  <h3>Turkcell Education Certificate</h3>
                </div>
                <ul className="education_list">
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>Web Programming-101</p>
                  </li>
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>Web Programming-201</p>
                  </li>
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>Web Programming-301</p>
                  </li>
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>React 101-201-301-401</p>
                  </li>
                </ul>
              </article>

              {/* ARTİCLE 2  */}

              <article className="education">
                <div className="education_head">
                  <h3>School Life</h3>
                </div>
                <ul className="education_list">
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>Sinop Anatolian High School 2009-2013</p>
                  </li>
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>
                      Sakarya University Faculty of Business Administration / Tourism Management Bachelor 2014-2018 </p>
                  </li>
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>
                      Sakarya University Information Systems Master's Degree 2018-2019</p>
                  </li>
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>
                      Anadolu University Computer Programming Associate Degree 2021-Continuing</p>
                  </li>

                </ul>
              </article>
              {/* ARTİCLE 3 */}
              <article className="education education-special">
                <div className="education_head">
                  <h3>Udemy Certificates</h3>
                </div>
                <ul className="education_list">
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>Modern Web Development Course: From Scratch to the Heights of the Industry</p>
                  </li>
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>React and Context API from Scratch</p>

                  </li>
                  <li>
                    <BiCheck className="education_list-icon" />
                    <p>Developing Complete Web Applications</p>

                  </li>

                </ul>
              </article>

            </div>
          </section>
      }
    </>
  )
}

export default Education