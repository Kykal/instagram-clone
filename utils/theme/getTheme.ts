const getTheme = (): string => {
	return localStorage.getItem('theme')!;
}


export default getTheme;
