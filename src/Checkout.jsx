import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [grandTotal, setGrandTotal] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [estimatedTax, setEstimatedTax] = useState(10.00);
  const [country, setCountry] = useState("");
  const [carts, setCarts] = useState([]); 
  const [shippingPrice, setShippingPrice] = useState(5.00); 

  const history = useHistory();

  useEffect(() => {
    console.log(subtotal);
    ShoppingCart();
    setGrandTotal(parseFloat(Number(subtotal) + Number(estimatedTax) + Number(shippingPrice)));
    console.log(grandTotal)
  }, [subtotal, estimatedTax, shippingPrice]);


  const addPrice = async () => {
    try {
      
      const res = await axios.post("http://localhost:3000/posts/addprice",{grandTotal, shippingPrice}, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        withCredentials: true,
      });
      res;
      
      
      console.log(res);
    } catch (err) {
      console.log(err);
    } 
  };

  const handleShippingInfo = async (e) => {
    e.preventDefault();
   try{
    const res = await axios.post("http://localhost:3000/posts/shippinginfo", { firstName, lastName, address, city, postalCode, country }, {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      withCredentials: true
    });
    addPrice();
     if(res.data.message ===  "Shipping info saved"){
        // history.push("/payment")
     }
    
    console.log(res);
  }catch(err){
    console.log(err);
  }
  }

  const handleShippingChange = (e) =>{
    setShippingPrice(Number(e.target.value));
  } 
 
 

  const ShoppingCart = async () => {
    try {
      
      const res = await axios.get("http://localhost:3000/posts/carts", {
        withCredentials: true
      });
      
      setCarts(res.data.items);
      setSubtotal(res.data.subtotal);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    } 
  };

 


  
  return (
<div class="bg-gray-100 dark:bg-background-dark font-sans antialiased text-gray-900 dark:text-text-main-dark min-h-screen flex flex-col">
<main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
<div class="text-center mb-12">
<h1 class="text-4xl font-bold text-gray-900 dark:text-text-main-dark mb-10 tracking-tight">Checkout</h1>
<div class="flex justify-center items-center space-x-8 sm:space-x-12 text-sm sm:text-base">
<div class="flex items-center gap-2 text-accent-green font-semibold text-emerald-600">
<span class="material-symbols-outlined text-2xl fill-1">local_shipping</span>
<span>Shipping</span>
</div>
<div class="w-12 sm:w-20 h-0.5 bg-gray-300 dark:bg-border-dark"></div>
<div class="flex items-center gap-2 text-accent-green font-semibold text-gray-500">
<span class="material-symbols-outlined text-2xl">payment</span>
<span>Payment</span>
</div>
<div class="w-12 sm:w-20 h-0.5 bg-gray-300 dark:bg-border-dark"></div>
<div class="flex items-center gap-2 text-accent-green font-semibold text-gray-500">
<span class="material-symbols-outlined text-2xl">check_circle</span>
<span>Review</span>
</div>
</div>
</div>
<div class="lg:grid lg:grid-cols-12 lg:gap-x-10 items-start">
<form  class="lg:col-span-7 space-y-8">
<div class="bg-white dark:bg-surface-dark shadow-md rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-border-dark">
<h2 class="text-xl font-bold text-gray-900 dark:text-text-main-dark mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">person</span>
  Shipping Information
</h2>
<div class="space-y-6">
<div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
<div>
<label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" for="first-name">First name</label>
<input class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 shadow-input text-base placeholder-gray-500 transition-all duration-200 ease-in-out" onChange={(e) => setFirstName(e.target.value)} id="first-name" placeholder="John" type="text"/>
</div>
<div>
<label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" for="last-name">Last name</label>
<input class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 shadow-input text-base placeholder-gray-500 transition-all duration-200 ease-in-out" onChange={(e) => setLastName(e.target.value)} id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" for="address">Address</label>
<input class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 shadow-input text-base placeholder-gray-500 transition-all duration-200 ease-in-out" onChange={(e) => setAddress(e.target.value)} id="address" placeholder="123 Main Street" type="text"/>
</div>
<div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
<div>
<label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" for="city">City</label>
<input class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 shadow-input text-base placeholder-gray-500 transition-all duration-200 ease-in-out" onChange={(e) => setCity(e.target.value)} id="city" placeholder="Anytown" type="text"/>
</div>
<div>
<label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" for="postal-code">Postal Code</label>
<input class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 shadow-input text-base placeholder-gray-500 transition-all duration-200 ease-in-out" onChange={(e) => setPostalCode(e.target.value)} id="postal-code" placeholder="12345" type="text"/>
</div>
</div>
<div>
<label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" for="country">Country</label>

<select
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 shadow-input text-base placeholder-gray-500 transition-all duration-200 ease-in-out cursor-pointer"
>
  <option value="" disabled>Choose a country</option>
  <option value="United States">United States</option>
  <option value="Canada">Canada</option>
  <option value="Mexico">Mexico</option>
</select>
</div>
<div class="flex items-center mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
<input class="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer" id="billing-match" type="checkbox"/>
<label class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none" for="billing-match">use old shipping address</label>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark shadow-md rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-border-dark">
<h2 class="text-xl font-bold text-gray-900 dark:text-text-main-dark mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">local_shipping</span>
  Shipping Method
</h2>
<div class="space-y-4">
<label class="relative flex cursor-pointer rounded-lg border-2 border-primary bg-blue-50/50 p-5 shadow-sm transition-all hover:bg-blue-50 dark:bg-blue-900/20 dark:hover:bg-blue-900/30">
<input  class="mt-1 h-5 w-5 border-gray-300 text-primary focus:ring-primary" onChange={handleShippingChange} checked={shippingPrice === 5} name="Shipping" type="radio" value="5" />
<span class="ml-4 flex flex-1 flex-col">
<span class="block text-base font-bold text-gray-900 dark:text-white">Standard Shipping</span>
<span class="block text-sm text-gray-600 dark:text-gray-400 mt-1">4-6 business days</span>
</span>
<span class="mt-1 text-base font-bold text-gray-900 dark:text-white">$5</span>
</label>
<label class="relative flex cursor-pointer rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm transition-all hover:border-gray-400 dark:hover:border-gray-500">
<input class="mt-1 h-5 w-5 border-gray-300 text-primary focus:ring-primary" onChange={handleShippingChange} checked={shippingPrice === 15} name="Shipping" type="radio"  value="15" />
<span class="ml-4 flex flex-1 flex-col">
<span class="block text-base font-bold text-gray-900 dark:text-white">Express Shipping</span>
<span class="block text-sm text-gray-600 dark:text-gray-400 mt-1">1-2 business days</span>
</span>
<span class="mt-1 text-base font-bold text-gray-900 dark:text-white">$15</span>
</label>
</div>
</div>
<div class="flex items-center justify-between pt-6">
<a class="flex items-center text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors group" href="#">
<span class="material-symbols-outlined text-xl mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Return to cart
                </a>
<button class="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-bold text-base shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 transform active:scale-95" onClick={handleShippingInfo}>
                    Continue to Payment
                </button>
</div>
</form>
<aside class="lg:col-span-5 mt-10 lg:mt-0">
<div class="bg-white dark:bg-surface-dark shadow-lg rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-border-dark sticky top-28">
<h2 class="text-xl font-bold text-gray-900 dark:text-text-main-dark mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">shopping_bag</span>
  Order Summary
</h2>
<ul class="divide-y divide-gray-200 dark:divide-gray-700 mb-8" >
{carts.map(items => (
<li class="flex py-5 first:pt-0" key={items.id}>
<div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50">
<img alt="Red Nike running shoe" class="h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-FfifpijjONtQE0dWYFMchQOEJLzBhjMHRupMsP8iCt7eooxyUg_AGqvgsUqTv_REsvDc9sWOWj67f1adOGwAjmREXef2g2gjGZev6GMSo7BRmq1XvOYZTVwHkl0HMe2aVbG0qjVA5coyQfaOC9OT3b9KJ1QAtR1of_z6evZeCNfv3TvxFh4Pghf1y6NZpMvfruE8nv0hxwJMtNBptPv59IhjzmoQaIpa38-bXwg3Mr-WS0xByIw-U1ZyHJpWltHFHh7WS8X5R_U"/>
</div>
<div class="ml-5 flex flex-1 flex-col justify-center">
<div class="flex justify-between text-base font-semibold text-gray-900 dark:text-white">
<h3>{items.ProductName}</h3>
<p>${items.Price}</p>
</div>
<p class="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Quantity: {items.quantity}</p>
</div>
</li>
))}
</ul>
<div class="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
<form class="flex space-x-3">
<div class="relative flex-grow">
<span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
<span class="material-symbols-outlined text-lg">sell</span>
</span>
<input class="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-2 focus:ring-primary text-sm pl-10 pr-3 py-2.5" placeholder="Discount code" type="text"/>
</div>
<button class="rounded-lg bg-gray-900 dark:bg-blue-600 border border-transparent px-5 py-2.5 text-sm font-bold text-white hover:bg-gray-800 dark:hover:bg-blue-700 shadow-md transition-all active:scale-95" type="submit">Apply</button>
</form>
</div>
<div class="space-y-4 pt-6 border-t-2 border-gray-100 dark:border-gray-700">
<div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
<p class="font-medium">Subtotal</p>
<p class="font-bold text-gray-900 dark:text-white">${subtotal}</p>
</div>
<div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
<p class="font-medium">Shipping</p>
<p class="font-bold text-gray-900 dark:text-white">${shippingPrice}</p>
</div>
<div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
<p class="font-medium">Taxes</p>
<p class="font-bold text-gray-900 dark:text-white">${estimatedTax}</p>
</div>
<div class="flex items-center justify-between border-t-2 border-gray-100 dark:border-gray-700 pt-6 mt-6">
<p class="text-lg font-bold text-gray-900 dark:text-white">Total</p>
<div class="text-right">
<p class="text-2xl font-bold text-primary">{grandTotal}</p>
<p class="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">USD</p>
</div>
</div>
</div>
</div>

</aside>
</div>
</main>
<footer class="bg-gray-50 dark:bg-background-dark py-10 mt-auto border-t border-gray-200 dark:border-border-dark">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-text-sub-dark text-sm font-medium">
<p>© 2023 Aperture. All Rights Reserved.</p>
</div>
</footer>

</div>
  )
}

export default Checkout;