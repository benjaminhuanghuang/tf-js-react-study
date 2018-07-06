## Reference
- https://github.com/AngularFirebase/97-tensorflowjs-quick-start
- https://github.com/justinjrussell/tensorflowjs-react

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

## Image to Tensor data
TensorFlow.js gives us a fromPixels helper to convert an ImageData HTML object into a Tensor. You can also use a plain HTMLImageElement or even a video. Under the hood it turns the pixels into a 3D matrix of numbers.