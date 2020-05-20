var option = {
  tooltip: {
    trigger: "item",
    formatter: function(params) {
      const text = `
          <div class="echarts-map_tool-tip-box">
            <b class="tooltip-t">上海金桥商场(${params.name})</b>
            <span class="tooltip-rank">NO.1</span>
            <p class="cnt-row">
              <span>得分：100</span>
              <span>当前报警：20个</span>
            </p>
            <p class="cnt-row">
              <span>已解决：15个</span>
              <span>累计待解决：10个</span>
            </p>
          </div>`;
      return text;
    },
    backgroundColor: "rgba(0,0,0,.8)",
    borderColor: "#000",
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    shadowBlur: 300,
  },
  geo: {
    map: "myjson",
    label: {
      emphasis: {
        show: false,
      },
    },
    roam: true, //通过鼠标放大缩小地图
    itemStyle: {
      normal: {
        areaColor: "#0529A2",
        borderColor: "#173D88",
        borderWidth: 2,
      },
      emphasis: {
        areaColor: "#0632CC",
      },
    },
  },

  series: [
    {
      name: "Top",
      type: "effectScatter",
      // type: "scatter",
      coordinateSystem: "geo",
      symbolSize: function(val) {
        return val[2] / 10;
      },
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke",
      },
      polyline: true, //支持多点连线
      hoverAnimation: true,
      itemStyle: {
        normal: {
          color: "#f75749",
          shadowBlur: 10,
          shadowColor: "#333",
        },
      },
      zlevel: 1,
    },
  ],
  // visualMap: [
  //   {
  //     // 区域显示颜色
  //     type: "piecewise",
  //     show: true,
  //     textGap: 10, //两端文字主体之间的距离，单位为px
  //     showLabel: true, //是否显示每项的文本标签
  //     pieces: [
  //       { min: 121, max: 300 ,label:"正常"},
  //       { min: 101, max: 120 ,label:"处理种"},
  //       { min: 1, max: 100 ,label:"超时未处理"},
  //       // { value: 99, label: "123（自定义特殊颜色）", color: "grey" },
  //     ],
  //     left:"right",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
  //     top:"bottom",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
  //     right:"auto",                               //组件离容器右侧的距离,'20%'
  //     bottom:"auto",
  //     orient:'horizontal',
  //     hoverLink: true, //鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
  //     inRange: {
  //       // 区域图标样式
  //       symbol: 'circle',
  //       symbolSize:10,
  //       color: ["#F25961", "#FFAD46","#40ECFB"],
  //     },
  //   },
  // ],
};
export default option;
