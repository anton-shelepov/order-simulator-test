import styled from "@emotion/styled"
import DraggableItem from "./DragAndDrop/DraggableItem"

interface IDraggableItemsZoneProps {
   itemsValues: string[] | number[]
}

const Container = styled.div`
   display: flex;
   align-items: center;
   position: relative;
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
