Object.defineProperty(Object.prototype,'__proto__',{
	get(){
		console.log('get')
	}
});

({}).__proto__;
console.log((new Object()).__proto__);
