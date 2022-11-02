import { css, Global } from "@emotion/react"

const GlobalStyles = () => {
   return (
      <Global
         styles={css`
            body {
               margin: 0;
               padding: 0;
               font-family: "Calibri", sans-serif;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
               margin: 0;
            }
            * {
               box-sizing: border-box;
            }
         `}
      />
   )
}

export default GlobalStyles
