import styled from "@emotion/styled"

interface IDroppableItemProps {}

const Container = styled.div`
   background: rgba(0, 0, 0, 0.06);
   box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
   width: 131px;
   height: 131px;
   border-radius: 50%;
`

const DroppableItem: React.FC<IDroppableItemProps> = () => {
   return <Container></Container>
}

export default DroppableItem
