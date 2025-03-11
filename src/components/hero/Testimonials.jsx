import React from 'react';
import KeniaImage from '../../assets/Karrim.png'; 
import RyanImage from '../../assets/profile.jpg';  
import VishalImage from '../../assets/masterbusiness.jpg'; 

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Kenia R.',
            location: 'United States',
            image: KeniaImage,
            quote: "From taking courses on Coursera, I gained a deep understanding of the UX Design process from start to finish. The knowledge I gained, I feel, has prepared me for my ideal jobs and internships. I've been able to apply this skills in real-world projects and work experiences.", 
        },
        {
            name: 'Anna L.',
            location: 'United States',
            image: RyanImage,
            quote: "I really enjoyed my courses. The quizzes, videos, and quick labs helped hands-on experience. I learned a lot and gained the confidence and ability to excel in my career. I love this feeling!",
        },
        {
            name: 'Lisa I.',
            location: 'Germany',
            image: VishalImage,
            quote: "Being a mother — especially a working mother — has its challenges. I'm grateful for the flexible learning programs that Coursera has to offer.",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 mt-28">
            <h2 className="text-6xl mb-6 text-center">From the Coursera community</h2>
            <p className="text-center text-2xl mb-8">168+ million people have already joined Coursera</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 text-center">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-71 h-71 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-2xl text-blue-800 font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-700 mt-5">{testimonial.location}</p>
                        <p className="mt-8 text-lg text-gray-700">{testimonial.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;