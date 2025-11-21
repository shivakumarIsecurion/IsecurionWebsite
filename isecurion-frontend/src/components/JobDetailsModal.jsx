'use client'
import React, { useEffect, useRef } from "react";
import Link from "next/link";

function formatDate(dateString) {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default function JobDetailsModal({ job, isOpen, onClose }) {
    const modalRef = useRef(null);
    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        }

        function handleEsc(e) {
            if (e.key === "Escape") onClose();
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);
    if (!isOpen || !job) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div ref={modalRef} className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="space-y-2 pr-8">
                    <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                    <p className="text-sm text-gray-500">
                        {job.location} • {job.employmentType} • {job.experienceLevel}
                    </p>
                </div>

                {/* Meta info badges */}
                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                    {job.status && (
                        <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-3 py-1">
                            Status: {job.status}
                        </span>
                    )}
                    {job.educationRequired && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-3 py-1">
                            Education: {job.educationRequired}
                        </span>
                    )}
                    {job.applicationDeadline && (
                        <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-3 py-1">
                            Apply before: {formatDate(job.applicationDeadline)}
                        </span>
                    )}
                </div>

                {/* Body */}
                <div className="mt-6 space-y-6 text-sm text-gray-700">
                    {/* Description */}
                    {job.jobDescription && (
                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Job Description
                            </h3>
                            <p className="leading-relaxed">{job.jobDescription}</p>
                        </section>
                    )}

                    {/* Skills */}
                    {Array.isArray(job.skills) && job.skills.length > 0 && (
                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Required Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((s) => (
                                    <span
                                        key={s.id || s.name}
                                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs"
                                    >
                                        {s.name}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Responsibilities */}
                    {Array.isArray(job.responsibilities) &&
                        job.responsibilities.length > 0 && (
                            <section>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Responsibilities
                                </h3>
                                <ul className="list-disc list-inside space-y-1">
                                    {job.responsibilities.map((r) => (
                                        <li key={r.id || r.item}>{r.item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                    {/* Requirements */}
                    {Array.isArray(job.requirements) && job.requirements.length > 0 && (
                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Requirements
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                {job.requirements.map((r) => (
                                    <li key={r.id || r.item}>{r.item}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Preferred Certifications */}
                    {Array.isArray(job.preferredCertifications) &&
                        job.preferredCertifications.length > 0 && (
                            <section>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Preferred Certifications
                                </h3>
                                <ul className="list-disc list-inside space-y-1">
                                    {job.preferredCertifications.map((c) => (
                                        <li key={c.id || c.certificate}>{c.certificate}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                </div>

                {/* Footer */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition"
                    >
                        Close
                    </button>

                    {job.applyLink && (
                        <Link
                            href={job.applyLink}
                            target="_blank"
                            className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                        >
                            Apply Now
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
