import { userController } from '@controllers/index'
import { validateUserPayload } from '@middlewares/index'

const {
  auth,
  saveUser,
} = userController

const setUserRoutes = (routes) => {
  routes.post('/user', validateUserPayload, saveUser)
  routes.post('/user/auth', validateUserPayload, auth)
}

export {
  setUserRoutes,
}
