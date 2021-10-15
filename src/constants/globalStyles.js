import {styleSheetFactory} from './themes';

const globalStyles = styleSheetFactory(theme => ({
  flx: {
    flex: 1,
  },
}))
export default globalStyles
