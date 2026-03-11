"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<string>("No file selected");
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file.name);
      setUploadStatus("");
    } else {
      setSelectedFile("No file selected");
      setUploadStatus("");
    }
  };

  const handleUpload = () => {
    if (selectedFile === "No file selected") {
      setUploadStatus("Please select a file first.");
      return;
    }

    setUploadStatus("File uploaded successfully. Processing started.");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
              Data Ingestion
            </p>
            <h1 className="mt-2 text-3xl font-bold">Upload Center</h1>
            <p className="mt-2 text-sm text-slate-400">
              Upload retail datasets and start processing operational insights.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Upload Dataset</h2>
              <p className="mt-2 text-sm text-slate-400">
                Supported formats: CSV, XLSX
              </p>

              <div className="mt-6 rounded-2xl border-2 border-dashed border-white/10 bg-slate-900/40 p-10 text-center">
                <p className="text-lg font-medium text-slate-200">
                  Drag and drop your file here
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  or choose a file manually
                </p>

                <div className="mt-6">
                  <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500">
                    Choose File
                    <input
                      type="file"
                      accept=".csv,.xlsx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <p className="mt-4 text-sm text-slate-300">
                  Selected file:{" "}
                  <span className="font-medium text-white">{selectedFile}</span>
                </p>

                <button
                  onClick={handleUpload}
                  className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-500"
                >
                  Upload Dataset
                </button>

                {uploadStatus && (
                  <p
                    className={`mt-4 text-sm ${
                      uploadStatus.includes("successfully")
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}
                  >
                    {uploadStatus}
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Upload Rules</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>• File must contain product and sales data</li>
                <li>• Recommended columns: date, sales, stock, product</li>
                <li>• Expiry and price columns improve analytics</li>
                <li>• Maximum file size can be defined later</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Recent Uploads</h2>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-slate-300">
                  <tr>
                    <th className="px-4 py-3">File Name</th>
                    <th className="px-4 py-3">Uploaded By</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-3">march_sales.csv</td>
                    <td className="px-4 py-3">Manager</td>
                    <td className="px-4 py-3">2026-03-11</td>
                    <td className="px-4 py-3 text-emerald-400">Processed</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-4 py-3">inventory_week12.xlsx</td>
                    <td className="px-4 py-3">Admin</td>
                    <td className="px-4 py-3">2026-03-10</td>
                    <td className="px-4 py-3 text-amber-400">Processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}