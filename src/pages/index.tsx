import { useState } from "react"
import GamePreparingScreen from "../components/GamePreparingScreen"
import GameStatus from "../utils/enums/gameStatus.enum"

export default function Main() {
   const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.PREPARING)

   return gameStatus === GameStatus.PREPARING && <GamePreparingScreen />
}
