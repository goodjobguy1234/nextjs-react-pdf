import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Table from '../components/Table';

// Register font
Font.register({ family: 'SukhumvitSet-Bold', src: '/assets/fonts/SukhumvitSet-Bold.ttf' });
Font.register({ family: 'SukhumvitSet-Light', src: '/assets/fonts/SukhumvitSet-Light.ttf' });
Font.register({ family: 'SukhumvitSet-Medium', src: '/assets/fonts/SukhumvitSet-Medium.ttf' });
Font.register({ family: 'SukhumvitSet-SemiBold', src: '/assets/fonts/SukhumvitSet-SemiBold.ttf' });
Font.register({ family: 'SukhumvitSet-Thin', src: '/assets/fonts/SukhumvitSet-Thin.ttf' });

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        paddingTop: 12,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column'
    },
    logo: {
        height: 79,
        width: 423
    },
    titleContainer:{
        flexDirection: 'row',
        marginTop: 18,
        marginLeft: 'auto',
        marginRight: 'auto'
        
    },
    costEstimationTitle:{
        color: '#383738',
        fontSize: 12,
        fontFamily: 'SukhumvitSet-Bold',
        textDecoration: 'underline'

    },
    firstHeaderContainer: {
        marginTop: 16,
        marginBottom: 10,
        fontSize: 10,
        flexDirection: 'row'
    },
    headerContainer: {
        marginBottom: 10,
        fontSize: 10,
        flexDirection: 'row'
    },
    lastHeaderContainer: {
        marginBottom: 16,
        fontSize: 10,
        flexDirection: 'row'
    },
    headerTo: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 75
    },
    headerCountry: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 57
    },
    headerInstitutionName: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 57
    },
    headerInstitutionDetail: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 12
    },
    headerCourseName: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 51
    },
    headerWebsite: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 31
    },
    headerPeriod: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 13
    },
    headerIntake: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 48
    },
    headerRemark: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 51
    },
    headerMoreDetail: {
        fontFamily: 'SukhumvitSet-SemiBold',
        paddingRight: 12
    },
    content: {
        fontFamily: 'SukhumvitSet-Medium',
        width: 457
    }, 
    generatedDateContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-end'
    },
    generatedDate: {
        fontFamily: 'SukhumvitSet-Medium',
        fontSize: 10
    },
});

export default function MyPdfView() {

    const [client, setClient] = useState(false)
    const [mdata, setData] = useState([])
    const getData = async () => {
        const data = await fetch("http://localhost:3002/api/v1/expense-list")
        const x = await data.json()
        return x
    }

    // Create Document Component
    const MyDocument = (x) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image src={"/assets/banner.png"} style={styles.logo}/>

                <View style={styles.titleContainer}>
                    <Text style={styles.costEstimationTitle}>ค่าใช้จ่ายโดยประมาณ</Text>
                </View>

                <View style={styles.firstHeaderContainer}>
                    <Text style={styles.headerTo}>ถึง:</Text>
                    <Text style={styles.content}>Kawin Sirinthong</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerCountry}>ประเทศ:</Text>
                    <Text style={styles.content}>Australia</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerInstitutionName}>สถาบัน:</Text>
                    <Text style={styles.content}>Deakin University</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerInstitutionDetail}>รายละเอียดสถาบัน:</Text>
                    <Text style={styles.content}>
                        ก่อตั้งเมื่อปี 1974 มหาวิทยาลัย Deakin ตั้งอยู่ในรัฐ Victoria โดยมีทั้งหมด 4 วิทยาเขตได้แก่ Melbourne Burwood Geelong Waurn Ponds, Geelong Waterfront และ Warrnambool มหาวิทยาลัยได้รับรางวัล
                        มหาวิทยาลัยยอดเยี่ยมแห่งปีของประเทศออสเตรเลียถึง 2 ปี ซ้อนนอกจากนี้ยังได้รับรางวัลการสอนยอดเยี่ยมระดับ
                        นานาชาติอีกด้วย
                    </Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerCourseName}>หลักสูตร:</Text>
                    <Text style={styles.content}>Master of Architecture (Design Management)</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerWebsite}>เว็บไซต์ (URL):</Text>
                    <Text style={styles.content} src="http://www.deakin.edu.au/course/master-architecture-des">http://www.deakin.edu.au/course/master-architecture-des</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerPeriod}>ระยะเวลา (สัปดาห์):</Text>
                    <Text style={styles.content}>48</Text>
                </View>

                <View style={styles.lastHeaderContainer}>
                    <Text style={styles.headerIntake}>วันเริ่มต้น:</Text>
                    <Text style={styles.content}>มีนาคม, กรกฎาคม</Text>
                </View>
                
                <Table />

                <View style={styles.generatedDateContainer}>
                    <Text style={styles.generatedDate}>ประมาณการค่าใช้จ่ายราคา ณ วันที่ 29/10/22</Text>
                </View>

                <View style={styles.firstHeaderContainer}>
                    <Text style={styles.headerRemark}>หมายเหตุ:</Text>
                    <Text style={styles.content}>ราคาตั๋วเครื่องบินอาจมีการเปลี่ยนแปลงได้ขึ้นอยู่กับโปรโมชั่นและเงื่อนไขของแต่ละสายการบิน</Text>
                </View>

                <View style={styles.lastHeaderContainer}>
                    <Text style={styles.headerMoreDetail}>รายละเอียดเพิ่มเติม:</Text>
                    <Text style={styles.content}>ราคาตั๋วเครื่องบินอาจมีการเปลี่ยนแปลงได้ขึ้นอยู่กับโปรโมชั่นและเงื่อนไขของแต่ละสายการบิน</Text>
                </View>
            </Page>
        </Document>
    );

    useEffect(() => {
        getData().then((d) => {
            setData(d.result)
            console.log("data", d)
            setClient(!client)
        })
    }, [])

    return (
        <>
            <PDFViewer>
                {MyDocument(mdata)}

            </PDFViewer>
        </>
    )
}