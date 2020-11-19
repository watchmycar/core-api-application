
import * as http from 'http'
import * as express from 'express'
import * as bearerToken from 'express-bearer-token'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as rateLimit from 'express-rate-limit'
import { routes } from '@routes/index'
import { handleErrors } from '@libs/index'
import { config } from '@src/config/index'

const { port } = config
const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('trust proxy', 1)
app.use(limiter)
app.use(bearerToken())
app.use(helmet())

app.use('/', routes)

app.use((err: any, req: any, res: any, next: any) => {
  const { statusCode, errorBody } = handleErrors(err)
  return res.status(statusCode).json(errorBody)
})

app.use((req, res) => res.status(404).json({ message: 'Resource not found' }))

export const server = http.createServer(app)
export const start = () => server.listen(port, () => console.log(`Listening on port ${port}`))
