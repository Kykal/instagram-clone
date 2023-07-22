import getTheme from "./getTheme";
import setTheme from "./setTheme";

const initTheme = (): string => {
	const theme = getTheme();

	if( !theme ){
		setTheme('light');

		return initTheme();
	}

	return theme;
}


export default initTheme;
