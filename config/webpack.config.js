//webpack默认配置

//module.exports:对外暴露该文件，使得其他文件拥有访问权

const path =require('path');

console.log('__dirname ==>',__dirname);
module.exports = {
	//入口文件配置
	entry:{
		app:'./src/index.js'
	},
//打包输出路径
	output: {
		//_dirname:(node.js全局变量)当前文件的文件夹路径(不包含文件路径)
		path:path.resolve(__dirname,'../public'),

		//[name].js原始文件是什么名称，输出就是什么名称
		// filename:'[name].js',

		// //输出文件名以hash命名输出
		// filename:'[name].[hash].js',

		// //指定输出文件名
		// filename:'webpackapp.js',

		//指定输出文件名并且带有hash
		filename:'webpackapp.[hash].js'
	}

};