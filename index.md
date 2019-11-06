<!DOCTYPE html>
<html>
	<head>
		<title>Natalie Aldrich Web Portfolio</title>
		<link href="https://fonts.googleapis.com/css?family=Calligraffitti|Raleway" rel="stylesheet">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
	</head>
	<style>
		

		body {
			/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000114+0,0f0054+49,0f0054+49,5f0077+83,cc2e85+100 */
background: rgb(0,1,20); /* Old browsers */
background: -moz-linear-gradient(top, rgba(0,1,20,1) 0%, rgba(15,0,84,1) 49%, rgba(15,0,84,1) 49%, rgba(95,0,119,1) 83%, rgba(204,46,133,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(0,1,20,1) 0%,rgba(15,0,84,1) 49%,rgba(15,0,84,1) 49%,rgba(95,0,119,1) 83%,rgba(204,46,133,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(0,1,20,1) 0%,rgba(15,0,84,1) 49%,rgba(15,0,84,1) 49%,rgba(95,0,119,1) 83%,rgba(204,46,133,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000114', endColorstr='#cc2e85',GradientType=0 ); /* IE6-9 */
		width: 100%;
		overflow-x: auto;
		
		}
		

		h1,h2,h3, .navbar-brand {
			font-family: "Calligraffitti";

		}

		nav a {
			color: #a3faff;
		}

		.navbar-brand{
			font-size: 40px;
			font-weight: 700;
		}

		.navbar-toggle .icon-bar {
    background-color: #fff;
}


		h1 {
			font-size: 70px;
			letter-spacing: .5px;
			font-weight: 300;
			color: #a3faff;
		}

		h2 {
			font-size: 50px;
			color: #ffedaa;
			text-align: center;
			padding: 50px 0;
			
		}

		h3 {
			font-size: 30px;
			color: white;
			
		}

		a,p {
			font-family: "Raleway";
		}

		a {
			text-decoration: none;


		}

		a:hover {
			text-decoration: none;
			
		}

		p{
			color: white; 
		}
		
		#toggledContent a{
			color: white;
		}

		#toggledContent a:hover {
			color: #ffedaa;
			transition: color .5s ease;
		}

		#projects {
			display: flex;
			justify-content: space-around;

		}


		#projects nav a{
			display: block;
			padding-right: 20px;

		}

		@media (max-width: 765px) and (min-width: 700px) {
			#projects {
				flex-direction: column;
				height: 300px;
				flex-wrap: wrap;
				justify-content: flex-start;
				padding-left: 25%;

			}

			#projects nav {
				padding-bottom: 20px;
			}

		}


		@media (max-width: 699px) and (min-width: 535px){
			#projects {
				flex-direction: column;
				height: 300px;
				flex-wrap: wrap;
				justify-content: flex-start;
			}



			#projects nav {
				width: 100%;
				padding-bottom: 20px;
				padding-left: 20px;
				text-align: center;

			}

			h3 {
				
				width: 100%;
				text-align: center;
			}
			/*.too-long {
			width: 280px;
			text-align: center;
		}*/

		}
		

		@media (max-width: 534px) {
			#projects {
				flex-direction: column;
				height: 450px;
				width: 350px;
				margin: auto;
				flex-wrap: wrap;
				justify-content: flex-start;
			}



			#projects nav {
				width: 100%;
				padding-bottom: 20px;

				text-align: left;

			}

			#projects nav a {
				width: 190px;
				padding-bottom: 10px;
			}

			h3 {
				
				width: 100%;
				text-align: left;
				margin-left: 40px;
			}

		}

		#skills {
			display: flex;
			justify-content: space-around;
			background: rgba(255,255,255,.2);
			
		}

		#skills ul {
			display: flex;
			flex-wrap: wrap-reverse;
			list-style-type: none;
			justify-content: space-around;

			
		}

		#basics {
			width: 150px;

		}

		#additional {
			width: 200px;
		}

		#assembly {
			width: 200px;
		}

		#adobe {
			width: 200px;
		}

	    #skills ul li img{
	    	height: 75px;
	    	padding: 10px 0 ;

	    }

	    #about {
	    	width: 80%;
	    	margin: auto;
	    }

	    footer nav {
	    	display: flex;
	    	justify-content: center;
	    }

	    footer nav a {
	    	padding: 5px;
	    }
	</style>
	<body>
		<nav class="navbar navbar-dark navbar-expand-md ">
			
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggledContent" aria-controls="toggledContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span></button>	
			<a class="navbar-brand" href="#">
				Natalie Aldrich
			</a>
			<div class="collapse navbar-collapse" id="toggledContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item"> <a class="nav-link" href="#projects"> Projects</a></li>
				<li class="nav-item"> <a class="nav-link" href="#skills"> Skills</a></li>
				<li class="nav-item"> <a class="nav-link" href="#about"> About</a></li>
				<li class="nav-item"> <a class="nav-link" href="#contact"> Contact</a></li>
			</ul>
		</div>
			
		</nav>
	
		<h2>Projects</h2>
		<section id="projects">
			
			<div id="styling">
			<h3>Styling</h3>
			<nav id="proj-2018">
				<a href="umass-keys/index.html"> Keys For Kids </a>
				<a href="typography-assignment/index.html">Typography Project</a>
				<a href="new-dfl-db-page/new-databases.html"> Resources and Databases Page</a>
				
				<a href="html-class/index.html"> HTML Class Index</a>
				<a href="html-class/tutorialindex.html"> HTML Textbook Exercise Index </a>
  				<a href="xml-class/index.html"> XML Textbook Exercise Index</a>	
				
			</nav>
			</div>
			<div id="logic">
			<h3>Logic</h3>
			<nav id="proj-2017">
				<a href="https://nataliealdrich.github.io/etch-a-sketch/">Etch-A-Sketch</a>
				<a href="https://nataliealdrich.github.io/rock-paper-scissors/">Rock Paper Scissors (Unstyled)</a>
				<a href="js-class/Project/project.html">Javascript & jQuery Project</a>
				<a href="js-class/index.html" class="too-long">Javascript & jQuery Textbook Exercise Index</a>
				<!--<a href="#">Animation Test</a>
				<a href="#">Sondheim</a>
				<a href="#">React Mad Libs</a>-->
			</nav>
			</div>
			
		</section>
		<h2>Skills</h2>
		<section id="skills">
			
			<ul id="basics">
				<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png" id="css3" alt="css3"/></li>
                <li><img src="https://lorecentral.b-cdn.net/wp-content/uploads/2017/11/Javascript-shield.png" id="js" alt="javascript" /></li>
				<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" id="html5" alt="html5"/></li>
                
			</ul>

			<ul id="additional">
				 <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" id="bootstrap" alt="bootstrap" /></li>
                <li><img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" id="sass" alt="sass" /></li>
                <li><img src="http://pluspng.com/img-png/jquery-logo-png--800.gif" id="jquery" alt="jquery" /></li>
                 <li> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" id="react" alt="react.js" /></li>
			</ul>

			<ul id="assembly">
				<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Antu_x-terminal-emulator.svg/512px-Antu_x-terminal-emulator.svg.png" id="command-line" alt="command line" /></li>
				<li><img src="https://azure.microsoft.com/svghandler/sql-database?width=600&height=315" id="sql" alt="sql" /></li>
				<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/2000px-Git-logo.svg.png" id="git" alt="git"/></li>
				
			</ul>

			<ul id="adobe">
				<li><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Adobe_Dreamweaver_CS6_Icon.png" id="dreamweaver" alt="adobe dreamweaver"/></li>
                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2000px-Adobe_Illustrator_CC_icon.svg.png" id="illustrator" alt="adobe illustratot"/></li>
				<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/2000px-Adobe_Photoshop_CS6_icon.svg.png" id="photoshop" alt="adobe photoshop" /></li>
                
			</ul>


            <!-- <ul id="logic">
             	
                
               <li><img src="https://upload.wikimedia.org/wikipedia/de/thumb/5/51/JQuery_UI-Logo.svg/2000px-JQuery_UI-Logo.svg.png" id="jquery-ui" alt="jquery ui" /></li>  
               
                
                <li>AJAX</li>
                <li>XML</li>
                <li>Coldfusion</li>
			</ul> -->
		
		</section>
		<section id="about">
			<h2>About</h2>
			
			<p>I graduated from The Boston Conservatory (now The Boston Conservatory at Berklee School of Music) in 2014 with a Bachelor of Music in Voice Performance. I have been singing with the Tanglewood Festival Chorus for the Boston Symphony Orchestra and the Boston Pops since February 2015.</p> 

		  	<p>Though music, especially singing, has been an important part of my life for many years, I have also been passionate about the internet for a considerable amount of time. I’d been dabbling with rudimentary HTML elements since I was in middle school, and in 2015, I decided I wanted to seriously invest my time in learning how to code for the web. </p>

		  	<p>I received my Certificate in Web Development and Web Design from UMass Lowell in February 2017. Though I began the program in January 2016, I have been using external resources such as CodeAcademy and Lynda since August 2015. I’ve found these two resources to be integral for both introducing new concepts in coding and helping in establishing more familiar ones.   </p>

		  	<p>I enjoy web development because it allows me to tap into the more logic-driven part of my mind that isn’t always required in the world of music performance, while at the same time giving me a chance to work with a compositional language, which is what music notation is at its core. I find working with the front end especially rewarding because the way the developer is required to piece together visual elements on a website is very much like assembling a jigsaw puzzle. I’m looking forward to continuing to learn and grow in this field.   
		  	</p>
		 

		</section>
		<footer id="contact">
			<nav>
				<a href="https://www.linkedin.com/in/natalie-aldrich-7b0522144/">LinkedIn</a>
				<a href="NatalieAldrichWebResume.pdf">Resumé</a>
				<a href="https://github.com/nataliealdrich">Github</a>
				<a href="mailto:n.aldrich827@gmail.com">Email</a>
			</nav>
		</footer>
	 
	</body>
</html>