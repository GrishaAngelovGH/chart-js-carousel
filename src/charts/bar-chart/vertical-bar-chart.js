import createContext from '../chart-context'
import createBarChart from './bar-chart'

const ctx = createContext('vertical-bar-chart')

createBarChart('Vertical Bar Chart', ctx)