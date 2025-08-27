"use client";
import React from "react";
import { ShieldCheck, Globe2, Brain, Cloud } from "lucide-react";
import { Poppins } from "next/font/google";

// Import custom font (Poppins for heading + tagline)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"], // semi-bold & bold
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1
          className={`${poppins.className} text-4xl font-extrabold text-blue-700 drop-shadow-sm`}
        >
          FinCore
        </h1>
        <p
          className={`${poppins.className} text-lg text-gray-600 mt-2 tracking-wide`}
        >
          Digital Core Banking System on Cloud
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        {/* Project Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            <span className="font-semibold">FinXBank</span> is a highly secure,
            AI-integrated, cloud-powered net banking system designed to offer
            users complete digital control over their banking activities. The
            platform provides 24/7 access to financial services, including fund
            transfers, bill payments, account summaries, and loan applications.
            Built on a robust MERN stack infrastructure, integrated with MongoDB
            Atlas and AWS Cloud Services, the system ensures fast, scalable, and
            secure banking operations with intelligent AI insights and fraud
            detection.
          </p>
        </section>

        {/* Objectives */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-3">
            Objectives
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                Offer a fully digital and secure banking experience.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <Globe2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                Enable users to perform all banking activities online in
                real-time.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <Brain className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                Integrate AI tools for fraud detection and financial
                recommendations.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <Cloud className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                Maintain regulatory compliance and data security with cloud
                scalability.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
