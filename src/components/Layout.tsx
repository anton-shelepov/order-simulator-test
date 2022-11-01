import { css, Global } from "@emotion/react"
import { ReactNode } from "react"

interface ILayoutProps {
   children: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
   return (
      <>
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
            `}
         />
         <main>{children}</main>
      </>
   )
}

export default Layout
