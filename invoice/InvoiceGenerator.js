import React from 'react'
import Invoice from './Invoice'

export default function InvoiceGenerator ({ data, pdfMode }) {
  return (
    <div style={{ margin: '0 auto 50px', width: 700, paddingTop: 80 }}>
      <Invoice {...{ data, pdfMode }} />
    </div>
  )
}