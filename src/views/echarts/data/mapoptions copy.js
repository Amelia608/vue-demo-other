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
        // regions: [
        //     //对不同的区块进行着色
        //     {
        //         name: "河北", //区块名称
        //         itemStyle: {
        //             normal: {
        //                 areaColor: "#fbd8f3",
        //             },
        //         },
        //     },
        //     {
        //         name: "内蒙古",
        //         itemStyle: {
        //             normal: {
        //                 areaColor: "#fcc8b8",
        //             },
        //         },
        //     },
        // ],
    },
    series: [
        {
            name: "Top",
            type: "effectScatter",
            selectedMode: "single",
            // type: "scatter",
            coordinateSystem: "geo",
            label: {
              show:false
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
                emphasis: {
                    areaColor: "red",
                    borderWidth: 1,
                    borderColor: "yellow",
                }, //鼠标事件区块样式
            },
            zlevel: 1,
        },
        {
            name: "国内天气",
            type: "map",
            mapType: "myjson",
            roam: false,
            itemStyle: {
                areaColor: "#AAD5FF", //地图区域背景颜色
                borderColor: "#fff", //地图边界颜色
            },
            label: {
                emphasis: {
                    show: false,
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,.7)",
                    padding: 10,
                    align: "left",
                    borderRadius: 4,
                },
                formatter: function(params) {
                    console.log(params);
                    return (
                        "{a|" +
                        params.name +
                        "}" +
                        "   {b|NO.54}\n\n{x|得分：100      当前报警：30个 \n\n已解决:15个     累计待解决:10个}"
                    );
                },
                rich: {
                    a: { color: "#fff" },
                    b: { color: "#FFAD46", display: "block" },
                    x: {
                        color: "#8F96A6",
                        marginTop: 10,
                    },
                },
            },

            data: [
                { name: "北京", value: Math.round(Math.random() * 1000) },
                { name: "天津", value: Math.round(Math.random() * 1000) },
                { name: "上海", value: Math.round(Math.random() * 1000) },
                { name: "重庆", value: Math.round(Math.random() * 1000) },
                { name: "河北", value: Math.round(Math.random() * 1000) },
                { name: "河南", value: Math.round(Math.random() * 1000) },
                { name: "云南", value: Math.round(Math.random() * 1000) },
                { name: "辽宁", value: Math.round(Math.random() * 1000) },
                { name: "黑龙江", value: Math.round(Math.random() * 1000) },
                { name: "湖南", value: Math.round(Math.random() * 1000) },
                { name: "安徽", value: Math.round(Math.random() * 1000) },
                { name: "山东", value: Math.round(Math.random() * 1000) },
                { name: "新疆", value: Math.round(Math.random() * 1000) },
                { name: "江苏", value: Math.round(Math.random() * 1000) },
                { name: "浙江", value: Math.round(Math.random() * 1000) },
                { name: "江西", value: Math.round(Math.random() * 1000) },
                { name: "湖北", value: Math.round(Math.random() * 1000) },
                { name: "广西", value: Math.round(Math.random() * 1000) },
                { name: "甘肃", value: Math.round(Math.random() * 1000) },
                { name: "山西", value: Math.round(Math.random() * 1000) },
                { name: "内蒙古", value: Math.round(Math.random() * 1000) },
                { name: "陕西", value: Math.round(Math.random() * 1000) },
                { name: "吉林", value: Math.round(Math.random() * 1000) },
                { name: "福建", value: Math.round(Math.random() * 1000) },
                { name: "贵州", value: Math.round(Math.random() * 1000) },
                { name: "广东", value: Math.round(Math.random() * 1000) },
                { name: "青海", value: Math.round(Math.random() * 1000) },
                { name: "西藏", value: Math.round(Math.random() * 1000) },
                { name: "四川", value: Math.round(Math.random() * 1000) },
                { name: "宁夏", value: Math.round(Math.random() * 1000) },
                { name: "海南", value: Math.round(Math.random() * 1000) },
                { name: "台湾", value: Math.round(Math.random() * 1000) },
                { name: "香港", value: Math.round(Math.random() * 1000) },
                { name: "澳门", value: Math.round(Math.random() * 1000) },
            ],
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
                { min: 121, max: 300, label: "正常" },
                { min: 101, max: 120, label: "处理种" },
                { min: 1, max: 100, label: "超时未处理" },
                // { value: 99, label: "123（自定义特殊颜色）", color: "grey" },
            ],
            left: "right", //组件离容器左侧的距离,'left', 'center', 'right','20%'
            top: "bottom", //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
            right: "auto", //组件离容器右侧的距离,'20%'
            bottom: "auto",
            orient: "horizontal",
            hoverLink: true, //鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
            inRange: {
                // 区域图标样式
                symbol: "circle",
                symbolSize: 10,
                color: ["#F25961", "#FFAD46", "#40ECFB"],
            },
        },
    ],
};
export default option;
