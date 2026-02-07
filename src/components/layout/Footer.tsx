"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white">
            {/* CTA Section with background image */}
            <div className="relative bg-gray-600 py-24 bg-cover bg-center" style={{ backgroundImage: "url('/footer-bg.jpg')" }}>
                <div className="absolute inset-0 bg-gray-600/80"></div>
                <div className="relative z-10 text-center px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8 max-w-4xl mx-auto leading-tight">
                        Eager to learn about how behavioral science can help your organization?
                    </h2>
                    <button className="px-8 py-3.5 bg-teal-400 text-white font-bold text-xs uppercase tracking-widest rounded-md hover:bg-teal-500 transition-colors">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Newsletter Section - Overlapping */}
            <div className="relative -mt-16 z-20">
                <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 max-w-7xl">
                    <div className="bg-white shadow-xl rounded-lg px-8 md:px-12 py-10 md:py-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug md:max-w-md">
                                Get new behavioral science insights in your inbox every month.
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[400px]">
                                <input
                                    type="email"
                                    placeholder="Your Email*"
                                    className="flex-1 px-5 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-400 transition-colors text-sm bg-transparent"
                                />
                                <button className="text-teal-400 font-bold text-xs uppercase tracking-widest hover:text-teal-500 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                    Subscribe
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 pt-20 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Company Info */}
                    <div>
                        <div className="mb-10">
                            <svg className="w-12 h-12 text-teal-400" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4L40 16L32 28L24 24L16 28L8 16L24 4Z" fill="currentColor" />
                                <path d="M8 20L16 28L24 32L32 28L40 20V32L24 44L8 32V20Z" fill="currentColor" opacity="0.6" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">We're hiring!</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Join our team to create meaningful impact by applying behavioral science
                        </p>
                        <Link
                            href="/careers"
                            className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-widest hover:text-teal-500 transition-colors group"
                        >
                            Visit Careers
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Collaborate With Us */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-6">Collaborate With Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/insights" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Insights
                                </Link>
                            </li>
                            <li>
                                <Link href="/interventions" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Interventions
                                </Link>
                            </li>
                            <li>
                                <Link href="/biases" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Biases
                                </Link>
                            </li>
                            <li>
                                <Link href="/mission" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Our Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-6 invisible">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/consulting" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Behavioral Science Consulting
                                </Link>
                            </li>
                            <li>
                                <Link href="/training" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Behavioral Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/newsletters" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Behavioral Science Newsletters
                                </Link>
                            </li>
                            <li>
                                <Link href="/collections" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Collections
                                </Link>
                            </li>
                            <li>
                                <Link href="/big-problems" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Big Problems
                                </Link>
                            </li>
                            <li>
                                <Link href="/science" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    The Science
                                </Link>
                            </li>
                            <li>
                                <Link href="/quizzes" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                                    Quizzes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-6 invisible">Social</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 hover:text-teal-400 transition-colors"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 hover:text-teal-400 transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 hover:text-teal-400 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 hover:text-teal-400 transition-colors"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 py-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400">
                    <p>©2025 The Decision Lab. All Rights Reserved</p>
                    <div className="flex gap-8">
                        <Link href="/terms" className="hover:text-teal-400 transition-colors">
                            Terms and conditions
                        </Link>
                        <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll to top button (visible in image) */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-gray-300 hover:bg-gray-400 text-gray-600 p-3 rounded-full shadow-lg transition-colors z-30"
                aria-label="Scroll to top"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
}