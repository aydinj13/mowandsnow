"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"

export default function Reviews() {
    return (
        <section className="relative isolate overflow-hidden bg-[#ffc107] px-6 py-24 sm:py-32 lg:px-8 mt-10">
            <div className="absolute inset-0 -z-10 bg-[#ffc107] opacity-100" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="font-bold text-center text-3xl mb-10">Testimonials</h2>
            <Card className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src="Andrew.png" />
                <AvatarFallback>Image</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Andrew Hrivnak</CardTitle>
                <CardDescription>5 stars</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>"True to their quotes and impeccable service. I plan to use them every year."</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="accent1">Verified</Badge>
            </CardFooter>
          </Card>
                
            </div>
        </section>
    )
}