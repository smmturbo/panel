export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS'

export function addNotification({ message, title }, type = 'info')  {

  const id = Math.floor(Math.random() * 10000)
  const notification = { id, message, title, type }

  return {
    type: ADD_NOTIFICATION,
    payload: notification
  }
}

export function notifyError(message, title)  {
    return addNotification({ message, title }, 'error')
}

export function notifySuccess(message, title)  {
    return addNotification({message, title}, 'success')
}

export function deleteNotification(id) {

  return {
    type: DELETE_NOTIFICATION,
    payload: id
  }
}

export function clearNotifications() {

  return {
    type: CLEAR_NOTIFICATIONS
  }
}
