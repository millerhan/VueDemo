$(function(){
	var demo1 = new Vue({
		el:"#app1",
		data:{
			message:"this is my first vue!"
		}
		
	});
	
	
	var demo2 = new Vue({
		el:"#app2",
		data:{
			message:"this is the second!"
		}
	});
	
	
	var demo31 = new Vue({
		el:"#app31",
		data:{
			yes:true,
			no:false,
			age:35,
			name:"hanshaobin"
		}
	});
	
	var demo32 = new Vue({
		el:"#app32",
		data:{
			age:5
		}
	});
	
	
	
	var demo4 = new Vue({
		el:"#app4",
		data:{
			yes:true,
			no:false,
			age:35,
			name:"hanshaobin"
		}
	});
	
	var demo5 = new Vue({
		el:"#app5",
		data:{
			books:[{name:"书籍",author:"作者"},{name:"书籍",author:"作者"},{name:"书籍",author:"作者"},{name:"书籍",author:"作者"},{name:"书籍",author:"作者"}]
		}
	});
	
	
	var demo6 = new Vue({
		el:"#app6",
		data:{
			cpage : 3,
			tpage : 5
		}
	});
	
	var demo7 = new Vue({
		el:"#app7",
		data:{
			message:"this is a test!"
		},
		methods:{
			clickBtn1:function(){
				alert("clickBtn1");
			},
			clickBtn2:function(message){
				alert("clickBtn1"+message)
			},
			clickBtn3:function(){
				alert("clickBtn1"+this.message)
			}
		}
	});
	
	
	
	
	var demo8 = new Vue({
		el:"#app8",
		data:{
			newBook:{name:"",author:""},
			books:[{name:"书籍",author:"作者"},{name:"书籍",author:"作者"},{name:"书籍",author:"作者"},{name:"书籍",author:"作者"},{name:"书籍",author:"作者"}]
		},
		methods:{
			deleteBook:function(index){
				this.books.splice(index,1);
			},
			addBook:function(){
				this.books.push(this.newBook);
				this.newBook={name:"",author:""}
			}
		}
	});
	
	
	
	
	
	
	
	
})