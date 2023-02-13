const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://beomseok.com',
  optionsSuccessStatus: 200
}

app.get('/', function (req, res) {
  res.send('Hello World')
})

// cors 미들웨어를 특정 API에 적용
// 편의상 app.use(cors())와 같은 코드로 모든 API에 cross-origin 요청을 허용하는 경우도 많습니다.
app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: '보안 이슈로 beomseok.com의 origin에서만 호출을 할 수 있는 메소드'})
})

app.listen(3000);