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
  FlatList,
} from 'react-native';
import {Card} from 'native-base';
import styles from './style';
import {connect} from 'react-redux';

import {validate} from '@config/validation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '@lib/color';
import fonts from '@lib/font';
import {get_employee_list} from '@redux/StartUp/operations';
class Employee extends PureComponent {
  constructor (props) {
    super (props);

    this.state = {};
  }

  componentDidMount () {
    this.props.get_employee_list ();
  }
  // render hosting flat list view
  renderHostingList = host => {
    console.log ('host', host);
    return (
      <View style={styles.listMappingView}>

        <Card>
          <View style={styles.contentNewView}>
            <View style={styles.textView}>
              <Text style={styles.nameText}>id :</Text>
              <Text style={styles.answertext}>{host.item.id} </Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.nameText}>name :</Text>
              <Text style={styles.answertext}>{host.item.name} </Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.nameText}>age :</Text>
              <Text style={styles.answertext}>{host.item.age} </Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.nameText}>gender :</Text>
              <Text style={styles.answertext}>{host.gender} </Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.nameText}>email :</Text>
              <Text style={styles.answertext}>{host.item.email} </Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.nameText}>phoneNo :</Text>
              <Text style={styles.answertext}>{host.item.phoneNo} </Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };
  render () {
    return (
      <View style={styles.content}>
        <ScrollView style={styles.mainContent}>
          {/* list view */}
          {this.props.employeelist && this.props.employeelist.length > 0
            ? <View>
                <Text style={styles.touchableText}>Employee List </Text>
                <FlatList
                  data={this.props.employeelist}
                  extraData={this.state}
                  keyExtractor={(item, index) => index.toString ()}
                  renderItem={this.renderHostingList}
                  contentContainerStyle={{paddingBottom: 400}}
                  initialNumToRender={this.props.employeelist.length}
                />
              </View>
            : <Text style={styles.touchableText}>No Data available</Text>}

        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log ('signupfulldata', state);
  return {
    employeelist: state.startUp.employeelist,
  };
};

const mapDispatchToProps = {
  get_employee_list,
};
export default connect (mapStateToProps, mapDispatchToProps) (Employee);
