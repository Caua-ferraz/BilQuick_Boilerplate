"use client";

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import useUser from "@/app/hook/useUser";
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FadeIn from "@/components/fadein";

async function getDocContent(filePath: string) {
  const response = await fetch(`/api/docs?file=${filePath}`);
  if (!response.ok) return null;
  return await response.text();
}

async function getDocFiles() {
  const response = await fetch('/api/docs-list');
  if (!response.ok) return [];
  return await response.json();
}

export default function DocumentationPage() {
  const { data: user, isLoading } = useUser();
  const [docFiles, setDocFiles] = useState<string[]>([]);
  const [selectedDoc, setSelectedDoc] = useState('index');
  const [docHtml, setDocHtml] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !user?.subscription?.subscription_id) {
      redirect("/");
    }
  }, [isLoading, user]);

  useEffect(() => {
    getDocFiles().then(setDocFiles);
  }, []);

  useEffect(() => {
    getDocContent(selectedDoc).then(setDocHtml);
  }, [selectedDoc]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <FadeIn>
      <div className="flex h-screen bg-gray-900">
        {/* Left sidebar menu */}
        <Card className="w-64 h-full rounded-none border-r border-gray-700 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <nav>
              <ul className="space-y-2">
                {docFiles.map((file) => (
                  <li key={file}>
                    <button 
                      onClick={() => setSelectedDoc(file)}
                      className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                        selectedDoc === file 
                          ? 'bg-blue-600 text-white font-medium' 
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {file.charAt(0).toUpperCase() + file.slice(1).replace('_', ' ')}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </CardContent>
        </Card>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-8 bg-gray-900 text-white">
          {docHtml ? (
            <div 
              className="prose prose-invert max-w-none" 
              dangerouslySetInnerHTML={{ __html: docHtml }} 
            />
          ) : (
            <div>
              <h1 className="text-3xl font-bold mb-6">Documentation</h1>
              <p>The requested documentation page could not be found.</p>
              <p>Please select a topic from the menu on the left.</p>
            </div>
          )}
        </main>
      </div>
    </FadeIn>
  );
}
