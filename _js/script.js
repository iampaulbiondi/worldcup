var potOne = ['Russia', 'Germany', 'Brazil', 'Portugal', 'Argentina', 'Belgium', 'France', 'Poland'];
var potTwo = ['Spain', 'Peru', 'Switzerland', 'England', 'Colombia', 'Mexico', 'Uruguay', 'Croatia'];
var potThree = ['Denmark', 'Iceland', 'Costa Rica', 'Sweden', 'Tunisia', 'Egypt', 'Senegal', 'Iran'];
var potFour = ['Serbia', 'Nigeria', 'Australia', 'Japan', 'Morocco', 'Panama', 'South Korea', 'Saudi Arabia'];
		
var currentPot = 0;
		
		console.log(potOne);
		console.log(currentPot);
		
function randomizeSeeding(pot, nxtPot) {
// removes the randomly selected item from the array
	function removeSelected() {
		var index = pot.indexOf(selected);
		pot.splice(index,1);
	} 
			
	var i;
			
	for(i = 0; i < 8; i++) {
		if(currentPot === 0) {
			var selected = pot[Math.floor(Math.random() * pot.length)];
			document.getElementsByClassName('groupA')[i].innerHTML = '<b>' + selected + '</b>';
			removeSelected();
		} else if(currentPot === 1) {
			selected = pot[Math.floor(Math.random() * pot.length)];
			document.getElementsByClassName('groupB')[i].innerHTML = '<b>' + selected + '</b>';
			removeSelected();
		} else if(currentPot === 2) {
			selected = pot[Math.floor(Math.random() * pot.length)];
			document.getElementsByClassName('groupC')[i].innerHTML = '<b>' + selected + '</b>';
			removeSelected();
		} else {
			selected = pot[Math.floor(Math.random() * pot.length)];
			document.getElementsByClassName('groupD')[i].innerHTML = '<b>' + selected + '</b>';
			removeSelected();
		}
	}
			
	// reset the randomizer with the next group when the array is empty
	if (pot.length === 0) {
		pot.push.apply(pot, nxtPot);
		i = 0;
		currentPot = currentPot + 1;
	}
}