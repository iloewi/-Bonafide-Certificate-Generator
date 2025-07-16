import { FileText } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b px-4 py-3 sticky top-0 z-10 shadow-sm flex items-center gap-2">
      <FileText className="text-indigo-600" />
      <h1 className="font-semibold text-lg">Letter Generator</h1>
    </nav>
  )
}