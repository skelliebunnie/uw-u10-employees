const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let manager = null;

function init() {
	if(manager === null) {
		addManager();

	} else {
		addEmployees();

	}
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

function addManager() {
	inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Manager's Name: "
		},
		{
			type: "input",
			name: "email",
			message: "Manager's Email: "
		},
		{
			type: "number",
			name: "id",
			message: "Manager's ID: "
		},
		{
			type: "input",
			name: "github",
			message: "Manager's Office Number: "
		}
	])
	.then(answers => {
		manager = answers;

		console.log(manager);
		addEmployees();
	})
	.catch(err => {
		console.error(error);
	});
}

function addEmployees() {
	inquirer.prompt([
			{
				type: "list",
				message: "What would you like to do?",
				name: "action",
				choices: [
					{
						name: "add Engineer",
						value: "addEngineer"
					},
					{
						name: "add Intern",
						value: "addIntern"
					},
					{
						name: "Exit",
						value: "exit"
					}
				]
			}
		])
		.then(answers => {
			if(answers.action === "addEngineer") {
				addEngineer();
			}

			if(answers.action === "addIntern") {
				addIntern();
			}

			if(answers.action === "exit") {
				console.log("render will be called here");
			}

		})
		.catch(error => {
			console.error(error);
		})
}

function addEngineer() {
	inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Engineer's Name: "
		},
		{
			type: "input",
			name: "email",
			message: "Engineer's Email: "
		},
		{
			type: "number",
			name: "id",
			message: "Engineer's ID: "
		},
		{
			type: "input",
			name: "github",
			message: "Engineer's GitHub Username: "
		}
	])
	.then(answers => {
		console.log(answers);
	})
	.catch(err => {
		console.error(error);
	});
}

function addIntern() {
	inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Intern's Name: "
		},
		{
			type: "input",
			name: "email",
			message: "Intern's Email: "
		},
		{
			type: "number",
			name: "id",
			message: "Intern's ID: "
		},
		{
			type: "input",
			name: "github",
			message: "Intern's School: "
		}
	])
	.then(answers => {
		console.log(answers);
	})
	.catch(err => {
		console.error(error);
	});
}

init();