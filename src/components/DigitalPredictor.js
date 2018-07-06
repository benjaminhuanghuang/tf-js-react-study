import React, { Component } from 'react';
import * as tf from "@tensorflow/tfjs";

import Chart from "./Chart";
import Drawing from "./Drawing";

class DigitalPredictor extends Component {

    state = {
        predictions: undefined,
    };

    componentDidMount() {
        this.loadModel();
    }

    // Load pretrained keras model
    loadModel = async () => {
        this.model = await tf.loadModel("../models/model.json");
    };

    predict2 = async imageData => {
        await tf.tidy(() => {
            // Convert the canvas pixels to
            let img = tf.fromPixels(imageData, 1);
            img = img.reshape([1, 28, 28, 1]);
            img = tf.cast(img, "float32");

            // Make and format the predications
            const output = this.model.predict(img);

            // Save predictions on the component
            const predictions = Array.from(output.dataSync());
            this.setState({ predictions });
        });
    };

    onNewImage = newImageData => {
        this.predict(newImageData);
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm">
                        <h3>Draw Here</h3>
                        <Drawing onNewImage={this.onNewImage} />
                    </div>
                    <div className="col-sm">
                        <h3>TensorFlow Prediction</h3>
                        <Chart data={this.state.predictions} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DigitalPredictor;
