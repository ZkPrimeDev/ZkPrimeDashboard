import type { Project, OverviewMetrics } from './types'

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'Alpha Project',
    description: 'Integration sandbox',
    stateEngines: [
      { id: 'se-1', name: 'State Engine A', usage: 42 },
      { id: 'se-2', name: 'State Engine B', usage: 11 }
    ],
    jobs: [
      { id: 'job-1', name: 'Compute Job 1', status: 'running' },
      { id: 'job-2', name: 'Compute Job 2', status: 'completed' }
    ]
  },
  {
    id: 'proj-2',
    name: 'Beta Project',
    description: 'Private proofs testing',
    stateEngines: [
      { id: 'se-3', name: 'State Engine C', usage: 5 }
    ],
    jobs: [
      { id: 'job-3', name: 'Compute Job 3', status: 'pending' }
    ]
  }
]

export const overviewMetrics: OverviewMetrics = {
  activeProjects: projects.length,
  runningJobs: projects.flatMap((p) => p.jobs).filter((j) => j.status === 'running').length,
  confidentialOps: 7,
  recentJobs: projects.flatMap((p) => p.jobs).slice(0, 5)
}
