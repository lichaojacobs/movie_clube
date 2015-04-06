var express=require('express')

var port=process.env.port || 3000
var app=express()
app.set('views','./views')
app.set('view engine','jade')
app.listen(port)

console.log("movieclub started on port"+port)


//index

app.get('/',function(req,res){
	res.render('index', {title:'movieclub 首页'})

})

//detail
app.get('/movie/:id',function(req,res){
	res.render('detail', {title:'movieclub 详情页'})


})

//admin
app.get('/admin/movie',function(req,res){
	res.render('index', {title:'movieclub 后台录入页'})

})

app.get('/admin/list',function(req,res){
	res.render('list', {title:'movieclub 列表页'})

})