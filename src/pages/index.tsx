import { useState } from "react"
import GameInProcessScreen from "../components/GameInProcessScreen"
import GamePreparingScreen, { GameSettings } from "../components/GamePreparingScreen"
import GameStatus from "../utils/enums/gameStatus.enum"

export default function Main() {
   const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.PREPARING)
   const [gameSettings, setGameSettings] = useState<GameSettings>()

   const onGameStart = (settings: GameSettings) => {
      setGameStatus(GameStatus.IN_PROCESS)
      setGameSettings(settings)
   }

   const isStatusPreparing = gameStatus === GameStatus.PREPARING
   const isStatusInProcess = gameStatus === GameStatus.IN_PROCESS

   return (
      <>
         {isStatusPreparing && <GamePreparingScreen onPlayClick={onGameStart} />}
         {isStatusInProcess && gameSettings && <GameInProcessScreen gameSettings={gameSettings} />}
      </>
   )
}
