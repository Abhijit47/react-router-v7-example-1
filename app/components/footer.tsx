import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer>
      <div className={'bg-background text-card-background px-4 py-4 space-y-2'}>
        <p className={'text-center text-gray-700 text-sm'}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div
          className={'flex w-full items-center justify-center flex-wrap gap-2'}>
          <Link
            to='/privacy-policy'
            className={'text-center text-gray-600 text-xs'}>
            Privacy Policy
          </Link>
          <Link
            to='/terms-of-service'
            className={'text-center text-gray-600 text-xs'}>
            Terms of Service
          </Link>

          <Link
            to='/contact-us'
            className={'text-center text-gray-600 text-xs'}>
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
