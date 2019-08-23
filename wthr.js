<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<h1>Weather climate information</h1>
<button id="mybtn"> check it</button>
<div id="info">
    <br>
<script>
document.getElementById("mybtn").onclick=() =>     {
   fetch("http://api.openweathermap.org/data/2.5/weather?q=chennai&units=metric&APPID=6b752d56b823745af856963c9440fadb")
   .then(data => {
      return data.json()
   })
   .then(data2=>{
     console.log(data2)
    
     document.write(data2.name)
    document.write(data2.main.temp)
     document.write(data2.weather[0].description)
   })


}

</script>
</body>
 </html>
