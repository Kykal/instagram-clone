//Typings
import { Theme } from "./typings";


const getTheme = (): Theme => {
	return localStorage.getItem('theme')! as Theme;
}


export default getTheme;
