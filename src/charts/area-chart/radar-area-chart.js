import createContext from '../chart-context'
import createAreaChart from './area-chart'

const ctx = createContext('radar-area-chart')

createAreaChart('Radar Area Chart', 'radar', ctx)