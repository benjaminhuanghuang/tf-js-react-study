## Install
```
    npm install @tensorflow/tfjs -S
```

## Convert a Keras Model to TensorFlow.js
TensorFlow.js has a Python CLI tool that converts an h5 model saved in Keras to a set files that can be used on the web. 
```
    pip install tensorflowjs
    tensorflowjs_converter --input_format keras keras/cnn.h5 src/assets
```