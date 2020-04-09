import Mock from "mockjs";
//用来获取参数的方法
function getQueryString(url, name) {
    let urlObj = new URL(url);
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = urlObj.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
Mock.mock(RegExp("http://your.domain.com/test" + ".*"), "get", (options) => {
    let count = getQueryString(options.url, "count");
    let mockObj = {
        status: 0,
        data: [],
        msg: "成功",
    };
    for (var i = 0; i < count; i++) {
        mockObj.data.push({
            tid: "@increment",
            title: "@ctitle(5, 20)",
            catalog: "index",
            "fav|0-20": 20,
            created: Mock.Random.date("yyyy-MM-dd HH:mm:ss"),
            share_times: Mock.Random.integer(50, 500),
            "isEnd|0-1": 0,
            answer: '@string("number",2)',
            user: {
                avatar: "@image('60x60')",
                name: "@cname",
                "isVip|0-1": 0,
                "level":"@string('number',1)"
            },
        });
    }
    let result = Mock.mock(mockObj);
    return result;
});
