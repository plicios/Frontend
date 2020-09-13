import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {withTracker} from 'meteor/react-meteor-data';
import {ReactiveVar} from "meteor/reactive-var";
import {GameCharacters} from "../api/game_characters"; 
import Character from "./Character";

const sort = new ReactiveVar({score: -1});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {sortLabel: "Desc"};
    }

    renderCharacters() {
        return this.props.gameCharacters.map((character) => (
            <Character key={character._id} character={character}/>
        ));
    }

    addCharacter(event) {
        event.preventDefault();

        const nameField = ReactDOM.findDOMNode(this.refs.name);
        const gameField = ReactDOM.findDOMNode(this.refs.game);

        // Find the text field via the React ref
        const name = nameField.value.trim();
        const game = gameField.value.trim();
        
        nameField.value = '';
        gameField.value = '';

        console.log(`name:${name}`)
        console.log(`game:${game}`)

        GameCharacters.insert({
            name,
            game,
            score: 0,
        });

        console.log("after")
    }

    toggleSortOrder() {
        console.log(sort.get());
        sort.get().score == -1 ? sort.set({score: 1}) : sort.set({score: -1});
        this.state.sortLabel === "Desc" ?
            this.setState({
                sortLabel: "Asc"
            }) : this.setState({
                sortLabel: "Desc"
            });
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Game characters list</h1>
                    <div className="row add-character">
                        <div className="col-md-6 col-md-offset-3" >
                            Add new character
                            <form onSubmit={this.addCharacter.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Character name"
                                           ref="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="game">Game</label>
                                    <input type="text" className="form-control" id="game"
                                           placeholder="Game" ref="game"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Add
                                </button>
                                <span className="btn btn-info pull-right"
                                      onClick={this.toggleSortOrder.bind(this)}>Sort {this.state.sortLabel}</span>
                            </form>
                        </div>
                    </div>


                </header>
                <div className="row">
                    {this.renderCharacters()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        gameCharacters: GameCharacters.find({}, {sort: sort.get()}).fetch(),
    };
})(App);