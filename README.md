# Responsive Video Annotations

This is a proof of concept example of leveraging CSS percentages to responsively place annotations inside a video. The end result is text and div elements responsively stay in position and scale with the video content.

## Usage

```bash
npm install
npm start
```

## Placing annotations

This implementation relies on a combination of absolute positioning and percentages. The top/right/left/bottom positions are percentages and the font-size/width/height values leverage `vw` for sizes to responsively scale. Below is an example of how to position elements.

```css
 {
  position: absolute;
  top: 10%;
  right: 50%;
  color: white;
  font-size: 5vw;
}

.box {
  position: absolute;
  bottom: 10%;
  right: 30%;
  background-color: red;
  border: 4px dotted green;
  width: 12vw;
  height: 12vw;
}
```
