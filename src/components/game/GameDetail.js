import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameContext } from "./GameProvider.js"


export const GameDetail = (props) => {
   
    const { game, getSingleGame, deleteGame } = useContext(GameContext)
    useEffect(()=>{
        const gameId = parseInt(props.match.params.gameId)
        getSingleGame(gameId)
    },[])

    return (
        <>
        <article className="games">
            <div>{game.title}</div>
            <div className="game__players"> up to {game.number_of_players} players</div>
                        <div className="game__description">{game.title} is a game where you {game.description} and takes {game.play_time} hours </div>
                        <div className="game__recommendation">For ages {game.age_recommendation} </div>
        </article>
        </>
    )
}