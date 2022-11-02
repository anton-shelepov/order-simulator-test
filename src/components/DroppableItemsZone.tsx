import styled from "@emotion/styled"
import DroppableItem from "./DragAndDrop/DroppableItem"

interface IDroppableItemsZoneProps {}

interface IContainerProps {
   theme?: any
}

const Container = styled.div<IContainerProps>`
   display: flex;
   justify-content: center;
   gap: 4px;
   padding: 45px 40px;
   width: 886px;
   height: 222px;
   background-image: url(${(p) => p.theme.droppableBackground});
   background-size: 100%;
   background-repeat: no-repeat;
`

const DroppableItemsZone: React.FC<IDroppableItemsZoneProps> = () => {
   return (
      <Container>
         <DroppableItem />
         <DroppableItem />
         <DroppableItem />
         <DroppableItem />
         <DroppableItem />
         <DroppableItem />
      </Container>
   )
}

export default DroppableItemsZone
