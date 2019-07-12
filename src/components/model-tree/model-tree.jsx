import React, { Component } from 'react';
class ModelTree extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dataModelTree">
                <h3>Data Model Tree</h3>
                <ul >
                    <li>Project
                        <ul>
                            <li>Site
                     <ul>
                                    <li>Building
                           <ul>
                                            <li>Building Story 1
                                 <ul>
                                                    <li>15 Living Units</li>
                                                    <li>1 Coridor</li>
                                                    <li>2 Stair towers</li>
                                                </ul>
                                            </li>
                                            <li>Building Story 2
                                 <ul>
                                                    <li>15 Living Units</li>
                                                    <li>1 Coridor</li>
                                                    <li>2 Stair towers</li>
                                                </ul>
                                            </li>
                                            <li>Building Story 3
                                 <ul>
                                                    <li>15 Living Units</li>
                                                    <li>1 Coridor</li>
                                                    <li>2 Stair towers</li>
                                                </ul>
                                            </li>
                                            <li>Building Story 4
                                 <ul>
                                                    <li>15 Living Units</li>
                                                    <li>1 Coridor</li>
                                                    <li>2 Stair towers</li>
                                                </ul>
                                            </li>
                                            <li>Building Story 5
                                 <ul>
                                                    <li>15 Living Units</li>
                                                    <li>1 Coridor</li>
                                                    <li>2 Stair towers</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>);
    }
}

export default ModelTree;
