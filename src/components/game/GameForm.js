import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameForm=(props)=>{

    const {createGame} = useContext(GameContext)

    const [currentGame, setCurrentGame]=useState(
        {
            title:"",
            description:"",
            numberOfPlayers:"",
            year:"",
            playTime:"",
            ageRecommendation:"",
        }

    )
    const changeGameState = (domEvent) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[domEvent.target.name] = domEvent.target.value
        setCurrentGame(newGameState)
    }

    return (
        <>
            <form>
                <fieldset>
                    <label>Title</label>
                    <input type="text" name="title" 
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Description</label>
                    <input type="text" name="description" 
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Number of Players</label>
                    <input type="number" name="numberOfPlayers" 
                        value={currentGame.numberOfPlayers}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Year Released</label>
                    <input type="number" name="year" 
                        value={currentGame.year}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Hours to Complete</label>
                    <input type="number" name="playTime" 
                        value={currentGame.playTime}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Age Recommendation</label>
                    <input type="number" name="ageRecommendation" 
                        value={currentGame.ageRecommendation}
                        onChange={changeGameState}
                    />
                </fieldset>
                <button
                type="submit"
                onClick={event=>{
                event.preventDefault()

                const game= {
                    title:currentGame.title,
                    description:currentGame.description,
                    numberOfPlayers:currentGame.numberOfPlayers,
                    year:currentGame.year,
                    playTime:currentGame.playTime,
                    ageRecommendation:currentGame.ageRecommendation,
                }
                console.log(game)
                createGame(game)
                .then(() => props.history.push("/games"))
                
                }}

                
                
                >submit</button>


            </form>
        
        </>


    )



}