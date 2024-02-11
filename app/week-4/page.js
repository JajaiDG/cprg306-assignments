import NewItem from './new-item';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
        <div className="text-center mt-4">
        <Link href="/">
          <div className="text-blue-500 hover:text-blue-700 transition duration-300">
            Back to Assignments
            </div>
        </Link>
      </div>
      <NewItem />
    </div>
  );
}