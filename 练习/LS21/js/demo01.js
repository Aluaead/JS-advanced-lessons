//2018-5-14   异常处理
try{
	var a=new Array(-2);
	//有异常后直接跳出try
	console.log("xx");
}
catch(e){
	console.log(e);
}
finally{
	console.log("finally");
}
try {
	try{
		throw "oops";
	}
	catch (ex) {
		console.error("inner",ex);
    }
    finally {
		console.log("finally");
    }
}
catch (ex) {
	console.error("outer",ex);
}
try {
	try {
		throw "oops";
    }
    catch (ex) {
		console.warn('inner',ex.message);
		throw ex;
    }
    finally {
		console.log('finally');
    }
}
catch(ex){
	console.warn("outer",ex.message);
}
try {
    function abc(x,cb) {
        console.log(x);
        cb();
    }
}
catch (e) {
    console.log(e);
}





























