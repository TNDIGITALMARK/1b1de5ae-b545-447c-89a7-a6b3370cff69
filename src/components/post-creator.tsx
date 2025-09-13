"use client"

import { useState } from "react"
import { Image, Smile, MapPin, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export function PostCreator() {
  const [postContent, setPostContent] = useState("")

  const handlePost = () => {
    if (postContent.trim()) {
      // Here you would typically send the post to your backend
      console.log("Posting:", postContent)
      setPostContent("")
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="Your profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind, John?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="min-h-[80px] resize-none border-0 shadow-none focus-visible:ring-0 p-0 text-base"
            />
            
            <Separator className="my-3" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Image className="h-4 w-4 mr-2" aria-hidden="true" />
                  Photo
                </Button>
                
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Smile className="h-4 w-4 mr-2" />
                  Feeling
                </Button>
                
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  Location
                </Button>
                
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Event
                </Button>
              </div>
              
              <Button 
                onClick={handlePost} 
                disabled={!postContent.trim()}
                size="sm"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}