import { Routes, Route } from "react-router-dom";

import Home from "./home";
import TicTacToe from "./TicTacToe";
import Movie from "./MovieAPI";

function Pages() {
    return (
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route exact path="/TicTacToe" element={<TicTacToe />} />
                    <Route exact path="/MovieAPI" element={<Movie />} />
                </Route>
            </Routes>
    );
}

export default Pages