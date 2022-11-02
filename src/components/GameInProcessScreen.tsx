import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import themes from "../styles/themes.styled"
import getRandomTheme from "../utils/scripts/getRandomTheme"
import randomFromTo from "../utils/scripts/randomFromTo"
import selectValuesRange from "../utils/scripts/selectValuesRange"
import DraggableItemsZone from "./DraggableItemsZone"
import { GameSettings } from "./GamePreparingScreen"
import ThemeBackgroundSelector from "./ThemeBackgroundSelector"

interface IGameInProcessScreenProps {
   gameSettings: GameSettings
}

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
`

const GameInProcessScreen: React.FC<IGameInProcessScreenProps> = ({
   gameSettings: { itemsQuantity, sortType, values },
}) => {
   const { themeName, theme } = getRandomTheme(themes)

   const [rangeFrom, rangeTo] = selectValuesRange(values)
   const itemsValues = Array.from({ length: itemsQuantity }, () => randomFromTo(rangeFrom, rangeTo))

   return (
      <ThemeProvider theme={theme}>
         <ThemeBackgroundSelector themeName={themeName}>
            <Container>
               <DraggableItemsZone itemsValues={itemsValues} />
            </Container>
         </ThemeBackgroundSelector>
      </ThemeProvider>
   )
}

export default GameInProcessScreen
