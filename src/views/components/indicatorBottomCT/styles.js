import { styleSheetFactory } from "../../../constants/themes";
const themedStyles = styleSheetFactory((theme) => ({
  container: {
    width: 135,
    height: 5,
    backgroundColor: 'black',
    marginTop: 32,
    borderRadius: 10,
    alignSelf: 'center',
  }
}))
export default themedStyles;