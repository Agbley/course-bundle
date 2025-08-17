import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

const courses = [
  {
    title: "Digital Marketing Mastery",
    description: "Learn SEO, social media marketing, and paid advertising strategies that drive real results.",
    duration: "8 hours",
    students: "2.4k+",
    rating: "4.9",
    skills: ["SEO", "Social Media", "PPC", "Analytics"]
  },
  {
    title: "Data Analytics for Business",
    description: "Master Excel, Power BI, and data visualization to make data-driven decisions.",
    duration: "10 hours", 
    students: "3.1k+",
    rating: "4.8",
    skills: ["Excel", "Power BI", "SQL", "Python"]
  },
  {
    title: "Project Management Pro",
    description: "Learn Agile, Scrum, and project management tools used by top companies.",
    duration: "6 hours",
    students: "1.8k+", 
    rating: "4.9",
    skills: ["Agile", "Scrum", "Jira", "Leadership"]
  },
  {
    title: "Professional Communication",
    description: "Enhance your presentation, email, and interpersonal communication skills.",
    duration: "5 hours",
    students: "2.7k+",
    rating: "4.7",
    skills: ["Public Speaking", "Writing", "Negotiation", "Leadership"]
  },
  {
    title: "Financial Planning & Analysis",
    description: "Master budgeting, forecasting, and financial modeling for business success.",
    duration: "7 hours",
    students: "1.9k+",
    rating: "4.8",
    skills: ["Budgeting", "Forecasting", "Excel", "Financial Modeling"]
  }
];

const CourseBundleOverview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            5 Career-Boosting Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each course is carefully crafted by industry experts to teach you the most 
            in-demand skills that employers are looking for right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="h-full hover:shadow-card transition-all duration-300 hover:scale-105 bg-card border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent" />
                    {course.rating}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-lg p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Complete Bundle Value</h3>
            <div className="flex items-center justify-center gap-4 text-lg">
              <span className="text-muted-foreground line-through">$497 Individual Price</span>
              <span className="text-3xl font-bold text-accent">$97 Bundle Price</span>
            </div>
            <p className="text-muted-foreground mt-2">Save 80% with our launch special</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBundleOverview;