import { ReactNode } from "react"
import ThemeName from "../utils/enums/themeName.enum"
import CandiesBackground from "./_styled/themeBackgrounds/CandiesBackground.styled"
import CoinsBackground from "./_styled/themeBackgrounds/CoinsBackground.styled"
import FlowersBackground from "./_styled/themeBackgrounds/FlowersBackground.styled"
import NewYearBackground from "./_styled/themeBackgrounds/NewYearBackground.styled"

interface IThemeBackgroundSelectorProps {
   themeName: ThemeName
   children: ReactNode
}

const ThemeBackgroundSelector: React.FC<IThemeBackgroundSelectorProps> = ({ themeName, children }) => {
   switch (themeName) {
      case ThemeName.CANDIES:
         return <CandiesBackground>{children}</CandiesBackground>

      case ThemeName.COINS:
         return <CoinsBackground>{children}</CoinsBackground>

      case ThemeName.FLOWERS:
         return <FlowersBackground>{children}</FlowersBackground>

      case ThemeName.NEW_YEAR:
         return <NewYearBackground>{children}</NewYearBackground>

      default:
         return <></>
   }
}

export default ThemeBackgroundSelector
