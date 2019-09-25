import React, { Component } from 'react';
import { 
    View, 
    Image, 
    TouchableOpacity,
    Text, 
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo';

import css from './styles/index';
import Home from './home';
import Book_Now from './bookNow/index';
import Profile from './profile';

import drawerContentComponents from './components/drawerContentComponents';
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
        <View style={{ flexDirection: 'row', position: 'absolute', top: 7 }}>
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                <Icon name="menu" style={css.menubutton} />
            </TouchableOpacity>
        </View>
    );
  }
}
class UserContact extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', position: 'absolute', top: 7, right: 10 }}>
                <View style={ css.phone_num }>
                    <Image 
                        style={{ width:17, height:17 }} 
                        source={ require('../images/phone_icon.png') }
                    />
                    <Text style={ css.headerConatactText }> +971 123456789</Text>
                </View>
                <View style={ css.email_adr }>
                    <Image 
                        style={{ width:17, height:17 }} 
                        source={ require('../images/email_icon.png') }
                    />
                    <Text style={ css.headerConatactText }> +adaa.abc.com</Text>
                </View>
            </View>
        );
    }
}
 
// const Home_StackNavigator = createStackNavigator({
//   //All the screen from the Home will be indexed here
//   First: {
//     screen: Home,
//     navigationOptions: ({ navigation }) => ({
//         headerBackground: (
//             <Image
//                 style={{flex:1}}
//                 source={ require('../images/header.png') }
//                 resizeMode='cover'
//             />
//         ),
//         headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//         headerRight: <UserContact />,
//         headerTintColor: '#fff',
//         // title: 'Demo Screen 1',
//         // headerStyle: {
//             // backgroundColor: '#FF9800',
//         // },
//     })
//   },
// });


const Home_StackNavigator = createStackNavigator({
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => 
    {
      return {
        header: (
          <View style={{ width:'100%', height: 60 }}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={ require('../images/header.png') }
              resizeMode='cover'
            />
            <NavigationDrawerStructure navigationProps={navigation} />
            <UserContact />

            <View style={ css.logo_part }>
              <Image
                  style={{ width:"100%", height:"100%" }}
                  source={ require('../images/logo.png') }
                  resizeMode='cover'
              />
            </View>
          </View>
        ),
      };
    }
  },
});
 
const Book_Now_StackNavigator = createStackNavigator({
  Second: {
    screen: Book_Now,
    navigationOptions: ({ navigation }) => 
    {
      return {
        header: (
          <View style={{ width:'100%', height: 60 }}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={ require('../images/header.png') }
              resizeMode='cover'
            />
            <NavigationDrawerStructure navigationProps={navigation} />
            <UserContact />

            <View style={ css.logo_part }>
              <Image
                  style={{ width:"100%", height:"100%" }}
                  source={ require('../images/logo.png') }
                  resizeMode='cover'
              />
            </View>
          </View>
        ),
      };
    }
  },
});
 
const Profile_StackNavigator = createStackNavigator({
  //All the screen from the Profile will be indexed here
  Third: {
    screen: Profile,
    navigationOptions: ({ navigation }) => 
    {
      return {
        header: (
          <View style={{ width:'100%', height: 60 }}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={ require('../images/header.png') }
              resizeMode='cover'
            />
            <NavigationDrawerStructure navigationProps={navigation} />
            <UserContact />

            <View style={ css.logo_part }>
              <Image
                  style={{ width:"100%", height:"100%" }}
                  source={ require('../images/logo.png') }
                  resizeMode='cover'
              />
            </View>
          </View>
        ),
      };
    }
  },
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home_StackNavigator,
    },
    Book_Now: {
      screen: Book_Now_StackNavigator,
    },
    Profile: {
      screen: Profile_StackNavigator,
    },
  },{
    contentComponent: drawerContentComponents
  }
);
 
export default createAppContainer(AppDrawerNavigator);