import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col justify-between pt-28 p-4">
        <section className="flex flex-col gap-y-4"></section>
      </main>
    </>
  );
}
