import Card from '../../components/ui/Card'

export default function DocsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Developer Docs</h1>
      <div className="grid gap-4">
        <Card title="Getting started">
          <p className="text-sm">This dashboard is a standalone UI. Integration with `@zkprime/sdk` will be via the `lib/zkprimeClientStub.ts` interface.</p>
        </Card>
        <Card title="API Keys & Projects">
          <p className="text-sm">Manage projects and API keys in the Projects view. Keys are mocked in this version.</p>
        </Card>
      </div>
    </main>
  )
}
