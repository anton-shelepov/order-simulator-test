import DroppableItem from "./DragAndDrop/DroppableItem"

interface IDroppableItemsZoneProps {}

const DroppableItemsZone: React.FC<IDroppableItemsZoneProps> = () => {
   return (
      <>
         <DroppableItem />
         <DroppableItem />
         <DroppableItem />
         <DroppableItem />
         <DroppableItem />
      </>
   )
}

export default DroppableItemsZone
