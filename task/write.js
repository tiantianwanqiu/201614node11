/**
 * Created by Administrator on 2017/3/26.
 */
/*
* 把得到的电影数组放到数据库中*/
var Movie=require('../model');
var async=require('async');
let logger=require('debug')('crawl:write');
module.exports=function (movies,callback) {
    async.forEach(movies,function (movie,cb) {
        Movie.create(movie,cb)//保存
        logger(`写入电影：${movie.name}`)
    },callback)
};