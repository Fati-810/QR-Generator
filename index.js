const express = require('express');
const qr = require('qr-image');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
      const year = new Date().getFullYear();
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>QR Code Generator</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="container">
        <h2>QR Code Generator</h2>
        <form action="/generate" method="POST">
          <input type="text" name="url" placeholder="Enter URL" />
          <br>
          <button type="submit">Generate QR Code</button>
        </form>
      </div>
 <footer>
       Fatimah Digital Edge &copy; ${year}
      </footer>
    </body>
    </html>
  `);
});

app.post('/generate', (req, res) => {
  let url = req.body.url;
  if (!url) return res.send('No URL provided!');

  // Generate QR as PNG buffer and Base64 encode it
  const qr_png = qr.imageSync(url, { type: 'png' });
  const qr_base64 = Buffer.from(qr_png).toString('base64');
  const year = new Date().getFullYear();

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>QR Code Result</title>
      <link rel="stylesheet" href="/style.css" />
      <style>
        .result {
          margin-top: 20px;
        }
        .qr-img {
          margin-top: 15px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          padding: 10px;
          background: #fff;
          border-radius: 8px;
        }
        .btn {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 20px;
          background: #007;
          color: white;
          border: none;
          border-radius: 8px;
          text-decoration: none;
          font-size: 16px;
        }
        .btn:hover {
          background: #0056b3;
        }
        footer {
          position: absolute;
          bottom: 10px;
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>QR Code Generated</h2>
        <div class="result">
          <img class="qr-img" id="qrCode" src="data:image/png;base64,${qr_base64}" alt="QR Code" />
        </div>
        <a class="btn" id="downloadBtn" download="qrcode.png">Download</a>
        <br>
        <a class="btn" href="/">Generate Another</a>
      </div>
      <footer>
        &copy; ${year} Fatimah Digital Edge
      </footer>

      <script>
        // Convert the image to a downloadable link
        const qrImg = document.getElementById('qrCode');
        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.href = qrImg.src;
      </script>
    </body>
    </html>
  `);
});




app.listen(3000, () => {
  console.log('QR code generator running on http://localhost:3000');
});

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
