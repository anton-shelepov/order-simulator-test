import styled from "@emotion/styled"
import { useState } from "react"
import useSound from "use-sound"
import { unselectable } from "../styles/mixins.styled"

interface ISwitchRangeProps {
   title: string
   items: SwitchRangeItem[]
   maxWidth?: string
   onChange: (value: string) => void
}

export type SwitchRangeItem = {
   label?: string
   value: string
}

interface IRangeItemProps {
   isActive: boolean
   label: string
}

interface IContainerProps {
   maxWidth: string
}

const Container = styled.div<IContainerProps>`
   max-width: ${(p) => p.maxWidth};
   width: 100%;
`

const Title = styled.h2`
   width: 100%;
   text-align: center;
   font-family: "Helvetica", sans-serif;
   color: #423f45;
   font-size: 32px;
   margin-bottom: 46px;
`

const RangeItemWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   &:first-of-type,
   &:last-of-type {
      width: 50%;
   }
   &:first-of-type {
      justify-content: flex-start;
   }
   &:last-of-type {
      justify-content: flex-end;
   }
`

const RangeContainer = styled.div`
   background-color: #ffd748;
   display: flex;
   align-items: center;
   height: 21px;
   border-radius: 10px;
   justify-content: space-between;
   width: 100%;
   ${unselectable}
`

const RangeItem = styled.div<IRangeItemProps>`
   width: 100%;
   background-color: ${(p) => (p.isActive ? "#104987" : "transparent")};
   width: 23px;
   height: 23px;
   border-radius: 50%;
   position: relative;

   &::after {
      content: ${(p) => `"${p.label}"`};
      position: absolute;
      top: -135%;
      left: 50%;
      transform: translateX(-50%);
      color: #4f4b61;
      font-weight: 700;
      font-size: 24px;
   }
`

const SwitchRange: React.FC<ISwitchRangeProps> = ({ items, title, maxWidth = "100%", onChange }) => {
   const [switchValue, setSwitchValue] = useState(items[0].value)
   const [isSwitching, setIsSwitching] = useState(false)

   const [playSwitchSound] = useSound("/sounds/switch-change.wav")

   const updateValue = (value: string) => {
      if (value === switchValue) {
         return
      }
      setSwitchValue(value)
      onChange(value)
      playSwitchSound()
   }

   const onRangeItemMouseEnter = (value: string) => {
      if (!isSwitching) {
         return
      }
      updateValue(value)
   }

   const onHandleMouseUp = () => {
      setIsSwitching(false)
      window.removeEventListener("mouseup", onHandleMouseUp)
   }

   const onHandleMouseDown = (value: string) => {
      setIsSwitching(true)
      window.addEventListener("mouseup", onHandleMouseUp)
      updateValue(value)
   }

   return (
      <Container maxWidth={maxWidth}>
         <Title>{title}</Title>
         <RangeContainer>
            {items.map(({ value, label }) => (
               <RangeItemWrapper
                  key={value}
                  onMouseEnter={() => onRangeItemMouseEnter(value)}
                  onMouseDown={() => onHandleMouseDown(value)}
               >
                  <RangeItem label={label ? label : value} isActive={value === switchValue} />
               </RangeItemWrapper>
            ))}
         </RangeContainer>
      </Container>
   )
}

export default SwitchRange
