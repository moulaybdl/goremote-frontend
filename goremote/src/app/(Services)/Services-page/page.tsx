'use client';

import React, { useState } from 'react';
import InfoCard from '@/components/announcement/infoCard';
import InputIcon from '@/components/input/inputIcon';
import DropDown1 from '@/components/input/dropDown1';
import Image from 'next/image';

// Import your lines.svg
import LinesSvg from './svgs/lines.svg'; // Adjust path as needed

// Dummy data for services
const dummyServices = [
    {
        id: 1,
        name: "Moulay Bouabdelli",
        tag: "web developer",
        availability: true,
        title: "Landing page for your website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore...",
        delivery_time: "5-7 days",
        price: "XXX$"
    },
    {
        id: 2,
        name: "Moulay Bouabdelli",
        tag: "web developer",
        availability: false,
        title: "Landing page for your website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore...",
        delivery_time: "5-7 days",
        price: "XXX$"
    },
    {
        id: 3,
        name: "Sarah Johnson",
        tag: "UI/UX Designer",
        availability: true,
        title: "Modern mobile app design",
        description: "Complete mobile application design with user-friendly interface and smooth user experience...",
        delivery_time: "3-5 days",
        price: "XXX$"
    },
    {
        id: 4,
        name: "Ahmed Hassan",
        tag: "Full Stack Developer",
        availability: true,
        title: "E-commerce website development",
        description: "Full-featured e-commerce platform with payment integration and admin dashboard...",
        delivery_time: "7-10 days",
        price: "XXX$"
    },
    {
        id: 5,
        name: "Lisa Chen",
        tag: "Graphic Designer",
        availability: false,
        title: "Brand identity design package",
        description: "Complete branding solution including logo, business cards, and brand guidelines...",
        delivery_time: "4-6 days",
        price: "XXX$"
    },
    {
        id: 6,
        name: "David Rodriguez",
        tag: "Digital Marketer",
        availability: true,
        title: "Social media marketing strategy",
        description: "Comprehensive social media strategy with content calendar and engagement plan...",
        delivery_time: "2-3 days",
        price: "XXX$"
    },
    {
        id: 7,
        name: "Emily Watson",
        tag: "Content Writer",
        availability: true,
        title: "SEO blog content writing",
        description: "High-quality, SEO-optimized blog posts that drive traffic and engage readers...",
        delivery_time: "1-2 days",
        price: "XXX$"
    },
    {
        id: 8,
        name: "Michael Kim",
        tag: "Video Editor",
        availability: false,
        title: "Professional video editing",
        description: "Professional video editing for marketing campaigns, tutorials, and promotional content...",
        delivery_time: "3-4 days",
        price: "XXX$"
    },
    {
        id: 9,
        name: "Anna Kowalski",
        tag: "Data Analyst",
        availability: true,
        title: "Business data analysis report",
        description: "Comprehensive data analysis with insights and recommendations for business growth...",
        delivery_time: "5-7 days",
        price: "XXX$"
    },
    {
        id: 10,
        name: "Carlos Martinez",
        tag: "Mobile Developer",
        availability: true,
        title: "iOS and Android app development",
        description: "Cross-platform mobile application development using React Native and Flutter...",
        delivery_time: "10-14 days",
        price: "XXX$"
    },
    {
        id: 11,
        name: "Sophie Williams",
        tag: "SEO Specialist",
        availability: false,
        title: "Complete SEO audit and optimization",
        description: "Comprehensive website SEO analysis with actionable recommendations...",
        delivery_time: "3-5 days",
        price: "XXX$"
    },
    {
        id: 12,
        name: "Alex Thompson",
        tag: "DevOps Engineer",
        availability: true,
        title: "Cloud infrastructure setup",
        description: "AWS/Azure cloud infrastructure deployment with CI/CD pipeline configuration...",
        delivery_time: "7-10 days",
        price: "XXX$"
    },
    {
        id: 13,
        name: "Maria Garcia",
        tag: "Translator",
        availability: true,
        title: "Professional document translation",
        description: "High-quality translation services for business documents and marketing materials...",
        delivery_time: "2-4 days",
        price: "XXX$"
    },
    {
        id: 14,
        name: "James Wilson",
        tag: "3D Artist",
        availability: false,
        title: "3D modeling and animation",
        description: "Professional 3D modeling and animation for games, movies, and advertisements...",
        delivery_time: "5-8 days",
        price: "XXX$"
    },
    {
        id: 15,
        name: "Nina Petrov",
        tag: "Voice Actor",
        availability: true,
        title: "Professional voice over services",
        description: "High-quality voice over for commercials, audiobooks, and educational content...",
        delivery_time: "1-3 days",
        price: "XXX$"
    }
];

// Dropdown options
const categoryOptions = ["Web Development", "Design", "Marketing", "Writing", "Video", "Data"];
const deliveryTimeOptions = ["1-2 days", "3-5 days", "5-7 days", "1+ week"];
const priceRangeOptions = ["$0-$50", "$50-$100", "$100-$200", "$200+"];

