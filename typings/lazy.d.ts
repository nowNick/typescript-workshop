declare module NodeJS  {
  import Describe = jest.Describe

  interface Global {
    def: Function
    get: Function
    subject: Function

    context: Describe
  }
}
