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
  textView: {
    flexDirection: 'row',
    paddingTop: hp ('2%'),
    margin: hp ('2%'),
  },
  nameText: {
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
  },
  answertext: {
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    // color: "#6F6F6F"
    color: colors.textColor,
  },
  touchableText: {
    fontSize: hp ('3%'),
    fontFamily: fonts.titleFont,
    color: colors.white,
  },
});

export default styles;
