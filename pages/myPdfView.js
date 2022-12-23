import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

// Register font
Font.register({ family: 'THSarabunNew', src: '/assets/fonts/THSarabunNew.ttf' });

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontFamily: 'THSarabunNew'
      }
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
                {/* <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}/> */}
                {
                    x?.map((item) => {
                        return (
                            <View style={styles.section}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.title}>Test</Text>
                            </View>
                        )
                    })
                }
                {/* <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>

            <View style={styles.section}>
                <Text>Section #2</Text>
            </View> */}
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
                {/* {
                    mdata &&
                    <MyDocument x={mdata} />
                } */}
                {MyDocument(mdata)}

            </PDFViewer>
        </>
    )
}