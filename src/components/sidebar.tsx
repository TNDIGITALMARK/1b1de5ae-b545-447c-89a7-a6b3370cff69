"use client"

import { Home, Users, MessageCircle, Calendar, Bookmark, Settings, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-card/50 p-4">
      {/* User Profile Section */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">Software Developer</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Menu */}
      <nav className="space-y-1">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Home className="mr-3 h-4 w-4" />
          Home
        </Button>
        
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Users className="mr-3 h-4 w-4" />
          Friends
        </Button>
        
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <MessageCircle className="mr-3 h-4 w-4" />
          Messages
        </Button>
        
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Calendar className="mr-3 h-4 w-4" />
          Events
        </Button>
        
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Bookmark className="mr-3 h-4 w-4" />
          Saved
        </Button>
        
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <TrendingUp className="mr-3 h-4 w-4" />
          Trending
        </Button>
      </nav>

      <Separator className="my-4" />

      {/* Quick Stats */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">Quick Stats</h4>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Friends</span>
            <span className="font-medium">247</span>
          </div>
          <div className="flex justify-between">
            <span>Posts</span>
            <span className="font-medium">89</span>
          </div>
          <div className="flex justify-between">
            <span>Photos</span>
            <span className="font-medium">156</span>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Settings */}
      <Button variant="ghost" className="w-full justify-start" size="sm">
        <Settings className="mr-3 h-4 w-4" />
        Settings
      </Button>
    </aside>
  )
}