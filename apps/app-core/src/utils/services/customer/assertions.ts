export class AuthFailError extends Error {
  constructor(message = 'Failure to get access token', options?: ErrorOptions) {
    super(message, options)
    this.name = 'AuthFailError'
  }
}
