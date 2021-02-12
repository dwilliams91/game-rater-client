import React from "react"
import { Route } from "react-router-dom"
import {GameProvider} from "./game/GameProvider"
import {GameList} from "./game/GameList"
import {GameForm} from "./game/GameForm"
export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            Application views
        </main>
        <GameProvider>
            <Route exact path="/games" render={
                    props => <GameList {...props} />} />
            <Route exact path="/games/new" render={
                    props => <GameForm {...props} />} />
        </GameProvider>

    </>
}
