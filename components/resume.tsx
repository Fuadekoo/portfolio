import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

const workExperience = [
  {
    title: "Co-Founder & CTO",
    company: "Tena Solutions",
    location: "Dubai, UAE",
    period: "June 2024 - Present (Full Time)",
    link: "https://tenasolutions.com",
    details: [
      "Developer AI-Powered Chatbot for e-commerce platform integration with Shopify, WooCommerce, Magento, and BigCommerce.",
      "Developed AI-Powered Conversational Product discovery and recommendation engine.",
      "Developed backend systems using FastAPI and Qdrant Vector Database for efficient data processing.",
      "Implemented AWS CodePipeline and Github CI/CD for seamless deployment using Docker and Docker Compose.",
    ],
  },
  {
    title: "Senior Backend Developer",
    company: "Conversant",
    location: "Remote USA",
    period: "July 2023 - Present (Part time)",
    link: "https://conversant.com",
    details: [
      "Led IT development work for big companies like STC Bahrain and USA-based clients.",
      "Collaborated with cross-functional teams to ensure successful project delivery and client satisfaction.",
      "Developed and implemented innovative solutions to meet client needs and drive business growth.",
    ],
  },
  {
    title: "Tech Event Organizer",
    company: "Dev Meetup",
    location: "Addis Abeba, Ethiopia",
    period: "Sep, 2023 - Present (Seasonal)",
    link: "https://devmeetup.com",
    details: [
      "Organized 3 successful developer event series V1, V2, and V3 with over 1000 attendees each.",
      "Invited reputable guests in the Ethiopian tech ecosystem to speak at the events.",
      "Generated interest from over 2000 individuals to attend the events.",
    ],
  },
];

const education = [
  {
    degree: "BSc in Computer Science",
    school: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    period: "2018 - 2022",
    link: "https://aau.edu.et",
    details: [
      "Graduated with distinction.",
      "Active member of the university tech community.",
    ],
  },
];

function Resume() {
  return (
    <section className="relative h-full w-full py-12 px-2 sm:px-6 bg-background dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900 dark:text-primary-200">
            MY JOURNEY
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-primary-900 dark:text-white">
            Resume
          </h1>
        </div>

        {/* Tabs for Work Experience and Education */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <Tabs aria-label="Resume Sections" className="w-full">
              <Tab key="work" title="Work Experience">
                <div className="grid grid-cols-1">
                  <Card className=" dark:bg-secondary-900 shadow-none w-full">
                    <CardBody>
                      <h2 className="text-2xl font-bold mb-6 text-primary-700 dark:text-primary-200">
                        Work Experience
                      </h2>
                      <div className="relative">
                        {/* Center vertical line for desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-primary-200 dark:bg-primary-700 -translate-x-1/2 z-0" />
                        <ol className="relative">
                          {workExperience.map((job, idx) => (
                            <li
                              key={idx}
                              className="mb-10 flex flex-col md:flex-row md:items-start relative"
                            >
                              {/* Timeline dot */}
                              <span
                                className={[
                                  "absolute z-10 w-6 h-6 flex items-center justify-center rounded-full ring-4 ring-background dark:ring-slate-950",
                                  idx % 2 === 0
                                    ? "md:left-[calc(50%-12px)] left-[-24px] top-6"
                                    : "md:left-[calc(50%-12px)] left-[-24px] top-6",
                                  "bg-primary-100 dark:bg-primary-800",
                                ].join(" ")}
                              >
                                <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                              </span>
                              {/* Info (left/right) */}
                              <div
                                className={[
                                  "md:w-1/2 flex flex-col justify-center",
                                  idx % 2 === 0
                                    ? "md:pr-8 md:items-end md:text-right"
                                    : "md:pl-8 md:items-start md:text-left",
                                  "md:order-none order-1",
                                ].join(" ")}
                              >
                                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-800 text-xs font-semibold text-primary-700 dark:text-primary-200">
                                  {job.period}
                                </span>
                                <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-1">
                                  {job.title}
                                </h3>
                                <a
                                  href={job.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm text-primary-700 dark:text-primary-300 hover:underline"
                                >
                                  <span>@ {job.company}</span>
                                </a>
                                <span className="block text-xs text-secondary-500 dark:text-secondary-300 mt-1">
                                  {job.location}
                                </span>
                              </div>
                              {/* Description (right/left) */}
                              <div
                                className={[
                                  "md:w-1/2 mt-4 md:mt-0 flex items-center",
                                  idx % 2 === 0 ? "md:pl-8" : "md:pr-8",
                                ].join(" ")}
                              >
                                <ul className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-4 shadow text-secondary-800 dark:text-secondary-200 text-sm list-disc pl-5 space-y-1 w-full">
                                  {job.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Tab>
              <Tab key="education" title="Education">
                <div className="grid grid-cols-1">
                  <Card className="bg-white dark:bg-secondary-900 shadow-none w-full">
                    <CardBody>
                      <h2 className="text-2xl font-bold mb-6 text-primary-700 dark:text-primary-200">
                        Education
                      </h2>
                      <div className="relative">
                        {/* Center vertical line for desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-success-200 dark:bg-success-700 -translate-x-1/2 z-0" />
                        <ol className="relative">
                          {education.map((edu, idx) => (
                            <li
                              key={idx}
                              className="mb-10 flex flex-col md:flex-row md:items-start relative"
                            >
                              {/* Timeline dot */}
                              <span
                                className={[
                                  "absolute z-10 w-6 h-6 flex items-center justify-center rounded-full ring-4 ring-background dark:ring-slate-950",
                                  idx % 2 === 0
                                    ? "md:left-[calc(50%-12px)] left-[-24px] top-6"
                                    : "md:left-[calc(50%-12px)] left-[-24px] top-6",
                                  "bg-success-100 dark:bg-success-800",
                                ].join(" ")}
                              >
                                <span className="w-2 h-2 bg-success-600 dark:bg-success-400 rounded-full"></span>
                              </span>
                              {/* Info (left/right) */}
                              <div
                                className={[
                                  "md:w-1/2 flex flex-col justify-center",
                                  idx % 2 === 0
                                    ? "md:pr-8 md:items-end md:text-right"
                                    : "md:pl-8 md:items-start md:text-left",
                                  "md:order-none order-1",
                                ].join(" ")}
                              >
                                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-success-100 dark:bg-success-800 text-xs font-semibold text-success-700 dark:text-success-200">
                                  {edu.period}
                                </span>
                                <h3 className="text-lg font-bold text-success-900 dark:text-white mb-1">
                                  {edu.degree}
                                </h3>
                                <a
                                  href={edu.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm text-success-700 dark:text-success-300 hover:underline"
                                >
                                  <span>@ {edu.school}</span>
                                </a>
                                <span className="block text-xs text-secondary-500 dark:text-secondary-300 mt-1">
                                  {edu.location}
                                </span>
                              </div>
                              {/* Description (right/left) */}
                              <div
                                className={[
                                  "md:w-1/2 mt-4 md:mt-0 flex items-center font-medium",
                                  idx % 2 === 0 ? "md:pl-8" : "md:pr-8",
                                ].join(" ")}
                              >
                                <ul className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-4 shadow text-secondary-800 dark:text-secondary-200 text-sm list-disc pl-5 space-y-1 w-full">
                                  {edu.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
