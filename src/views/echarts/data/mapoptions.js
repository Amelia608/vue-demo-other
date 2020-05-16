var option = {
    roam: true,
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
        roam: false,
        itemStyle: {
            normal: {
                areaColor: "#d1d1d1",
                borderColor: "#111",
            },
            emphasis: {
                areaColor: "#d1d1d1",
            },
        },
    },

    series: [
        {
            name: "Top",
            // type: "effectScatter",
            type: "scatter",
            coordinateSystem: "geo",
            roam: true,
            label: {
                normal: {
                    // show: true,
                  //   formatter:function(params){
                  //     return params.name;
                  // },
                },
                emphasis: {
                    // show: true,
                },
            },
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: "render",
            rippleEffect: {
                brushType: "stroke",
            },
            polyline: true, //支持多点连线
            lineStyle: {
                color: "red",
                width: 1.5,
                opacity: 0.9,
                curveness: 0,
                type: "dotted",
                shadowBlur: 3,
            },
            hoverAnimation: false,
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
    visualMap: [
        {
            // 区域显示颜色
            type: "piecewise",
            show: true,
            textGap: 10, //两端文字主体之间的距离，单位为px
            showLabel: true, //是否显示每项的文本标签
            pieces: [
                { min: 101, max: 1000 },
                { value: 99, label: "123（自定义特殊颜色）", color: "grey" },
                { max: 100 },
            ],
            itemSymbol: "roundRect",
            hoverLink: true, //鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
            // borderColor: "#ccc", //边框颜色
            // borderWidth: 1, //边框线宽
            inRange: {
                // 区域图标样式
                // symbol: 'circle',
                symbolSize: [5, 10],
                color: ["#f75749", "red"],
            },
        },
    ],
};
export default option;
