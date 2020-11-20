import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  postBody: {
    fontSize: 14,
    flexWrap: 'wrap',
    textAlign: 'justify',
  },
  separator: {
    backgroundColor: 'rgb(220,220,120)',
    height: 1,
    marginVertical: 10,
  },
});

export default styles;
