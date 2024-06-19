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
            <Card className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>Image</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Andrew Hrivnak</CardTitle>
                <CardDescription></CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p></p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => {
                window.open("")
              }}>Learn More</Button>
              <Badge variant="accent1">Top Service</Badge>
            </CardFooter>
          </Card>
                
            </div>
        </section>
    )
}