import styled from "@emotion/styled"

interface IBackgroundImageWrapperProps {
   imageSrc: string
}

const BackgroundImageWrapper = styled.div<IBackgroundImageWrapperProps>`
   background-image: url(${(p) => p.imageSrc});
   background-repeat: no-repeat;
   background-size: cover;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`

export default BackgroundImageWrapper
