var potOne = ['Germany', 'Spain', 'Portugal', 'Belgium', 'England', 'Switzerland', 'Italy', 'France', 'Poland', 'Iceland'];
var potTwo = ['Croatia', 'Austria', 'Wales', 'Russia', 'Netherlands', 'Sweden', 'Ukraine', 'Slovakia', 'Northern Ireland', 'Republic of Ireland'];
var potThree = ['Denmark', 'Czech Republic', 'Bosnia and Herzegovina', 'Turkey', 'Romania', 'Scotland', 'Slovenia', 'Hungary', 'Serbia', 'Albania'];
var potFour = ['Norway', 'Montenegro', 'Greece', 'Israel', 'Bulgaria', 'Finalnd', 'Cyprus', 'Estonia', 'Lithuania', 'Azerbaijan'];
var potFive = ['Belarus', 'Georgia', 'Macedonia', 'Faroe Islands', 'Armenia', 'Latvia', 'Luxembourg', 'Moldova', 'Kazakhstan', 'Liechtenstein'];
var potSix = ['Malta', 'Kosovo', 'Andorra', 'San Marino', 'Gibraltar'];

var nations = [
			{ name: 'Germany', seed: 1 },
			{ name: 'Portugal', seed: 1 },
			{ name: 'Belgium', seed: 1 },
			{ name: 'Spain', seed: 1 },
			{ name: 'France', seed: 1 },
			{ name: 'England', seed: 1 },
			{ name: 'Switzerland', seed: 1 },
			{ name: 'Italy', seed: 1 },
			{ name: 'Poland', seed: 1 },
			{ name: 'Iceland', seed: 1 },
			{ name: 'Croatia', seed: 2 },
			{ name: 'Netherlands', seed: 2 },
			{ name: 'Austria', seed: 2 },
			{ name: 'Wales', seed: 2 },
			{ name: 'Russia', seed: 2 },
			{ name: 'Slovakia', seed: 2 },
			{ name: 'Sweden', seed: 2 },
			{ name: 'Ukraine', seed: 2 },
			{ name: 'Republic of Ireland', seed: 2 },
			{ name: 'Bosnia and Herzegovina', seed: 2 },
			{ name: 'Northern Ireland', seed: 3 },
			{ name: 'Denmark', seed: 3 },
			{ name: 'Czech Republic', seed: 3 },
			{ name: 'Turkey', seed: 3 },
			{ name: 'Hungary', seed: 3 },
			{ name: 'Romania', seed: 3 },
			{ name: 'Scotland', seed: 3 },
			{ name: 'Slovenia', seed: 3 },
			{ name: 'Greece', seed: 3 },
			{ name: 'Serbia', seed: 3 },
			{ name: 'Albania', seed: 4 },
			{ name: 'Norway', seed: 4 },
			{ name: 'Montenegro', seed: 4 },
			{ name: 'Israel', seed: 4 },
			{ name: 'Bulgaria', seed: 4 },
			{ name: 'Finland', seed: 4 },
			{ name: 'Cyprus', seed: 4 },
			{ name: 'Estonia', seed: 4 },
			{ name: 'Lithuania', seed: 4 },
			{ name: 'Azerbaijan', seed: 4 },
			{ name: 'Macedonia', seed: 5 },
			{ name: 'Belarus', seed: 5 },
			{ name: 'Georgia', seed: 5 },
			{ name: 'Armenia', seed: 5 },
			{ name: 'Latvia', seed: 5 },
			{ name: 'Faroe Islands', seed: 5 },
			{ name: 'Luxembourg', seed: 5 },
			{ name: 'Kazakhstan', seed: 5 },
			{ name: 'Moldova', seed: 5 },
			{ name: 'Liechtenstein', seed: 5 },
			{ name: 'Malta', seed: 6 },
			{ name: 'Andorra', seed: 6 },
			{ name: 'Kosovo', seed: 6 },
			{ name: 'San Marino', seed: 6 },
			{ name: 'Gibraltar', seed: 6 }
		];

function writeIn() {
				var selected = group[Math.floor(Math.random() * group.length)];
				document.getElementsByClassName("nation")[i].innerHTML = '<b>' + selected + '</b>';
				removeSelected();
				i++;
			}
			
			for (i = 0, i < group.length, i++) {
				writeIn();
				console.log(i);
			}

function grabFirstSeed() {	
	var selection01 = potOne[Math.floor(Math.random() * potOne.length)];
	var selection02 = potTwo[Math.floor(Math.random() * potTwo.length)];
	var selection03 = potThree[Math.floor(Math.random() * potThree.length)];
	var selection04 = potFour[Math.floor(Math.random() * potFour.length)];
	var selection05 = potFive[Math.floor(Math.random() * potFive.length)];
	var selection06 = potSix[Math.floor(Math.random() * potSix.length)];
	document.getElementsByClassName('A1').innerHTML = '<b>' + selection01 + '</b>';
	document.getElementsByClassName('A2').innerHTML = '<b>' + selection02 + '</b>';
	document.getElementsByClassName('A3').innerHTML = '<b>' + selection03 + '</b>';
	document.getElementsByClassName('A4').innerHTML = '<b>' + selection04 + '</b>';
	document.getElementsByClassName('A5').innerHTML = '<b>' + selection05 + '</b>';
	document.getElementsByClassName('A6').innerHTML = '<b>' + selection06 + '</b>';

}