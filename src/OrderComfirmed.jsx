import React from 'react'

function OrderComfirmed() {
  return (
<div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* <!-- Header --> */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-border-light dark:border-neutral-border-dark px-4 sm:px-10 py-4 bg-white dark:bg-blue">
<div className="flex items-center gap-4 text-blue dark:text-white">
<svg className="size-6" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
</svg>
<h2 className="text-lg font-bold tracking-[-0.015em]">Aperture</h2>
</div>
<div className="hidden sm:flex items-center gap-9 text-sm font-medium">
<a className="text-text-light dark:text-white hover:opacity-80" href="#">Shop</a>
<a className="text-text-light dark:text-white hover:opacity-80" href="#">Account</a>
</div>
</header>
<main className="flex flex-1 justify-center py-5 sm:py-10 px-4">
<div className="layout-content-container flex flex-col w-full max-w-3xl flex-1 gap-8">
{/* <!-- Confirmation Banner --> */}
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-accent/20 dark:bg-accent/30 p-6 rounded-xl border border-accent">
<div className="flex items-center justify-center size-16 rounded-full bg-accent text-white shrink-0">
<span className="material-symbols-outlined text-4xl">check</span>
</div>
<div className="text-center sm:text-left">
<h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-light dark:text-white">Thank you for your order, Alex!</h1>
<p className="text-base text-text-muted-light dark:text-text-muted-dark mt-1">A confirmation email has been sent to your inbox.</p>
</div>
</div>
{/* <!-- Order Number Card --> */}
<div className="bg-white dark:bg-neutral-dark rounded-xl border border-neutral-border-light dark:border-neutral-border-dark p-6 text-center">
<p className="text-text-muted-light dark:text-text-muted-dark text-sm">Your Order Number is</p>
<p className="text-2xl font-bold text-blue dark:text-accent tracking-wider mt-1">#11232008</p>
</div>
{/* <!-- Delivery Details --> */}
<div className="bg-white dark:bg-neutral-dark rounded-xl border border-neutral-border-light dark:border-neutral-border-dark">
<div className="p-6 border-b border-neutral-border-light dark:border-neutral-border-dark">
<h3 className="text-lg font-bold tracking-[-0.015em]">Delivery Details</h3>
</div>
<div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-accent text-2xl mt-0.5">calendar_month</span>
<div>
<p className="text-base font-medium leading-normal">Estimated Arrival</p>
<p className="text-accent text-sm font-bold leading-normal">October 24-26, 2024</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-2xl mt-0.5">home</span>
<div>
<p className="text-base font-medium leading-normal">Shipping To</p>
<p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-normal">123 Main Street<br/>Anytown, USA 12345</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-2xl mt-0.5">local_shipping</span>
<div>
<p className="text-base font-medium leading-normal">Shipping Method</p>
<p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-normal">Standard Ground</p>
</div>
</div>
</div>
</div>
{/* <!-- Order Summary --> */}
<div className="bg-white dark:bg-neutral-dark rounded-xl border border-neutral-border-light dark:border-neutral-border-dark">
<div className="p-6 border-b border-neutral-border-light dark:border-neutral-border-dark">
<h3 className="text-lg font-bold tracking-[-0.015em]">Order Summary</h3>
</div>
<div className="p-6 space-y-4">
{/* <!-- Product Item --> */}
<div className="flex items-center gap-4">
<img className="size-16 rounded-lg object-cover bg-neutral-light dark:bg-neutral-dark" data-alt="Close up of a modern digital camera lens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDku8kPZkQlPkjjRRjtwmLMczMh0f60uxrbGPunnd5WjmYN5pDDfIBNtkIx2AwEg1PDXLQ2_qryM4FN5OmpxdtT_21uWDaVokKDADqhh6eBU9DhdW2V-2xLZ7pyUBspdxCE9dIVLlnjhEPZjXA0KDmkLk0HTvHLA3-R9JllaViWMw-o1CJQJ01p8nq_R-kR2m8ssD7bVrHR6IOxp6pcwv0LK52f4pJ5ybyMVOzF3vX1htk23UIwAKKmKjWAKTa6fcRxnNeu3DSAELM2"/>
<div className="flex-grow">
<p className="font-medium">ProLens X-50</p>
<p className="text-sm text-text-muted-light dark:text-text-muted-dark">Qty: 1</p>
</div>
<p className="font-medium">$1,299.00</p>
</div>
{/* <!-- Product Item --> */}
<div className="flex items-center gap-4">
<img className="size-16 rounded-lg object-cover bg-neutral-light dark:bg-neutral-dark" data-alt="A durable camera backpack on a wooden surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArgG7JpDnEw_K32LW11SxImnnlTrXKq83UB8WqXR7LaMOfHYyDwkCY5gVQzHcusnQKxKA-tSa3gVq6ZmIgMWTURZsaNtJcOvzW5Z-NMLGq96Zf5tayOkOvCVsYwDnW0DhoegaD8ubfYV59zROvwUJPiPIgX2LdiNtkX92jbB4YKlx0ECQqgkR4_xB0kn_Ns5kHX_gZNLYOAORcLoFQzfYwkEsSR3-maCCQsiIJ8CKVpMRTnIg7p4FkYryFe8WBvwhhI2vCh7YnsY_x"/>
<div className="flex-grow">
<p className="font-medium">Aperture Rover Backpack</p>
<p className="text-sm text-text-muted-light dark:text-text-muted-dark">Qty: 1</p>
</div>
<p className="font-medium">$149.99</p>
</div>
</div>
<div className="p-6 border-t border-neutral-border-light dark:border-neutral-border-dark space-y-2 text-sm">
<div className="flex justify-between">
<p className="text-text-muted-light dark:text-text-muted-dark">Subtotal</p>
<p>$1,448.99</p>
</div>
<div className="flex justify-between">
<p className="text-text-muted-light dark:text-text-muted-dark">Shipping</p>
<p>$15.00</p>
</div>
<div className="flex justify-between">
<p className="text-text-muted-light dark:text-text-muted-dark">Taxes</p>
<p>$118.04</p>
</div>
<div className="flex justify-between font-bold text-base pt-2 border-t border-neutral-border-light dark:border-neutral-border-dark mt-2">
<p>Total</p>
<p>$1,582.03</p>
</div>
</div>
</div>
{/* <!-- Call to Action --> */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
<button className="flex w-full sm:w-auto max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-blue text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] px-6 hover:opacity-90 transition-opacity">Continue Shopping</button>
<button className="flex w-full sm:w-auto max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-neutral-light dark:bg-neutral-dark text-text-light dark:text-text-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] px-6 hover:bg-neutral-border-light dark:hover:bg-neutral-border-dark/50 transition-colors">Create an Account</button>
</div>
</div>
</main>
{/* <!-- Footer --> */}
<footer className="w-full text-center p-8 border-t border-neutral-border-light dark:border-neutral-border-dark mt-10">
<p className="text-sm text-text-muted-light dark:text-text-muted-dark">© 2024 Aperture. All rights reserved.</p>
<div className="flex justify-center gap-6 mt-4 text-text-muted-light dark:text-text-muted-dark">
<a className="hover:text-blue dark:hover:text-white" href="#">Customer Service</a>
<a className="hover:text-blue dark:hover:text-white" href="#">Return Policy</a>
<a className="hover:text-blue dark:hover:text-white" href="#">Print Receipt</a>
</div>
</footer>
</div>
</div>
</div>
  )
}

export default OrderComfirmed;