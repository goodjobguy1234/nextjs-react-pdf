// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { PDFDownloadLink, Document, Page, Text, pdf } from '@react-pdf/renderer';

export default async function handler(req, res) {

  const MyDocument = () => (
    <Document>
      <Page>
        <Text>React-pdf</Text>
      </Page>
    </Document>
  );
  
  const blob = pdf(MyDocument).toBlob();
//   res.setHeader('Content-Type', 'application/pdf');
//   res.status(200).sendFile(blob)
res.download(blob, "test.pdf")
}
