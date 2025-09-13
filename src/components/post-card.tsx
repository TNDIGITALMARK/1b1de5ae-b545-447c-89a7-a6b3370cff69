"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface PostAuthor {
  name: string
  avatar: string
  username: string
}

interface Post {
  id: string
  author: PostAuthor
  content: string
  image?: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  isLiked: boolean
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h4 className="font-semibold text-sm">{post.author.name}</h4>
              <p className="text-xs text-muted-foreground">@{post.author.username} · {post.timestamp}</p>
            </div>
          </div>
          
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm mb-3 leading-relaxed">{post.content}</p>
        
        {post.image && (
          <div className="mb-3">
            <img 
              src={post.image} 
              alt="Post image" 
              className="w-full rounded-lg border bg-muted max-h-96 object-cover"
            />
          </div>
        )}
        
        <Separator className="my-3" />
        
        {/* Engagement Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>{likes} likes</span>
          <div className="flex space-x-4">
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>
        
        <Separator className="mb-3" />
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLike}
            className={`flex-1 ${isLiked ? "text-red-500" : ""}`}
          >
            <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-red-500" : ""}`} />
            Like
          </Button>
          
          <Button variant="ghost" size="sm" className="flex-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Comment
          </Button>
          
          <Button variant="ghost" size="sm" className="flex-1">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}