import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        {/* widgests */}
      </main>
    </div>
  );
}
