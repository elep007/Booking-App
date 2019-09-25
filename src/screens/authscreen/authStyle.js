export default{
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex:1,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    logo: {
        alignItems: 'center',
    },
    login_text: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    register_text: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
    },
    login_div: {
        alignItems: 'center',
    },
    input: {
        flex:0.8,
        margin: 10,
        height: 40,
        borderColor: '#c0c0c0',
        backgroundColor: '#DBDBDB',
        borderWidth: 1,
        paddingLeft: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        elevation: 5,   
    },
    input_s: {
        flex:0.6,
        margin: 3,
        height: 35,
        borderColor: '#c0c0c0',
        backgroundColor: '#DBDBDB',
        borderWidth: 1,
        paddingLeft: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        elevation: 5,  
    },
    loginButton: {
        flex:0.4,
        backgroundColor: '#00AEEF',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
        borderRadius: 100,
    },
    registerButton: {
        flex:0.4,
        backgroundColor: '#00AEEF',
        padding: 10,
        margin: 15,
        height: 35,
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 4,
        marginBottom: 4
    },
    loginButtonText:{
        color: 'white',
    },
    serviceScroll: {
        marginTop:5,
        backgroundColor: '#0054a6'
    },
    service_part: {
        margin: 18
    },
    service: {
        width:100, 
        height: 100,
    },
    backBtnStyle: {
        fontSize: 20,
        color: '#fff'
    },
    map_part: {
        flex: 0.6,
        flexDirection:'row',
        // marginTop: -35,
        // marginBottom: -25
    }
}