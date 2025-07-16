'use client'

import { useState } from 'react'

export default function LetterForm({ onGenerate }: { onGenerate: (data: any) => void }) {
  const [form, setForm] = useState({
    name: '',
    type: 'Leave',
    date: '',
    reason: ''
  })

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onGenerate(form)
      }}
      className="bg-white p-6 rounded-2xl shadow space-y-4 mt-6"
    >
      <div>
        <label>Name</label>
        <input
          required
          className="block w-full border p-2 rounded mt-1"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div>
        <label>Type</label>
        <select
          className="block w-full border p-2 rounded mt-1"
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          <option>Leave</option>
          <option>Job</option>
          <option>Resignation</option>
        </select>
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          className="block w-full border p-2 rounded mt-1"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
        />
      </div>
      <div>
        <label>Reason</label>
        <textarea
          className="block w-full border p-2 rounded mt-1"
          rows={3}
          value={form.reason}
          onChange={e => setForm({ ...form, reason: e.target.value })}
        />
      </div>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Download PDF
      </button>
    </form>
  )
}