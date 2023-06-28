import './Portfolio.css'
import React, { useState } from 'react';
import axios from 'axios'
const Portfolio =()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://portfolio-tspe.onrender.com/userForm', {
        name: name,
        email: email,
        message:message
      });
      console.log("your request has submitted successfuly :",response.data)
      // Reset the form fields
      setName('');
      setEmail('');
      setMessage('')
    } catch (error) {
      console.error('Error creating userData:', error);
    }
}
    return (
        <body>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="icon">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="https://drive.google.com/file/d/1AJyP8oEaSbmJkKHAQVdmGWeD2Jc43Z-_/view?usp=sharing">Resume</a></li>
                        <li><a href="https://drive.google.com/file/d/1n9i3UD9-bI2y3dlNy-dM-zkTCjJpinxk/view?usp=sharing">IntroVideo</a></li>
                        <li><a href="#project-list">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            
            <section className="showcase-area" id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">MERN</h1>
                    <p>Stack Developer</p>
                    <p>I do My Best To Impress Myself Not To others</p>
                    <a href="#project-list" className="btn btn-primary">Projects</a>
                </div>
            </section>

            <section id="about">
                <div className="about-wrapper container">
                    <div className="about-text">
                        <p className="small">About </p>
                        <h2>Hey!</h2>
                        <p>
                            My name is Gaurav Pandey, and I am a BCA graduate from Makhanlal Chaturvedi University, Bhopal, completed in 2023.

                            I am currently undergoing training at FunctionUp since March 20th. During this training, I have gained knowledge and experience in various web development technologies.

                            I have a solid understanding of HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js, as well as the basics of C, Python, and PHP.

                            I am passionate about building user-friendly and visually appealing web applications. I enjoy working with cutting-edge technologies and continuously expanding my skill set to stay up-to-date with the latest industry trends.

                            Feel free to explore my portfolio to see some of the projects I have worked on.
                        </p>
                    </div>
                    <div className="about-img">
                        <img
                            src="https://media.licdn.com/dms/image/D5603AQHZU8DueWDS3A/profile-displayphoto-shrink_400_400/0/1678987705561?e=1692835200&v=beta&t=hhEMmKm91eiFvsorKUB5umoElSx4NwiLmp03rlOUzhY"
                            alt="Gaurav Pandey"
                        />
                    </div>
                </div>
            </section>
            {/* projects */}
            <section id="project-list">
                <h2 className="project-list-heading">Projects</h2>
                <div className="project-list-container container">
                    <div className="project-list-item">
                        <div className="project-img">
                            <a href="https://github.com/GauravPandey123webdeveloper/bookManagement.git"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7r9iyn0MxOzVW3kvQmTd3T1mhu_qfahkJw&usqp=CAU"
                                alt="" /></a>
                        </div>
                        <div className="project-description">
                            <h2 className="project-titile">Book Management</h2>
                            <p>
                            This book management project utilizes MongoDB as the database, Express.js and Node.js for server-side development, and JavaScript. It enables efficient organization, storage, and retrieval of book data, offering seamless management capabilities for a comprehensive library system.
                            </p>
                            <p className="project-price">Date:  06/2023 - 06/2023</p>
                        </div>
                    </div>

                    <div className="project-list-item">
                        <div className="project-img">
                            <a href="https://github.com/GauravPandey123webdeveloper/open-to-intern.git"><img src="https://thumbs.dreamstime.com/b/internship-icon-136489451.jpg"
                                alt="error" /></a>
                        </div>
                        <div className="project-description">
                            <h2 className="project-titile">Open to intern</h2>
                            <p>
                            The Open-to-Intern project is a platform that connects multiple universities and students, facilitating seamless data management. It enables universities to maintain and share essential information, empowering students to explore internship opportunities and collaborate on a global scale.
                            </p>
                            <p className="project-price">Date: 06/2023 - 06/2023</p>
                        </div>
                    </div>
                    <div className="project-list-item">
                        <div className="project-img">
                            <a href="https://github.com/GauravPandey123webdeveloper/url-shortening-.git"><img
                                src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/url-shortener.jpg' alt="" /></a>
                        </div>
                        <div className="project-description">
                            <h2 className="project-titile">Url shortener</h2>
                            <p>
                            The URL shortener project provides a solution to condense lengthy URLs into shorter, more manageable links. It leverages MongoDB, Express.js, Node.js, and JavaScript to create a platform that efficiently generates and maintains compact URLs, enhancing convenience and usability in online sharing and navigation.
                            </p>
                            <p className="project-price">Date: 05/2023 - 05/2023</p>
                        </div>
                    </div>
                    <div className="project-list-item">
                        <div className="project-img">
                            <a href="https://github.com/GauravPandey123webdeveloper/ChatBot.git"> <img
                                src="https://img.freepik.com/premium-vector/chat-bot-vector-logo-design-concept_418020-241.jpg" alt="" /></a>
                        </div>
                        <div className="project-description">
                            <h2 className="project-titile">Chat bot</h2>
                            <p>
                            The chatbot project incorporates HTML, CSS, MongoDB,socket.io, Express.js, Node.js, and JavaScript to create an interactive chat platform. It enables users to communicate with each other in real-time, utilizing a visually appealing design while seamlessly integrating database functionality for enhanced user experience and data management.
                            </p>
                            <p className="project-price">Date: 05/2023 - 05/2023</p>
                        </div>
                    </div>
                    <div className="project-list-item">
                        <div className="project-img">
                            <a href="https://github.com/GauravPandey123webdeveloper/mini-blogging-site.git"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFw0eA7zNJdUQ4TGLnc1erHT1R7zORXkW6lW9bkQDCKoiqglo5sOqi4mnY60M7cqKyVNY&usqp=CAU" alt="" /></a>
                        </div>
                        <div className="project-description">
                            <h2 className="project-titile">Mini Blogging Website </h2>
                            <p>
                            The mini blogging website project utilizes MongoDB, Express.js, Node.js, and JavaScript to create a platform for users to share and publish short blog posts. It provides a streamlined interface for writing, storing, and displaying blog content, offering an efficient solution for micro-blogging needs.
                            </p>
                            <p className="project-price">Date: 05/2023 - 05/2023</p>
                        </div>
                    </div>
                    <div className="project-list-item">
                        <div className="project-img">
                            <a href="https://github.com/GauravPandey123webdeveloper/collegeProject/tree/Mycollege"> <img
                                src="https://content.jdmagicbox.com/comp/farrukhabad/q2/9999p5692.5692.180331130704.k5q2/catalogue/utkarsh-academy-farrukhabad-farrukhabad-96nq4ieij1-250.jpg" alt="" /></a>
                        </div>
                        <div className="project-description">
                            <h2 className="project-titile"><a href="https://utkarshacademebca.000webhostapp.com/"> Utkarsh Academy</a></h2>
                            <p>
                            The Utkarsh Academy website, a BCA college platform, is developed using HTML, CSS, JavaScript, PHP, and MySQL. It offers comprehensive information about the college, programs, faculty, and facilities, providing a user-friendly interface for students and visitors.
                            </p>
                            <p className="project-price">Date: 04/2023 - 04/2023</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="contact-container container">
                    <div className="contact-img">
                        <img src="https://dresma.ai/wp-content/uploads/2022/01/Back-End-Developer-Node-JS-2.gif" alt="" />
                        
                    </div>

                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <h2>Contact </h2>
                            <a href="https://www.linkedin.com/in/gaurav-pandey-00b75126a/">LinkedIn</a> 
                            
                            <a href="https://github.com/GauravPandey123webdeveloper">GitHub</a>
                            <input type="text" placeholder="Your Name" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                            <input type="email" placeholder="E-Mail" value={email}
                           onChange={(e) => setEmail(e.target.value) } required/>
                            <textarea cols="30" rows="6" placeholder="Type Your Message" value={message}
                           onChange={(e) => setMessage(e.target.value) }required ></textarea>
                            <input className="btn btn-primary" type="submit" name="submit" />
                        </form>
                    </div>
                    <div className="showcase-container">
                    <a href="#top" className="btn btn-primary">Go to Top</a>
                </div>
        
                </div>
            </section>
            
            <footer id="footer">
                <h2>Gaurav Pandey &copy; all rights reserved</h2>
            </footer>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </body>
    )
}
export default Portfolio
