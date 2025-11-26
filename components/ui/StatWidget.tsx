export default function StatWidget({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white border rounded p-4 shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  )
}
