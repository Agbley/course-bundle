import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Clock, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Briefcase,
  DollarSign,
  Star,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Job-Focused Curriculum",
    description: "Every lesson is designed around real job requirements from top companies",
    stats: "Based on 10,000+ job postings analyzed",
    color: "bg-blue-500"
  },
  {
    icon: Clock,
    title: "Fast-Track Learning",
    description: "Complete in 30 days with just 2-3 hours daily commitment",
    stats: "3x faster than traditional programs",
    color: "bg-green-500"
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Get certificates recognized by leading employers",
    stats: "Accepted by 500+ companies",
    color: "bg-purple-500"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Direct access to industry professionals and career coaches",
    stats: "1:1 mentoring included",
    color: "bg-orange-500"
  }
];

const successMetrics = [
  { label: "Job Placement Rate", value: 92, color: "bg-green-500" },
  { label: "Salary Increase", value: 85, color: "bg-blue-500" },
  { label: "Course Completion", value: 96, color: "bg-purple-500" },
  { label: "Student Satisfaction", value: 98, color: "bg-orange-500" }
];

const careerPaths = [
  {
    title: "Data Analyst",
    salary: "$75,000 - $95,000",
    growth: "+22% job growth",
    skills: ["Python", "SQL", "Analytics"],
    demand: "High"
  },
  {
    title: "Digital Marketing Manager",
    salary: "$65,000 - $85,000",
    growth: "+10% job growth",
    skills: ["Marketing Analytics", "Project Management"],
    demand: "Very High"
  },
  {
    title: "Cybersecurity Specialist",
    salary: "$80,000 - $120,000",
    growth: "+33% job growth",
    skills: ["Security", "Risk Management"],
    demand: "Critical"
  }
];

export const WhyThisBundle = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Career Transformation Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who've accelerated their careers with our proven methodology
          </p>
        </div>

        <Tabs defaultValue="benefits" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="benefits">Key Benefits</TabsTrigger>
            <TabsTrigger value="success">Success Metrics</TabsTrigger>
            <TabsTrigger value="careers">Career Paths</TabsTrigger>
          </TabsList>

          <TabsContent value="benefits">
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={benefit.title} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-sm">
                        {benefit.stats}
                      </Badge>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="group-hover:text-primary">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3 text-2xl">
                              <div className={`w-10 h-10 ${benefit.color} rounded-lg flex items-center justify-center`}>
                                <benefit.icon className="w-5 h-5 text-white" />
                              </div>
                              {benefit.title}
                            </DialogTitle>
                            <DialogDescription className="text-base">
                              {benefit.description}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="p-4 bg-muted rounded-lg">
                              <h4 className="font-semibold mb-2">What This Means for You:</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  Higher chances of landing your dream job
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  Skills that are immediately applicable
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  Confidence in interviews and workplace
                                </li>
                              </ul>
                            </div>
                            <Button className="w-full">
                              Get Started Today
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

          <TabsContent value="success">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Track Record</h3>
                {successMetrics.map((metric, index) => (
                  <div key={metric.label} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{metric.label}</span>
                      <span className="text-2xl font-bold text-primary">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-3" />
                  </div>
                ))}
              </div>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Student Success Stories</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold">Sarah M.</span>
                      <Badge variant="secondary" className="text-xs">Data Analyst</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Landed my dream job at Google within 45 days of completing the bundle. The Python and SQL courses were game-changers!"
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold">Mike R.</span>
                      <Badge variant="secondary" className="text-xs">Project Manager</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "40% salary increase after completing the project management course. The practical skills made all the difference."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="careers">
            <div className="grid lg:grid-cols-3 gap-6">
              {careerPaths.map((career, index) => (
                <Card 
                  key={career.title} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{career.title}</h3>
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <DollarSign className="w-4 h-4" />
                        {career.salary}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{career.growth}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">Demand: {career.demand}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {career.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Career Path
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};