export default function ServicesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDeliveryTime, setSelectedDeliveryTime] = useState("");
    const [selectedPriceRange, setSelectedPriceRange] = useState("");

    const itemsPerPage = 8;

    // Filter services based on selected filters
    const filteredServices = dummyServices.filter(service => {
        if (selectedCategory && !service.tag.toLowerCase().includes(selectedCategory.toLowerCase())) {
            return false;
        }
        if (selectedDeliveryTime && service.delivery_time !== selectedDeliveryTime) {
            return false;
        }
        // Add more filter logic as needed
        return true;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentServices = filteredServices.slice(startIndex, endIndex);

    // Pagination handlers
    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const goToPrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="min-h-screen w-full text-white relative  overflow-hidden">
            {/* Background decorative lines with low opacity */}
            <div className="absolute top-0 left-0 flex gap-4 opacity-80 pointer-events-none">
                <div className="relative w-40 h-40">
                    <Image
                        src={LinesSvg}
                        alt="Background decoration 1"
                        fill
                    />
                </div>
                <div className="relative w-40 h-40">
                    <Image
                        src={LinesSvg}
                        alt="Background decoration 2"
                        fill
                    />
                </div>
            </div>


            {/* Main content container */}
            <div className="flex-1 px-10 mt-40">


                {/* Main content area (accounting for sidebar space) */}
                <div className="flex-1 ml-20 mt-40">
                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 className="text-6xl font-lexend-bold text-white mb-6">
                            Featured Gigs
                        </h1>
                        <p className="text-2xl text-[#9CA3AF] font-lexend-normal max-w-7xl">
                            Handpicked services from top-rated freelancers, ready to boost your next project.
                        </p>
                    </div>

                    {/* Filters Section */}
                    <div className="mb-8 flex items-center justify-between  p-11 outline-none bg-transparent shadow-none appearance-none box-border px-10
    h-14 min-w-96 w-full rounded-[10px] bg-surface-light text-base border border-[var(--color-text-muted)] font-lexend-medium text-secondary
    focus:border-glow focus:border-2">
        
                        {/* Filter Dropdowns */}
                        <div className="flex items-center gap-4">
                            <div className="w-32">
                                <DropDown1
                                    trigger="category"
                                    label="Select Category"
                                    items={categoryOptions}
                                />
                            </div>
                            <div className="w-36">
                                <DropDown1
                                    trigger="Delivery "
                                    label="Select Delivery Time"
                                    items={deliveryTimeOptions}
                                />
                            </div>
                            <div className="w-32">
                                <DropDown1
                                    trigger="Price "
                                    label="Select Price Range"
                                    items={priceRangeOptions}
                                />
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="w-80">
                            <InputIcon />
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="mb-6 text-sm text-[#9CA3AF]">
                        Showing {startIndex + 1}-{Math.min(endIndex, filteredServices.length)} of {filteredServices.length} results
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 mb-12">

                        {currentServices.map((service) => (
                            <div key={service.id} className="flex justify-center">
                                <InfoCard
                                    name={service.name}
                                    tag={service.tag}
                                    availability={service.availability}
                                    title={service.title}
                                    description={service.description}
                                    delivery_time={service.delivery_time}
                                    price={service.price}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-16 mb-16" >
                            {/* Previous button */}
                            <button
                                onClick={goToPrevious}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 rounded-lg  flex items-center justify-center transition-colors ${currentPage === 1
                                    ? ' text-[#6B7280] cursor-not-allowed'
                                    : ' text-[#9CA3AF] hover:bg-[#374151] hover:text-white cursor-pointer'
                                    }`}
                            >
                                ‹
                            </button>

                            {/* Page numbers */}
                            {getPageNumbers().map((page, index) => {
                                if (page === '...') {
                                    return (
                                        <span key={`ellipsis-${index}`} className="px-2 text-[#9CA3AF]">
                                            ...
                                        </span>
                                    );
                                }

                                const pageNum = page as number;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => goToPage(pageNum)}
                                        className={`w-10 h-10 rounded-[10px] bg-surface-light text-base border border-[var(--color-text-muted)] font-lexend-medium text-secondary
    focus:border-glow focus:border-2 flex items-center justify-center font-medium transition-colors ${currentPage === pageNum
                                            ? 'bg-[#06B6D4] text-white'
                                            : 'border border-[#374151] bg-[#1F2937] text-[#9CA3AF] hover:bg-[#374151] hover:text-white'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            {/* Next button */}
                            <button
                                onClick={goToNext}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 rounded-lg 
                                     flex items-center justify-center transition-colors ${currentPage === totalPages
                                    ? ' text-[#6B7280] cursor-not-allowed'
                                    : ' text-[#9CA3AF] hover:bg-[#374151] hover:text-white cursor-pointer'
                                    }`}
                            >
                                ›
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}