//Typings
import Theme from "@/typings/theme";


const getTheme = (): Theme => {
	return localStorage.getItem('theme')! as Theme;
}


export default getTheme;
