import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './model-tree.scss';
class ModelTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {}
        };

        this.nodeService = new NodeService();
    }
    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div className="dataModelTree">
                <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                    onToggle={e => this.setState({ expandedKeys: e.value })}
                    style={{ height: '100vh' }} />
            </div>);
    }
}

export default ModelTree;
