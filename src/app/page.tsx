import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <div id='headersection' className="header">
        <div className="background"></div>

        <Navbar />
        <br />
        <div className="inf">
          <h1>Reebaal Hussain</h1>
          <p>Full Stack</p>
          <p>Web Developer</p>
        </div><br />
        <div className="profile">
          <div className="back"></div>
          <img src="/asdfa.png" alt="" />
        </div>

      </div>
      <div className="container">
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardone'>
          <div className="first-mycard">
            <img src="https://www.openxcell.com/wp-content/uploads/2022/03/Banner-2-1.jpg" alt="" />
            <h4>Web3.0</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardtwo'>
          <div className="first-mycard">
            <img src="https://imgv3.fotor.com/images/blog-cover-image/Metaverse-logo-cover.jpg" alt="" />
            <h4>Metaverse</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardthree'>
          <div className="first-mycard">
            <img src="https://www.t-systems.com/resource/image/394762/ratio3x2/512/341/f527402ade8f228e872b68d135550991/A74D6CC3CFD3BC76C98A7FE0701381D0/im-blockchain-projects-cloud-02-2021.jpg" alt="" />
            <h4>Blockchain</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
      </div>
      <div className="container">
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardone'>
          <div className="first-mycard">
            <img src="https://assets.thehansindia.com/h-upload/2022/04/28/1289430-web-3.webp" alt="" />
            <h4>Web2.0</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardtwo'>
          <div className="first-mycard">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg" alt="" />
            <h4>AI</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardthree'>
          <div className="first-mycard">
            <img src="https://etimg.etb2bimg.com/photo/100342031.cms" alt="" />
            <h4>AWS</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
      </div>
      <div className="container">
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardone'>
          <div className="first-mycard">
            <img src="https://kinsta.com/de/wp-content/uploads/sites/5/2019/12/wordpress-rest-api-1024x512.jpg" alt="" />
            <h4>Rest Api</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardtwo'>
          <div className="first-mycard">
            <img src="https://codetime.co.il/wp-content/uploads/2022/07/api.jpg" alt="" />
            <h4>Graphql Api</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardthree'>
          <div className="first-mycard">
            <img src="https://miro.medium.com/v2/resize:fit:1358/1*4sncGoKHHXoFuV3msLEdtQ.png" alt="" />
            <h4>Server Less Api</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
      </div>
      <div className="container">
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardone'>
          <div className="first-mycard">
            <img src="https://freshysites.com/wp-content/uploads/FS-devicemock-shape-all-devices-2023-1024x656.jpg" alt="" />
            <h4>Web</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardtwo'>
          <div className="first-mycard">
            <img src="https://tedmob.com/storage/blogs/1178911636.jpg" alt="" />
            <h4>App</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
        <div className="mycard hover:animate-pulse transition-all cursor-pointer contrast-50 hover:contrast-100" id='cardthree'>
          <div className="first-mycard">
            <img src="https://media.wired.com/photos/627da1085d49787abdf713b4/191:100/w_1280,c_limit/Pakistani-Gamers-Want-a-Seat-at-the-Table-Culture-shutterstock_1949862841.jpg" alt="" />
            <h4>Game</h4>
          </div>
          <div className="back-mycard"></div>
          <div className="thid-mycard"></div>
        </div>
      </div>
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="cards">
        <div className="hover:animate-pulse card hover:cursor-pointer hover" ><img src="/icons8-web-64.png" alt="" /><h1 className="card-infs">Web3.0</h1></div>
        <div className="hover:animate-pulse card hover:cursor-pointer hover1" id="bottom" ><img src="/icons8-metaverse-64.png" alt="" /><h1 className="card-infs">Metaverse</h1></div>
        <div className="hover:animate-pulse card hover:cursor-pointer hover2" ><img src="/icons8-blockchain-64.png" alt="" /><h1 className="card-infs">Blockchain</h1></div>
      </div><br />
      <div className="cards" >
        <div className="hover:animate-pulse card hover:cursor-pointer hover" ><img src="/icons8-web2.0-64.png" alt="" /><h1 className="card-infs">Web2.0</h1></div>
        <div className="hover:animate-pulse card hover:cursor-pointer hover1" id="bottom" ><img src="/icons8-ai-100.png" alt="" /><h1 className="card-infs">AI</h1></div>
        <div className="hover:animate-pulse card hover:cursor-pointer hover2" ><img src="/icons8-AWS-64.png" alt="" /><h1 className="card-infs">AWS</h1></div>
      </div><br />
      <div className="cards" >
        <div className="hover:animate-pulse card hover:cursor-pointer hover" ><img src="/graphe.png" alt="" /><h1 className="card-infs">Rest Api</h1></div>
        <div className="hover:animate-pulse card hover:cursor-pointer hover1" id="bottom" ><img src="/rest.png" alt="" /><h1 className="card-infs">Graphql Api</h1></div>
        <div className="hover:animate-pulse card hover:cursor-pointer hover2" ><img src="/server.png" alt="" /><h1 className="card-infs">Server Less Api</h1></div>
      </div><br />
      <div className="cards" >
        <div className="hover:animate-pulse card hover:cursor-pointer hover" ><img src="/icons8-website-64.png" alt="" /><h1 className="card-infs">Web</h1></div>
        <div className="hover:animate-pulse card hover:cursor-pointer hover1" id="bottom" ><img src="/icons8-social-media-64.png" alt="" /><h1 className="card-infs">App</h1></div>
        <div className="hover:animate-pulse card hover:cursor-pointer hover2" ><img src="/icons8-gamer-64.png" alt="" /><h1 className="card-infs">Game</h1></div>
      </div> */}
      <section id='aboutsection' className="aboutMe">
        {/* <div className="left" data-aos="fade-left" data-aos-delay="100">
          <img src="/Untitled-1.png" alt="" />
        </div> */}
        <div className="left">
          <div className="backnew"></div>
          <img src="/Untitled-1.png" alt="" />
        </div>
        <div className="right">
          <div className="simpleTitle"><h1>AboutMe</h1></div>

          <p className='texta'>
            Hi, my name is <span className="name"> Reebaal Hussain </span>.<br />
            I am a highly ambitious, self-motivated, and driven Developer, Coder and Programmer working for RanaVerse.
          </p><br />
          <p className='textb'>
            I strated my career in 2019 and have been working in the field ever since. I am passionate about creating things. My love for creation began at an early age, where I would often be found sketching and drawing. Though I haven't had much time for sketching in the past two years due to my studies in software development, I have found that my passion for design has transformed into a digital form.
          </p><br />

          <p className='textc'>
            I believe that you should never stop growing and that's what I strive to do, I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my career takes me and am always open to new opportunities.
          </p><br />

          <a href="https://www.uplooder.net/img/image/21/c75db4663fa4c497ebd1634b00673852/resume-01.jpg" className="download">download my resume</a>
        </div>
      </section>
      <div id='projectssection' className="simpleTitle"><h1>Projects</h1></div>
      <section className="simples">
        <div className="simpleRow">
          <a href="https://ice-creams-shop.vercel.app/" target="_rana"><div className="simple hide" id="one"></div></a><br />
          <a href="https://al-madina-motors-rent-a-car-ranarabees.vercel.app/" target="_rana"><div className="simple hide" id="two"></div></a><br />
        </div>
        <div className="simpleRow">
          <div className="simpleTitlenew"><h1></h1></div>
          <a href="https://ranaverse.vercel.app/" target="_rana"><div className="simple" id="tree"></div></a><br />
          <a href="https://fullstack-ecommerce-site.vercel.app/" target="_rana"><div className="simple" id="for"></div></a><br />
        </div>
        <div className="simpleRow">
          <a href="https://all-in-one-shopping-mart.vercel.app/" target="_rana"><div className="simple hide " id="five"></div></a><br />
          <a href="https://latest-education-system.vercel.app/" target="_rana"><div className="simple hide" id="six"></div></a><br />
        </div>
      </section>
      {/* <section className="fotter-Section">
        <div className="bg-quote container flex items-center justify-center h-screen mx-auto">
          <h1 id="letsWORK" data-aos="fade-right" data-aos-delay="500">lets work <br /> together!</h1>
        </div>
      </section> */}
      <br /><br />
      <div id='footersection' className="fotter">
        <div className="background-fotter"></div>
        <img className='hover:animate-pulse' src="/logo.png" alt="" /><br />
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100088975870807"><div className="s-logo"><i className="fab fa-facebook"></i></div></a>
          <a href="https://twitter.com/RanaReebaal"><div className="s-logo"><i className="fab fa-twitter"></i></div></a>
          <a href="https://github.com/RanaReebaal"><div className="s-logo"><i className="fab fa-github"></i></div></a>
          <a href="https://www.linkedin.com/in/rana-rabees-064830251/"><div className="s-logo"><i className="fab fa-linkedin-in"></i></div></a>
        </div>
      </div>
    </div>
  )
}
