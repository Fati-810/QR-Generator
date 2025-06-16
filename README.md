# QR Generator
A simple and fast QR Code Generator web app that allows users to generate QR codes for any URL input. Designed for quick sharing and link embedding with a lightweight, responsive interface.

# Features:
🔳 Instant QR Code Generation from any valid URL

💾 Downloadable PNG Image of the QR code

🖼️ QR Code Displayed as Image in-browser

🚀 Fast, Minimalist UI using Express.js and Node.js

# Technical Overview (Behind the Scenes):
Frontend:
Embedded directly inside HTML returned from Express routes

Styled using a clean and responsive custom style.css file

Uses form submission and img src="data:image/png;base64,..." to display QR

Backend:
Built using Node.js and Express.js

Uses the qr-image package to generate QR codes as PNG buffers













# Link:
https://qr-generator-qplp.onrender.com/
