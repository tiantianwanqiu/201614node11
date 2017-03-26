/**
 * Created by Administrator on 2017/3/26.
 */
/*
* url :要读取的地址
* callback 回调函数
* 需要读取url的响应体，并且提取电影列表，传给callback
* http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1
* */
var request=require('request');//第三方模块，一个简单的HTTP请求工具,用来获取网页内容
var iconv=require('iconv-lite');
var cheerio=require('cheerio');
var debug=require('debug');
var logger=debug('crawl:read');
module.exports=function (url,callback) {
    request({url,encoding:null},function (err,response,body) {
        body=iconv.decode(body,'gbk');
        var movies=[];
        var $=cheerio.load(body);//转化为对象
        $('.keyword .list-title').each(function () {
            var $this=$(this);
            var movie={
                name:$this.text(),//电影名称
                url:$this.attr('href')//电影url
            };
            logger(`读取到电影：${movie.name}`);
            movies.push(movie);
        })
        callback(err,movies)
    })
};
var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
module.exports(url,function (err,movies) {
    // console.log(movies)
})