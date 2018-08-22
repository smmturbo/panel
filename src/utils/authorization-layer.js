import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { PATH_HOME } from '../data/constants'
import { LoadingMessage } from '../components/interface'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'

const locationHelper = locationHelperBuilder({})

/**
 * @description Higher Order Component that redirects to `/login` instead
 * rendering if user is not authenticated (default of redux-auth-wrapper).
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsAuthenticated = connectedRouterRedirect({
  // eslint-disable-line new-cap
  wrapperDisplayName: 'UserIsAuthenticated',
  AuthenticatingComponent: LoadingMessage,
  authSelector: ({ firebase: { auth } }) => auth,

  authenticatedSelector: ({firebase: { auth }}) => !auth.isEmpty,
  authenticatingSelector: ({firebase: { auth }}) => !auth.isLoaded,

  // authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
  //   !auth.isLoaded || isInitializing,
  predicate: auth => !auth.isEmpty,

  redirectPath: '/login'
})

/**
 * @description Higher Order Component that redirects to `/onboarding` instead
 * rendering if user is authenticated but does not have their profile completed.
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsOnboarded = connectedRouterRedirect({
  // eslint-disable-line new-cap
  wrapperDisplayName: 'UserIsOnboarded',
  AuthenticatingComponent: LoadingMessage,
  authSelector: ({ firebase: { profile } }) => profile,

  authenticatedSelector: ({firebase: { profile, auth }}) => {
    if(auth.isEmpty)  {
      return true
    }

    return !profile.isEmpty
  },

  authenticatingSelector: ({firebase: { profile }}) => !profile.isLoaded,
  predicate: profile => !profile.isEmpty,

  redirectPath: '/onboarding'
})





/**
 * @description Higher Order Component that redirects to listings page or most
 * recent route instead rendering if user is not authenticated. This is useful
 * routes that should not be displayed if a user is logged in, such as the
 * login route.
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsNotAuthenticated = connectedRouterRedirect({
  // eslint-disable-line new-cap
  wrapperDisplayName: 'UserIsNotAuthenticated',
  allowRedirectBack: false,
  AuthenticatingComponent: LoadingMessage,

  redirectPath: (state, props) =>
    // redirect to page user was on or to list path
    locationHelper.getRedirectQueryParam(props) || PATH_HOME,

  authSelector: ({ firebase: { auth } }) => auth,

  authenticatedSelector: ({firebase: { auth }}) => auth.isEmpty,
  authenticatingSelector: ({firebase: { auth }}) => !auth.isLoaded,

  predicate: auth => auth.isEmpty,

})

export default {
  UserIsAuthenticated,
  UserIsNotAuthenticated
}
