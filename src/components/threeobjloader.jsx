import React, { Component } from "react";import "../EnableThreeExamples";
import { range } from 'd3-array'
import { scaleThreshold } from 'd3-scale'
import { geoCentroid } from 'd3-geo'
import ThreeBimView from './threedBIMView';
import WorldMap from './worldmap';
import worlddata from './worldData'
//OBJLoader(THREE);

const appdata = worlddata.features
  .filter(d => geoCentroid(d)[0] < -20)

appdata
  .forEach((d,i) => {
    const offset = Math.random()
    d.launchday = i
    d.data = range(30).map((p,q) => q < i ? 0 : Math.random() * 2 + offset)
  })

const colorScale = scaleThreshold().domain([5,10,20,30]).range(["#75739F", "#5EAFC6", "#41A368", "#93C464"])

class ThreeOBJLoader extends Component {
  state = {
   
  };

  constructor(props){
    super(props)
    this.onResize = this.onResize.bind(this)
    this.onHover = this.onHover.bind(this)
    this.onBrush = this.onBrush.bind(this)
    this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0,40] }

  }

  onResize() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 120 })
  }

  onHover(d) {
    this.setState({ hover: d.id })
  }

  onBrush(d) {
    this.setState({ brushExtent: d })
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, false)
    this.onResize()
  }
  
  render() {
    const filteredAppdata = appdata
      .filter((d,i) => d.launchday >= this.state.brushExtent[0] && d.launchday <= this.state.brushExtent[1])

    return (
      <div className="row">
          <div className="col dataModelTree">
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
          </div>
          <div className="col">
            <h3>3D BIM View</h3>
            <div className="canvas-container" style={{height:'300px'}}>
              <ThreeBimView props={this.props} />
            </div>
            <div>
              <h4>Project Model Statistics</h4>
                <div className="row">
                  <div className="col-sm-6"> Stories</div>
                  <div className="col-sm-6"> <span className="float-right">5</span></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"> Total Height</div>
                  <div className="col-sm-6"> <span className="float-right">54 ft.</span></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"> Floor Area per story</div>
                  <div className="col-sm-6"> <span className="float-right">10,800 sq.ft.</span></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"> Total Floor Area</div>
                  <div className="col-sm-6">  <span className="float-right">54,000 sq.ft.</span></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"> Total Living Units</div>
                  <div className="col-sm-6">  <span className="float-right">75</span></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"> Total Coridors</div>
                  <div className="col-sm-6">  <span className="float-right">5</span></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"> Total Stair towers</div>
                  <div className="col-sm-6"> <span className="float-right">10</span></div>
                </div>
            </div>
            
          </div>
          <div className="col-sm-4">
          <h3>2D BIM View</h3>
          <div className="canvas-container" style={{height:'300px'}}>
            <WorldMap hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth / 2, this.state.screenHeight / 2]} />
          </div>
          <div>
            <h4>Selected Object Properties</h4>
            <div className="row">
                  <div className="col-sm-6"> Object Type</div>
                  <div className="col-sm-6"> Building Site</div>
                </div>
                <div className="row">
                  <div className="col-sm-6"> Area</div>
                  <div className="col-sm-6"> 40,000 sq.ft.</div>
                </div>
                <div className="row">
                  <div className="col-sm-6"> Perimeter</div>
                  <div className="col-sm-6"> 800 ft.</div>
                </div>
          </div>
          </div>
        </div>
      
    );
  }
}

export default ThreeOBJLoader;
