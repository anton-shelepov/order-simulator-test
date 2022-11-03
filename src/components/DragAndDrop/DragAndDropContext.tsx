import { createContext, MutableRefObject, useRef } from "react"

interface IDragAndDropContextProps {}

const DNDContext = createContext({})

const DragAndDropContext: React.FC<IDragAndDropContextProps> = () => {
   const draggingItemRef: MutableRefObject<undefined | HTMLElement> = useRef()

   return <DNDContext.Provider value={draggingItemRef}></DNDContext.Provider>
}

export default DragAndDropContext
