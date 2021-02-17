import React, { useContext, useEffect } from "react"
import { isCompositeComponent } from "react-dom/test-utils"
import { Link } from "react-router-dom"
import { GameContext } from "./GameProvider.js"


export const GameDetail = (props) => {
   
    const { game, getSingleGame, deleteGame } = useContext(GameContext)
    useEffect(()=>{
        const gameId = parseInt(props.match.params.gameId)
        getSingleGame(gameId)
    },[])

    
    const displayStars=(rating)=>{
        let display=""
        for (let i=0; i<rating; i++){
            display+="X"
        }
        

        return display

    }

    return (
        <>
        <article className="games">
            <div>{game.title}</div>
            <div className="game__players"> up to {game.number_of_players} players</div>
                        <div className="game__description">{game.title} is a game where you {game.description} and takes {game.play_time} hours </div>
                        <div className="game__recommendation">For ages {game.age_recommendation} </div>
        </article>
        <h2>Ratings</h2>
        {game.ratings&&<article>
            {
                game.ratings.map(rating => {
                    return <div>{displayStars(rating.rating)}/10</div> 
                    
                })
            }
        </article>}
        </>
    )
}

// {game.ratings&&<article>
//     {
//         game.ratings.map(rating => {
//             return <div>{rating.rating}/10</div> 
            
//         })
//     }
// </article>}