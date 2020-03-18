# \<top-bubble-consumer>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i top-bubble-consumer
```

## Usage
```html
<script type="module">
  import 'top-bubble-consumer/top-bubble-consumer.js';
</script>

<top-bubble-consumer></top-bubble-consumer>
```



## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## Excercise
- ```top-bubble-consumer``` has a nested web component inside itself: ```bottom-bubble-producer```
- ```bottom-bubble-producer``` has an input field inside it
- ```top-bubble-consumer``` has a button inside it
- When the input field is edited, then the outer button should be enabled/disabled *without the input field being left*.
- This should be achieved by the inner input field bubbling up some event that the outer button can react to