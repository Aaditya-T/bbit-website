import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

//card bg: #D8D1FF
//text bg: #27066F

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

export function SecondSection() {
  const [latestNews, setLatestNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dept/latest_news")
      .then((res) => res.json())
      .then((data) => {
        setLatestNews(data);
        setLoading(false);
      });
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:px-5 md:max-w-[80%] mx-auto mt-5 md:mt-16">
      <div className="bg-[#D8D1FF] rounded-xl p-5 flex flex-col justify-between">
        <h1 className="text-[#27066F] text-2xl font-bold mb-16 text-center">Latest News</h1>
        <div className="flex-grow flex flex-col space-y-4">
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-start space-x-5 animate-pulse">
                  <div className="w-8 h-8 bg-gray-500 rounded"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-500 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-500 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            latestNews.map((news, index) => (
              <div key={index} className="flex-grow flex flex-col justify-between">
                <div className="flex items-start space-x-5">
                  <CalendarIcon className="w-8 h-8" />
                  <div>
                    <p className="font-medium text-lg mt-1">{formatDate(news.created_at)}</p>
                    <p className="text-lg text-[#27066F] mt-2">{news.desc}</p>
                  </div>
                </div>
                <hr className="h-1 bg-[#27066F] rounded-2xl mt-4" />
              </div>
            ))
          )}
        </div>
        <Button className="bg-[#eae6ff] rounded-xl mt-5">View All</Button>
      </div>
      {/* vision and mission card */}
      <div className="md:px-5 mt-12 md:mt-0 font-semibold">
        <div className="bg-[#D8D1FF] rounded-xl p-4">
          <h1 className="text-[#27066F] text-2xl font-bold mb-5 text-center">Our Vision</h1>
          <p className="text-lg text-[#27066F]">
            At BBIT, our vision is to create an innovative and nurturing environment where students thrive academically, socially, and personally. We aim to be a leading institution known for educational excellence, inclusivity, critical thinking, and lifelong learning. Through cutting-edge research, community engagement, and sustainability, we empower students to become compassionate leaders and impactful global citizens.
          </p>
        </div>
        <div className="bg-[#D8D1FF] rounded-xl p-4 mt-5">
          <h1 className="text-[#27066F] text-2xl font-bold mb-5 text-center">Our Mission</h1>
          <ul className="list-disc list-inside text-lg text-[#27066F]">
            <li>Develop strong fundamental concepts, analytical abilities, and problem-solving skills.</li>
            <li>Provide an environment that fosters creativity and innovation.</li>
            <li>Deliver quality training to enhance skills and entrepreneurship.</li>
            <li>Create opportunities for lifelong learning to meet evolving global technological standards.</li>
            <li>Encourage excellence in technical education.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
