//your JS code here. If required.
arr=[1,2,3,4]
let promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let res=arr.filter((arr[i]%2==0)=>{
		resolve(res)
	},1000)
	})
})
let promise2=new promise((resolve,reject)=>{
	setTimeout(()=>{
		let res=arr.filter((arr[i]%2==0)=>{
		resolve(res*2)
	},1000)
	})
})
promise.then((data)=>{
	return data
}).then((data1)=>{
	return data1
})