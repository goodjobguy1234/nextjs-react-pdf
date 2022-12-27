import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    firstContainer: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#F6F6F6',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-SemiBold',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '45%'
    },
    secondContainer: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#F6F6F6',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-SemiBold',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '15%'
    },
    thirdContainer: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#F6F6F6',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-SemiBold',
        fontSize: 10,
        color: '#383738',
        borderRightColor: '#DEE2E6',
        borderRightWidth: 1,
        width: '15%'
    },
    lastContainer: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#F6F6F6',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-SemiBold',
        fontSize: 10,
        color: '#383738',
        width: '25%'
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

  const TableHeader = () => (
    <><View style={styles.firstContainer}>
        <Text style={styles.description}>Description</Text>
    </View>

    <View style={styles.secondContainer}>
        <Text style={styles.period}>Period (Weeks)</Text>
    </View>

    <View style={styles.thirdContainer}>
        <Text style={styles.rate}>AUD</Text>
    </View>

    <View style={styles.lastContainer}>
        <Text style={styles.thb}>THB (24.62 THB = 1 AUD)</Text>
    </View></>

  );
  
  export default TableHeader