import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom';

const Home = () =>  (
			<div className="main-content home">
			<h2>Front End Course Directory</h2>
			<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
			<p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
			<p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
			<hr />
        
      </div>
    )
    
const About = (props) =>  (
      <div className="main-content">
      <h2>About</h2>
      <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
        visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
        topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
      </div>
    )

const Teachers = (props) => {
  
    return (
      <div className="main-content">
        <h2>Teachers</h2>
        <ul className="group">
          <li className="teacher">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png" alt="" />
            
              <h3 className="title">Angie McAngular</h3>
              <p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
          
          </li>
          <li className="teacher">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png" alt="" />
            
              <h3 className="title">NodeStradamus</h3>
              <p>'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
          
          </li>
        
          <li className="teacher">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png" alt="" />
            
              <h3 className="title">Geo 'Lo' Cation</h3>
              <p>Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.</p>
          
          </li>
          <li className="teacher">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png" alt="" />
            
              <h3 className="title">Ecma Scriptnstuff</h3>
              <p>Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.</p>
          
          </li>
      
      
          <li className="teacher">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png" alt="" />
            
              <h3 className="title">Jay Query</h3>
              <p>Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.</p>
          
          </li>
          <li className="teacher">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png" alt="" />
            
              <h3 className="title">Json Babel</h3>
              <p>All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
            
          </li>
        
        </ul>
      </div>
      );
    }

const HTML =  () => {
  let htmlCourse = [
            {
                imgSrc: "https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png",
                title: "How to Make a Website",
                content: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."
            },
            {
                imgSrc: "https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png",
                title: "HTML Forms",
                content: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis."
            },
            {
                imgSrc: "https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png",
                title: "HTML Video and Audio",
                content: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text."
            },
            {
                imgSrc: "https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png",
                title: "SVG Basics",
                content: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density."
            },
            {
                imgSrc: "https://achievement-images.teamtreehouse.com/badges_html_respimages_stage2.png",
                title: "Responsive Images",
                content: " Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible."
            },
            {
                imgSrc: "https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png",
                title: "Introduction to HTML and CSS",
                content: "Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like."
            }
        ];
    return (
    htmlCourse.map((item, index) => {
      return <div><ul> <li key={index} className="course media group">
        <img src={item.imgSrc} className="course-img" />
        <div><h3>{item.title}</h3>
          <p>{item.content}</p></div>
      </li> </ul> </div>
    })
    );
}
const CSS =  () => {
  let cssCourse = [{
                        imgSrc: "https://achievement-images.teamtreehouse.com/badges_css_basics_stage6.png",
                        title: "CSS Basics",
                        content: "CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites."
                    },
                    {
                        imgSrc: "https://achievement-images.teamtreehouse.com/badges_css_selectors_stage01.png",
                        title: "CSS Selectors",
                        content: "In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements."
                    },
                    {
                        imgSrc: "https://achievement-images.teamtreehouse.com/badges-CSS-ResponsiveLayouts-stage3.png",
                        title: "Responsive Layouts",
                        content: "Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design."
                    },
                    {
                        imgSrc: "https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage1.png",
                        title: "CSS Flexbox Layout",
                        content: "Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!"
                    },
                    {
                        imgSrc: "https://achievement-images.teamtreehouse.com/css-transitions-and-transforms-badge-02.png",
                        title: "CSS Transitions and Transforms",
                        content: "CSS transitions and transforms can create simple animations that enhance user interactions in websites and apps. In this course, you'll build an interactive image gallery using CSS transitions and transforms."
                    }, {
                        imgSrc: "https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage01.png",
                        title: "Bootstrap 4 Basics",
                        content: "Learn to use Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time."
                    }
                ];
    return (
    cssCourse.map((item, index) => {
      return <div><ul> <li key={index} className="course media group">
        <img src={item.imgSrc} className="course-img" />
        <div><h3>{item.title}</h3>
          <p>{item.content}</p></div>
      </li> </ul> </div>
    })
  )
}
const JS =  () => {
  let jsCourse = [{
                      imgSrc: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png",
                      title: "JavaScript Basics",
                      content: "JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language."
                  },
                  {
                      imgSrc: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png",
                      title: "JavaScript Loops, Arrays and Objects",
                      content: "Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items."
                  },
                  {
                      imgSrc: "https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage1.png",
                      title: "jQuery Basics",
                      content: "jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on."
                  },
                  {
                      imgSrc: "https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage3.png",
                      title: "AJAX Basics",
                      content: "AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server."
                  },
                  {
                      imgSrc: "https://achievement-images.teamtreehouse.com/bagdes-javascript-interactiveweb-stage-12.png",
                      title: "Interactive Web Pages with JavaScript",
                      content: "In this course we’ll create a to-do list application using JavaScript alone, without using any third party libraries. You’ll get to grips with manipulating and traversing the DOM and adding event handlers to web page elements. The things that you can do with JavaScript are always increasing and this course will give you a solid footing going forward."
                  },
                  {
                      imgSrc: "https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage1.png",
                      title: "Node.js Basics",
                      content: "In this course we will create a command line application to retrieve user's profile information from the Treehouse website. We'll be writing our application in JavaScript to run on the Node.js platform."
                  }
              ];
    return (
    jsCourse.map((item, index) => {
      return <div><ul> <li key={index} className="course media group">
        <img src={item.imgSrc} className="course-img" />
        <div><h3>{item.title}</h3>
          <p>{item.content}</p></div>
      </li> </ul> </div>
    })
    );
}

const Courses = () => {
  return (
     <div className="main-content courses">
         <div className="course-header group"><h3>Courses</h3>
         <ul className="course-nav"> 
            <li>  <NavLink exact to="/courses/html"> HTML </NavLink> </li>
            <li>  <NavLink to="/courses/css"> CSS </NavLink> </li>
            <li>  <NavLink to="/courses/javascript"> JavaScript </NavLink> </li>            
         </ul>
    </div><br/><br/>
         <Switch> 
           <Route exact path= "/courses" 
                  render={()=><Redirect to="/courses/html" /> } />
           <Route path = "/courses/html" component = {HTML}/>
           <Route path = "/courses/css" component = {CSS}/>
           <Route path = "/courses/javascript" component = {JS}/>
         </Switch>
     </div>
  );   
}

const App = () => (
  <BrowserRouter>
  <div className="container">
      <header>
      <span className="icn-logo">
				<i className="material-icons">code</i>
        {/* <img alt="" src="logo.PNG"/> */}
                   
			</span>
            <ul className="main-nav">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li> 
              <li><NavLink to="/teachers">Teachers</NavLink></li> 
              <li><NavLink to="/courses">Courses</NavLink></li> 
            </ul>
      </header>
      <hr/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" render={ () => <About title='About' /> } />
         <Route path="/teachers" component={Teachers}/> 
         <Route path="/courses" component={Courses}/> 
         
         <Route component={Home}/>
      </Switch>
    </div>
  </BrowserRouter>
)
export default App;
