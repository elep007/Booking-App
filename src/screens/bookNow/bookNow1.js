import React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import css from '../styles/book_now_style';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Entypo';

const sports = [
    {
      label: 'Abu Dhabi',
      value: 'Abu_Dhabi',
    },
    {
      label: 'Abu Dhabi2',
      value: 'Abu_Dhabi2',
    },
    {
      label: 'Abu Dhabi3',
      value: 'Abu_Dhabi3',
    },
];

export default class indexscreen extends React.Component {
    state = {
        choose_cleaning: null,
    }
    render() {
        const placeholder = {
            label: 'date & time',
            value: 'Adu Dhabi',
            color: '#9EA0A4',
        };
        return (
            <ScrollView>
                <Image 
                    source={require('../../images/wizard_img2.png')}
                    style={ css.wizard }
                    resizeMode="stretch"
                />
                <View style={ css.wizard1_part }>
                    <View style={{flexDirection:'row', padding: 5, }}>
                        <Text style={[css.text, {flex: 0.7, fontSize: 20}]}>Date & Time</Text>
                        <View style={{ flex: 0.3 }}>
                            <RNPickerSelect
                                placeholder={placeholder}
                                items={sports}
                                onValueChange={value => {
                                    this.setState({
                                        choose_cleaning: value,
                                    });
                                }}
                                style={{
                                    inputIOS: {},
                                    inputAndroid: {
                                        backgroundColor: '#E1E1E1',
                                        height: 30,
                                        padding: 2,
                                    },
                                    iconContainer: {
                                        top: 5,
                                        right: 5,
                                    },
                                }}
                                value={this.state.choose_cleaning}
                                useNativeAndroidPickerStyle={false}
                                Icon={() => {
                                    return <Icon name="chevron-down" size={20} color="gray" />;
                                }}
                            />
                        </View>
                    </View> 
                    
                    <View style={{ padding: 5 }}>
                        <Text style={css.text}>When would your like your cleaning?</Text>
                        <ScrollView horizontal={true} style={{ marginTop: 5 }}>
                            <View style={[ css.clean_date_active_item, css.clean_date_item ]}>
                                <TouchableOpacity style={ css.cleanDateSel }>
                                    <View style={ css.weekname }><Text style={{ color:'#fff', fontSize: 11 }}>FRI</Text></View>
                                    <View style={ css.datesel }><Text style={{ fontSize: 11 }}>1</Text></View>
                                </TouchableOpacity>
                            </View>
                            <View style={[ css.clean_date_item ]}>
                                <TouchableOpacity style={ css.cleanDateSel }>
                                    <View style={ css.weekname }><Text style={{ color:'#fff', fontSize: 11 }}>STA</Text></View>
                                    <View style={ css.datesel }><Text style={{ fontSize: 11 }}>2</Text></View>
                                </TouchableOpacity>
                            </View>
                            <View style={[ css.clean_date_item ]}>
                                <TouchableOpacity style={ css.cleanDateSel }>
                                    <View style={ css.weekname }><Text style={{ color:'#fff', fontSize: 11 }}>SUN</Text></View>
                                    <View style={ css.datesel }><Text style={{ fontSize: 11 }}>3</Text></View>
                                </TouchableOpacity>
                            </View>
                            <View style={[ css.clean_date_item ]}>
                                <TouchableOpacity style={ css.cleanDateSel }>
                                    <View style={ css.weekname }><Text style={{ color:'#fff', fontSize: 11 }}>MON</Text></View>
                                    <View style={ css.datesel }><Text style={{ fontSize: 11 }}>4</Text></View>
                                </TouchableOpacity>
                            </View>
                            <View style={[ css.clean_date_item ]}>
                                <TouchableOpacity style={ css.cleanDateSel }>
                                    <View style={ css.weekname }><Text style={{ color:'#fff', fontSize: 11 }}>TUE</Text></View>
                                    <View style={ css.datesel }><Text style={{ fontSize: 11 }}>5</Text></View>
                                </TouchableOpacity>
                            </View>
                            <View style={[ css.clean_date_item ]}>
                                <TouchableOpacity style={ css.cleanDateSel }>
                                    <View style={ css.weekname }><Text style={{ color:'#fff', fontSize: 11 }}>WEN</Text></View>
                                    <View style={ css.datesel }><Text style={{ fontSize: 11 }}>6</Text></View>
                                </TouchableOpacity>
                            </View>
                            <View style={[ css.clean_date_item ]}>
                                <TouchableOpacity style={ css.cleanDateSel }>
                                    <View style={ css.weekname }><Text style={{ color:'#fff', fontSize: 11 }}>FRI</Text></View>
                                    <View style={ css.datesel }><Text style={{ fontSize: 11 }}>13</Text></View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ padding: 5 }}>
                        <Text style={css.text}>What time would you like to start?</Text>
                        <ScrollView horizontal={true} style={{ marginTop: 5 }}>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>8:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>8:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>9:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>9:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>10:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>10:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>11:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>11:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>12:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>12:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>13:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>13:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>14:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>14:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>15:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>15:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>16:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>17:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>17:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ css.cleanTimeSel }>
                                <Text>18:00</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View> 

                    <View style={{ padding: 3 }}>
                        <Text style={[css.text, {flex: 0.7, fontSize: 20}]}>Contact Details</Text>
                    </View>

                    <View style={{ padding: 3 }}>
                        <Text style={css.text}>Mobile Number*</Text>
                        <View style={{ flexDirection: 'row', width: '80%' }}>
                            <View style={ css.phoneFirstNum }>
                                <Image
                                    style={{ width:20, height:20 }}
                                    source={ require('../../images/arab_flag.png') }
                                    resizeMode='cover'
                                />
                                <Text>+971</Text>
                            </View>
                            <TextInput 
                                style = { css.mobileNumInput }
                                autoCapitalize = "none"
                                keyboardType={'numeric'}
                                // onChangeText = {this.handleEmail}
                            />
                        </View>
                    </View> 

                    <View style={{ padding: 3 }}>
                        <Text style={css.text}>Full Name*</Text>
                        <TextInput 
                            style = { css.fullName }
                            autoCapitalize = "none"
                        />
                    </View>

                    <View style={{ flexDirection: 'row', padding: 3 }}>
                        <View style={{ flex: 1, flexDirection:'column' }}>
                            <Text style={css.text}>Email</Text>
                            <TextInput 
                                style = { css.inputTextSame }
                                autoCapitalize = "none"
                            />
                        </View>
                        <View style={{flex:0.05}}></View>
                        <View style={{ flex: 1, flexDirection:'column' }}>
                            <Text style={css.text}>Villa/Apartment No.</Text>
                            <TextInput 
                                style = { css.inputTextSame }
                                autoCapitalize = "none"
                            />
                        </View>
                    </View>

                    <View style={{ padding: 3, width: '50%' }}>
                        <Text style={css.text}>Building No</Text>
                        <TextInput 
                            style = { css.inputTextSame }
                            autoCapitalize = "none"
                        />
                    </View>

                    <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={css.wizard_next_btn}>
                            <Text style={{ color: '#fff', fontSize:22, }}> CONFIRM </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

  