import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import TableHeader from './TableHeader';
import TableAcademyFeesHeader from './TableAcademyFeesHeader';
import TableOtherExpensesHeader from './TableOtherExpensesHeader';
import TableContent from './TableContent';
import TableFooter from './TableFooter';

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#DEE2E6',
    }
});

  const Table = () => (
    <View style={styles.tableContainer}>
        <TableAcademyFeesHeader />
        <TableHeader />
        <TableContent />
        <TableOtherExpensesHeader />
        <TableContent />
        <TableFooter />
    </View>
  );
  
  export default Table