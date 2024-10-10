import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Code2,
  GraduationCap,
  Briefcase,
  Trophy,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";
import Link from "next/link";

export default function UserProfile() {
  let developers = [
    {
      name: "Shaswat Raj",
      username: "sh20raj",
      profilePicture: "https://github.com/sh20raj.png",
      badges: ["Web Developer", "DevSuit Contributor"],
      about: "Web Developer | DevSuit Contributor",
    },
    {
      name: "John Doe",
      username: "johndoe",
      profilePicture: "https://github.com/johndoe.png",
      badges: ["Web Developer", "DevSuit Contributor"],
      about: "AI Developer",
    },
    {
      name: "Janet Doe",
      username: "janetdoe",
      profilePicture: "https://github.com/janetdoe.png",
      badges: ["Web Developer", "DevSuit Contributor"],
      about: "ML Engineer",
    },
  ];

  let achievements = [
    {
      title: "Top DevSuit Contributor 2023",
      description: "Awarded for outstanding contributions to the DevSuit platform.",
    },
    {
      title: "SIH Winner 2024",
      description: "Won the Smart India Hackathon 2024",
    },
  ];
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="w-32 h-32 border-4 border-primary">
                  <AvatarImage
                    src="https://github.com/sh20raj.png"
                    alt="Profile picture"
                  />
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold">Shaswat Raj</h1>
                    <Badge variant="secondary" className="text-sm">
                      @sh20raj
                    </Badge>
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                  </div>
                  <p className="text-muted-foreground">
                    Web Developer | DevSuit Contributor
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Connect</Button>
                    <Button size="sm" variant="outline">
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="flex items-center text-muted-foreground text-center justify-around mb-4">
                  <TabsTrigger value="experience" className="w-full">
                    Experience
                  </TabsTrigger>
                  <TabsTrigger value="education" className="w-full">
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="w-full">
                    Skills
                  </TabsTrigger>
                  <TabsTrigger value="projects" className="w-full">
                    Projects
                  </TabsTrigger>
                  <TabsTrigger value="achievements" className="w-full">
                    Achievements
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="experience">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Briefcase className="w-5 h-5 mt-1" />
                      <div>
                        <h3 className="font-semibold">Developer at DevSuit</h3>
                        <p className="text-sm text-muted-foreground">
                          2021 - Present
                        </p>
                        <p className="text-sm">
                          Contributing to the development of the DevSuit
                          platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="education">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="w-5 h-5 mt-1" />
                    <div>
                      <h3 className="font-semibold">
                        B.Tech in Computer Science
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        BIT Mesra, 2024 - 2028
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </TabsContent>
                <TabsContent value="projects">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Code2 className="w-5 h-5 mt-1" />
                      <div>
                        <h3 className="font-semibold">DevSuit Platform</h3>
                        <p className="text-sm">
                          A platform connecting students and companies through
                          hackathons.
                        </p>
                        <a
                          href="#"
                          className="text-sm text-primary hover:underline"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="achievements">
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Trophy className="w-5 h-5 mt-1" />
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Movies:</strong> Sci-fi, Documentaries
                </p>
                <p>
                  <strong>Music:</strong> Electronic, Jazz
                </p>
                <p>
                  <strong>Books:</strong> Technology, Open Source
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>More Profiles</CardTitle>
            </CardHeader>
            <Separator className="mb-4" />
            <CardContent>
              <div className="space-y-4">
                {developers.map((developer, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={developer.profilePicture} />
                      <AvatarFallback>D{index + 1}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-1">
                      <p className="font-semibold">{developer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {developer.about}
                      </p>
                    </div>
                    <Link href={`/user/${developer.username}`}>
                      <Button size="sm" variant="outline" className="ml-auto">
                        Connect
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span>{achievement.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Shaswat Raj"
                          />
                          <AvatarFallback>SR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Shaswat Raj</p>
                          <p className="text-xs text-muted-foreground">
                            {i} day{i !== 1 ? "s" : ""} ago
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Just finished a great project using React and Next.js on
                        DevSuit. Excited to share more details soon!
                      </p>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
