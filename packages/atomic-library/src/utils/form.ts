export const emailValidator = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
export const minLenghtValidator = (minLength: number) => new RegExp(`.{${minLength},}`)
