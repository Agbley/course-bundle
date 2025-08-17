import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award } from "lucide-react";
import instructorSarah from "@/assets/instructor-sarah.jpg";
import instructorDavid from "@/assets/instructor-david.jpg";
import instructorMichael from "@/assets/instructor-michael.jpg";

const instructors = [
  {
    name: "Sarah Chen",
    title: "Digital Marketing Director",
    company: "Fortune 500 Tech Company",
    image: instructorSarah,
    experience: "12+ years",
    students: "15k+",
    rating: "4.9",
    specialties: ["SEO", "Paid Advertising", "Analytics", "Strategy"],
    description: "Former marketing director at Google and Microsoft, Sarah has helped 100+ brands scale their digital presence."
  },
  {
    name: "David Rodriguez",
    title: "Senior Data Scientist",
    company: "Leading Fintech Startup",
    image: instructorDavid,
    experience: "10+ years",
    students: "12k+",
    rating: "4.8",
    specialties: ["Data Analysis", "Python", "Machine Learning", "Business Intelligence"],
    description: "Data science leader who's built analytics teams at 3 successful startups, now sharing his practical expertise."
  },
  {
    name: "Michael Thompson",
    title: "VP of Operations",
    company: "Global Consulting Firm",
    image: instructorMichael,
    experience: "15+ years",
    students: "18k+",
    rating: "4.9",
    specialties: ["Project Management", "Leadership", "Operations", "Strategy"],
    description: "Certified PMP with experience managing $50M+ projects and leading teams of 100+ professionals."
  }
];

const InstructorHighlights = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Learn from Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our instructors aren't just teachers—they're active professionals who practice 
            what they teach at leading companies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="h-full hover:shadow-card transition-all duration-300 bg-card border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">
                    {instructor.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {instructor.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {instructor.company}
                  </p>
                </div>

                <div className="flex justify-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    {instructor.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {instructor.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent" />
                    {instructor.rating}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {instructor.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {instructor.specialties.map((specialty, specialtyIndex) => (
                    <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-lg p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Combined Teaching Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">45k+</div>
                <div className="text-muted-foreground">Students Taught</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">37+</div>
                <div className="text-muted-foreground">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">4.9</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Our instructors bring real-world experience and proven teaching methods 
              to ensure you get the most practical, actionable education possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorHighlights;