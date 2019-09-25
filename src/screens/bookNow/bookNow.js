import React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
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
    nextfun = () => {
        this.props.navigation.navigate('bookNow2');
    }
    render() {
        const placeholder = {
            label: 'Choose clean',
            value: 'Adu Dhabi',
            color: '#9EA0A4',
        };
        return (
            <View>
                <Image 
                    source={require('../../images/wizard_img.png')}
                    style={ css.wizard }
                    resizeMode="stretch"
                />
                <View style={ css.wizard1_part }>
                    <View style={{flexDirection:'row', padding: 10, marginTop: 5, }}>
                        <Text style={[css.text, {flex: 0.7}]}>Choose Your Clean</Text>
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

                    <View style={{ padding: 10, marginTop: 5,  }}>
                        <Text style={css.text}>How often do you need your cleaner?</Text>
                        <View style={{ width: '90%' }}>
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
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        paddingLeft: 5,
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

                    <View style={{ padding: 10, marginTop: 5,  }}>
                        <Text style={css.text}>How long do you need your cleaner to stay?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <TouchableOpacity style={[ css.roundNumber, css.active_roundNum ]}>
                                <Text style={ css.active_roundNum_text }>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>6</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>8</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    
                    <View style={{ padding: 10, marginTop: 5,  }}>
                        <Text style={css.text}>Which Gender do you want?</Text>
                        <View style={{ width: '90%' }}>
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
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        paddingLeft: 5,
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
                    
                    <View style={{ padding: 10, marginTop: 5,  }}>
                        <Text style={css.text}>How many cleaners do you need?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber, css.active_roundNum ]}>
                                <Text style={ css.active_roundNum_text }>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>6</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ css.roundNumber ]}>
                                <Text>7</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    
                    <View style={{ padding: 10, marginTop: 5,  }}>
                        <Text style={css.text}>Do you require cleaning materials?</Text>
                        <View style={{ width: '90%', flexDirection: 'row', marginTop: 5 }}>
                            <TouchableOpacity style={[css.clean_requrie_btn, css.active_clean_requrie_btn]}>
                                <Text style={[css.active_requrie_text, { fontSize:16, }]}> Yes </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[css.clean_requrie_btn]}>
                                <Text style={[{ fontSize:16, }]}> No </Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    
                    <View style={{flexDirection:'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={css.wizard_next_btn} 
                            onPress={ () => this.nextfun() }>
                            <Text style={{ color: '#fff', fontSize:22, }}> NEXT </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

  