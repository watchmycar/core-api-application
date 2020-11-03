# Login

To a user login in the application has many ways to do.

## Simple Login

The user can register on the platform using an email and a password, he has to be owner of the email that they using to register.

## Social Login (Google and Facebook)

The user can register using another system of authentication.

## Database

To use all that types of login, the user table has to be like:

- id
- email
- password (NULL)
- name
- FacebookID
- GoogleID

## Working with multiples ways to login

Using this struture the user can do any ways to login on the platform and add all the ways that he wants to login. For example, if a user register with Facebook, after he login in the application, he can add a password to he's account soo he can login with email and password. And the same way if he register with email and password, he can connect the social network to the account.
