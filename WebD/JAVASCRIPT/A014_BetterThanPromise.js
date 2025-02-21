function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data Fetched");
        }, 5000);
    });
}

// we can use async to do the same thing
async function oneAfterOne(){
    try{
        const result = await getData();
        console.log(result);
    }catch(error){
        console.error(error);
    }
}

oneAfterOne();