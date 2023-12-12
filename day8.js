<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather</title>
  </head>
  <body>
    <script>
      const apiKey = "7466cf52719269e6e37fa5b562c29194";
      const city = "Kolkata";

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log("Error fetching weather data:", error);
        });
    </script>
  </body>
</html>
