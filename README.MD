## 설치

npm init -y
npm install express --save
npm install ejs
npm install body-parser
npm install dotenv
npm install cors
npm install axios
npm install -D tailwindcss

## app.js 생성

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

## 실행

node app.js
