import React, { Component } from 'react';
import * as Raphael from 'raphael';
class Viewer2D extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    intializePaper = () => {
        // Specify view box size.
        const w = 600;
        const h = 400;

        // Raphael (at least as of 2.1.0) always sets a fixed width/height *on canvas creation*
        // (reflected in 'width' and 'height' HTML attributes) - if you don't specify width and
        // height, the canvas will be sized to fully fill its container. Fortunately, though,
        // CSS-based width/height specifications take precedence (see 'svg' style) and thus allow for dynamic resizing.
        this.paper = Raphael(this.canvas.id);
        // Set the view box, which effectively activates scaling.
        this.paper.setViewBox(0, 0, w, h, true);
        this.paper.setSize('100%', '100%');
        // !! As of Raphael 2.1.0, specifying true as the `fit` parameter to `setViewBox()` translates into an invalid value for the SVG
        // `preserveAspectRatio` attribute: "meet". To rule out this problem, we set that attribute directly.
        this.paper.canvas.setAttribute('preserveAspectRatio', 'none'); // always scale to fill container, without preserving aspect ratio.

        // ok, raphael sets width/height even though a viewBox has been set, so let's rip out those attributes (yes, this will not work for VML)
        // var svg = document.querySelector("svg");
        // svg.removeAttribute("width");
        // svg.removeAttribute("height");
        // draw some random vectors:

        this.paper.rect(0, 0, w, h).attr({ stroke: 'black' });
        // var path = "M " + w / 2 + " " + h / 2;
        // for (var i = 0; i < 100; i++) {
        //   var x = Math.random() * w;
        //   var y = Math.random() * h;
        //   this.paper.circle(x, y,
        //     Math.random() * 60 + 2).
        //     attr("fill", "rgb(" + Math.random() * 255 + ",0,0)").
        //     attr("opacity", 0.5);
        //   path += "L " + x + " " + y + " ";
        // }

        // this.paper.path(path).attr("stroke", "#ffffff").attr("stroke-opacity", 0.2);

        // this.paper.text(200, 100, "Resize the window").attr("font", "30px Arial").attr("fill", "#ffffff");
    }

    componentDidMount() {
        //this.props.getPageTitle('Three.js');
        this.intializePaper();
        window.addEventListener("resize", this.onResize);
    }
    componentWillUnmount() {
        //this.mount.removeChild(this.renderer.domElement)
        window.removeEventListener("resize", this.onResize);
    }
    componentWillReceiveProps(nextProps) {
        const {
            params: { model },
        } = nextProps.props.match;

        if (this.modelfile === '')
            this.setState({ modelfile: model });
        if (this.modelfile !== '' && model !== this.modelfile) {
            this.setState({ modelfile: model });
            this.modelfile = model;
            //this.forceUpdate();
            //Perform some operation

            //this.setState({someState: someValue });

            //this.classMethod();

        }

    }

    /* EVENTS */
    onMouseDown = event => {
        console.log("onMouseDown");
        event.preventDefault();
    };


    onMouseUp = event => {
        console.log("onMouseUp");
    };

    onResize = event => {
        //this.canvas.style.width = "100%";
        //this.canvas.style.height = "100%";

        this.paper.setSize('100%', '100%')
        this.paper.canvas.setAttribute('preserveAspectRatio', 'none'); // always scale to fill container, without preserving aspect ratio.
        console.log(
            "onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight
        );
    };


    render() {
        return (
            <div id="view2d-canvas"
                style={{ width: "100%", height: "100%" }}
                onMouseDown={this.onMouseDown}
                ref={canvas => {
                    this.canvas = canvas;
                }}
            ></div>

        );
    }
}

export default Viewer2D;