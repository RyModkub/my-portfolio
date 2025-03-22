import "./Portfolio.css";
import React, { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    }, { threshold: 0 });

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="portfolio-container">
        {/* Profile */}
        <div id="profile" className="section profile-section">
          <div className="profile-circle">
            <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
          </div>
          <h2>Welcome to My Portfolio</h2>
          <div className="links-section">
        <a href="/documents/portfolio.pdf" className="link-button" target="_blank" rel="noopener noreferrer">
      View Portfolio
          </a>
          <a href="/documents/transcript.pdf" className="link-button" target="_blank" rel="noopener noreferrer">
      View Transcript
        </a>
        </div>
        </div>
        
        {/* About Me */}
        <div id="about" className="section about-section">
          <h2>About Me</h2>
          <p>สวัสดีครับ ผมชื่อ นายปุญญพัฒน์ ไพบูลย์กุลกร</p>
          <p>เป็นนักศึกษาสาขาวิชา เทคโนโลยีอิเล็กทรอนิกส์(ECT)</p>
          <p>ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ(KMUTNB)</p>
          <p>ปัจจุบัน กำลังจะไปฝึกงานที่บริษัท โตเกียวมารีนประกันชีวิต (ประเทศไทย) จำกัด มหาชน</p>
          <p>สามารถดู Portfolio และ Transcript ด้านบน</p>
        </div>

        {/* Skills */}
<div id="skills" className="section skills-slider">
  <div className="skills-section">
    <h2 className="skills-title">My Skills</h2> {/* เพิ่มหัวข้อ My Skill */}
    <div className="skill-item">
      <img src="/images/java.jpg" className="skill-logo" alt="Skill 1" />
    </div>
    <div className="skill-item">
      <img src="/images/c.jpg" className="skill-logo" alt="Skill 2" />
    </div>
    <div className="skill-item">
      <img src="/images/python.jpg" className="skill-logo" alt="Skill 3" />
    </div>
    <div className="skill-item">
      <img src="/images/react.jpg" className="skill-logo" alt="Skill 4" />
    </div>
    <div className="skill-item">
      <img src="/images/vue.jpg" className="skill-logo" alt="Skill 5" />
    </div>
  </div>
</div>

        {/* Footer */}
        <footer id="contact" className="section footer">
          <h2>Contact Me</h2>
          <p>Email: dust.punyaphat@gmail.com</p>
          <p>Phone: 081-010-4349</p>
          <p></p>
          <div className="social-links">
            <a href="https://github.com/RyModkub" target="_blank" rel="noopener noreferrer">
              <img src="/images/github.png" alt="GitHub" />
            </a>
            <a href="https://www.facebook.com/bunyapat.p" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.jpg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/punyaphat_dust" target="_blank" rel="noopener noreferrer">
              <img src="/images/ig.png" alt="Instagram" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
