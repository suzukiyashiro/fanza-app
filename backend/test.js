const videoHTML =
  '<div style="width:100%; padding-top: 75%; position:relative;"><iframe width="100%" height="100%" max-width="1280px" style="position: absolute; top: 0; left: 0;" src="https://www.dmm.co.jp/litevideo/-/part/=/cid=sone00416/size=1280_720/" scrolling="no" frameborder="0" allowfullscreen></iframe></div>';
const srcRegex = /src="([^"]+)"/; // src="https://www.dmm.co.jp/litevideo/-/part/=/cid=sone00420/size=1280_720/"
const match = videoHTML.match(srcRegex);
const videoLink = match[1];

console.log(match);
console.log(videoLink);
