import Sounds from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'
import Theme from './theme.js'


const theme = Theme()
const sound = Sounds()
const timer = Timer({sound})
const events = Events({timer, sound, theme})






