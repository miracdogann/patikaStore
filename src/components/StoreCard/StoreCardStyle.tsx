import React from "react";

import { StyleSheet } from "react-native";



export default StyleSheet.create({
    container:{
        margin:10,
        padding:10,
        backgroundColor:'#ECEFF1',
        borderRadius : 15,
        width:'45%',
    },
    c_container:{
        alignItems : 'center',
        // backgroundColor:'aqua',
        padding : 5,
        flex:1
    },
    card_image :{
        width:'90%',
        height:150,
        borderRadius :15
    },
    card_title :{
        color :'#000',
        fontWeight:'bold',
        fontSize:17,
        textAlign:'left',

    },
    card_price:{
        width:'80%',
        textAlign:'left',
        fontSize:15,
        marginTop:5
    },
    card_stock:{
        width:'80%',
        marginTop:10,
        color:'red',
        fontWeight:'bold',
    }
})

