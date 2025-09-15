// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'IndiGo AOCS Forum',
  description: 'Forum for IndiGo AOCS candidates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
