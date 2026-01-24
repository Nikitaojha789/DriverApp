import {StyleSheet, Dimensions} from 'react-native';
import { fontSize } from '../../asset/style/commonStyle';
import { colors } from '../../constant/color';
import { fonts } from '../../asset';
import { h, w } from '../../constant/dimension';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B2DBD', 
  },
gradient: {
    flex: 1,
  },
  
  skip: {
    position: 'absolute',
    right: 20,
    zIndex: 10,
    justifyContent:'flex-end',
    alignSelf:"flex-end",
  },

  pager: {
flex:1,
},

  page: {
    marginTop:60,
    paddingHorizontal: 30,
  },
  pageTxt:{
color:colors.NextButtonColor,
fontSize:fontSize.extraLarge,
elevation:10,
shadowColor:colors.black,
fontFamily:fonts.bold
  },

  image: {
    width: 260,
    height: 260,
    resizeMode: 'contain',
    marginBottom: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },

//   dash wrap
  dashContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
    gap: 12,      
      top:40,
  },
  dash: {
    height: 3,
    borderRadius: 3,
    width: 120, 
  },
  dashActive: {
    backgroundColor: colors.NextButtonColor, 
    height:5,
  },
  dashInactive: {
    backgroundColor: colors.InactiveButtonColor, 
  },

  /* ---------- BUTTONS ---------- */
  buttonsWrap: {
    position: 'absolute',
    bottom: 80,
    left: 30,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  skipButton:{
    right:20,
    fontSize:fontSize.large,
  },
});
