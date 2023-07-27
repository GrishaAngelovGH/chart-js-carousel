import createContext from '../chart-context'
import createSegmentedChart from './segmented-chart'

const ctx = createContext('pie-chart')

createSegmentedChart('Pie Chart', 'pie', ctx)