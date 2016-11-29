import React, { Component } from 'react';
import { connect } from 'react-redux'; //декоратор

class App extends Component {
    render() {
        console.log(this.props.testStore);
        return (
            <div>

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
        dispatch => ({})
)(App);  //компонент, кот мы хотим обернуть

//mapStateToProps - считывает состояние в store react компонента