// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

// // const MyDoc = () => (
// //   <Document>
// //     <Page>
// //       // My document data
// //     </Page>
// //   </Document>
// // );

// export default function Downloader() {
// //     return <div>
// //     <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
// //       {({ blob, url, loading, error }) =>
// //         loading ? 'Loading document...' : 'Download now!'
// //       }
// //     </PDFDownloadLink>
// //   </div>
// const MyDocument = () => (
//     <Document>
//       <Page>
//         <Text>React-pdf</Text>
//       </Page>
//     </Document>
//   );

//   const stream = await renderToStream(<MyDocument />);
// }
import dynamic from 'next/dynamic';
import PrimaryButton from '../components/PrimaryButton';

const MyPDF = dynamic(() => import('../components/MyPDF'), {
    ssr: false,
});

export default function Downloader() {
    return <>
        <div>Test download btn</div>
        <div style={{ width: "10%" }}>
            <MyPDF data={["test1, test2, test3"]}>

            </MyPDF>


        </div>
    </>
}