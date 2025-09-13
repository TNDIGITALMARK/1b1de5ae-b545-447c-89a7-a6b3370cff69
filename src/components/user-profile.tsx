"use client"

import { MapPin, Calendar, Link2, Users, Heart, MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PostCard } from "@/components/post-card"

// Mock user data
const mockUser = {
  name: "John Doe",
  username: "john_doe",
  avatar: "/placeholder.svg",
  coverImage: "/placeholder.svg",
  bio: "Software Developer passionate about building amazing user experiences. Love hiking, photography, and coffee ☕",
  location: "San Francisco, CA",
  website: "johndoe.dev",
  joinDate: "March 2022",
  stats: {
    posts: 89,
    followers: 1247,
    following: 543
  }
}

const mockUserPosts = [
  {
    id: "1",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg",
      username: "john_doe"
    },
    content: "Just shipped a new feature! The feeling of seeing your code come to life never gets old. 🚀",
    timestamp: "1 hour ago",
    likes: 42,
    comments: 12,
    shares: 8,
    isLiked: true
  }
]

export function UserProfile() {
  return (
    <div className="min-h-screen bg-background">
      {/* Cover Photo & Profile Header */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
          <img 
            src={mockUser.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        {/* Profile Picture & Basic Info */}
        <div className="relative px-4 -mt-16">
          <div className="flex items-end space-x-4">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            
            <div className="pb-4 flex-1">
              <h1 className="text-2xl font-bold">{mockUser.name}</h1>
              <p className="text-muted-foreground">@{mockUser.username}</p>
              <div className="flex space-x-6 mt-2">
                <span className="text-sm"><strong>{mockUser.stats.posts}</strong> Posts</span>
                <span className="text-sm"><strong>{mockUser.stats.followers}</strong> Followers</span>
                <span className="text-sm"><strong>{mockUser.stats.following}</strong> Following</span>
              </div>
            </div>
            
            <div className="pb-4">
              <Button>Follow</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Profile Info */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">About</h3>
                <p className="text-sm text-muted-foreground mb-4">{mockUser.bio}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {mockUser.location}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Link2 className="h-4 w-4 mr-2" />
                    <a href={`https://${mockUser.website}`} className="text-primary hover:underline">
                      {mockUser.website}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Joined {mockUser.joinDate}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Interests */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Photography</Badge>
                  <Badge variant="secondary">Travel</Badge>
                  <Badge variant="secondary">Coffee</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="friends">Friends</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts" className="mt-4 space-y-4">
                {mockUserPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </TabsContent>
              
              <TabsContent value="photos" className="mt-4">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-muted rounded-lg"></div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="friends" className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-4 flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>FR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">Friend {i + 1}</h4>
                          <p className="text-xs text-muted-foreground">Mutual friends</p>
                        </div>
                        <Button size="sm" variant="outline">View</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="about" className="mt-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Work</h4>
                        <p className="text-sm text-muted-foreground">Software Developer at Tech Company</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Education</h4>
                        <p className="text-sm text-muted-foreground">Computer Science, University</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Places Lived</h4>
                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}