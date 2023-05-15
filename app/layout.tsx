import { ReactNode } from "react";
import Container from "@/components/Container";

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <nav className="flex items-center justify-between p-5 bg-gray-800">
          <div></div>
          <div className="flex items-center">
            <img
              className="rounded-full h-8 w-8 mr-2"
              src="https://via.placeholder.com/150"
              alt="avatar"
            />
            <span className="text-white">Username</span>
          </div>
        </nav>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Container>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {children}
            </main>
          </Container>
        </div>
      </body>
    </html>
  );
}
