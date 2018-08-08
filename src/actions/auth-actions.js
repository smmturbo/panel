export const AUTH_REGISTER_UID = 'AUTH_REGISTER_UID'
export const AUTH_REMOVE_UID = 'AUTH_REMOVE_UID'

export function actionRegisterUid(uid)  {
  return {
    type: AUTH_REGISTER_UID,
    payload: uid
  }
}

export function actionRemoveUid() {
  return {
    type: AUTH_REMOVE_UID
  }
}
