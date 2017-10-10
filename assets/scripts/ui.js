'use strict'
const store = require('./store')

const signUpSuccess = (data) => {
  // "." specifies class name, "#" specifies id name
  // use jQuery to interact with elements
  // .trigger manually calls action without user initiation
  $('.form-clear').trigger('reset')
  // hides modal after submit button is selected
  $('#submit-register').modal('hide')
}
const signUpFailure = (error) => {
  $('.sign-up-message').text('There was an error creating the account. ', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const signInSuccess = (data) => {
  // on user sign in, capture user info and assign it to store
  store.user = data.user
  // $('.menu-button').show()
  // $('.display').show()
  $('.form-clear').trigger('reset')
  // $('.instructions').show()
  // $('.instructions').text(data.user.email + ' You have successfully logged in.')
  // $('.login-buttons').hide(1700)
  $('#submit-login').modal('hide')
  // $('.title-top').show()
  // $('.bugCarousel').hide()
}
const signInFailure = (error) => {
  $('.login-message').text('Login failure. ', error).fadeIn('fast').delay(2000).fadeOut('slow').modal('hide')
}

const passwordChangeSuccess = function () {
  // $('.form-clear').trigger('reset')
  // $('#submit-change-password').modal('hide')
  // $('.instructions').text('Password changed successfully!')
}
const passwordChangeFailure = function (error) {
  $('.change-pswrd-message').text('Password change failed.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const logoutSuccess = function () {
  // $('.form-clear').trigger('reset')
  // $('.display').hide()
  // $('.display-list').hide()
  // $('.instructions').text('Please login to continue.')
  // $('.login-buttons').show(900)
  // $('.login-screen').show()
  // $('#log-out').modal('hide')
  // $('.menu-button').hide()
  // $('.bugCarousel').show()
}

const logoutFailure = function (error) {
  $('.logout-message').text('Oops! Something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  logoutSuccess,
  logoutFailure
}
