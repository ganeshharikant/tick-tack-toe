let url = "https"
async function getfacts(params) {
    try {
        let res1 = await fetch(url);
        let data1 = await res1.json;
        console.log("data1", data1);
    } catch (err) {
        console.log(error);

    }
    console.log("bye)");


}
let url1 = "https"
fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data.fact);

    })
    .catch((err)=>{
        console.log(error);

    });
