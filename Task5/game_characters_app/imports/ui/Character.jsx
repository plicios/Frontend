import React, {Component} from 'react';
import {GameCharacters} from "../api/game_characters";

export default class Character extends Component {
    deleteThisCharacter() {
        GameCharacters.remove(this.props.character._id);
    }

    upvoteThisCharacter() {
        GameCharacters.update(this.props.character._id, {
            $set: {score: this.props.character.score + 1}
        })
    }

    downvoteThisCharacter() {
        GameCharacters.update(this.props.character._id, {
            $set: {score: this.props.character.score - 1}
        })
    }

    render() {
        return (
            <div className="col-xs-12">
                <p className="bg-primary h-50 character">
                    <span>{`Name:${this.props.character.name} - ${this.props.character.game}`}</span>
                    <button type="button" className="close" aria-hidden="true"
                            onClick={this.deleteThisCharacter.bind(this)}>&times;</button>
                    <button type="button" className="btn btn-success pull-right"
                            onClick={this.upvoteThisCharacter.bind(this)}>+1
                    </button>
                    <span className="btn btn-secondary pull-right">{this.props.character.score}</span>
                    <button type="button" className="btn btn-danger pull-right"
                            onClick={this.downvoteThisCharacter.bind(this)}>-1
                    </button>
                </p>
            </div>
        );
    }
}


