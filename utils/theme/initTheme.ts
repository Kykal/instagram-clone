//Utils
import getTheme from "./getTheme";
import setTheme from "./setTheme";


//Typings
import Theme from "@/typings/theme";


const initTheme = (): Theme => {
	const theme = getTheme();

	if( !theme ){
		setTheme('light');

		return initTheme();
	}

	return theme;
}


export default initTheme;
