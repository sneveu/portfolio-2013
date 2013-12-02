
define(["backbone"],function (Backbone) {
	var model = Backbone.Collection.extend({

		PAGES: {
			HOME: "HOME",
			ABOUT: "ABOUT",
			WORKLIST: "WORKLIST",
			WORKPIECE: "WORKPIECE"
		}

	});

	return new model([
		{
			id:"lucille",
			colour:"#ec6840",
			textColour:"#ec6840",
			bgColor:"#000000",
			thumbImage:"img/work/lucille.jpg",

			title:"Lucille",
			images: [
				"img/work/lucille/lucille_2.jpg",
				"img/work/lucille/lucille_1.jpg",
				"img/work/lucille/lucille_3.jpg"
			],
			notes: [
				"&#9588; <a href=\"http://lucille.co.nz\" target=\"_blank\">http://lucille.co.nz</a>",
				"&#9588; Responsive"

			],
			roles: [
				"Branding",
				"Design",
				"Development"
			],
			project_info: [
				"A new furniture refinishing business Lucille required branding design and a website to create an online brand identity.",
				"The website is a one page site with a seperate page for the blog. The client wanted to develop the blog seperately to include further content, whilst maintaining consistency across the brand experience."
			]
		},

		{
			id:"pacific_screen",
			colour:"#232C39",
			textColour:"#232C39",
			bgColor:"#000000",
			thumbImage:"img/work/pacificScreen.jpg",


			title:"Pacific Screen",
			images: [
				"img/work/pacificscreen/pacificscreen_1.jpg",
				"img/work/pacificscreen/pacificscreen_2.jpg",
				"img/work/pacificscreen/pacificscreen_3.jpg"
			],
			notes: [
				"&#9588; <a href=\"http://pacificscreen.com\" target=\"_blank\">http://pacificscreen.com</a>"

			],
			roles: [
				"Design",
				"Development"
			],
			project_info: [
				"A local camera crewing and production company that needed a revamp of their website that was a better representation of their business.",
				"I wanted the site to reflect the friendly approachable people that they are while showcasing their work."
			]
		},

		{
			id:"camry_effect",
			colour:"#312727",
			textColour:"#f6a544",
			bgColor:"#000000",
			thumbImage:"img/work/camry.jpg",

			title:"The Camry Effect",
			images: [
				"img/work/camryeffect/camryeffect_1.jpg",
				"img/work/camryeffect/camryeffect_2.jpg",
				"img/work/camryeffect/camryeffect_3.jpg"
			],
			notes: [
				"&#9588; <a href=\"http://camryeffect.com\" target=\"_blank\">http://camryeffect.com</a>",
				"&#9588; Worked on with <a href=\"http:resn.co.nz\" target=\"_blank\">Resn</a>",
				"&#9588; Responsive",
				"&#10032; Won an <a href=\"http://www.thefwa.com/site/tha-camry-effect\" target=\"_blank\">FWA</a> and <a href=\"http://www.thefwa.com/mobile/the-camry-effect-8lc\" target=\"_blank\">FWA Mobile</a>",
				"&#10032; Won an <a href=\"http://www.awwwards.com/web-design-awards/the-camry-effect\" target=\"_blank\">Awwward</a>",
				"&#10032; Won Gold at the <a href=\"http://bestawards.co.nz/entries/interactive/the-camry-effect/\" target=\"_blank\">Best Awards</a>",
				"&#10032; On Google's <a href=\"http://www.creativesandbox.com/case-study/toyota-the-camry-effect\" target=\"_blank\">Creative Sandbox</a>",

			],
			roles: [
				"Integration",
				"Front-End Development"
			],
			project_info: [
				"Camry Owners across the United States were asked to share their stories, their experiences, and their special moments that happened behind the wheel, creating a social network of Toyota Camry owners. ",
				//"The website was built to be responsive so it works flawlessly across all devices.",
				"My job was to take the designs and create templates from them ready for some back-end love, as well as integrating assets into Flash and helping on the design when needed.",
				"Yes, I do now have a Camry."
			]
		},
		// {
		//     id:"resn_mobile",
		//     colour:"#0b0b0b",
		//     textColour:"#0b0b0b",
		//     bgColor:"#000000",
		//     thumbImage: "img/work/resnMobile.jpg",

		//     title:"Resn Mobile",
		//     images: [
		//         "CDN_PATH/img/projects/NZTA/slide_1.jpg",
		//         "CDN_PATH/img/projects/NZTA/slide_2.jpg",
		//         "CDN_PATH/img/projects/NZTA/slide_3.jpg"
		//     ],
		//     roles:"GAME MECHANICS, DESIGN, DEVELOPMENT, AUDIO",
		//     project_info: [
		//         "A revamp of the standard public service announcement to reach the 16-24 yr old male audience in New Zealand.",
		//         "This is a high energy console style racing game which ties in to facebook connect for a personalized emotional experience.",
		//         "Once the user signs in and plays the game they’re forced to crash at the 60 sec mark to force an impactful crash/flashback experience pulling in the user’s photos to show them that “You only get one life, slow down."
		//     ]
		// },
		{
			id:"face_arcade",
			colour:"#cf2424",
			textColour:"#cf2424",
			bgColor:"#000000",
			thumbImage:"img/work/faceArcade.jpg",

			title:"Face Arcade Beta",
			images: [
				"img/work/facearcade/facearcade_2.jpg",
				"img/work/facearcade/facearcade_1.jpg",
				"img/work/facearcade/facearcade_3.jpg"
			],
			notes: [
				"&#9588; <a href=\"http://facearcade.resn.co.nz\" target=\"_blank\">http://facearcade.resn.co.nz</a>",
				"&#9588; Worked on with <a href=\"http://resn.co.nz\" target=\"_blank\">Resn</a>",
				"&#10032; Won an <a href=\"http://www.thefwa.com/site/face-arcade-beta\" target=\"_blank\">FWA</a>",
				"&#10032; Won a <a href=\"http://www.pixelawards.com/nom_win_2012.php\" target=\"_blank\">Pixel Award</a>",
				"&#10032; On Google's <a href=\"http://www.creativesandbox.com/case-study/resn-face-arcade\" target=\"_blank\">Creative Sandbox</a>"

			],
			roles: [
				"Design",
				"Integration",
				"Development"
			],
			project_info: [
				"Face Arcade Beta is a set of four multi-player (up to 10 people!) mini-games played in Google Hangouts using only your face.",
				"I was challenged to develop a game called Hypno Cat, in one day. The aim was to unscrew your feline friends head by making it follow a rasher of dripping bacon controlled by your face. I also worked on Noddy Nelly, a race to the finish line where you play jockey with your noggin.",
				"I was in charge of the design and development of the landing page, built to give people a look into the craziness of Face Arcade without actually having to gather friends and create a Hangout."
			]
		},
		{
			id:"rhizopods",
			colour:"#5fdcac",
			textColour:"#adfaff",
			bgColor:"#000000",
			thumbImage:"img/work/rhizopods.jpg",

			title:"Rhizopods",
			images: [
				"img/work/rhizopods/rhizopods_1.jpg",
				"img/work/rhizopods/rhizopods_2.jpg",
				"img/work/rhizopods/rhizopods_3.jpg"
			],
			notes: [
				"&#9588; <a href=\"http://rhizopods.com\" target=\"_blank\">http://rhizopods.com</a>",
				"&#9588; Worked on with <a href=\"http://resn.co.nz\" target=\"_blank\">Resn</a>",
				"&#10032; Won an <a href=\"http://www.thefwa.com/site/rhizopods\" target=\"_blank\">FWA</a>",
				"&#10032; On <a href=\"http://www.frenchdesignindex.com/design-index-674.html\" target=\"_blank\">French Design Index</a>",

			],
			roles: [
				"Design",
				"Integration"
			],
			project_info: [
				"Rhizopods was the love-child of Resn and (new at the time) Molehill 3D for Flash. It was an experiment created to test the capabilities of the new technology.",
				"My role in the project was to design the UI, Gallery, and Tutorials, and then integrate them all into Flash."
			]
		},
		{
			id:"puls_alpha",
			colour:"rgb(39, 4, 53)",
			textColour:"#2a154f",
			bgColor:"#000000",
			thumbImage:"img/work/puls.jpg",

			title:"Puls Alpha",
			images: [
				"img/work/puls/puls_1.jpg"
			],
			notes: [
				"&#9588; <a href=\"http://puls.resn.co.nz\" target=\"_blank\">http://puls.resn.co.nz</a>",
				"&#9588; Worked on with <a href=\"http://resn.co.nz\" target=\"_blank\">Resn</a>",
				"&#9588; Mobile parallax"
			],
			roles: [
				"Front-End Development"
			],
			project_info: [
				"Puls is a rhythm based game for the iPhone. I built the mobile website for it, which features some subtle parallax to bring the images of the bursting particles to life. As the user scrolls the particles appears to be expanding, as they do in-game."
			]
		},
		// {
		//     id:"hennessy",
		//     color:"#2d2d2d",
		//     butColor:"#414141",
		//     bgColor: "#000000",
		//     bgImage: "CDN_PATH/img/projects/hennessy/project_bg_angle.png?2",

		//     title:"Hennessy Wild Rabbit",
		//     subtitle:"For Hennessy",
		//     videos: [
		//         {
		//             id: "50592422",
		//             img: "CDN_PATH/img/projects/hennessy/videoOverlay.jpg",
		//             projectID: "hennessy"
		//         }
		//     ],
		//     images: [
		//         "CDN_PATH/img/projects/hennessy/slide_1.png",
		//         "CDN_PATH/img/projects/hennessy/slide_2.png",
		//         "CDN_PATH/img/projects/hennessy/slide_3.png"
		//     ],
		//     client:"Hennessy",
		//     agency:"Droga5 New York",
		//     roles:"CREATIVE, AUDIO, DESIGN, DEVELOPMENT",
		//     awards:"fwa,best",
		//     launch:"http://neverstopneversettle.com",
		//     rundown: [
		//         "The brief presented by Droga5 afforded Resn a unique opportunity, both in creative conceptualisation and bleeding edge technical execution. From the outset, Resn approached the project using a core narrative backbone in the form of a classic three-act structure, with every possible user journey scripted and paced by Resn.",
		//         "Droga5’s creative conceit of a sophisticated monochromatic tunnel based chase inspired Resn’s art direction and contributed to the decision to use the very latest in browser based hardware accelerated 3D graphics.",
		//         "In response to working with this new technology, Resn pioneered a custom run-time Flash 3D motion editing tool to facilitate an integrated production flow between the creative and technical teams. This innovative approach provided anyone on the team with the means to tweak a 3D animated sequence in real-time through the simple to use graphic interface.",
		//         "We recognised early on that music and sound design were going to be fundamental components to create the emotional and impactful experience that we wanted to instill in the minds of our audience. Audio composition occurred in parallel with visual and motion design with each discipline informing the other. Every story had its own musical theme with several movements."
		//     ]
		// },

	]);
});