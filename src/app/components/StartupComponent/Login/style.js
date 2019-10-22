/* jshint ignore:start */

import {StyleSheet} from 'react-native';
import colors from '@lib/color';
import fonts from '@lib/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create ({
  content: {
    flex: 1,
    marginTop: hp ('4%'),
  },
  mainContent: {
    marginLeft: wp ('7%'),
    paddingRight: wp ('10%'),
  },
  contentText: {
    flex: 1,
    paddingTop: hp ('4%'),
  },
  textview: {
    fontSize: hp ('3%'),
    color: colors.textColor,
    fontFamily: fonts.text,
  },
  textPadding: {
    paddingRight: wp ('8%'),
  },
  textinput: {
    color: colors.textColor,
    borderBottomColor: colors.textInputBorder,
    borderBottomWidth: 1,
    fontSize: hp ('3%'),
    flex: 1,
  },
  btntext: {
    color: colors.white,
    fontFamily: fonts.button,
    fontSize: hp ('3%'),
    margin: hp ('5'),
    borderRadius: 50,
    width: wp ('85%'),
  },
  error: {
    color: colors.red,
    fontFamily: fonts.text,
    fontSize: hp ('3%'),
  },
});

export default styles;
