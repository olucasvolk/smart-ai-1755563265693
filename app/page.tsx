import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='container mx-auto py-4'>
        <h1 className='text-3xl font-bold'>Welcome to My Personal Blog</h1>
        <p className='mt-4'>This is a minimalistic personal blog built with Next.js and Tailwind CSS.</p>
      </div>
    </Layout>
  );
}