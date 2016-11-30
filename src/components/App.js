import React, { Component } from 'react';
import { connect } from 'react-redux'; //декоратор

class App extends Component {

    addTrack(){
        console.log("Add track: " + this.trackInput.value );
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = "";
    }

    render() {
        console.log(this.props.testStore);
        return (
            <div>
                <input type="text" ref={(input) => this.trackInput = input }/>
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {this.props.testStore.map((track, index) =>
                        <li key={index}> {track} </li>
                    )}
                </ul>
            </div>
        )
    }
}
;

export default connect(  //Получает store из provider и помещает в this.props
        state => ({
        testStore: state
    }),
        dispatch => ({
            onAddTrack: (trackName) => {
                dispatch({ type: 'ADD_TRACK', payload: trackName })
            }
        })
)(App);  //компонент, кот мы хотим обернуть

//mapStateToProps - считывает состояние в store react компонента