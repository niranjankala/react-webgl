import React, { Component } from 'react';
import { Steps } from 'primereact/steps';
import { Growl } from 'primereact/growl';
import './model-configuration.scss';
class ModelConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        };
    }
    render() {
        const items = [{
            label: 'Containers',
            command: (event) => {
                this.growl.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Podium',
            command: (event) => {
                this.growl.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }, disabled: true
        },
        {
            label: 'Unit Mix',
            command: (event) => {
                this.growl.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        },
        {
            label: 'Residential',
            command: (event) => {
                this.growl.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        },
        {
            label: 'Parking',
            command: (event) => {
                this.growl.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }

        ];
        return (
            <React.Fragment>
                <Growl ref={(el) => { this.growl = el }}></Growl>
                <Steps model={items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({ activeIndex: e.index })} readOnly={false} className="steps-custom" />
            </React.Fragment>
        );
    }
}

export default ModelConfiguration;