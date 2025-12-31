import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Header = () => {
  const [cartTotal, setCartTotal] = useState("");
  const handleShoppingCart = async () => {
    try {
      
      const res = await axios.get("http://localhost:3000/posts/carts", {
        withCredentials: true
      });
      
      setCartTotal(res.data.items.length);
    } catch (err) {
      console.log(err);
    } finally {
    
    }
  };

  useEffect(() => {
    handleShoppingCart();
   
  }, [])
  

  return (
<header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<div className="flex-shrink-0 flex items-center gap-2">
<div className="bg-primary w-6 h-6 rounded flex items-center justify-center text-white font-bold text-xs">A</div>
<span className="font-bold text-lg tracking-tight">Aperture</span>
</div>
<nav className="hidden md:ml-10 md:flex space-x-8">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Shop</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Collections</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-icons-outlined text-text-secondary-light dark:text-text-secondary-dark text-lg">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-1.5 border border-border-light dark:border-border-dark rounded-md leading-5 bg-background-light dark:bg-background-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm text-text-primary-light dark:text-text-primary-dark w-64 transition-colors" placeholder="Search products, brands..." type="text"/>
</div>
<div className="flex items-center gap-3">
<Link className="text-sm font-medium hover:text-primary whitespace-nowrap hidden sm:block" to="/login">Sign In</Link>
<Link className="bg-primary hover:bg-primary-dark text-white px-4 py-1.5 rounded text-sm font-medium transition-colors whitespace-nowrap" to="/register">Create Account</Link>
<div className="relative p-1 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
<Link calssName="no-underline" to="/shoppingcart"><span className="material-icons-outlined">shopping_cart</span></Link>
<span className="absolute top-0 right-0 -mr-1 -mt-1 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full">{cartTotal}</span>
</div>
</div>
</div>
</div>
</div>
</header>
  );
};

export default Header;