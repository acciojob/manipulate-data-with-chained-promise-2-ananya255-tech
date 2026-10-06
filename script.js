//your JS code here. If required.
arr=[1,2,3,4]

let promise0=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(arr)
	},3000)
})
let promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let evenNumber=arr.filter((num)=>num%2===0)

		document.getElementById("output").innerText=evenNumber

		resolve(evenNumber)
	
	},1000)
})


promise0.then((data)=>{
	console.log(data)
	return promise1
}).then((data1)=>{
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let result=data!.map((num)=>num*2)

		document.getElementById("output").innerText=result

		resolve(result)
	
	},2000)
})
}).then((data3)=>{
	console.log(data3)
})
		
