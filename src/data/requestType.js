const orderList = [
    { type: '总点击榜', flag: 'allvisit' },
    { type: '月点击榜', flag: 'monthvisit' },
    { type: '周点击榜', flag: 'weekvisit' },
    { type: '日点击榜', flag: 'dayvisit' },
    { type: '总推荐榜', flag: 'allvote' },
    { type: '月推荐榜', flag: 'monthvote' },
    { type: '周推荐榜', flag: 'weekvote' },
    { type: '日推荐榜', flag: 'dayvote' },
    { type: '总月票榜', flag: 'allvipvote' },
    { type: '本月票榜', flag: 'monthvipvote' },
    { type: '前月票榜', flag: 'previpvote' },
    { type: '周月票榜', flag: 'weekvipvote' },
    { type: '日月票榜', flag: 'dayvipvote' },
    { type: '总鲜花榜', flag: 'allflower' },
    { type: '月鲜花榜', flag: 'monthflower' },
    { type: '周鲜花榜', flag: 'weekflower' },
    { type: '日鲜花榜', flag: 'dayflower' },
    { type: '总鸡蛋榜', flag: 'allegg' },
    { type: '月鸡蛋榜', flag: 'monthegg' },
    { type: '周鸡蛋榜', flag: 'weekegg' },
    { type: '日鸡蛋榜', flag: 'dayegg' },
    { type: '总销售榜', flag: 'allsale' },
    { type: '月销售榜', flag: 'monthsale' },
    { type: '周销售榜', flag: 'weeksale' },
    { type: '日销售榜', flag: 'daysale' },
    { type: '打赏榜', flag: 'sumtip' },
    { type: '订阅榜', flag: 'sumegold' },
    { type: '收入榜', flag: 'sumemoney' },
    { type: '月勤更榜', flag: 'monthwords' },
    { type: '周勤更榜', flag: 'weekwords' },
    { type: '日勤更榜', flag: 'daywords' },
    { type: '最近更新', flag: 'lastupdate' },
    { type: '最新入库', flag: 'postdate' },
    { type: '最新上架', flag: 'signtime' },
    { type: '收藏榜', flag: 'goodnum' },
    { type: '字数榜', flag: 'words' },
    { type: '编辑推荐', flag: 'toptime' },
    { type: '新书榜', flag: 'allvisit' }
]

const sortList = [
    { type: "男士", id: 8 },
    { type: "女士", id: 18 },
    { type: "中年", id: 23 },
    { type: "老年", id: 20 },
    { type: "熊熊", id: 22 },
    { type: "校园", id: 24 },
    { type: "军警", id: 21 },
    { type: "情感", id: 4 },
    { type: "玄古", id: 28 }
]

module.exports = {
    orderList,
    sortList
}