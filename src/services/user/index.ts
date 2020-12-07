
import * as _ from 'lodash'
import { badRequest, unauthorized } from 'boom'
import { merge } from 'ramda'
import { generateToken, generateUuid, security, auth } from '@libs/index'
import { userRepository } from '@repositories/index'
import { IUser, ISaveUserResponse } from '@interfaces/user'

const { compareHash, encrypt, } = security
const { authWithGoogle } = auth

export const saveUser = async (userData: IUser): Promise<ISaveUserResponse> => {
  const { password } = userData

  try {
    const encryptedPassword = await encrypt(password)
    const mergeableUserData = { 
      terminalId: `terminal-${generateUuid()}`,
      password: encryptedPassword,
    }

    const userPayload = merge(userData, mergeableUserData)
    const savedUser = await userRepository.save(userPayload)
     const userResponse = {
      id: savedUser.id,
      email: savedUser.email,
      terminalId: savedUser.terminalId,
    }

    return userResponse
  } catch (error) {
      const DUPLICATED_EMAIL_CODE = 11000
  
      if (error.code === DUPLICATED_EMAIL_CODE) {
          throw badRequest('User already exists')
      }
  
      throw error
  }
}

const defaultAuth = async (userPassword: string, password: string = '') => {
  const validUser = await compareHash(userPassword, password)
  if (!validUser) {
    throw unauthorized('Invalid credentials')
  }
  return validUser
}

export const authUser = async (payload: IUser)=> {
  const { email, password, googleToken } = payload
  let googleUser
  let user
  if(!googleToken && (!password || !email)) {
    throw unauthorized('Provide either email/password or a google token')
  }

  if (googleToken) {
    googleUser = await authWithGoogle(googleToken)
  }

  const userFilter = {
    email: email || googleUser.email,
  }

  user = await userRepository.findOne(userFilter)

  // create passwordless user
  if (!user && _.get(googleUser, 'email')) {
    const userData = { 
      terminalId: `terminal-${generateUuid()}`,
      email: googleUser.email,
      googleId: googleUser.googleId,
    }

    user = await userRepository.save(userData)
  }

  if (email && password) {
    await defaultAuth(_.get(user, 'password'),  password)
  }

  const jwtToken = await generateToken(user.id)
  const loginResponse = {
    logged: true,
    token: jwtToken,
  }
  return loginResponse
}
