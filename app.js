
var express=require('express')
var path=require('path')
var port=process.env.port || 3000
var app=express()
app.set('views','./views/pages')
app.set('view engine','jade')
app.use(require('body-parser').urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log("movieclub started on port"+port)


//index
app.get('/',function(req,res){
	res.render('index', {
		title:'movieclub index',
		movies: [{
			title:'jixiezhanjing',
			_id:1,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5'

		},{
			title:'jixiezhanjing',
			_id:2,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5'

		},{
			title:'jixiezhanjing',
			_id:3,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5'
		},{

			title:'jixiezhanjing',
			_id:4,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5'
		},{
			title:'jixiezhanjing',
			_id:5,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5'
		},{
			title:'jixiezhanjing',
			_id:6,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5'
		}

		]})

})

//detail
app.get('/movie/:id',function(req,res){
	res.render('detail', {
		title:'movieclub details',
		movie:{
			title:'jixiezhanjing',
			doctor:'MR.lichao',
			country:'China',
			year:2014,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5',
			language: 'english',
			flash:'http://player.youku.com.player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'lalllallfdaskjflkasdjfkldjasklfjkldsajflkdslajf'

		}

})


})

//admin
app.get('/admin/movie',function(req,res){
	res.render('index', {
		title:'movieclub houtai',

		title:'',
		doctor:'',
		country:'',
		year:'',
		poster:'',
		flash:'',
		summary:'',
		language:''

	})

})

app.get('/admin/list',function(req,res){
	res.render('list', {

    title:'movieclub list',
    movies:[{
    		_id:1,
    	    doctor:'MR.lichao',
			country:'china',
			title:'jixiezhanjing',
			year:2014,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5',
			language: 'english',
			flash:'http://player.youku.com.player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'dfailsjfdjadskfhljasdhgjfalkjsdlkfjlkajsdfkladdddddddddddddddddddddd'
    },{

    		_id:2,
    	    doctor:'MR.lichao',
			country:'china',
			title:'jixiezhanjing',
			year:2014,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5',
			language: 'english',
			flash:'http://player.youku.com.player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'dfailsjfdjadskfhljasdhgjfalkjsdlkfjlkajsdfkladdddddddddddddddddddddd'

    },{

    		_id:3,
    	     doctor:'MR.lichao',
			country:'china',
			title:'jixiezhanjing',
			year:2014,
			poster:'http:r3.ykimg.com/05160000530EEB63645839160D0B79D5',
			language: 'english',
			flash:'http://player.youku.com.player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'dfailsjfdjadskfhljasdhgjfalkjsdlkfjlkajsdfkladdddddddddddddddddddddd'

    }
  
    ]})

})