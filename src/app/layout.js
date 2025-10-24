import './globals.css'

export const metadata = {
  title: 'Kids Scripture | Bible Stories for Children - World\'s #1',
  description: 'Interactive Bible stories with animations, games, and AI-powered learning. The most engaging Bible platform for kids ages 3-12.',
  keywords: 'bible stories for kids, children bible, christian kids, bible animations, sunday school online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
