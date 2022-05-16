let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")

request.onload = function(){
    let result=JSON.parse(request.responseText)
    for(i=0;i<result.length;i++)
    console.log(result[i].flag)

}
request.error = function(){
    console.log("something went wrong")
}

request.send(); 