import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({ family: 'SukhumvitSet-Bold', src: '/assets/fonts/SukhumvitSet-Bold.ttf' });
Font.register({ family: 'SukhumvitSet-Light', src: '/assets/fonts/SukhumvitSet-Light.ttf' });
Font.register({ family: 'SukhumvitSet-Medium', src: '/assets/fonts/SukhumvitSet-Medium.ttf' });
Font.register({ family: 'SukhumvitSet-SemiBold', src: '/assets/fonts/SukhumvitSet-SemiBold.ttf' });
Font.register({ family: 'SukhumvitSet-Thin', src: '/assets/fonts/SukhumvitSet-Thin.ttf' });

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#DEE2E6',
        backgroundColor: '#F6F6F6',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 27,
        textAlign: 'center',
        flexGrow: 1,
        fontFamily: 'SukhumvitSet-Bold',
        fontSize: 10
    },
    title: {
        width: '100%',
        color: '#383738'
    }
  });

  const TableAcademyFeesHeader = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Academy Fees</Text>
    </View>
  );
  
  export default TableAcademyFeesHeader