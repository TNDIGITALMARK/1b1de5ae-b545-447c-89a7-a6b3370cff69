import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Feed } from "@/components/feed"

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 py-6">
          <Feed />
        </main>
      </div>
    </div>
  );
}