import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Building, 
  Award, 
  Users, 
  Star, 
  PlayCircle,
  LinkedinIcon,
  TwitterIcon,
  Calendar
} from "lucide-react";
import sarahImage from "@/assets/instructor-sarah.jpg";
import davidImage from "@/assets/instructor-david.jpg";
import michaelImage from "@/assets/instructor-michael.jpg";

const instructors = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Data Scientist",
    company: "Google",
    image: sarahImage,
    location: "San Francisco, CA",
    experience: "8+ years",
    students: "25,000+",
    rating: 4.9,
    specialties: ["Python", "Machine Learning", "Data Analysis"],
    courses: ["Python Programming Fundamentals", "SQL & Database Management"],
    bio: "Former Microsoft engineer turned Google data scientist. Passionate about making complex programming concepts accessible to everyone.",
    achievements: [
      "Led data science team at 3 Fortune 500 companies",
      "Published researcher with 50+ citations",
      "Top 1% instructor on multiple platforms"
    ],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "David Rodriguez",
    title: "Marketing Director",
    company: "Meta",
    image: davidImage,
    location: "Austin, TX",
    experience: "10+ years",
    students: "18,000+",
    rating: 4.8,
    specialties: ["Digital Marketing", "Analytics", "Growth Strategy"],
    courses: ["Digital Marketing Analytics"],
    bio: "Growth marketing expert who scaled 5 startups from zero to millions in revenue. Now shares proven strategies with ambitious learners.",
    achievements: [
      "Scaled 5 companies to $10M+ revenue",
      "Speaker at 20+ marketing conferences",
      "Mentor to 100+ marketing professionals"
    ],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Michael Thompson",
    title: "Cybersecurity Consultant",
    company: "Independent",
    image: michaelImage,
    location: "New York, NY",
    experience: "12+ years",
    students: "15,000+",
    rating: 4.9,
    specialties: ["Cybersecurity", "Risk Management", "Compliance"],
    courses: ["Cybersecurity Fundamentals", "Project Management Essentials"],
    bio: "Ex-FBI cybersecurity specialist and PMP-certified project manager. Brings real-world experience from government and enterprise environments.",
    achievements: [
      "Former FBI cybersecurity specialist",
      "PMP and CISSP certified",
      "Consulted for 200+ organizations"
    ],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export const InstructorHighlights = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Expert Instructors
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn from Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our instructors are practicing professionals from top companies who bring real-world experience to every lesson.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {instructors.map((instructor, index) => (
            <Card 
              key={instructor.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {instructor.name}
                </CardTitle>
                <CardDescription className="text-base font-medium">
                  {instructor.title} at {instructor.company}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{instructor.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                      {instructor.rating}
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {instructor.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="w-4 h-4" />
                    {instructor.experience} experience
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {instructor.specialties.slice(0, 2).map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                  {instructor.specialties.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{instructor.specialties.length - 2}
                    </Badge>
                  )}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Meet {instructor.name.split(' ')[0]}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <div className="flex items-center gap-4">
                        <img 
                          src={instructor.image} 
                          alt={instructor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <DialogTitle className="text-2xl">{instructor.name}</DialogTitle>
                          <DialogDescription className="text-lg">
                            {instructor.title} at {instructor.company}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <Tabs defaultValue="about" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="courses">Courses</TabsTrigger>
                        <TabsTrigger value="connect">Connect</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="about" className="space-y-4">
                        <p className="text-muted-foreground">{instructor.bio}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {instructor.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <Award className="w-4 h-4 text-yellow-500" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
                          <div className="text-center">
                            <div className="text-xl font-bold text-primary">{instructor.students}</div>
                            <div className="text-xs text-muted-foreground">Students Taught</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-primary">{instructor.rating}</div>
                            <div className="text-xs text-muted-foreground">Average Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-primary">{instructor.experience}</div>
                            <div className="text-xs text-muted-foreground">Experience</div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="courses" className="space-y-4">
                        <h4 className="font-semibold">Courses by {instructor.name.split(' ')[0]}:</h4>
                        {instructor.courses.map((course) => (
                          <div key={course} className="p-3 border rounded-lg">
                            <div className="font-medium">{course}</div>
                            <div className="text-sm text-muted-foreground">Part of Job Ready in 30 Days Bundle</div>
                          </div>
                        ))}
                        
                        <Button className="w-full">
                          Enroll in Bundle - $197
                        </Button>
                      </TabsContent>
                      
                      <TabsContent value="connect" className="space-y-4">
                        <div className="text-center space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Connect with {instructor.name.split(' ')[0]}</h4>
                            <p className="text-sm text-muted-foreground">
                              Stay updated with the latest insights and career tips
                            </p>
                          </div>
                          
                          <div className="flex justify-center gap-4">
                            <Button variant="outline" size="sm">
                              <LinkedinIcon className="w-4 h-4 mr-2" />
                              LinkedIn
                            </Button>
                            <Button variant="outline" size="sm">
                              <TwitterIcon className="w-4 h-4 mr-2" />
                              Twitter
                            </Button>
                          </div>

                          <div className="p-4 bg-muted rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">Office Hours</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Join monthly Q&A sessions exclusive to bundle students
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-6">
            <h3 className="text-2xl font-bold mb-4">1-on-1 Mentorship Included</h3>
            <p className="text-muted-foreground mb-6">
              Get personalized guidance from our instructors with monthly office hours and career coaching sessions included in your bundle.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
              <Users className="w-5 h-5 mr-2" />
              Book Your Mentorship Session
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};