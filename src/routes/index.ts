import * as Router from 'express'
import { setUserRoutes } from '@routes/user'

const routes = Router()

setUserRoutes(routes)

export {
  routes
}
