import Hero from './components/Hero';
import ClientFundraise from './components/ClientFundraise';
import Dashboard from './components/Dashboard';

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientFundraise />
      <Dashboard />
    </main>
  );
}
