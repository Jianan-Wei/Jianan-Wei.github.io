// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoiMjc0MzAzMHciLCJhIjoiY2xjcDd3NDhvMjQ2djNwbXRpbWxlMWlrNyJ9.owlIwho1zV6uVBrIGUIoPg";

const Commercial_mixed_use =
  "mapbox://styles/2743030w/cldgv91s7000q01o6c6tuyag2";

const Retail_only = "mapbox://styles/2743030w/cldgvivde000i01pb799aqqkq";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: Commercial_mixed_use,

  proximity: {
    longitude: 55.8642,
    latitude: 4.2518
  }
});

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

//On click the radio button, toggle the style of the map.
for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "Commercial_mixed_use") {
      map.setStyle(Commercial_mixed_use);
    }
    if (layer.target.id == "Retail_only") {
      map.setStyle(Retail_only);
    }
  };
}

map.on("click", (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["commercial-mixed-use"] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];
  const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h3>${feature.properties.age}</h3><p>${feature.properties.height}</p>`
    )
    .addTo(map);
});

map.on("click", (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["retail-only"] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];
  const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h3>${feature.properties.age}</h3><p>${feature.properties.height}</p>`
    )
    .addTo(map);
});

map.addControl(new mapboxgl.NavigationControl(), "top-right");
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
  }),
  "top-right"
);