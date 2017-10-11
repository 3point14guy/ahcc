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
  $('.form-clear').trigger('reset')
  // hides modal after submit button is selected
  $('#submit-register').modal('hide')
}

const signInSuccess = (data) => {
  // on user sign in, capture user info and assign it to store
  store.user = data.user
  $('.form-clear').trigger('reset')
  $('#submit-login').modal('hide')
  window.location.href = 'http://localhost:7165/members.html'
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
  $('#log-out').modal('hide')
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
