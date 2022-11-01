import styled from "@emotion/styled"
import { useState } from "react"
import SwitchRange, { SwitchRangeItem } from "./SwitchRange"
import BackgroundImageWrapper from "./_styled/BackgroundImageWrapper.styled"

interface IGamePreparingScreenProps {}

const Container = styled.div`
   background-image: url("/images/preparing/bg-card-preparing.png");
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 55px 85px;
   width: 530px;
   height: 550px;
   gap: 60px;
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

const GamePreparingScreen: React.FC<IGamePreparingScreenProps> = () => {
   const [itemsQuantity, setItemsQuantity] = useState(2)
   const [values, setValues] = useState("A")

   return (
      <BackgroundImageWrapper imageSrc="/images/preparing/bg-preparing.png">
         <Container>
            <SwitchRange items={itemsQuantitySwitchRangeItems} title="Кол-во предметов" maxWidth="366px" />
            <SwitchRange items={valueSwitchRangeItems} title="Значения" />
         </Container>
      </BackgroundImageWrapper>
   )
}

export default GamePreparingScreen
