import Link from "next/link";

export default function DashboardPage() {
  const features = [
    {
      title: "OL Timeline",
      description: "Track your Offer Letter progress & timeline updates.",
      href: "/dashboard/timeline",
    },
    {
      title: "Resume Builder",
      description: "Build and download your AO&CS/Groundstaff specific resume.",
      href: "/dashboard/resume",
    },
    {
      title: "Interview Prep 1v1",
      description: "Practice interview Q&A and get prep resources.",
      href: "/dashboard/interview",
    },
    {
      title: "Basic Assessment",
      description: "Take a mock assessment and check your score instantly.",
      href: "/dashboard/assessment",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-600">
        Welcome! Choose a section below to get started with your preparation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Link key={feature.title} href={feature.href}>
            <div className="bg-white rounded-lg shadow hover:shadow-md transition p-6 cursor-pointer">
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
