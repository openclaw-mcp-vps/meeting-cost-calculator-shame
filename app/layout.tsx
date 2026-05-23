import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MeetingCost — Show the Real Price of Every Meeting",
  description: "Chrome extension that displays real-time meeting costs based on attendee salaries. Stop wasting money on unnecessary meetings."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8cf63f0f-c868-485b-87f5-3eeb8a76506f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
