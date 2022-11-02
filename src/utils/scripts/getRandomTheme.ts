import { Themes } from "../../styles/themes.styled"
import ThemeName from "../enums/themeName.enum"
import randomTo from "./randomTo"

const getRandomTheme = (themes: Themes) => {
   const themesArray = Object.entries(themes)
   const randomThemeIndex = randomTo(themesArray.length)

   return {
      themeName: themesArray[randomThemeIndex][0] as ThemeName,
      theme: themesArray[randomThemeIndex][1],
   }
}

export default getRandomTheme
