import styled from "@emotion/styled"

interface IDroppableItemProps {}

const Container = styled.div`
   background: rgba(0, 0, 0, 0.06);
   box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
   width: 131px;
   height: 131px;
   border-radius: 50%;
   z-index: 2;
`

const DroppableItem: React.FC<IDroppableItemProps> = () => {
   return <Container onMouseDown={() => console.log("down")} onMouseUp={() => console.log("up")}></Container>
}

export default DroppableItem
