import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameContext } from "./GameProvider.js"
import {GameDetail} from "./GameDetail"
import {Game} from "./Game"
export const GameList = (props) => {
    const { games, getGames, deleteGame } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
        <button onClick={() => props.history.push("/games/new")}>
                Register Game
            </button>
        <article className="games">
            {
                games.map(game => {
                    return <Game game={game} key={game.id} ></Game>
                    
                })
            }
        </article>
        </>
    )
}