import React from "react";
import { Component } from "react";
import Navbar from "./nav";

class FetchAPI extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bf1278fb61msh576cbff0c444ce7p1aded3jsn5bcc482f1e88',
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
            }
        };

            const URL = "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1"
            const response = await fetch(URL, options);
            const data = await response.json();
            this.setState({data : data.Search})
            console.log(data);
    }

    render() {
        const {data} = this.state;
        return (
            <div className="FetchAPI">
                <Navbar />
                <ul style={{listStyle: "none"}}>
                    {data.map((item) => {
                        return (
                        <li key={item.id}>
                            <img src={item.Poster}></img><br />
                            Title: {item.Title}<br />
                            Year: {item.Year}<br />
                            Type: {item.Type}<br />
                            imdbID: {item.imdbID}<br /><br />
                        </li>)
                    })}
                </ul>
            </div>
        )
    }

};


export default FetchAPI;
