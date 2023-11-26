
import ticTacToe from './Projects/tic-tac-toe.png';
import luckyOne from './Projects/lucky-one.png';
import minesweeper from './Projects/minesweeper.png';
import snake from './Projects/snake.png';
import sudoku from './Projects/sudoku.png';

import iconHTML from './Tech/html.png';
import iconCSS from './Tech/css.png';
import iconJS from './Tech/js.png';
import iconReact from './Tech/react.png';
import iconMYSQL from './Tech/mysql.png';
import iconPHP from './Tech/php.png';
import iconLARAVEL from './Tech/laravel.png';
import nodeIcon from './Tech/node.png';

import profilePicture from '../static/profilePicture.png';

const user = {
	picture: profilePicture,
	name: 'I\'m Ioan Labici.',
	greetings: 'Hello world !',
	description: [
		'Passionate PHP developer skilled in Laravel, merging backend excellence with React and Node.js for dynamic and innovative applications.',
		'Committed, disciplined, and dedicated to crafting exceptional software experiences.'
	]
}

const dataProjects = [
	{
		id: 0,
		src : luckyOne,
		title: 'Lucky One',
		tech: ['Javascript' , 'Css' , 'HTML'],
		descriptions: [
			'As my inaugural project following the mastery of fundamental JavaScript concepts, I embarked on a challenge to dynamically generate a set of boxes based on user input.',
			'Amongst these, a single lucky box is singled out.',
			'This undertaking not only pushed my coding prowess but also provided a profound learning experience, surpassing my initial expectations.',
			'This project signifies the commencement of my journey as a developer, marked by both enthusiasm and the pursuit of continuous growth.'
		],
		git: 'https://github.com/LabiciIvan/Butoane',
		try: 'https://labiciivan.github.io/Butoane/'
	},
	{
		id: 1,
		src : ticTacToe,
		title: 'Tic Tac Toe',
		tech: ['Javascript' ,'React', 'Bootstrap'],
		descriptions: [
			'As my second project, I initially crafted it using Vanilla JavaScript and CSS, driven by an unstoppable curiosity for the intricate algorithms at play.',
			'Eager to explore the depths of its functionality, I later revisited the project, embarking on a journey to master React JS.',
			'The decision to transform it into a Tic Tac Toe game not only posed new challenges but also marked a pivotal moment in my developer\'s career.',
			'This project stands as a testament to my affinity for algorithmic intricacies and serves as the inaugural point of my enduring appreciation for the capabilities of React.'
		],
		git: 'https://github.com/LabiciIvan/tic-tac-toe',
		try: 'https://labiciivan.github.io/tic-tac-toe/'
	},
	{
		id: 2,
		src : minesweeper,
		title: 'Minesweeper',
		tech: ['Javascript' , 'Css' , 'HTML'],
		descriptions: [
			'As my third project, I encountered a new realm of challenges that tested my evolving proficiency.',
			'Notably, the task of displaying the number of bombs in each perimeter of a square proved particularly intricate.',
			'This marked a transformative juncture in my journey as a developer, as it led me to delve into the powerful concept of recursion.',
			'Despite the increased complexity, my growing confidence, fueled by prior project experiences, allowed me to navigate and embrace the intricacies of this crucial algorithmic technique.',
		],
		git: 'https://github.com/LabiciIvan/Minesweeper',
		try: 'https://labiciivan.github.io/Minesweeper/'
	},
	{
		id: 3,
		src : sudoku,
		title: 'Sudoku',
		tech: ['Javascript' , 'Css' , 'HTML'],
		descriptions: [
			'In my fourth project, the culmination of prior experiences fueled my confidence, leading me to believe the endeavor would be straightforward.',
			'Having traversed the complexities of the initial three projects, I had solidified my understanding of JavaScript and honed my analytical thinking.',
			'This proficiency proved instrumental in seamlessly constructing the project.',
			'The importance of robust analytical skills resonated profoundly, underscoring their relevance in crafting applications and devising architectural solutions, irrespective of project scale.',
		],
		git: 'https://github.com/LabiciIvan/Sudoku',
		try: 'https://labiciivan.github.io/Sudoku/'
	},
	{
		id: 4,
		src : snake,
		title: 'Snake',
		tech: ['Javascript' , 'Css' , 'HTML'],
		descriptions: [
			'In my fifth project, the seemingly simple task of creating an application or game presented unexpected challenges.',
			'Delving into the intricacies, I grappled with questions of how the snake should dynamically grow and how to gracefully terminate the game upon collisions with its own tail or a boundary.',
			'Proudly, through a combination of patience, extensive research, and an ample supply of coffee, I triumphed over the complexities.',
			'The resulting achievement closely mirrors an early version of the classic Snake game, employing matrix and array concepts gleaned from school math classes.',
		],
		git: 'https://github.com/LabiciIvan/Snake',
		try: 'https://labiciivan.github.io/Snake/'
	},
];

const dataTech = {
	html: iconHTML,
	css: iconCSS,
	js: iconJS,
	react: iconReact,
	mysql: iconMYSQL,
	php: iconPHP,
	laravel: iconLARAVEL,
	node: nodeIcon
}

export { dataProjects, dataTech, user};