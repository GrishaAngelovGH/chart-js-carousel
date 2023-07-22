import createContext from '../chart-context'
import createAreaChart from './area-chart'

const ctx = createContext('line-area-chart')

createAreaChart('Line Area Chart', 'line', ctx)