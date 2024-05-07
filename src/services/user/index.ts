
import { badRequest, unauthorized } from 'boom'
import { merge } from 'ramda'
import { generateToken, generateUuid, security } from '@libs/index'
import { userRepository } from '@repositories/index'
import { IUser, ISaveUserResponse } from '@interfaces/user'

const { compareHash, encrypt, } = security

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

export const login = async ({ email, password }: IUser)=> {
  const userFilter = {
    email,
  }

  const checkUserCredentials = async (user: any, password: string) => {
    if (user) {
      const validUser = await compareHash(user.password, password)
      if (validUser) {
        return Promise.resolve()
      }

      throw unauthorized('Invalid credentials')
    }
  
    throw unauthorized('Invalid credentials')
  }
  
  try {
    const user = await userRepository.findOne(userFilter)
    await checkUserCredentials(user, password)
    const jwtToken = await generateToken(user._id)
    const loginResponse = {
      logged: true,
      token: jwtToken,
    }
    return loginResponse
  } catch (error) {
    throw error
  }
}

// implement social login
export const socialLogin = async() => {}
