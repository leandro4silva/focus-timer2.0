import Sounds from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'


const sound = Sounds()
const timer = Timer({sound})
const events = Events({timer, sound})




