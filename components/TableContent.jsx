import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    firstContainer: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Medium',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '45%'
    },
    secondContainer: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Medium',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '15%',
        justifyContent: 'flex-end'
    },
    thirdContainer: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Medium',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '15%',
        justifyContent: 'flex-end'
    },
    lastContainer: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Medium',
        fontSize: 10,
        color: '#383738',
        width: '25%',
        justifyContent: 'flex-end'
    },
    description: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    period: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    rate: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    thb: {
        paddingLeft: 8,
        paddingRight: 8,
    },
  });

  const TableContent = () => (
    <><View style={styles.firstContainer}>
        <Text style={styles.description}>ค่าที่พัก</Text>
    </View>

    <View style={styles.secondContainer}>
        <Text style={styles.period}>24</Text>
    </View>

    <View style={styles.thirdContainer}>
        <Text style={styles.rate}>5,705.15</Text>
    </View>

    <View style={styles.lastContainer}>
        <Text style={styles.thb}>140,655.91</Text>
    </View></>

  );
  
  export default TableContent