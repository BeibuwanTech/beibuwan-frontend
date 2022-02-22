export default {
    // support Object and Array as return data
    // 'GET /api/activity': {
    //     data: [{
    //         url: '',
    //         img: 'https://fs.kj01.cn/resource/ts/20210402/20210402165705838_Ev8miEhN.jpg',
    //         tag: '直播',
    //         date: '04月08日 周四',
    //         holder: '海口市江东新区科技创新局',
    //         countType: '政策直播间',
    //         countNum: 1409
    //     }]
    // },

    // GET can be omitted
    '/api/search/filter': {
        data: [
            {
                label: '行业领域',
                data: [
                    { label: '建筑业', value: '建筑业123' },
                    { label: '建筑业', value: '建筑业1234' },
                    { label: '建筑业', value: '建筑业1235' },
                    { label: '建筑业', value: '建筑业1236' },
                    { label: '建筑业', value: '建筑业1237' },
                    { label: '建筑业', value: '建筑业1238' },
                    { label: '建筑业', value: '建筑业1239' },
                    { label: '建筑业', value: '建筑业12310' },
                    { label: '建筑业', value: '建筑业12311' },
                    { label: '建筑业', value: '建筑业12312' },
                    { label: '建筑业', value: '建筑业12313' },
                    { label: '建筑业', value: '建筑业12314' },
                    { label: '建筑业', value: '建筑业12315' },
                    { label: '建筑业', value: '建筑业12316' },
                    { label: '某某行业业', value: '建筑业' }
                ]
            }
        ]
    }
}