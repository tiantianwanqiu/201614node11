/**
 * Created by Administrator on 2017/3/26.
 */
let mongoose=require('mongoose');
mongoose.Promise=Promise;
mongoose.connect('mongodb://127.0.0.1/201614crawl');
var MoviesSchema=new mongoose.Schema({
    name:String,
    url:String
});
module.exports=mongoose.model('Movie',MoviesSchema);