import "./Portfolio.css";
import React, { useEffect,useState  } from "react";

const Portfolio = () => {
  const [language, setLanguage] = useState("TH");

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  
      // อัปเดต URL โดยไม่ reload หน้า
      if (window.location.hash !== `#${sectionId}`) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // เวลาหน่วงเล็กน้อยเพื่อให้ DOM โหลดเสร็จ
      }
    }
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    }, { threshold: 0.1 });

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

  const text = {
    TH: {
      profile: "โปรไฟล์",
      about: "เกี่ยวกับฉัน",
      skills: "ทักษะ",
      experience: "ประสบการณ์",
      projects: "งานของฉัน",
      contact: "ติดต่อ",
      welcome: "ยินดีต้อนรับสู่ My Web Portfolio ของฉัน",
      aboutMe: "เกี่ยวกับฉัน",
      aboutContent: [
        "สวัสดี! ผมชื่อ นายปุญญพัฒน์ ไพบูลย์กุลกร",
        "เป็นนักศึกษาสาขาวิชา เทคโนโลยีอิเล็กทรอนิกส์ (ECT)",
        "ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)",
        "ปัจจุบันกำลังจะไปฝึกงานที่บริษัท โตเกียวมารีนประกันชีวิต (ประเทศไทย) จำกัด มหาชน"
      ],
      mySkills: "ทักษะของฉัน",
      contactMe: "ติดต่อฉัน",
      email: "อีเมล",
      phone: "เบอร์โทรศัพท์",
      portfolio: "ดู Portfolio",
      transcript: "ดู Transcript",
    },
    EN: {
      profile: "Profile",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "My Projects",
      contact: "Contact",
      welcome: "Welcome to My Web Portfolio",
      aboutMe: "About Me",
      aboutContent: [
        "Hello! My name is Punyaphat Paiboonkulakorn",
        "I am a student majoring in Electronics and Communication Technology (ECT)",
        "at King Mongkut's University of Technology North Bangkok (KMUTNB)",
        "Currently, I am about to intern at Tokyo Marine Life Insurance (Thailand) Public Company Limited"
      ],
      mySkills: "My Skills",
      contactMe: "Contact Me",
      email: "Email",
      phone: "Phone",
      portfolio: "View Portfolio",
      transcript: "View Transcript",
    },
    JP: {
      profile: "プロフィール",
      about: "私について",
      skills: "スキル",
      experience: "経験",
      projects: "プロジェクト",
      contact: "連絡先",
      welcome: "私のWebポートフォリオへようこそ",
      aboutMe: "私について",
      aboutContent: [
        "こんにちは！私の名前はプニヤパット・パイブーンクラーンです",
        "私は電子通信技術（ECT）専攻の学生です",
        "キングモンクット工科大学北バンコク（KMUTNB）に通っています",
        "現在、東京海上生命保険（タイランド）株式会社でインターンシップを予定しています"
      ],
      mySkills: "スキル",
      contactMe: "連絡先",
      email: "メール",
      phone: "電話番号",
      portfolio: "ポートフォリオを見る",
      transcript: "成績証明書を見る",
    },
    
  };
    return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        {/* เมนูซ้าย: เลือกหน้า */}
        <ul className="nav-left">
        <li><a href="#profile" onClick={(e) => handleNavClick(e, "profile")}>{text[language].profile}</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>{text[language].about}</a></li>
        <li><a href="#experience" onClick={(e) => handleNavClick(e, "experience")}>{text[language].experience}</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>{text[language].skills}</a></li> 
        <li><a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>{text[language].projects}</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>{text[language].contact}</a></li>
        </ul>

        {/* เมนูขวา: Dropdown เลือกภาษา */}
        <div className="nav-right">
          <select onChange={(e) => setLanguage(e.target.value)} value={language}>
            <option value="TH">🇹🇭 ไทย</option>
            <option value="EN">🇬🇧 English</option>
            <option value="JP">🇯🇵 日本語</option>
          </select>
        </div>
      </nav>

      <div className="portfolio-container">
        {/* Profile Section */}
        <div id="profile" className="section profile-section">
          <div className="profile-circle">
            <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
          </div>
          <h2>{text[language].welcome}</h2>
          <div className="links-section">
            <a href="/documents/portfolio.pdf" className="link-button" target="_blank" rel="noopener noreferrer">
              {text[language].portfolio}
            </a>
            <a href="/documents/transcript.pdf" className="link-button" target="_blank" rel="noopener noreferrer">
              {text[language].transcript}
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div id="about" className="section about-section">
          <h2>{text[language].aboutMe}</h2>
          {text[language].aboutContent.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

        {/* Experience Section */}
<div id="experience" className="section experience-section">
  <h2>{text[language].experience}</h2><br></br>
  <div className="experience-container">
    <div className="experience-item">
    <p>Intern</p>
      <img src="/images/tot.jpg" alt="TOT Samut Songkhram" className="experience-image" />
      <p>TOT Customer Service Center, Samut Songkhram</p>
    </div>
    <div className="experience-item">
    <p>Intern</p>
      <img src="/images/softdebut.jpg" alt="Soft De'but Co.,Ltd." className="experience-image" />
      <p>Soft De'but Co.,Ltd.</p>
    </div>
  </div>
</div>

        {/* Skills Section */}
        <div id="skills" className="section skills-slider">
          <h2>{text[language].mySkills}</h2>
          <div className="skills-section">
            <div className="skill-item">
              <img src="/images/java.jpg" className="skill-logo" alt="Java" />
            </div>
            <div className="skill-item">
              <img src="/images/c.jpg" className="skill-logo" alt="C" />
            </div>
            <div className="skill-item">
              <img src="/images/python.jpg" className="skill-logo" alt="Python" />
            </div>
            <div className="skill-item">
              <img src="/images/react.jpg" className="skill-logo" alt="React" />
            </div>
            <div className="skill-item">
              <img src="/images/vue.jpg" className="skill-logo" alt="Vue" />
            </div>
          </div>
        </div>
        
{/* Projects Section */}
<div id="projects" className="section projects-section">
  <h2>{text[language].projects}</h2>
  <div className="projects-container">
    <div className="project-item">
      <h3>Vue.js Presentation Website</h3>
      <div className="project-images">
        <img src="/images/vue1.jpg" alt="Vue.js Project 1" />
        <img src="/images/vue2.jpg" alt="Vue.js Project 2" />
        <img src="/images/vue3.jpg" alt="Vue.js Project 3" />
      </div>
      <p>เว็บไซต์แนะนำ Vue.js พร้อมโค้ดตัวอย่างและการใช้งานจริง</p>
    </div>

    <div className="project-item">
      <h3>Visitor Information Management Web App</h3>
      <div className="project-images">
        <img src="/images/contact1.jpg" alt="Contact App 1" />
        <img src="/images/contact2.jpg" alt="Contact App 2" />
        <img src="/images/contact3.jpg" alt="Contact App 3" />
      </div>
      <p>เว็บแอปสำหรับจัดการรายชื่อติดต่อ</p>
    </div>
  </div>
</div>


        {/* Contact Section */}
        <footer id="contact" className="section footer">
          <h2>{text[language].contactMe}</h2>
          <p>{text[language].email}: dust.punyaphat@gmail.com</p>
          <p>{text[language].phone}: 081-010-4349</p>
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