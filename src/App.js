import React, { Component } from 'react';
import { render } from 'react-dom';

import Loadable from 'react-loadable';
import Loading from './Loading';
import fakeDelay from './fakeDelay';
import path from 'path';

const LazyComponent = Loadable({
    loader: () => fakeDelay(4000).then(() => import('./LazyComponent')),
    loading: Loading,
    serverSideRequirePath: path.resolve(__dirname, './LazyComponent')
});

export default class MyApp extends Component {

    state = {
        show: false
    }

    onClickLoad = () => {
        this.setState({
            show: true
        });
    }

    render() {
        return (
            <div>
                <h2>Hello World</h2>
                {this.state.show && LazyComponent ?
                    <LazyComponent /> :
                    <button onClick={this.onClickLoad}>
                        Load component
                    </button>
                }
            </div>
        );
    }
}

