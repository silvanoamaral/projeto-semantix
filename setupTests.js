const configure = require('enzyme').configure
const Adapter = require('enzyme-adapter-react-16')

configure({ adapter: new Adapter() })

global.fetch = require('jest-fetch-mock')

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Line: () => null,
  Pie: () => null
}))