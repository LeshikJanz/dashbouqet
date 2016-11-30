import React, { Component } from 'react';
import { connect } from 'react-redux'; //декоратор

class App extends Component {

    addTrack(){
        console.log("Add track: " + this.trackInput.value );
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = "";
    }

    render() {
        console.log(this.props.tracks);
        return (
            <div>
                <input type="text" ref={(input) => this.trackInput = input }/>
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {this.props.tracks.map((track, index) =>
                        <li key={index}> {track} </li>
                    )}
                </ul>
            </div>
        )
    }
};

//Все что из этой функции возвращается - хранится в this.props.
export default connect(  //Получает store из provider и помещает в this.props
        state => ({
        tracks: state.tracks
    }),
        dispatch => ({
            onAddTrack: (trackName) => {
                dispatch({ type: 'ADD_TRACK', payload: trackName })
            }
        })
)(App);  //компонент, кот мы хотим обернуть

//mapStateToProps - считывает состояние в store react компонента