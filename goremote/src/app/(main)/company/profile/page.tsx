'use client';

import { useState } from 'react';

// Tab interface for type safety and easy data management
interface TabData {
    id: string;
    label: string;
    content: React.ReactNode;
    count?: number; // Optional count badge
}

export default function CompanyProfilePage() {
    // State for active tab
    const [activeTab, setActiveTab] = useState('overview');

    // Tab configuration - easily add/remove tabs here
    const tabs: TabData[] = [
        {
            id: 'overview',
            label: 'Overview',
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-100">Company Overview</h3>
                    <p className="text-neutral-200">Detailed company information will be loaded from backend...</p>
                </div>
            )
        },
        {
            id: 'projects',
            label: 'Projects',
            count: 12,
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-100">Active Projects</h3>
                    <p className="text-neutral-200">Projects data will be fetched from backend...</p>
                </div>
            )
        },
        {
            id: 'team',
            label: 'Team',
            count: 8,
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-100">Team Members</h3>
                    <p className="text-neutral-200">Team information will be loaded from backend...</p>
                </div>
            )
        },
        {
            id: 'reviews',
            label: 'Reviews',
            count: 25,
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-100">Client Reviews</h3>
                    <p className="text-neutral-200">Reviews data will be fetched from backend...</p>
                </div>
            )
        }
    ];

    return (
        <div className="w-full min-h-screen p-10 ">
            {/* profile section  */}
            <div className="flex flex-col gap-6 relative">
                {/* profile cover picture */}
                <div className="h-64 w-full rounded-3xl bg-[#22272C] "></div>
                {/* profile information */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full absolute -bottom-[130%] lg:-bottom-[70%]">
                    {/* basic info */}
                    <div className="flex flex-col  lg:flex-row gap-4 items-center w-full  ">
                        {/* profile picture */}
                        <div className="w-52 aspect-square rounded-full bg-[#181c1f]"></div>
                        {/* name and links */}
                        <div className="flex flex-col gap-3">
                            {/*  name and badges */}
                            <div className="flex gap-4 items-center">
                                {/* name */}
                                <p className="text-neutral-100 font-semibold text-2xl">Intiqaa</p>
                                {/* label */}
                                <div className="text-neutral-300">Start-up</div>
                                {/* verifed badge */}
                                <div className="text-neutral-300">Verified</div>
                            </div>
                            {/* founded */}
                            <div className="text-neutral-300">Founded in 2020</div>
                            {/* links */}
                            <div className="text-neutral-200">Links goes here</div>
                        </div>
                    </div>
                    {/* location and contact info */}
                    <div className="flex flex-col gap-2">
                        {/* email */}
                        <div className="text-neutral-200 text-base font-light">info@intiqaa.com</div>
                        {/* phone number */}
                        <div className="text-neutral-200 text-base font-light">+1 (234) 567-8901</div>
                        {/* country */}
                        <div className="text-neutral-200 text-base font-light">Algeria</div>
                    </div>
                </div>
            </div>
            {/* short description */}
            <div className="flex flex-col gap-3 mt-96 lg:mt-64">
                {/* title */}
                <h2 className="text-neutral-100 font-semibold text-xl">About Intiqaa</h2>
                {/* description */}
                <p className="text-neutral-200">
                    Intiqaa is a start-up company founded in 2020, dedicated to providing innovative solutions for businesses.
                </p>
            </div>
            {/* tabs section: */}
            <div className="mt-12 space-y-6 w-full">
                {/* Tab Navigation */}
                <div className="border-b border-neutral-700 w-full">
                    <div className="overflow-x-auto">
                        <nav className="flex space-x-8 min-w-full w-max" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 whitespace-nowrap
                                        ${activeTab === tab.id 
                                            ? 'border-blue-500 text-blue-400' 
                                            : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-600'
                                        }
                                    `}
                                    aria-current={activeTab === tab.id ? 'page' : undefined}
                                >
                                    <span>{tab.label}</span>
                                    {tab.count && (
                                        <span className={`
                                            inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full
                                            ${activeTab === tab.id 
                                                ? 'bg-blue-500/20 text-blue-300' 
                                                : 'bg-neutral-700 text-neutral-300'
                                            }
                                        `}>
                                            {tab.count}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="py-6">
                    {tabs.find(tab => tab.id === activeTab)?.content}
                </div>
            </div>
        </div>
    )
}   