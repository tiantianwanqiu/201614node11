/**
 * Created by Administrator on 2017/3/26.
 */
var async=require('async');
var read=require('./read');
var write=require('./write');
var logger=require('debug')('crawl:main')
var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
logger('开始执行任务');
async.waterfall([
    function (callback) {
        read(url,callback);//callback是async内部的调用的
    },
    function (movies,callback) {
        write(movies,callback)
    }
],function (err,result) {
  logger('全部任务执行完毕')
})