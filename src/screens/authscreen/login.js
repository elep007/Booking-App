import React from 'react';
import { 
    ImageBackground,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import css from './authStyle';

export default class logincreen extends React.Component {
    state = {
        email: '',
        password: '',
    }
    loginFun = () => {
        let userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.storeData(JSON.stringify(userData));
    }
    storeData = async (data) => {
        try {
          await AsyncStorage.setItem('userToken', data)
          this.props.navigation.navigate('mainScreen');
        } catch (e) {
          // saving error
        }
    }
    emailValidate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
            this.setState({email:"Email-Not-Correct"})
            return false;
        }
        else {
            this.setState({email:text})
        }
    }
    render() {
        return (
            <ImageBackground source={require('../../images/background.png')} style={css.backgroundImage} resizeMode='stretch'>
                <View style={css.logo}>
                    <Image 
                        source={require('../../images/logo_auth.png')}
                        style={{ width:120, height: 120, marginBottom: "4%" }}
                        resizeMode="stretch"
                    />
                    <Text style={css.login_text}>Login Now</Text>
                </View>

                <View style="css.login_div">
                    <View style={{flexDirection:'row', justifyContent: 'center'}}>
                        <TextInput style = {css.input}
                            placeholder = "Email"
                            placeholderTextColor = "#1E1E1E"
                            autoCapitalize = "none"
                            onChangeText = { (value) => { this.emailValidate(value) } }
                        />
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'center'}}>
                        <TextInput style = {css.input}
                            placeholder = "Password"
                            placeholderTextColor = "#1E1E1E"
                            autoCapitalize = "none"
                            secureTextEntry={true}
                            onChangeText = { (value) => { this.setState({ password: value.trim() }) } }
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={{flexDirection:'row', justifyContent: 'center'}}>
                            <TouchableOpacity
                                style = {css.loginButton}
                                onPress = {
                                    () => this.loginFun()
                                }
                            >
                                <Text style = {css.loginButtonText}> LOG IN </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{color:'#fff', fontSize:11, marginTop:-10 }}>OR</Text>
                        <View style={{flexDirection:'row', justifyContent: 'center', marginTop:-10 }}>
                            <TouchableOpacity style = {css.loginButton}>
                                <Text style = {css.loginButtonText}> GUEST </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={ () => { this.props.navigation.navigate('signup') } }>
                                <Text style={{color:'#fff'}}> Register here </Text>
                            </TouchableOpacity>
                            <Text style={{color:'#fff'}}> / </Text>
                            <TouchableOpacity>
                                <Text style={{color:'#fff'}}> Forget Password </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={{ color: "#fff", fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Our Services :</Text>
                    <ScrollView horizontal={true} style={ css.serviceScroll }>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../../images/cleaning/floor.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../../images/cleaning/carpet.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../../images/cleaning/kitchen.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../../images/cleaning/interior_fur.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../../images/cleaning/sofa.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../../images/cleaning/bathroom.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../../images/cleaning/curtain.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../../images/cleaning/deep.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>    
                </View>
            </ImageBackground>
        );
    }
}