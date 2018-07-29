export const changeLang = (lang) => ({
  type: "CHANGE_LANG",
  lang
});

export const blockCharacter = (character, nr, whichOne) => ({
	type: "BLOCK_CHARACTER",
	character,
	nrFromArray: nr,
	whichOne
})