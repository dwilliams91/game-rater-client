import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameContext } from "./GameProvider.js"
import {GameDetail} from "./GameDetail"
export const Game = ({game}) => {
    console.log(game)
    const { games, getGames, deleteGame } = useContext(GameContext)

    return (
        <>
        
        <article className="games">
                    <section key={`game--${game.id}`} className="game">
                        <Link className="game__title" to={`/games/${game.id}`} >{game.title} </Link>
                       
                        <button onClick={()=>{deleteGame(game)}}>Delete</button>
                    </section>
                    
                
        </article>
        </>
    )
}