import '../styles/globals.css'
import Shell from '../components/layout/Shell'

export const metadata = {
  title: 'ZKPRIME.DEV Dashboard'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
