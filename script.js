let arr = [1, 2, 3, 4];

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    });
}

promise()
    .then((data) => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let evenNumber = data.filter((num) => num % 2 === 0);

                document.getElementById("output").innerText = evenNumber.join(",");

                resolve(evenNumber);

            }, 1000);
        });

    })
    .then((data1) => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let result = data1.map((num) => num * 2);

                document.getElementById("output").innerText = result.join(",");

                resolve(result);

            }, 2000);
        });

    })
    .then((data2) => {
        console.log(data2);
    });