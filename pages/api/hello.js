// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { renderToStream, renderToString, renderToFile } from "@react-pdf/renderer";
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const MyDocument = () => (
    <Document>
      <Page>
        <Text>React-pdf</Text>
      </Page>
    </Document>
  );
  
  const pdfStream = await renderToStream(<MyDocument />);
  res.setHeader('Content-Type', 'application/pdf');
  pdfStream.pipe(res);
  pdfStream.on('end', () => console.log('Done streaming, response sent.'));
  // return res.status(200).send(value)
  // return await renderToFile(<MyDocument />, `${__dirname}/my-doc.pdf`);
}
