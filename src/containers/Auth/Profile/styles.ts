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
  postTitle: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    flex: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
  },
});

export default styles;
