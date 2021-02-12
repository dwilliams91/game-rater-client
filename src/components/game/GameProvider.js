import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ gameTypes, setTypes ] = useState([])

    const [ games, setGames ] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setGames)
    }
    const createGame = (game) => {
        return fetch("http://localhost:8000/games", { 
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(game)

        })
            .then(game)
    }
    const deleteGame = game => {
        // console.log("hits on click")

        return fetch(`http://localhost:8000/games/${ game.id }`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(getGames)
    }
    

    return (
        <GameContext.Provider value={{ games, getGames, gameTypes, createGame, deleteGame}} >
            { props.children }
        </GameContext.Provider>
    )
}