import React, {useState, useEffect } from 'react';
import axios from "axios";


function Payment() {
  const [shippingInfo, setShippingInfo] = useState([]);
  const [shippingPrice, setShippingPrice] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [carts, setCarts] = useState([]);
  const [subtotal, setSubtotal] = useState([]);



  useEffect(() => {

   ShippingInfo();
   ShoppingCart();
   ShippingPrice();
    
  }, [])
  
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

  const ShippingPrice = async () => {
    try {
      
      const res = await axios.get("http://localhost:3000/posts/shippingprice", {
        withCredentials: true
      });
      console.log(res);
      setShippingPrice(res.data.shippingPrice);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    } 
  };

  const ShippingInfo = async () => {
  
   try{
    const res = await axios.get("http://localhost:3000/posts/getshippinginfo",{
      withCredentials: true
    });
    setShippingInfo(res.data[0])
     
    // history.push("/orderconfirmed");
    
    console.log(res);
  }catch(err){
    console.log(err);
  }
  }


  const addPrice = async () => {
    try {
      
      const res = await axios.post("http://localhost:3000/posts/addpayment", {cardNumber, expiration, cvc, cardholderName}, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        withCredentials: true,
      });
      res;
      
      
      console.log(res)
    } catch (err) {
      console.log(err);
    } 
  };
 
  return (
    <div class="bg-background-light dark:bg-background-dark text-text-primary dark:text-gray-100 antialiased selection:bg-primary selection:text-white">
<header class="bg-white dark:bg-card-dark border-b border-gray-300 dark:border-gray-700 sticky top-0 z-50">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between h-20 items-center">
<div class="flex items-center gap-10">
<a class="flex items-center gap-2 group" href="#">
<div class="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors shadow-sm">
<span class="material-symbols-outlined text-white text-3xl">api</span>
</div>
<span class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">ShoeStore</span>
</a>
<nav class="hidden md:flex space-x-8 text-sm font-semibold">
<a class="text-gray-700 dark:text-gray-300 hover:text-primary transition" href="#">Men</a>
<a class="text-gray-700 dark:text-gray-300 hover:text-primary transition" href="#">Women</a>
<a class="text-gray-700 dark:text-gray-300 hover:text-primary transition" href="#">Kids</a>
<a class="text-secondary hover:text-orange-800 transition font-bold" href="#">Sale</a>
</nav>
</div>
<div class="flex items-center gap-6">
<div class="hidden lg:flex relative group">
<span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-gray-500 text-[20px]">search</span>
</span>
<input class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-2.5 pl-10 pr-4 text-sm border border-gray-300 focus:bg-white focus:border-primary focus:ring-0 w-64 transition-all placeholder-gray-500 shadow-sm" placeholder="Search products..." type="text"/>
</div>
<div class="flex items-center gap-4 border-l border-gray-300 dark:border-gray-700 pl-6">
<button class="text-gray-600 dark:text-gray-400 hover:text-primary transition">
<span class="material-symbols-outlined">person</span>
</button>
<button class="relative text-gray-600 dark:text-gray-400 hover:text-primary transition group">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">shopping_bag</span>
<span class="absolute -top-1.5 -right-1.5 bg-secondary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white dark:ring-card-dark shadow-sm">2</span>
</button>
</div>
</div>
</div>
</div>
</header>
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<nav class="flex text-sm text-gray-600 dark:text-gray-400 mb-8 items-center font-medium">
<a class="hover:text-primary transition-colors underline-offset-2 hover:underline" href="#">Home</a>
<span class="material-symbols-outlined text-sm mx-3 text-gray-400">chevron_right</span>
<a class="hover:text-primary transition-colors underline-offset-2 hover:underline" href="#">Cart</a>
<span class="material-symbols-outlined text-sm mx-3 text-gray-400">chevron_right</span>
<span class="text-gray-900 dark:text-white font-bold">Checkout</span>
</nav>
<div class="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
<div class="lg:col-span-7 space-y-8">
<div class="flex justify-between items-end mb-2">
<h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Checkout</h1>
<div class="flex items-center text-xs font-semibold text-green-700 bg-green-100 border border-green-200 px-3 py-1.5 rounded-full dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
<span class="material-symbols-outlined text-sm mr-1.5">lock</span>
                    Secure SSL Encryption
                </div>
</div>
<section class="bg-card-light dark:bg-card-dark rounded-xl border border-gray-300 dark:border-gray-700 shadow-card overflow-hidden">
<div class="p-6">
<div class="flex justify-between items-center mb-6">
<h2 class="text-lg font-bold text-gray-900 dark:text-white">Shipping Information</h2>
<button class="text-sm text-primary font-semibold hover:text-primary-dark transition underline">Edit</button>
</div>
<div class="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-gray-700 flex gap-4 items-start shadow-inner">
<div class="bg-white dark:bg-gray-700 p-2.5 rounded-full shadow-sm text-gray-500 border border-gray-200 dark:border-gray-600">
<span class="material-symbols-outlined">location_on</span>
</div>
<div class="text-sm capitalize text-gray-700 dark:text-gray-300">
<p class="font-bold text-gray-900 dark:text-white text-base mb-1">{shippingInfo.firstName}</p>
<p class="leading-relaxed text-gray-600 dark:text-gray-400">{shippingInfo.address}<br/>{shippingInfo.city}, {shippingInfo.postalCode}</p>
</div>
</div>
</div>
</section>
<section class="bg-card-light dark:bg-card-dark rounded-xl border border-gray-300 dark:border-gray-700 shadow-card overflow-hidden">
<div class="p-6">
<h2 class="text-lg font-bold text-gray-900 dark:text-white mb-6">Payment Method</h2>
<form class="space-y-6">
<div>
<label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2" for="card-number">Card Number</label>
<div class="relative">
<input class="focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)] focus:border-blue-600 outline-none  transition-all duration-200 ease-[ease] block w-full border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-0 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3.5 px-4 placeholder-gray-500 shadow-sm" onChange={(e) => setCardNumber(e.target.name)} name="card-number" placeholder="0000 0000 0000 0000" type="text"/>
<div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none gap-2">
<img alt="Mastercard" class="h-6 opacity-60 grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoLXZ36HZeVE0DFR4KnQk0FAWTgqhcZo8l6AFfzfgVKRcxUwbvuhu0jt2oJSHsSGjLFOgS29NALQ2HuTXouvvqA4vsEf6Y08DyiLG2PkfhVWLDmT0opUTjUw_w9HJp-KtqI5cg5LM8HZSDuYW_d0DGfekO5ia5l2EmmXn8iykVMK5reIAHrbwX2Yulb3opQJawRvacZ2adXhlWfs09-t_OrPq3lW_cbdvnxTXUjStrKitWx1X2llqa83DPVfHzM0ALpPaC_VyacJ4"/>
<img alt="Visa" class="h-4 opacity-60 grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxNk52NxmhmAcB-nWHcK_tkcT1TZl-LrMZ6v_hSXWTkR8maHuzlNiN5IrccSIo-OIk8ZqqkhbB2ZjY5ulUvNWaVbbPNSHRbnuhip5apMKnz_G7OAR2W_CDmssx-GFlYFo_rOy9YjD4_2YDG8vE1p2sEUEw0oomfDAgsSGvgivD02kngn1WnHP428fWYNwY7PmThddV6vavw9sCFlLwzj_QBFCgsmqfIC1uQP3MhiWsDKd4LSMUvLbQdKvGwGvScvqWb_112s1GytU"/>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-6">
<div>
<label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2" for="expiration-date">Expiration</label>
<input class="focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)] focus:border-blue-600 outline-none  transition-all duration-200 ease-[ease] block w-full border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-0 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3.5 px-4 placeholder-gray-500 shadow-sm" onChange={(e) => setExpiration(e.target.name)} name="expiration-date" placeholder="MM / YY" type="text"/>
</div>
<div>
<label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2" for="cvc">CVC</label>
<div class="relative">
<input class="focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)] focus:border-blue-600 outline-none  transition-all duration-200 ease-[ease] block w-full border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-0 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3.5 px-4 placeholder-gray-500 shadow-sm" onChange={(e) => setCvc(e.target.name)} name="cvc" placeholder="123" type="text"/>
<div class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-help transition-colors">
<span class="material-symbols-outlined text-[20px]">help</span>
</div>
</div>
</div>
</div>
<div>
<label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2" for="card-name">Cardholder Name</label>
<input class="focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)] focus:border-blue-600 outline-none  transition-all duration-200 ease-[ease] block w-full border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-0 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3.5 px-4 placeholder-gray-500 shadow-sm" onChange={(e) => setCardholderName(e.target.name)} name="card-name" placeholder="Full Name on Card" type="text"/>
</div>
<div class="flex items-center pt-2">
<input class="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 cursor-pointer shadow-sm" id="save-card" name="save-card" type="checkbox"/>
<label class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none" for="save-card">
                                Save card for future purchases
                            </label>
</div>
</form>
</div>
</section>
</div>
<div class="mt-10 lg:mt-0 lg:col-span-5">
<div class="bg-card-light dark:bg-card-dark rounded-xl shadow-card border border-gray-300 dark:border-gray-700 overflow-hidden sticky top-24">
<div class="p-6 border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/30">
<h2 class="text-lg font-bold text-gray-900 dark:text-white">Order Summary</h2>
</div>
<div class="p-6">
<div class="space-y-6 mb-8">
<div class="flex items-start space-x-4 group">
<div class="flex-shrink-0 w-20 h-24 bg-white dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 relative shadow-sm">
<img alt="Urban Explorer Boot" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXwU7e4S87vYc6CucDpJGIU9WGqVAvRQJeCcKFWoBDtKRax0wIcIAVkYjTimTC2S53ZgXjRp5aAq_PcM1W2EUNKF6A0oBHgJb1v9WB5BwPW4XnXsYVcF4TENDMagMFpKPC762Ipa07F37PPAeOBE2zwAzeYiRT1a53FAhY_aZTm6H_oJmPdN6isXZsMteKBjDnpi8cPw13CL5XZsi5_cLqsDeeyanXRZlB8kW2Tl3V2WinvSdpfjJbQj1E7dQWIlelc83b2sKw1qM"/>
</div>
<div class="flex-1 min-w-0 py-1">
<div class="flex justify-between items-start">
<h3 class="text-sm font-bold text-gray-900 dark:text-white truncate pr-2">Urban Explorer Boot</h3>
<p class="text-sm font-bold text-gray-900 dark:text-white">$180.00</p>
</div>
<p class="text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">Brown / Size 10</p>
<div class="mt-2 flex items-center text-xs font-semibold text-gray-700 bg-gray-100 dark:bg-gray-800 w-fit px-2.5 py-0.5 rounded border border-gray-200 dark:border-gray-600">
                                    Qty: 1
                                </div>
</div>
</div>
<div class="flex items-start space-x-4 group">
<div class="flex-shrink-0 w-20 h-24 bg-white dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 relative shadow-sm">
<img alt="Classic Runner Sneaker" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXSX7Zn1uWT5-tlOjPoPsqPAekq_GvvtYiSJJXWnpfvrgCZnkAYRPGz208Ia9Ydf8zIN273FnF0iHRCtbQDmkuny11IAAhZju5kJhnWqnUz0DfPk48kEIyvXexHuN7R68OyAg7VuBzRQqg3vnKEcCDX5cZfZWla6-JYmkj9srpGQY7hNk-tlVJLYABHitZSKyQmH40otqFggicxTnmduAAwEu8wyiYjOCBhkPhlfMIKahRCRLX8MKI77SmjgZPKJKKdKPXDQuHbF0"/>
</div>
<div class="flex-1 min-w-0 py-1">
<div class="flex justify-between items-start">
<h3 class="text-sm font-bold text-gray-900 dark:text-white truncate pr-2">Classic Runner</h3>
<p class="text-sm font-bold text-gray-900 dark:text-white">$120.00</p>
</div>
<p class="text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">White / Size 9.5</p>
<div class="mt-2 flex items-center text-xs font-semibold text-gray-700 bg-gray-100 dark:bg-gray-800 w-fit px-2.5 py-0.5 rounded border border-gray-200 dark:border-gray-600">
                                    Qty: 1
                                </div>
</div>
</div>
</div>
<div class="mb-6">
<div class="flex space-x-2">
<input class="flex-1 block w-full border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-2.5 px-3 placeholder-gray-500 shadow-sm" placeholder="Discount code" type="text"/>
<button class="bg-gray-900 dark:bg-gray-700 hover:bg-black dark:hover:bg-gray-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-md">Apply</button>
</div>
</div>
<div class="border-t border-gray-300 dark:border-gray-700 my-6"></div>
<div class="space-y-3 mb-6">
<div class="flex justify-between text-sm">
<span class="text-gray-600 dark:text-gray-400 font-medium">Subtotal</span>
<span class="font-bold text-gray-900 dark:text-white">$300.00</span>
</div>
<div class="flex justify-between text-sm">
<span class="text-gray-600 dark:text-gray-400 font-medium">Shipping</span>
<span class="font-bold text-gray-900 dark:text-white">$15.00</span>
</div>
<div class="flex justify-between text-sm">
<span class="text-gray-600 dark:text-gray-400 font-medium">Tax</span>
<span class="font-bold text-gray-900 dark:text-white">$24.00</span>
</div>
</div>
<div class="border-t border-gray-300 dark:border-gray-700 pt-6 mb-6">
<div class="flex justify-between items-center">
<span class="text-lg font-bold text-gray-900 dark:text-white">Total</span>
<span class="text-3xl font-extrabold text-gray-900 dark:text-white">$339.00</span>
</div>
</div>
<button class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-between group text-lg">
<span>Complete Purchase</span>
<span class="bg-white/20 rounded-md p-1.5 group-hover:bg-white/30 transition-colors">
<span class="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</span>
</button>
</div>
</div>
</div>
</div>
</main>
<footer class="bg-white dark:bg-card-dark border-t border-gray-300 dark:border-gray-700 mt-auto">
<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
<p class="text-center text-sm font-medium text-gray-500 dark:text-gray-500">© 2024 ShoeStore. All rights reserved.</p>
</div>
</footer>
 

</div>
  )
}

export default Payment