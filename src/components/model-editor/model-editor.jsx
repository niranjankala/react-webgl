import React, { Component } from 'react';
import Viewer2D from '../viewer2d/viewer2d';
import Viewer3D from '../viewer3d/viewer3d';
import ModelTree from '../model-tree/model-tree';
import './model-editor.css';
class ModelEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-9 col-lg-9 col-sm-12 p-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 p-0">
                            <div className="canvas-container">
                                <Viewer2D props={this.props} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 p-0">
                            <div className="canvas-container">
                                <Viewer3D props={this.props} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="model-tree-container" className="col-md-3 col-lg-3 col-sm-12">
                    <ModelTree />
                </div>
            </div>
        );
    }
}

export default ModelEditor;