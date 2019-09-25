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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import css from './authStyle';

export default class signupscreen extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../../images/background.png')} style={css.backgroundImage} resizeMode='stretch'>
                <Text onPress={() => this.props.navigation.goBack()} style={{position: 'absolute', top:15, left: 17}}> 
                    <Icon name="arrow-left" style={css.backBtnStyle} />
                </Text>
                <View style={css.logo}>
                    <Image 
                        source={require('../../images/logo_auth.png')}
                        style={{ width:120, height: 120, marginBottom: "1%" }}
                        resizeMode="stretch"
                    />
                    <Text style={css.register_text}>REGISTER</Text>
                </View>

                <View style="css.login_div">
                    <View style={{flexDirection:'row', justifyContent: 'center'}}>
                        <TextInput style = {css.input_s}
                            placeholder = "Full Name"
                            placeholderTextColor = "#1E1E1E"
                            autoCapitalize = "none"
                            // onChangeText = {this.handleEmail}
                        />
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'center'}}>
                        <TextInput style = {css.input_s}
                            placeholder = "Contact No."
                            placeholderTextColor = "#1E1E1E"
                            autoCapitalize = "none"
                            // onChangeText = {this.handlePassword}
                        />
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'center'}}>
                        <TextInput style = {css.input_s}
                            placeholder = "Email"
                            placeholderTextColor = "#1E1E1E"
                            autoCapitalize = "none"
                            // onChangeText = {this.handlePassword}
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={{flexDirection:'row', justifyContent: 'center'}}>
                            <TouchableOpacity style = {css.registerButton}>
                                <Text style = {css.loginButtonText}> REGISTER </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection:'row', justifyContent: 'center'}}>
                    <View style={ css.map_part }>
                        <Image 
                            source={require('../../images/map.png')}
                            style={{ flex: 1 }}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                <View>
                    <Text style={{ color: "#fff", fontWeight: 'bold', marginLeft: 20 }}>Our Services :</Text>
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