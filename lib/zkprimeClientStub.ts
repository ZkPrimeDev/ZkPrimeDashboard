import { projects, overviewMetrics } from './mockData'
import type { Project, OverviewMetrics } from './types'

export async function getProjects(): Promise<Project[]> {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 30))
  return projects
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  await new Promise((r) => setTimeout(r, 20))
  return projects.find((p) => p.id === id)
}

export async function getOverviewMetrics(): Promise<OverviewMetrics> {
  await new Promise((r) => setTimeout(r, 10))
  return overviewMetrics
}

// Placeholder for future SDK client
export function createZkPrimeClient() {
  return {
    getProjects,
    getProjectById,
    getOverviewMetrics
  }
}
