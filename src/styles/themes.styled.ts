import { Theme } from "@emotion/react"
import ThemeName from "../utils/enums/themeName.enum"

export type Themes = { [key in ThemeName]: Theme }

const themes: Themes = {
   [ThemeName.CANDIES]: {
      itemsImages: {
         item1: "/images/themes/candies-theme/items/item-1.png",
         item2: "/images/themes/candies-theme/items/item-2.png",
         item3: "/images/themes/candies-theme/items/item-3.png",
         item4: "/images/themes/candies-theme/items/item-4.png",
      },
   },
   [ThemeName.COINS]: {
      itemsImages: {
         item1: "/images/themes/coins-theme/items/item-1.png",
         item2: "/images/themes/coins-theme/items/item-2.png",
         item3: "/images/themes/coins-theme/items/item-3.png",
      },
   },
   [ThemeName.NEW_YEAR]: {
      itemsImages: {
         item1: "/images/themes/new-year-theme/items/item-1.png",
         item2: "/images/themes/new-year-theme/items/item-2.png",
         item3: "/images/themes/new-year-theme/items/item-3.png",
         item4: "/images/themes/new-year-theme/items/item-4.png",
         item5: "/images/themes/new-year-theme/items/item-5.png",
      },
   },
   [ThemeName.FLOWERS]: {
      itemsImages: {
         item1: "",
         item2: "",
         item3: "",
         item4: "",
         item5: "",
      },
   },
}

export default themes
