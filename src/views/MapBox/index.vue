<template>
  <div class="map-box">
    <div id="map-box-gl"></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
const Mapboxgl = mapboxgl;
export default {
  name: "MAPBOX",
  data() {
    return {
      maps: null,
      geoCode: [
        [121.26765202128274, 31.198332126656922],
        [121.23418267834268, 31.188604670517336],
        [121.21668184119028, 31.198952994162212],
        [121.21668184120131, 31.171009923547302],
      ],
      popup: null,
      marker: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 初始化
      Mapboxgl.accessToken =
        "pk.eyJ1IjoibHVrYXNtYXJ0aW5lbGxpIiwiYSI6ImNpem85dmhwazAyajIyd284dGxhN2VxYnYifQ.HQCmyhEXZUTz3S98FMrVAQ";
      this.maps = new Mapboxgl.Map({
        container: "map-box-gl",
        style: "mapbox://styles/mapbox/streets-v10",
        center: [121.278603, 31.199802],
        zoom: 12,
        attributionControl: false,
      });
      // 语言设置
      Mapboxgl.setRTLTextPlugin(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js"
      );
      this.maps.addControl(
        // eslint-disable-next-line no-undef
        new MapboxLanguage({
          defaultLanguage: "zh",
        })
      );
      this.maps.on("load", () => {
        // this.addMarker()
        const { lng, lat } = this.maps.getCenter();
        this.addMarker(lng, lat);
        this.addLine(this.geoCode);
        this.showpPopup()
      });
    },
    addMarker(lng, lat) {
      this.marker = new Mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(this.maps);
    },
    addLine(coordinates) {
      const geoJson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates,
            },
          },
        ],
      };
      this.maps.addLayer({
        id: "lines",
        type: "line",
        source: {
          type: "geojson",
          data: geoJson,
        },
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#2453ab",
          "line-width": 5,
          "line-opacity": 0.8,
        },
      });
    },
    showpPopup() {
      var markerHeight = 50,
        markerRadius = 10,
        linearOffset = 25;
      var popupOffsets = {
        top: [0, 0],
        "top-left": [0, 0],
        "top-right": [0, 0],
        bottom: [0, -markerHeight],
        "bottom-left": [
          linearOffset,
          (markerHeight - markerRadius + linearOffset) * -1,
        ],
        "bottom-right": [
          -linearOffset,
          (markerHeight - markerRadius + linearOffset) * -1,
        ],
        left: [markerRadius, (markerHeight - markerRadius) * -1],
        right: [-markerRadius, (markerHeight - markerRadius) * -1],
      };
      // eslint-disable-next-line no-unused-vars
      this.popup = new Mapboxgl.Popup({
        offset: popupOffsets,
        className: "my-class",
      }).setLngLat(this.maps.getCenter())
        .setHTML(`<h1>Hello World!</h1><img src="http://uf.damonchu.fun/pixiv/68656810_p0_master1200.jpg" style="width: 300px;" />`)
        .setMaxWidth("320px")
        .addTo(this.maps);
    },
    addLabel(text) {
      const container = document.createElement("div");
      container.className = "mapboxgl-ctrl";
      container.textContent = text;
    },
    clearMap() {
      this.popup.remove()
      this.marker.remove()
    }
  },
};
</script>

<style lang="scss" scoped>
.map-box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  #map-box-gl {
    width: 100%;
    height: 100%;
  }
}
</style>