import styled from "@emotion/styled"
import { useState } from "react"
import useSound from "use-sound"
import SortType from "../utils/enums/sortType.enum"
import RadioButton from "./RadioButton"
import SwitchRange, { SwitchRangeItem } from "./SwitchRange"
import BackgroundImageWrapper from "./_styled/BackgroundImageWrapper.styled"
import PlayButton from "./_styled/PlayButton.styled"

interface IGamePreparingScreenProps {
   onPlayClick: (settings: GameSettings) => void
}

export type GameSettings = {
   itemsQuantity: number
   values: string
   sortType: SortType
}

const Container = styled.div`
   background-image: url("/images/preparing/bg-card-preparing.png");
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 55px 85px;
   width: 700px;
   height: 660px;
`

const RadioButtonsBlock = styled.div`
   display: flex;
   gap: 36px;
   margin-bottom: 95px;
`

const SwitchRangesBlock = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 60px;
   width: 100%;
   margin-bottom: 75px;
`

const itemsQuantitySwitchRangeItems: SwitchRangeItem[] = [
   { value: "2" },
   { value: "3" },
   { value: "4" },
   { value: "5" },
]

const valueSwitchRangeItems: SwitchRangeItem[] = [
   { value: "A" },
   { value: "9" },
   { value: "19" },
   { value: "50" },
   { value: "99" },
   { value: "999" },
]

const GamePreparingScreen: React.FC<IGamePreparingScreenProps> = ({ onPlayClick }) => {
   const [settings, setSettings] = useState<GameSettings>({
      itemsQuantity: 2,
      sortType: SortType.ASC,
      values: "A",
   })

   const [gameStartSoundPlay] = useSound("/sounds/game-start.ogg")
   const [gameProcessSoundPlay] = useSound("/sounds/game-process.mp3")

   const onHandleSortTypeSettingsChange = (value: string) => {
      setSettings({ ...settings, sortType: value as SortType })
   }

   const onHandleItemsQuantitySettingsChange = (value: string) => {
      setSettings({ ...settings, itemsQuantity: Number(value) })
   }

   const onHandleValuesSettingsChange = (value: string) => {
      setSettings({ ...settings, values: value })
   }

   const onHandlePlayButtonClick = () => {
      onPlayClick(settings)
      gameStartSoundPlay()
      gameProcessSoundPlay()
   }

   return (
      <BackgroundImageWrapper imageSrc="/images/preparing/bg-preparing.png">
         <Container>
            <SwitchRangesBlock>
               <SwitchRange
                  items={itemsQuantitySwitchRangeItems}
                  title="??????-???? ??????????????????"
                  maxWidth="366px"
                  onChange={onHandleItemsQuantitySettingsChange}
               />
               <SwitchRange items={valueSwitchRangeItems} title="????????????????" onChange={onHandleValuesSettingsChange} />
            </SwitchRangesBlock>

            <RadioButtonsBlock>
               <RadioButton
                  label="???? ??????????????????????"
                  name="sortType"
                  value={SortType.ASC}
                  onChange={onHandleSortTypeSettingsChange}
                  checked={SortType.ASC === settings.sortType}
               />
               <RadioButton
                  label="???? ????????????????"
                  name="sortType"
                  value={SortType.DESC}
                  onChange={onHandleSortTypeSettingsChange}
                  checked={SortType.DESC === settings.sortType}
               />
            </RadioButtonsBlock>

            <PlayButton onClick={onHandlePlayButtonClick}>????????????</PlayButton>
         </Container>
      </BackgroundImageWrapper>
   )
}

export default GamePreparingScreen
