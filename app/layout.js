import './globals.css'

export const metadata = {
  title: 'GoranDesign',
  description: 'Premium websites for local businesses in Cork & Munster',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
