import { StyleSheet } from 'react-native';

const lightGreen = '#009443';
const lightYellow = '#945e00';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#11170F';

export const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: darkGreen,
  },

  topContainer: {
    width: '100%',
    height: 110,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 30,
  },

  voltar: {
    transform: 'rotate(180deg)',
    width: 30,
    height: 30
  },

  profile: {
    width: 33,
    height: 33
  },

  main: {
    paddingTop: 30,
    gap: 20,
    
  },

  menuText: {
    backgroundColor: darkerGreen,
    padding: 20,
    paddingLeft: 30,
    color: 'white',
    fontSize: 25,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: normalGreen

  },

  line: {
    backgroundColor: normalGreen,
    width: '100%',
    height: 2,
  },




 
});