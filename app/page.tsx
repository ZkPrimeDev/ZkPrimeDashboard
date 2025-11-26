import { getOverviewMetrics } from '../lib/zkprimeClientStub'
import StatWidget from '../components/ui/StatWidget'
import Card from '../components/ui/Card'

export default async function Page() {
  const metrics = await getOverviewMetrics()

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatWidget label="Active Projects" value={metrics.activeProjects} />
        <StatWidget label="Running Jobs" value={metrics.runningJobs} />
        <StatWidget label="Confidential Ops" value={metrics.confidentialOps} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Usage Trends">
          <p className="text-sm text-muted-foreground">Mocked usage trends chart</p>
        </Card>

        <Card title="Recent Jobs">
          <ul className="space-y-2">
            {metrics.recentJobs.map((j) => (
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
