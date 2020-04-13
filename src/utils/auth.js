import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function getUsername () {
  return Cookies.get('username')
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function setUsername (name) {
  return Cookies.set('username', name)
}

export function removeUsername () {
  return Cookies.remove('username')
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getAvatar () {
  return Cookies.get('avatar') || ''
}

export function setAvatar (avatar) {
  return Cookies.set('avatar', avatar)
}

export function removeAvatar () {
  return Cookies.remove('avatar')
}
