import createContext from '../chart-context'
import createBarChart from './bar-chart'

const ctx = createContext('horizontal-bar-chart')

createBarChart('Horizontal Bar Chart', ctx, false)