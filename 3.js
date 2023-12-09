<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Listeners</title>
</head>
<body>
    <p id="para">Click on the button</p>
    <button id="click">Click</button>
    <script>
        let text =document.getElementById("para");
        let button=document.getElementById("click");
        button.addEventListener("click",()=>{
            text.textContent='Welcome';
        });
    </script>
</body>
</html>
