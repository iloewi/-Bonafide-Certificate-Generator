'use client'

import Navbar from '@/components/Navbar'
import LetterForm from '@/components/LetterForm'
import LetterPDF from '@/components/LetterPDF'
import { useState } from 'react'

export default function Page() {
  const [data, setData] = useState(null)

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto">
        <LetterForm onGenerate={setData} />
        {data && <LetterPDF data={data} />}
      </main>
    </>
  )
}