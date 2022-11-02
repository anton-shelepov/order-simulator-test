import { ReactNode } from "react"
import GlobalStyles from "./styled/GlobalStyles.styled"

interface ILayoutProps {
   children: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
   return (
      <>
         <GlobalStyles />
         <main>{children}</main>
      </>
   )
}

export default Layout
