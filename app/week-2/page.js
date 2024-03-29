import StudentInfo from './student-info';
import Link from 'next/link';

export default function Page() {
    return (
      <main>
        <div className="text-center mt-4">
        <Link href="/">
          <div className="text-blue-500 hover:text-blue-700 transition duration-300">
            Back to Assignments
            </div>
        </Link>
      </div>
        <h1>Shopping List</h1>
        <StudentInfo></StudentInfo>
      </main>
    );
}
  
