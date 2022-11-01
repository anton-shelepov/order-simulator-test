import { useState } from "react"
import GamePreparingScreen, { GameSettings } from "../components/GamePreparingScreen"
import GameStatus from "../utils/enums/gameStatus.enum"

export default function Main() {
   const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.PREPARING)
   const [gameSettings, setGameSettings] = useState<GameSettings>()

   const onGameStart = (settings: GameSettings) => {
      setGameStatus(GameStatus.IN_PROGRESS)
      setGameSettings(settings)
   }

   return gameStatus === GameStatus.PREPARING && <GamePreparingScreen onPlayClick={onGameStart} />
}
