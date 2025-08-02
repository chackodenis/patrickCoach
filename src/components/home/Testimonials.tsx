
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating?: number;
  image?: string;
}

const TestimonialCard = ({ quote, author, position, rating, image }: TestimonialProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg border-t-4 border-blue-500 dark:border-blue-400 dark:bg-gray-800" data-id={`testimonial-card-${author.replace(/\s+/g, '-').toLowerCase()}`}>
      <CardContent className="p-8" data-id={`testimonial-content-${author.replace(/\s+/g, '-').toLowerCase()}`}>
        {rating && (
          <div className="flex mb-4" data-id={`testimonial-rating-${author.replace(/\s+/g, '-').toLowerCase()}`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-500"}`}
                data-id={`testimonial-star-${i}-${author.replace(/\s+/g, '-').toLowerCase()}`}
              />
            ))}
          </div>
        )}
        <div className="h-full flex flex-col" data-id={`testimonial-body-${author.replace(/\s+/g, '-').toLowerCase()}`}>
          {image && (
            <div className="mb-6 overflow-hidden rounded-lg" data-id={`testimonial-image-container-${author.replace(/\s+/g, '-').toLowerCase()}`}>
              <img 
                src={image} 
                alt={`Letter from ${author}`} 
                className="w-full h-auto object-cover"
                data-id={`testimonial-image-${author.replace(/\s+/g, '-').toLowerCase()}`}
              />
            </div>
          )}
          <div className="flex-grow" data-id={`testimonial-quote-container-${author.replace(/\s+/g, '-').toLowerCase()}`}>
            <p className="text-gray-800 dark:text-gray-200 italic mb-6 text-lg leading-relaxed" data-id={`testimonial-quote-${author.replace(/\s+/g, '-').toLowerCase()}`}>"{quote}"</p>
          </div>
          <div data-id={`testimonial-author-info-${author.replace(/\s+/g, '-').toLowerCase()}`}>
            <p className="font-semibold text-gray-900 dark:text-gray-100" data-id={`testimonial-author-${author.replace(/\s+/g, '-').toLowerCase()}`}>{author}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400" data-id={`testimonial-position-${author.replace(/\s+/g, '-').toLowerCase()}`}>{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Patrick's mentorship changed my perspective on life. His inspiring talks motivated me to pursue my dreams despite all challenges.",
      author: "Rahul Kumar",
      position: "National Blind Cricket Team Player",
      rating: 5
    },
    {
      quote: "I write to convey my hearty congratulations to you and your team for the spectacular victory in the T20 World Cup Cricket for the Blind-2017. I also convey my compliments to your coach, Patrick Rajkumar.",
      author: "Pranab Mukherjee",
      position: "Former President of India",
      image: "/lovable-uploads/00a8df91-d1a4-47b5-b7bf-104707a63c42.png"
    },
    {
      quote: `Dear Sir,
            Greetings form Cluny Sisters – South West India, Bangalore.
            At the very outset, on behalf of the Cluny family let me thank you for sharing your knowledge
            and expertise on the topic "Bridging learning gap post covid - 19" for the Cluny Principals on 06.08.2022.
            It was really a splendid presentation which exposed Principals on the insights.
            All the Heads of the Institution appreciated and benefitted from your views on the topic.
            I once again thank you for enlightening us.`,
      author: `Sr. Janet`,
      position: "Principal CLUNY CONVENT HIGH SCHOOL",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900" data-id="testimonials-section">
      <div className="container mx-auto px-4" data-id="testimonials-container">
        <div className="text-center mb-16" data-id="testimonials-header">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4" tabIndex={0} data-id="testimonials-title">What People Are Saying</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6" data-id="testimonials-divider"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg" data-id="testimonials-description">
            Hear from those who have been inspired and transformed by Dr. Patrick's guidance and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
