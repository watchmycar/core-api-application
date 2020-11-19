import { userController } from '@controllers/index'
import { validateUserPayload } from '@middlewares/index'
const {
  login,
  saveUser,
} = userController

const setUserRoutes = (routes) => {
  routes.post('/user', validateUserPayload, saveUser)
  routes.post('/user/login', validateUserPayload, login)
}

export {
  setUserRoutes,
}
