//logic for rock paper scissors game

let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

let rules = [
	{combo: [paper, rock], output: paper},
	{combo: [paper, scissors], output: scissors},
	{combo: [scissors, rock], output: rock}
];

let userChoice = rock;
let computerChoice = rock;
let choices = [userChoice, computerChoice];

function areArraysIndentical(arr1, arr2) {
	if(arr1.length !== arr2.length) return false;
	//sort both arrays, thus alleviating the need for inputing the elements 
	//of the array in the same order
	arr1.sort();
	arr2.sort();

	for(let i=0; i<arr1.length; i++) {
		if(arr1[i] !== arr2[i]) return false;
	}

	//if both conditions pass return true
	return true;
}

function determineWinner(choices) {
	if(choices[0] === choices[choices.length-1]) return ['tie'];
	return rules.reduce((acc, rule) => {
		if(areArraysIndentical(choices, rule.combo)) acc.push(rule.output);
		return acc;
	}, [])
}

function determineWinningEntity(winner = determineWinner(choices)) {
	if(winner[0] === 'tie') return 'It is a tie';
	return choices.indexOf(winner) === 0 ? 'Player wins' : 'Computer Wins';
}
