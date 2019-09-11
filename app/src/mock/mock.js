import Mock from 'mockjs'

let data = [
    { 'id': 1, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 2, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 3, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 4, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 5, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 6, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 7, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 8, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 9, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 10, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 11, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 12, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 13, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 14, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 15, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 16, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 17, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 18, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 19, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 20, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 21, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 22, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 23, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 24, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 25, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 26, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 27, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 28, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 29, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 30, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' },
    { 'id': 31, 'name': 'xxxxx', 'pic': 'https://dummyimage.com/100x100' }
]

Mock.mock('/getData', 'post', function (options) {
    var { page, num } = JSON.parse(options.body)
    var app = data.slice((page - 1) * num, page * num)
    let zongshu = Math.ceil(data.length/num)
    return {data:app,zongshu:zongshu}
})

