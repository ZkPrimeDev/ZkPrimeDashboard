import { getProjectById } from '../../../lib/zkprimeClientStub'
import Card from '../../../components/ui/Card'

type Props = { params: { id: string } }

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectById(params.id)

  if (!project) {
    return <div className="p-6">Project not found</div>
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{project.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Private State Engines">
          <ul className="space-y-2">
            {project.stateEngines.map((s) => (
              <li key={s.id} className="text-sm">
                <strong>{s.name}</strong> — {s.usage}% used
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Jobs">
          <ul className="space-y-2">
            {project.jobs.map((j) => (
              <li key={j.id} className="text-sm">
                <strong>{j.name}</strong> — {j.status}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  )
}
