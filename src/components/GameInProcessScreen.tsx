import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { useCallback } from "react"
import themes from "../styles/themes.styled"
import getRandomTheme from "../utils/scripts/getRandomTheme"
import randomFromTo from "../utils/scripts/randomFromTo"
import selectValuesRange from "../utils/scripts/selectValuesRange"
import DraggableItemsZone from "./DraggableItemsZone"
import DroppableItemsZone from "./DroppableItemsZone"
import { GameSettings } from "./GamePreparingScreen"
import ThemeBackgroundSelector from "./ThemeBackgroundSelector"

interface IGameInProcessScreenProps {
   gameSettings: GameSettings
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   height: 100%;
   padding: 150px 0 50px 0;
`

const GameInProcessScreen: React.FC<IGameInProcessScreenProps> = ({
   gameSettings: { itemsQuantity, sortType, values },
}) => {
   const { themeName, theme } = getRandomTheme(themes)

   const getItemsValues = useCallback(() => {
      const [rangeFrom, rangeTo] = selectValuesRange(values)
      const itemsValues = Array.from({ length: itemsQuantity }, () => randomFromTo(rangeFrom, rangeTo))

      return itemsValues
   }, [values])

   const itemsValues = getItemsValues()

   return (
      <ThemeProvider theme={theme}>
         <ThemeBackgroundSelector themeName={themeName}>
            <Container>
               <DraggableItemsZone itemsValues={itemsValues} />
               <DroppableItemsZone />
            </Container>
         </ThemeBackgroundSelector>
      </ThemeProvider>
   )
}

export default GameInProcessScreen
