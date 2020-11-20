import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  postBody: {
    fontSize: 14,
    flexWrap: 'wrap',
    textAlign: 'justify',
  },
});

export default styles;
