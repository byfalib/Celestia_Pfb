<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Celestia PFB Transaction</title>
    <style>
      body {
        background-color: #1F1F1F;
        font-family: verdana;
        color: #C4A02E;
      }
        #logo {
    display: block;
    margin: 0 auto;
    max-width: 400px;
    height: auto;
  }

  h1 {
    text-align: center;
  }

  form {
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
  }

  button[type="submit"] {
    background-color: #C4A02E;
    color: #1F1F1F;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #f7b732;
    color: #1F1F1F;
  }
  /* Yeni Stil */
  .credits {
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
  }
  
  .credits img {
    vertical-align: middle;
    height: 28px;
    width: 36px;
    margin-left: 5px;
  }

</style>
  </head>
  <body>
    <img id="logo" src="https://lever-client-logos.s3.us-west-2.amazonaws.com/93a672b2-c841-4e57-b76f-9cf5d94ba99b-1654092231244.png" alt="Celestia Logo">
    <h1>Celestia PFB Submit Transaction</h1>
    <form action="/submit" method="post">
      <label for="namespace_id">Namespace ID:</label>
      <input type="text" id="namespace_id" name="namespace_id" required>
      <label for="data">Data:</label>
      <input type="text" id="data" name="data" required>
      <button type="submit">Submit</button>
    </form>
    <!-- Yeni Kredi Bilgisi -->
    <div class="credits">
      Designed by Byfalib <img src="https://pbs.twimg.com/profile_images/1654824674008891393/JH49l6Zo_400x400.png" alt="Byfalib">
    </div>
    <div class="credits">
      NodeID: 12D3KooWMbqWG2E92EzinibMMkFp3AttAfREsukpGSS4jm8aGKp2
    </div>
  </body>
</html> 
