export default function Page({ params }: { params: any }) {
  return (
    <main>
      <pre className="text-mono">{params.child}</pre>
    </main>
  );
}
