/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* jshint ignore:start */

import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';

import {validate} from '@config/validation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '@lib/color';
import fonts from '@lib/font';
import {singUP} from '@redux/StartUp/operations';
// for lodash
import _ from 'lodash';
class Login extends PureComponent {
  constructor (props) {
    super (props);

    this.state = {
      userName: '',
      password: '',
      passError: false,
      passrrorMessage: '',
      userNameError: false,
      userErrorMessage: '',
    };
    this.isSubmitEnabled = this.isSubmitEnabled.bind (this);
    this.login = this.login.bind (this);
  }

  componentDidMount () {
    this.props.singUP ();
  }
  login () {
    let user = {
      password: this.state.password,
      userName: this.state.userName,
    };
    let _this = this;
    let resvalue = _.values (_this.props.signup).every (_.isEmpty);
    if (!resvalue) {
      if (
        _this.props.signup.password == user.password &&
        _this.props.signup.username == user.userName
      ) {
        _this.props.navigation.navigate ('Dashboard');
        Alert.alert ('Successfully logged in ');
      } else {
        Alert.alert ('Invalid Username/password ');
      }
    }
  }
  // button disable option for validation
  isSubmitEnabled () {
    // Access field values here and validate them

    const password = this.state.password;
    const userName = this.state.userName;
    if (password && userName) {
      return true;
    } else {
      return false;
    }
  }
  render () {
    // button disable option for validation
    const isEnabled = this.isSubmitEnabled ();

    return (
      <View style={styles.content}>
        <ScrollView style={styles.mainContent}>
          <View style={styles.contentText}>
            <Text style={styles.textview}>UserName</Text>
          </View>
          <View style={[styles.content, styles.textPadding]}>
            <TextInput
              style={styles.textinput}
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyLabel="next"
              onChangeText={text => {
                this.setState ({userName: text});
                let v = validate ('userName', text);
                this.setState ({userNameError: !v[0], userErrorMessage: v[1]});
              }}
            />
          </View>

          <View>
            <Text style={styles.error}>{this.state.userErrorMessage}</Text>
          </View>
          <View style={styles.contentText}>
            <Text style={styles.textview}>Password</Text>
          </View>
          <View style={[styles.content, styles.textPadding]}>
            <TextInput
              style={styles.textinput}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              returnKeyType="next"
              onChangeText={text => {
                this.setState ({password: text}, function () {
                  console.log ('password', this.state.password);
                });
                let v = validate ('password', text);
                this.setState ({passError: !v[0], passrrorMessage: v[1]});
              }}
            />
          </View>
          <View>
            <Text style={styles.error}>{this.state.passrrorMessage}</Text>
          </View>
          {/* SignUp btn */}
          <View>
            <Button
              disabled={!isEnabled}
              onPress={this.login}
              title="Login"
              color={colors.red}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// export default Login;
const mapStateToProps = state => {
  return {
    signup: state.startUp.signup,
    isLoading: state.startUp.loading,
  };
};

const mapDispatchToProps = {
  singUP,
};
export default connect (mapStateToProps, mapDispatchToProps) (Login);
