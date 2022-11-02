import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { unselectable } from "../../styles/mixins.styled"
import isEven from "../../utils/scripts/isEven"
import randomTo from "../../utils/scripts/randomTo"

interface IDraggableItemProps {
   value: string | number
   index: number
}

const randomItemImageKey = (themeItemsImages: { [key: string]: string }) => {
   const itemsImagesArray = Object.keys(themeItemsImages)
   return itemsImagesArray[randomTo(itemsImagesArray.length)]
}

interface IContainerProps {
   index: number
}

const Container = styled.div<IContainerProps>`
   position: relative;
   width: fit-content;
   transform: translateY(${(p) => (isEven(p.index) ? "100%" : "0")});
   ${unselectable}
`

const Img = styled.img`
   pointer-events: none;
`

const ItemValue = styled.span`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size: 56px;
   color: blue;
   font-weight: 700;
   color: #ffffff;
   -webkit-text-stroke: 3px #242546;
`

const DraggableItem: React.FC<IDraggableItemProps> = ({ value, index }) => {
   const theme: any = useTheme()
   return (
      <Container index={index}>
         <ItemValue>{value}</ItemValue>
         <Img src={theme.itemsImages[randomItemImageKey(theme.itemsImages)]} alt="Draggable item" />
      </Container>
   )
}

export default DraggableItem
