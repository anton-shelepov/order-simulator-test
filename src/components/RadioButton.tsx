import styled from "@emotion/styled"
import useSound from "use-sound"
import { unselectable } from "../styles/mixins.styled"

interface IRadioButtonProps {
   checked: boolean
   value: string
   label: string
   name: string
   onChange: (value: string) => void
}

interface ILabelProps {
   checked: boolean
}

const Label = styled.label<ILabelProps>`
   color: #423f45;
   font-size: 32px;
   font-weight: 700;
   padding: 2px 24px;
   background-color: #ffd748;
   border-radius: 20px;
   opacity: ${(p) => (p.checked ? 1 : 0.56)};
   cursor: pointer;
   white-space: nowrap;
   ${unselectable}
`

const Input = styled.input`
   position: absolute;
   opacity: 0;
   height: 0;
   width: 0;
`

const RadioButton: React.FC<IRadioButtonProps> = ({ label, value, onChange, ...restProps }) => {
   const [playRadioChangeSound] = useSound("/sounds/radio-change.wav")

   const onHandleChange = () => {
      onChange(value)
      playRadioChangeSound()
   }

   return (
      <Label htmlFor={value} checked={restProps.checked}>
         {label}
         <Input {...restProps} onChange={onHandleChange} id={value} type="radio" />
      </Label>
   )
}

export default RadioButton
