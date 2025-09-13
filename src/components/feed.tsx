"use client"

import { PostCreator } from "@/components/post-creator"
import { PostCard } from "@/components/post-card"

// Mock data for posts
const mockPosts = [
  {
    id: "1",
    author: {
      name: "Sarah Wilson",
      avatar: "/placeholder.svg",
      username: "sarah_w"
    },
    content: "Just finished an amazing hiking trip in the mountains! The views were absolutely breathtaking. Nature never fails to amaze me. 🏔️",
    image: "/placeholder.svg",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    shares: 3,
    isLiked: false
  },
  {
    id: "2", 
    author: {
      name: "Mike Chen",
      avatar: "/placeholder.svg",
      username: "mike_chen"
    },
    content: "Working on a new project using React and TypeScript. The type safety is incredible and makes development so much smoother!",
    timestamp: "4 hours ago",
    likes: 15,
    comments: 12,
    shares: 5,
    isLiked: true
  },
  {
    id: "3",
    author: {
      name: "Emily Rodriguez", 
      avatar: "/placeholder.svg",
      username: "emily_r"
    },
    content: "Coffee shop vibes today ☕ There's something magical about working in a bustling café. The ambient noise actually helps me focus better!",
    image: "/placeholder.svg",
    timestamp: "6 hours ago",
    likes: 31,
    comments: 6,
    shares: 2,
    isLiked: false
  }
]

export function Feed() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Post Creator */}
      <PostCreator />
      
      {/* Posts Feed */}
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}