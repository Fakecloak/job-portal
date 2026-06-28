import React from 'react'
import { useActionState } from 'react'

async function registerAction(_, formData) {
    const response = Object.fromEntries(formData);
    const res = await fetch('http://127.0.0.1:8000/register', {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(response)
    });
    
    const data = await res.json();
    return data.message || "Registration Failed"
}

function RegisterPage() {

    const [message, formAction , isPending ] = useActionState(registerAction, "", {withPending: true});

  return (
    <div class="bg-gray-50 text-gray-800">

        <header class="bg-white border-b">
            <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div class="text-2xl font-bold text-blue-700">
                    JobPortal
                </div>

                <nav class="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                    <a href="#" class="hover:text-blue-700">Jobs</a>
                    <a href="#" class="hover:text-blue-700">Companies</a>
                    <a href="#" class="hover:text-blue-700">Services</a>
                    <a href="#" class="hover:text-blue-700">Login</a>
                </nav>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

            <section class="hidden md:block">
                <h1 class="text-3xl font-bold leading-snug">
                    Find your dream job now
                </h1>

                <p class="mt-4 text-gray-600 max-w-md">
                    Register with JobPortal and get matched with the right opportunities.
                    Build your profile and apply to jobs in top companies.
                </p>

                <ul class="mt-6 space-y-3 text-sm text-gray-700">
                    <li>✔ Trusted by thousands of recruiters</li>
                    <li>✔ Personalized job recommendations</li>
                    <li>✔ Easy apply & profile visibility</li>
                </ul>
            </section>

            <section class="bg-white border rounded-lg p-8 max-w-md w-full mx-auto">
                <h2 class="text-xl font-bold text-gray-900">
                    Create your JobPortal profile
                </h2>

                <p class="text-sm text-gray-500 mt-1">
                    Search & apply to jobs from India’s top companies
                </p>

                <form action={formAction} class="mt-6 space-y-4">

                    <div>
                        <label class="text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input placeholder="Enter username"
                            class="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none" />
                    </div>

                    <div>
                        <label class="text-sm font-medium text-gray-700">
                            Email ID
                        </label>
                        <input type="email" placeholder="Enter email"
                            class="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none" />
                    </div>

                    <div>
                        <label class="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input type="password" placeholder="Minimum 6 characters"
                            class="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none" />
                    </div>

                    <button disabled={isPending} type="submit" class="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded transition">
                        {isPending ? 'Registering...' : 'Register Now'}
                    </button>

                    <p className='text-center text-sm text-gray-600'>{message}</p>

                    <p class="text-xs text-gray-500 text-center">
                        By registering, you agree to our
                        <a href="#" class="text-blue-700 hover:underline"> Terms & Conditions</a>
                    </p>

                    <p class="text-sm text-center text-gray-600">
                        Already registered?
                        <a href="#" class="text-blue-700 font-medium hover:underline">
                            Login here
                        </a>
                    </p>

                </form>
            </section>

        </main>

        <footer class="border-t bg-white">
            <div class="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
                © 2026 JobPortal.com | All rights reserved
            </div>
        </footer>

    </div>
  )
}

export default RegisterPage 