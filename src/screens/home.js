import React from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import css from './styles/index';
import css1 from './authscreen/authStyle';

export default class indexscreen extends React.Component {
    render() {
        return (
            <SafeAreaView>

                <View style={ css.requestCallbackText }>
                    <Text>Request A</Text>
                    <TouchableOpacity>
                        <Text style={{ color:'#0096FA' }}> Call Back > </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop:10, marginBottom:5 }}>
                    <View>
                        <Text style={{ marginLeft:10, margin: 10, }}> We offer services for: </Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={ css.service_part }>
                            <TouchableOpacity onPress={ ()=>{console.log('click serviceeee')} }>
                                <Image 
                                    source={require('../images/offer_services/1.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/2.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/3.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/4.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/5.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/6.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/7.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/8.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/9.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/offer_services/10.png')}
                                    style={ css.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                <View>
                    <View style={{flexDirection:'row', marginLeft: 20, marginTop: 10, marginBottom: 10}}>
                        <Image
                            source={require('../images/thumbsup.png')}
                            style={{ width:20, height:20 }}
                            resizeMode="stretch"
                         />
                        <Text style={{ fontSize:20, marginTop: -5 }}> Our Services : </Text>
                    </View>
                    <ScrollView horizontal={true} style={ css.serviceScroll }>
                        <View style={ css1.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/cleaning/floor.png')}
                                    style={ css1.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css1.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/cleaning/carpet.png')}
                                    style={ css1.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css1.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/cleaning/kitchen.png')}
                                    style={ css1.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css1.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/cleaning/interior_fur.png')}
                                    style={ css1.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css1.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/cleaning/sofa.png')}
                                    style={ css1.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css1.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/cleaning/bathroom.png')}
                                    style={ css1.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css1.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/cleaning/curtain.png')}
                                    style={ css1.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={ css1.service_part }>
                            <TouchableOpacity>
                                <Image 
                                    source={require('../images/cleaning/deep.png')}
                                    style={ css1.service }
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>    
                </View>
            </SafeAreaView>
        );
    }
}