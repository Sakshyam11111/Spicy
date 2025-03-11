import React from 'react';

const ExploreCourses = () => {
    const categories = [
        { title: 'Data Science', count: 425 },
        { title: 'Business', count: 1005 },
        { title: 'Computer Science', count: 688 },
        { title: 'Health', count: 471 },
        { title: 'Social Sciences', count: 400 },
        { title: 'Personal Development', count: 131 },
        { title: 'Arts and Humanities', count: 338 },
        { title: 'Physical Sciences and Engineering', count: 423 },
        { title: 'Language Learning', count: 150 },
        { title: 'Information Technology', count: 145 },
        { title: 'Math and Logic', count: 70 },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 mt-28">
            <h2 className="text-5xl mb-4">Explore Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div key={index} className="rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                        <h3 className="text-xl text-blue-600 font-semibold">{category.title}</h3>
                        <p className="text-gray-500">{category.count} courses</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCourses;