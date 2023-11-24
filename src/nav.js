import { Link } from "react-router-dom";

function Pages() {
    return (
        <div>
            <Link to={"/"} className="btn">
                Home
            </Link>
            <br />
            <Link to={"/TicTacToe"} className="btn">
                TicTacToe
            </Link>
            <br />
            <Link to={"/MovieAPI"} className="btn">
            Avenger Movies
            </Link>
        </div>
    );
}

export default Pages