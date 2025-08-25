import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, TrendingUp, Users, Shield, Clock, CheckCircle, Play } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Python Programming Fundamentals",
    description: "Master Python basics and build real-world projects",
    icon: Code,
    duration: "6 days",
    modules: 8,
    difficulty: "Beginner",
    skills: ["Variables & Functions", "Data Structures", "APIs", "Web Scraping"],
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "SQL & Database Management",
    description: "Learn to work with databases and write efficient queries",
    icon: Database,
    duration: "5 days",
    modules: 6,
    difficulty: "Beginner",
    skills: ["SQL Queries", "Database Design", "Data Analysis", "Reporting"],
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Digital Marketing Analytics",
    description: "Understand marketing metrics and campaign optimization",
    icon: TrendingUp,
    duration: "6 days",
    modules: 7,
    difficulty: "Intermediate",
    skills: ["Google Analytics", "A/B Testing", "ROI Analysis", "Campaign Management"],
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Project Management Essentials",
    description: "Lead teams and deliver projects on time and budget",
    icon: Users,
    duration: "7 days",
    modules: 9,
    difficulty: "Intermediate",
    skills: ["Agile/Scrum", "Risk Management", "Team Leadership", "Budget Planning"],
    color: "bg-orange-500"
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    description: "Protect systems and data from security threats",
    icon: Shield,
    duration: "6 days",
    modules: 8,
    difficulty: "Intermediate",
    skills: ["Network Security", "Risk Assessment", "Incident Response", "Compliance"],
    color: "bg-red-500"
  }
];

export const CourseBundleOverview = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Complete Bundle
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            5 Essential Courses, 1 Complete Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Carefully curated courses that build upon each other to give you the most in-demand skills in today's job market.
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="overview">Course Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Detailed Curriculum</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card 
                  key={course.id} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {course.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {course.skills.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {course.skills.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{course.skills.length - 2} more
                          </Badge>
                        )}
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                            onClick={() => setSelectedCourse(course)}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl flex items-center gap-3">
                              <div className={`w-10 h-10 ${selectedCourse.color} rounded-lg flex items-center justify-center`}>
                                <selectedCourse.icon className="w-5 h-5 text-white" />
                              </div>
                              {selectedCourse.title}
                            </DialogTitle>
                            <DialogDescription className="text-base">
                              {selectedCourse.description}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <div className="text-2xl font-bold text-primary">{selectedCourse.modules}</div>
                                <div className="text-sm text-muted-foreground">Modules</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">{selectedCourse.duration}</div>
                                <div className="text-sm text-muted-foreground">Duration</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">{selectedCourse.difficulty}</div>
                                <div className="text-sm text-muted-foreground">Level</div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Skills You'll Learn:</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {selectedCourse.skills.map((skill) => (
                                  <div key={skill} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-sm">{skill}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3">Course Progress Simulation:</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Module 1: Introduction</span>
                                  <span className="text-green-500">Completed</span>
                                </div>
                                <Progress value={100} className="h-2" />
                                <div className="flex justify-between text-sm">
                                  <span>Module 2: Core Concepts</span>
                                  <span className="text-blue-500">In Progress</span>
                                </div>
                                <Progress value={60} className="h-2" />
                                <div className="flex justify-between text-sm">
                                  <span>Module 3: Advanced Topics</span>
                                  <span className="text-muted-foreground">Locked</span>
                                </div>
                                <Progress value={0} className="h-2" />
                              </div>
                            </div>

                            <Button className="w-full" size="lg">
                              Enroll in Full Bundle - $197
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="curriculum">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Week 1-2: Foundation</h3>
                <div className="space-y-4">
                  {courses.slice(0, 2).map((course) => (
                    <div key={course.id} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                      <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <course.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.duration} • {course.modules} modules</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Week 3-4: Advanced</h3>
                <div className="space-y-4">
                  {courses.slice(2, 5).map((course) => (
                    <div key={course.id} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                      <div className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <course.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.duration} • {course.modules} modules</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};