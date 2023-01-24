// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoiMjc0MzAzMHciLCJhIjoiY2xjcDd3NDhvMjQ2djNwbXRpbWxlMWlrNyJ9.owlIwho1zV6uVBrIGUIoPg";
const style_2020 = "mapbox://styles/2743030w/clda4esxk002201t7j3c0ydn0";
const style_2022 = "mapbox://styles/2743030w/clda4trmy002k01r0dpui2ija";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: style_2020,
  center: [-0.089932, 51.514441],
  zoom: 14
});
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

//On click the radio button, toggle the style of the map.
for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "style_2019") {
      map.setStyle(style_2020);
    }
    if (layer.target.id == "style_2021") {
      map.setStyle(style_2022);
    }
  };
}