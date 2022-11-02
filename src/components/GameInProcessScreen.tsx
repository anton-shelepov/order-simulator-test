import { GameSettings } from "./GamePreparingScreen"
import NewYearBackground from "./styled/themeBackgrounds/NewYearBackground.styled"

interface IGameInProcessScreenProps {
   gameSettings: GameSettings
}

const GameInProcessScreen: React.FC<IGameInProcessScreenProps> = ({ gameSettings }) => {
   return <NewYearBackground></NewYearBackground>
}

export default GameInProcessScreen
