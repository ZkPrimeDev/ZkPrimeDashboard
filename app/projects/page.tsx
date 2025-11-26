import Link from 'next/link'
import { getProjects } from '../../lib/zkprimeClientStub'
import Card from '../../components/ui/Card'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>
      <div className="grid gap-4">
        {projects.map((p) => (
          <Card key={p.id} title={p.name} className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-600">{p.description}</div>
            </div>
            <div>
              <Link href={`/projects/${p.id}`} className="text-blue-600">Open</Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}
