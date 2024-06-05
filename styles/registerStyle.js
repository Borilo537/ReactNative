import { LayoutAnimation, StyleSheet } from 'react-native';


const lightGreen = '#009443';
const normalGreen = '#2b3b29';
const darkerGreen = '#182117';
const darkGreen = '#11170F';

export const styles = StyleSheet.create({


  statusBG: {
    zIndex: 1,
    backgroundColor: darkGreen,
    position: 'absolute',
    width: '100%',
    height: 32,
    top: 0,
  },

  body: {
    flex: 1,
    backgroundColor: darkGreen,
  },

  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 220,
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 280,
    backgroundColor: darkGreen,
    paddingTop: 80,
  },

  logoContainer: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginBottom: 30,
    overflow: 'hidden',
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  loginTitle: {
    fontSize: 25,
    fontWeight: 600,
    color: 'white',
  },

  loginText: {
    opacity: 0.6,
    fontSize: 20,
    fontWeight: 300,
    color: 'white',
  },

  form: {
    paddingHorizontal: 35,
    paddingVertical: 40,
    gap: 18,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',  
    
  },

  input: {
    gap: 12,
    width: '100%',
  },

  inputLabel: {
    fontSize: 20,
    color: 'white',
    marginLeft: 5,
  },

  inputControl: {
    backgroundColor: normalGreen,
    color: 'white',
    padding: 10,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 15,
    
  },

  btn: {
    marginTop: 35,
    backgroundColor: lightGreen,
    width: 150,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  btnText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
  },


  changeLogin: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  }


 

});