import styled from "@emotion/styled"
import DraggableItem from "./DragAndDrop/DraggableItem"

interface IDraggableItemsZoneProps {
   itemsValues: string[] | number[]
}

const Container = styled.div`
   display: flex;
   position: absolute;
   top: 0;
   left: 0;
   align-items: center;
   justify-content: center;
   width: 100vw;
   height: 100vh;
`

const DraggableItemsZone: React.FC<IDraggableItemsZoneProps> = ({ itemsValues }) => {
   return (
      <Container>
         {itemsValues.map((value, index) => (
            <DraggableItem key={value} value={value} index={index} />
         ))}
      </Container>
   )
}

export default DraggableItemsZone
