import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { LegacyRef, MouseEventHandler, useCallback, useEffect, useRef, useState } from "react"
import { unselectable } from "../../styles/mixins.styled"
import cssTranslateXYProp from "../../utils/scripts/cssTranslateXYProp"
import isEven from "../../utils/scripts/isEven"
import randomTo from "../../utils/scripts/randomTo"

interface IDraggableItemProps {
   value: string | number
   index: number
}

interface IContainerProps {
   index: number
   isDragging: boolean
}

const Container = styled.div<IContainerProps>`
   position: relative;
   width: fit-content;
   transform: translateY(${(p) => (isEven(p.index) ? "0" : "-100%")});
   cursor: ${(p) => (p.isDragging ? "grabbing" : "grab")};
   z-index: ${(p) => (p.isDragging ? 1 : 0)};
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
   // Refs for getting mouse down capture position on element
   // (needs for shift element correctly by mouse moving)
   const mouseDownOnElementClient = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
   const mouseDownOnElementRect = useRef<DOMRect>()
   const [isDragging, setIsDragging] = useState(false)

   const theme: { [key: string]: any } = useTheme()
   const [randomItemImageSrc, setRandomItemImageSrc] = useState()

   const draggableElementRef: LegacyRef<HTMLDivElement> = useRef(null)

   const randomItemImageKey = (themeItemsImages: { [key: string]: string }) => {
      const itemsImagesArray = Object.keys(themeItemsImages)
      return itemsImagesArray[randomTo(itemsImagesArray.length)]
   }

   useEffect(() => {
      setRandomItemImageSrc(theme.itemsImages[randomItemImageKey(theme.itemsImages)])
   }, [])

   const onHandleMouseMove = useCallback((e: MouseEvent) => {
      const shiftByX = mouseDownOnElementRect.current!.left - mouseDownOnElementClient.current.x
      const shiftByY = mouseDownOnElementRect.current!.top - mouseDownOnElementClient.current.y
      draggableElementRef.current!.style.transform = cssTranslateXYProp(
         e.pageX - draggableElementRef.current!.offsetLeft + shiftByX,
         e.pageY - draggableElementRef.current!.offsetTop + shiftByY
      )
   }, [])

   const onHandleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
      const updateMouseDownPosition = () => {
         mouseDownOnElementClient.current = {
            x: e.clientX,
            y: e.clientY,
         }
         mouseDownOnElementRect.current = draggableElementRef.current!.getBoundingClientRect()
      }

      updateMouseDownPosition()
      setIsDragging(true)
   }

   const onHandleMouseUp = () => {
      setIsDragging(false)
   }

   useEffect(() => {
      const updateMouseMoveListeners = () => {
         if (isDragging) {
            window.addEventListener("mousemove", onHandleMouseMove)
            return
         }
         window.removeEventListener("mousemove", onHandleMouseMove)
      }

      updateMouseMoveListeners()
   }, [isDragging])

   return (
      <Container
         ref={draggableElementRef}
         index={index}
         isDragging={isDragging}
         onMouseDown={onHandleMouseDown}
         onMouseUp={onHandleMouseUp}
      >
         <ItemValue>{value}</ItemValue>
         <Img src={randomItemImageSrc} alt="Draggable item" />
      </Container>
   )
}

export default DraggableItem
