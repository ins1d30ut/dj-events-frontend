import Layout from '@/components/Layout';
export default function EventPage() {
  return (
    <Layout>
      <h1>Event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Click</button>
    </Layout>
  );
}
