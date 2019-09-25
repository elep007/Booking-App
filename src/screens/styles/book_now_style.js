import { Dimensions, StyleSheet } from 'react-native';
const config = {
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height
}
export default{
    wizard: {
        width: config.deviceWidth*0.8,
        height: 25,
        marginLeft: config.deviceWidth*0.1,
        marginTop: 50,
    },
    wizard1_part: {
        width: config.deviceWidth*0.9,
        marginLeft: config.deviceWidth*0.05,
    },
    text: {
        color:'#008EFD',
        fontSize: 17,
    },
    wizard_next_btn: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#00AEEF',
        borderRadius: 15,
        marginBottom: 10,
        
        width:0,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        elevation: 5,  
    },
    roundNumber: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center' ,
        justifyContent: 'center',
    },
    phoneFirstNum: {
        flex: 0.25,
        flexDirection: 'row', 
        backgroundColor: '#CCCCCC',
        borderWidth:1,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderColor: '#B2B2B2'
    },
    mobileNumInput: {
        flex: 0.75,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderColor: '#B2B2B2',
        height: 32,
        fontSize: 15,
        padding: 2,
    },
    fullName: {
        width: '100%',
        borderWidth:1,
        height: 32,
        borderColor: '#B2B2B2',
        fontSize: 15,
        padding: 2,
        paddingLeft: 5,
    },
    inputTextSame: {
        width: '100%',
        borderWidth:1,
        height: 32,
        borderColor: '#B2B2B2',
        fontSize: 15,
        padding: 2,
        paddingLeft: 5,
    },
    cleanTimeSel: {
        width: config.deviceWidth*0.14,
        height: 28,
        backgroundColor: '#E1E1E1',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 13,
    },
    cleanDateSel: {
        width: 30,
        height:30,
    },
    weekname: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#707070',
    },
    datesel: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1E1E1',
    },
    clean_date_active_item: {
        borderColor: '#3CA8FD',
        borderWidth: 2,
    },
    clean_date_item: {
        padding: 5,
        marginRight: 13,
    },
    active_roundNum: {
        backgroundColor: '#16A9FF',
        borderColor: '#16A9FF'
    },
    active_roundNum_text: {
        color: '#fff',
    },
    clean_requrie_btn: {
        height: 30,
        width: config.deviceWidth*0.25,
        backgroundColor: '#C4C4C4',
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    active_clean_requrie_btn: {
        backgroundColor: '#00AEEF',
    },
    active_requrie_text: {
        color: '#fff'
    }
}