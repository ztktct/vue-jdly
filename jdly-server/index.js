'use strict';
let express = require('express');
let app=express();
let bodyParser = require('body-parser');
let cheerio = require('cheerio');
let http = require('http');
let router = express.Router();
// 将要爬取的网站的域名
const WEBSIT_PREFIX = "http://www.jdlingyu.moe/";

// 修改模板文件后缀为html
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
// 代理静态资源
app.use(express.static(require('path').join(__dirname,'public')));

// 设定views变量，意为视图存放目录
app.set('views',__dirname+'/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// 设置CORS
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
}); 

// 接受http请求为'/'时，渲染index页面
app.get('/',(req,res)=>{
	res.render('index');
});

// 首页列表数据
// /api/index?page=2&type=''
app.get('/api/index',(req, res)=>{
	// req.query   get
	// req.body    post

	// 查询字符串：
	// page参数：第几页
	// type参数：分类
	// type居然不能用，禁止爬虫爬取。。。。
	let page = req.query.page;
	let type = req.query.type;
	page = !page || page == 1 ? '' : 'page/'+ page +'/' ;
	type = !type ? '' :　type + '/';
	loadHtml(WEBSIT_PREFIX+type+page)
		.then( html =>{
			return new Promise((resolve,reject)=>{
				let $ = cheerio.load(html);
				let lists = [];
				$('.pin-coat').each(function(){
					let item = {
						imgSrc : $(this).find('img').attr('original'),
						pid:$(this).find('.imageLink').attr('href').split('/')[3],
						title:$(this).find('.bg').text(),
						collected:false
					};
					lists.push(item);
				});
				resolve(lists);
			});
		})
		.then( lists =>{
			res.json(lists);
		});
});

// 获取内页数据
// /api/inner?id=1213
app.get('/api/inner',(req,res)=>{
	let id = req.query.id;
	loadHtml(WEBSIT_PREFIX+id+'/')
		.then(function(html){
			return new Promise((resolve,reject)=>{
				let $ = cheerio.load(html);
				
				let content = {
					title: $('.main-title').text(),
					pid: id,
					imgLists: [],
					collected: false
				}
				$('.main-body a').each(function(){
					let imgsrc = $(this).attr('href');
					content.imgLists.push(imgsrc);
				});
				resolve(content);
			});
		})
		.then( content =>{
			res.json(content);
		});
});


app.listen(3001);

// 获取url页面的数据
function loadHtml(url){
	return new Promise((resolve,reject)=>{
		let html ='';
		http.get(url, function(res){
			res.on('data', function(data){
				html += data;
			})
			res.on('end',function(){
				resolve(html);
			})
		}).on('error', function(){
			reject();
			console.log('爬取页面错误');
		});
	});
}


