<template>
  <div class="map-box">
    <div id="map-box-gl"></div>
    <div class="btn-box">
      <div class="btns" @click="getData">画线</div>
    </div>
  </div>
</template>

<script>
import { getMapData } from "@/api/index";
// eslint-disable-next-line no-undef
const Mapboxgl = mapboxgl
let map = null
export default {
  name: "MAPBOX",
  data() {
    return {
      maps: map,
      geoCode: [
        [121.26765202128274, 31.198332126656922],
        [121.23418267834268, 31.188604670517336],
        [121.21668184119028, 31.198952994162212],
        [121.21668184120131, 31.171009923547302],
      ],
      popup: null,
      marker: null,
      styles: 't%3Apoilabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Apoilabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Asubway%7Ce%3Ag%7Cv%3Aoff%2Ct%3Asubwaylabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Asubwaylabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Atertiarywaysign%7Ce%3Al%7Cv%3Aoff%2Ct%3Atertiarywaysign%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Arailway%7Ce%3Ag%7Cv%3Aoff%2Ct%3Avacationway%7Ce%3Ag%7Cv%3Aoff%2Ct%3Auniversityway%7Ce%3Ag%7Cv%3Aoff%2Ct%3Ascenicspotsway%7Ce%3Ag%7Cv%3Aoff%2Ct%3Alocal%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Alocal%7Ce%3Al%7Cv%3Aoff%2Ct%3Alocal%7Ce%3Ag%7Cv%3Aoff%2Ct%3Abuilding%7Ce%3Ag%7Cv%3Aon%2Ct%3Avillage%7Ce%3Al%7Cv%3Aoff%2Ct%3Avillage%7Ce%3Al%7Cv%3Aoff%2Ct%3Atown%7Ce%3Al%7Cv%3Aoff%2Ct%3Atown%7Ce%3Al%7Cv%3Aoff%2Ct%3Adistrict%7Ce%3Al%7Cv%3Aoff%2Ct%3Adistrict%7Ce%3Al%7Cv%3Aoff%2Ct%3Adistrict%7Ce%3Al.t.s%7Cw%3A0.4%2Ct%3Atown%7Ce%3Al.t.f%7Cc%3A%230075ffff%2Ct%3Afourlevelway%7Ce%3Al.t.f%7Cc%3A%234a90e2ff%2Ct%3Atertiaryway%7Ce%3Al.t.f%7Cc%3A%23417505ff%2Ct%3Aarterial%7Ce%3Al.t.f%7Cc%3A%23f5a623ff%2Ct%3Acompanylabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Acompanylabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Arestaurantlabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Arestaurantlabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Ashoppinglabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Ashoppinglabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Alifeservicelabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Alifeservicelabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Acarservicelabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Acarservicelabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Afinancelabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Afinancelabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Aentertainmentlabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Aentertainmentlabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Aestatelabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Aestatelabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Abusinesstowerlabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Abusinesstowerlabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Ahotellabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Ahotellabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Agovernmentlabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Agovernmentlabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Amedicallabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Amedicallabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Aeducationlabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Aeducationlabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Ascenicspotslabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Ascenicspotslabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Aairportlabel%7Ce%3Al%7Cv%3Aoff%2Ct%3Aairportlabel%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Aestate%7Ce%3Ag%7Cv%3Aon%2Ct%3Amanmade%7Ce%3Ag%7Cv%3Aon%2Ct%3Amanmade%7Ce%3Al%7Cv%3Aoff%2Ct%3Ascenicspots%7Ce%3Al%7Cv%3Aoff%2Ct%3Amedical%7Ce%3Al%7Cv%3Aoff%2Ct%3Atransportation%7Ce%3Al%7Cv%3Aoff'
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
        container: 'map-box-gl',
        center:  [121.26759791631557, 31.196127285084458],
        zoom: 12,
        fadeDuration:0,
        style: {
        "version":8,
        "name":"Positron",
        "metadata":{},
        //"sprite":"http://10.0.3.96:8085/styles/positron/sprite",
        //"glyphs":"http://10.0.3.96:8085/fonts/{fontstack}/{range}.pbf",
        //local
        //"glyphs":"/static/fonts/{fontstack}/{range}.pbf",
        //service
        "glyphs":"fonts/{fontstack}/{range}.pbf",
        "sources":{},
        "layers":[]
      },
      hash: false,
        
      });
      this.maps.on('load', () => {
        
        var tileLayer = new TileBD09Layer({
          url: `http://api2.map.bdimg.com/customimage/tile/?x={x}&y={y}&z={z}&scale=2&udt=20200825&styles=${this.styles}`
          // url:"http://online1.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=4&color_dep=32&colors=30&udt=20200426"
          //url:"http://maponline0.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20200611&from=jsapi2_0"
        });

        tileLayer.addTo(this.maps);
        // 添加点
        this.addMarker(121.26759791631557, 31.196127285084458)
        // 添加信息框
        this.showpPopup()
        // 添加线
        // this.addLine(this.geoCode)
      });

      // this.maps = new Mapboxgl.Map({
      //   container: "map-box-gl",
      //   style: "mapbox://styles/mapbox/streets-v10",
      //   center: [121.26759791631557, 31.196127285084458],
      //   zoom: 12,
      //   attributionControl: false,
      // });
      // // 语言设置
      // Mapboxgl.setRTLTextPlugin(
      //   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js"
      // );
      // this.maps.addControl(
      //   // eslint-disable-next-line no-undef
      //   new MapboxLanguage({
      //     defaultLanguage: "zh",
      //   })
      // );
      // this.maps.on("load", () => {
      //   // this.addMarker()
      //   // this.maps.addLayer(
      //   //   {
      //   //     id: "mapillary",
      //   //     type: "line",
      //   //     source: {
      //   //       type: "vector",
      //   //       tiles: [
      //   //         "http://online1.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=2&color_dep=32&colors=50&udt=20180426",
      //   //       ],
      //   //       minzoom: 6,
      //   //       maxzoom: 14,
      //   //     },
      //   //     "source-layer": "mapillary-sequences",
      //   //     layout: {
      //   //       "line-cap": "round",
      //   //       "line-join": "round",
      //   //     },
      //   //     paint: {
      //   //       "line-opacity": 0.6,
      //   //       "line-color": "rgb(53, 175, 109)",
      //   //       "line-width": 2,
      //   //     },
      //   //   },
      //   //   "waterway-label"
      //   // );
      //   const { lng, lat } = this.maps.getCenter();
      //   this.addMarker(lng, lat);
      //   this.addMarker(121.278603, 31.199802);
      //   // this.addLine(this.geoCode);
      //   // this.getData()
      //   this.showpPopup();
      // });
    },
    addMarker(lng, lat) {
      this.marker = new Mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(this.maps);
    },
    addLine(id, coordinates, color = "#2453ab") {
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
        id: "lines" + id,
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
          "line-color": color,
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
      })
        .setLngLat(this.maps.getCenter())
        .setHTML(
          `<h1>Hello World!</h1><img src="http://uf.damonchu.fun/pixiv/68656810_p0_master1200.jpg" style="width: 300px;" />`
        )
        .setMaxWidth("320px")
        .addTo(this.maps);
    },
    addLabel(text) {
      const container = document.createElement("div");
      container.className = "mapboxgl-ctrl";
      container.textContent = text;
    },
    clearMap() {
      this.popup.remove();
      this.marker.remove();
    },
    getData() {
      const url =
        "http://114.55.251.153:8011/Api/BasicPointCorrect/GetRoadPointListByRoadId";
      const data = { CompanyCode: "0791RYGLS", RoadId: 1439, RoadName: "G60" };
      getMapData(url, data).then((res) => {
        const datas = [];
        const points = [];
        res.Json[3].loc.map((t, index, arr) => {
          if (index % 2 === 0) {
            points.push([arr[index], arr[index + 1]]);
          }
        });
        for (var i = 1; i < 50; i++) {
          points.map((t) => {
            datas.push([t[0], t[1] + 0.1 * i]);
          });
          points.reverse();
        }
        let num = 0;
        let color = "red";
        let len = 0;
        datas.map((t, inv) => {
          if (inv !== 0 && inv % 5000 === 0) {
            const arr = datas.filter((t, index) => index > len && index <= inv);
            this.addLine(inv, arr, color);
            len = inv;
            num++;
            color = color === "red" ? "blue" : "red";
          }
        });
        console.log(num);
        // datas.filter((t, index) => index <= 300).map(t=> {
        //   this.addMarker(t[0], t[1])
        // })
      });
    },
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
  .btn-box {
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    position: fixed;
    top: 30px;
    right: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    .btns {
      width: 100px;
      padding: 3px 10px;
      border-radius: 5px;
      background-color: green;
      color: white;
      cursor: pointer;
      opacity: 1;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
