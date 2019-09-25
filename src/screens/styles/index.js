import { Dimensions, StyleSheet } from 'react-native';
const config = {
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height
}
export default{
    menubutton: {
        color:'#fff', 
        fontSize:40,
        marginLeft: 15
    },
    phone_num: {
        flex: 0.5,
        flexDirection: 'row',
        marginTop: 3,
        marginBottom: 5
    },
    email_adr: {
        flex: 0.5,
        flexDirection: 'row',
    },
    headerConatactText: {
        fontSize: 13,
        color: '#fff'
    },
    logo_part: {
        width: 70,
        height: 70,
        position: 'absolute', 
        zIndex: 10000,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#0095FA',
        shadowColor: "#000",
        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        top: 25,
        left: config.deviceWidth*0.5-35
    },
    requestCallbackText:{
        flexDirection: 'row',
        marginTop: '3%',
        marginLeft: config.deviceWidth*0.65,
        height:25,
    },
    serviceScroll: {
        backgroundColor: '#D7D7D7'
    },
    service_part: {
        marginLeft:config.deviceWidth*0.1, 
        marginRight:config.deviceWidth*0.1, 
    },
    service: {
        width:config.deviceWidth*0.8, 
        height: config.deviceWidth*0.78,
    }
}