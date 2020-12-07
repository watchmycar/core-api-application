import { OAuth2Client } from 'google-auth-library'
import { config } from '@config/index'
import { GoogleUser } from '@interfaces/google/index'

const clientId = config.oauth.clientId
const client = new OAuth2Client(clientId)

async function authWithGoogle (googleIdToken: string): Promise<GoogleUser> {
  try {
    const ticket = await client.verifyIdToken({
      idToken: googleIdToken,
      audience: clientId,
    })
    const payload = ticket.getPayload()
    if (!payload) {
    // throw some error, replace with proper message
      throw new Error('No payload for user')
    }

    return {
      googleId: payload.sub,
      email: payload.email,
      firstName: payload.given_name,
      lastName: payload.family_name,
    }
  } catch (error) {
    // throw some error, replace with proper message
    throw new Error('Some error happened')
  }
}

export {
  authWithGoogle
}
