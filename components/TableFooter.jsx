import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    firstContainer: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Bold',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '45%'
    },
    secondContainer: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Bold',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '15%'
    },
    thirdContainer: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Bold',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '15%',
        justifyContent: 'flex-end'
    },
    lastContainer: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Bold',
        fontSize: 10,
        color: '#383738',
        width: '25%',
        justifyContent: 'flex-end'
    },
    description: {
        paddingLeft: 8,
        paddingRight: 8
    },
    period: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    rate: {
        paddingLeft: 8,
        paddingRight: 8,
        textDecoration: 'underline'
    },
    thb: {
        paddingLeft: 8,
        paddingRight: 8,
        textDecoration: 'underline'
    },
  });

  const TableFooter = () => (
    <><View style={styles.firstContainer}>
        <Text style={styles.description}>Total</Text>
    </View>

    <View style={styles.secondContainer}>
        <Text style={styles.period}></Text>
    </View>

    <View style={styles.thirdContainer}>
        <Text style={styles.rate}>31,556.93</Text>
    </View>

    <View style={styles.lastContainer}>
        <Text style={styles.thb}>777,525.00</Text>
    </View></>

  );
  
  export default TableFooter