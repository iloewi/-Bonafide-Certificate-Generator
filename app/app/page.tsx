'use client';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    roll: '',
    course: '',
    college: '',
    date: new Date().toLocaleDateString()
  });
  const pdfRef = useRef(null);

  const generatePDF = () => {
    const opt = {
      margin:       0.5,
      filename:     `${form.name.replace(/\s/g, "_")}_bonafide.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdfRef.current).save();
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bonafide Certificate Generator</h1>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        {['name', 'roll', 'course', 'college'].map((field) => (
          <input
            key={field}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder={`Enter ${field}`}
            value={(form as any)[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <button
          onClick={generatePDF}
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
        >
          Download PDF
        </button>
      </div>

      <div className="hidden">
        <div ref={pdfRef} className="p-10 text-black text-lg leading-relaxed font-serif">
          <h2 className="text-center text-2xl font-bold mb-6">BONAFIDE CERTIFICATE</h2>
          <p>
            This is to certify that <strong>{form.name}</strong> (Roll No: <strong>{form.roll}</strong>) is a bonafide student of <strong>{form.college}</strong>, pursuing the <strong>{form.course}</strong> course.
          </p>
          <p className="mt-6">Date: {form.date}</p>
          <p className="mt-10">_________________________<br />Head of Institution</p>
        </div>
      </div>
    </main>
  );
}
