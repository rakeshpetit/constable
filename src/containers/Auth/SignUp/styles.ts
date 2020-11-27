import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fieldContainer: {
    paddingHorizontal: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textInput: {
    height: 30,
    flex: 2,
    borderColor: 'gray',
    borderWidth: 2,
  },
  postTitle: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    flex: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
  },
});

export default styles;
