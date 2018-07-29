export const blocked = (state = {character:'', nrFromArray:null, whichOne:null}, {type, character, nrFromArray, whichOne}) => {
	switch(type){
		case "BLOCK_CHARACTER":
			let nbr = state.character.indexOf(character);
			let isInside = nbr >= 0? true: false;
			let characterSum;
			console.log(nbr)
			if(!isInside) characterSum = (state.character === null ? '':state.character) + ' ' + character;
			else{
				console.log(state.character.split(' '), nbr)
			}


			return {
				character: characterSum
			}
		default: 
			return state
	}
}