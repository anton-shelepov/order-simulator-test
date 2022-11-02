const selectValuesRange = (values: string) => {
   switch (values) {
      case "9":
         return [1, 9]

      case "19":
         return [10, 19]

      case "50":
         return [20, 50]

      case "99":
         return [51, 99]

      case "999":
         return [100, 999]

      case "A":
         return [1072, 1103] // Диапазон кодов русских символов

      default:
         return [0, 0]
   }
}

export default selectValuesRange
