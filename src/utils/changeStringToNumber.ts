export const changeStringToNumber = (string: string): number => {
	return +string
		.split("")
		.filter((num) => num !== " ")
		.join("")
}
