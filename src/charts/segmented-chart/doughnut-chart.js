import createContext from '../chart-context'
import createSegmentedChart from './segmented-chart'

const ctx = createContext('doughnut-chart')

createSegmentedChart('Doughnut Chart', 'doughnut', ctx)