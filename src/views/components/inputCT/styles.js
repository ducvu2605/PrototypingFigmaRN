import { styleSheetFactory } from "../../../constants/themes";

const themedStyles = styleSheetFactory(theme => ({
  titleHeader: {
    fontSize: 13,
    color: theme.black,
    marginBottom: 4,
  },
  containerTextInput: {
    width: '100%',
    height: 52,
    borderWidth: 2,
    borderColor: theme.black,
  },
  textInput: {
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
    paddingHorizontal: 16,
  }
}));
export default themedStyles;