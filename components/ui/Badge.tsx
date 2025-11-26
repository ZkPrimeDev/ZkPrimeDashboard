export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 rounded">{children}</span>
}
