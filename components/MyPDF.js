import React, { useEffect, useState } from 'react';

// import MyDocument from '../../../components/pdf/TripDocument';
import { PDFDownloadLink, PDFViewer, usePDF } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import PrimaryButton from './PrimaryButton';
import { Button } from 'react-bootstrap';


export default function Pdf({ data }) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(!isClient)
    }, []);

    const MyDocument = (x) => (
        <Document>
            <Page size="A4">
                <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"} />

                {
                    x?.map((item) => {
                        return (
                            <View>
                                <Text>{item}</Text>
                            </View>
                        )
                    })
                }
                {/* <View>
                    <Text>Section #1</Text>
                </View>
                <View>
                    <Text>Section #2</Text>
                </View>

                <View>
                    <Text>Section #2</Text>
                </View> */}
            </Page>
        </Document>
    );

    //     const [instance, updateInstance] = usePDF({ document:  MyDocument});

    //   if (instance.loading) return <div>Loading ...</div>;

    //   if (instance.error) return <div>Something went wrong: {error}</div>;

    return <>
        {isClient && <PDFDownloadLink document={MyDocument(data)} fileName='somename.pdf'>
            {({ blob, url, loading, error }) =>
                // loading ? <></> : <Button>Download</Button>
                loading ? <></> : <PrimaryButton onMyButtonClick={() => { }} text={"Download"} buttonClassName={"normalButton w-100"}>

                </PrimaryButton>
            }</PDFDownloadLink>
        }

    </>
}