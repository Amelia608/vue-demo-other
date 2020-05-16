<template>
  <div class="hello">
    <div ref="mapbox" style="width:100%;height:600px;margin:0 auto"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
import mapData from "./data/map";
import data from "./data/data";
import option from "./data/mapoptions"
import mapjson from "./data/mapjson"
console.log(Object.keys(mapjson))
var myjson = {
  "type":"FeatureCollection",
  "features":[]
}
let index=Math.random()*10
let keysArr=Object.keys(mapjson)
console.log(index)
var x = keysArr.length-1;//上限
var y = 0; //下限
for(var i=0;i<3;i++){
  let index=parseInt(Math.random() * (x - y + 1) + y);
  myjson.features.push(mapjson[keysArr[index]])
}

// console.log(JSON.parse(myjson))
console.log(myjson)
echarts.registerMap('myjson', myjson);
//网络零售当期分布
export default {
  name: "HelloWorld",
  data () {
    return {
      geoCoordMap: {},
    };
  },
  mounted () {
    mapData.map((info) => {
      var city = info.children;
      for (var i = 0; i < city.length; i++) {
        var citydetail = [];
        var name = city[i].name;
        this.geoCoordMap[name] = citydetail;
        var lat = parseFloat(city[i].lat);
        var log = parseFloat(city[i].log);
        citydetail.push(log);
        citydetail.push(lat);
      }
    });
    this.mycharts = echarts.init(this.$refs.mapbox);
    option.series[0].data = this.convertData(
      data.sort(function (a, b) {
        return b.value - a.value;
      })
    );
    this.mycharts.setOption(option);
    // this.mycharts.registerMap('mymap', myjson);
  },
  methods: {
    convertData (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    },
  },
};
</script>
<style lang="scss">
.echarts-map_tool-tip-box {
  .tooltip-t {
    color: #fff;
    font-size: 14px;
  }
  .tooltip-rank {
    color: #f2a443;
    margin-left: 15px;
    display: inline-block;
    margin-bottom: 10px;
  }
  .cnt-row {
    span {
      display: inline-block;
      width: 110px;
      text-align: left;
      font-size: 10px;
      font-weight: normal;
      color: #6e7482;
    }
  }
}
</style>
<style lang="scss" scoped>
.hello {
  background: #000033;
  padding: 30px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
