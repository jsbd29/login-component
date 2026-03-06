import { Link } from 'react-router-dom';
import { LayoutDashboard, Settings, LogOut, User } from 'lucide-react';

export default function Navbar() {
 
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-blue-600">Logo</Link>
        </div>
    </nav>
  );
}