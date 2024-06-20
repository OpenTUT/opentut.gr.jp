import { SITE_TITLE } from '../consts';

export function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <p>&copy; 2024 {SITE_TITLE}</p>
    </footer>
  );
}
