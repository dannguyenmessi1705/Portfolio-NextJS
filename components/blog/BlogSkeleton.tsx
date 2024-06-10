"use client";
import { motion } from "framer-motion";
export default function BlogSkeleton() {
  return (
    <div className="animate-pulse flex space-x-4 p-4 border-b">
      <div className="h-10 w-10 rounded-full bg-gray-300"></div>
      <div className="flex-1 py-1">
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  );
}