export type JobStatus = 'pending' | 'running' | 'completed' | 'failed'

export interface Job {
  id: string
  name: string
  status: JobStatus
}

export interface StateEngine {
  id: string
  name: string
  usage: number // percent
}

export interface Project {
  id: string
  name: string
  description?: string
  stateEngines: StateEngine[]
  jobs: Job[]
}

export interface OverviewMetrics {
  activeProjects: number
  runningJobs: number
  confidentialOps: number
  recentJobs: Job[]
}
