import styled from "@emotion/styled"

const PlayButton = styled.button`
   background-color: #38df7a;
   font-family: "Helvetica", sans-serif;
   font-size: 32px;
   border-radius: 20px;
   border: none;
   color: #ffffff;
   padding: 10px 75px;
   cursor: pointer;
   transition: opacity 0.2s;

   &:hover {
      opacity: 0.8;
   }
`

export default PlayButton
