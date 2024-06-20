"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"


const services = [
  { id: "1", title: "Lawn Mowing", imageUrl: "lawnmowing.jpg", content: "Mowing, Trimming, and Blowing starting at just $40 per cut. Biweekly, Weekly or Custom Plans Available.", link: "lawnmowing", badge: true },
  { id: "2", title: "Lawn Care", imageUrl: "lawncare.jpg", content: "Fertilizer, Weed Control, Re-Seeding, and Aeration", link: "lawncare", badge: true },
  { id: "3", title: "Gardening", imageUrl: "gardening.jpg", content: "Maintenance, Weeding, Cultivating/Turnover, Planting, and Clean Up", link: "gardening", badge: true },
  { id: "4", title: "Yard Cleanup", imageUrl: "yardcleanup.jpg", content: "Spring Clean Up, Fall Clean Up, and General Clean Ups", link: "yardcleanup", badge: true },
  { id: "5", title: "Tree Trimming", imageUrl: "treetrimming.jpg", content: "Trimming and Pruning Services to keep your trees healthy and safe", link: "treetrimming", badge: false },
  { id: "6", title: "Snow Removal", imageUrl: "snowremoval.jpg", content: "Efficient Snow Removal Services to keep your driveway and walkways clear", link: "snowremoval", badge: false },
  { id: "7", title: "Mulching", imageUrl: "mulching.jpg", content: "Applying Mulch to your garden beds to retain moisture and reduce weeds", link: "mulching", badge: false },
  { id: "8", title: "Pest Control", imageUrl: "pestcontrol.jpg", content: "Safe and Effective Pest Control Solutions for your Lawn and Garden", link: "pestcontrol", badge: false },
  { id: "9", title: "Irrigation", imageUrl: "irrigation.jpg", content: "Installing and Maintaining Irrigation Systems to keep your lawn healthy", link: "irrigation", badge: false },
  { id: "10", title: "Landscape Design", imageUrl: "landscapedesign.jpg", content: "Custom Landscape Design Services to enhance the beauty of your outdoor space", link: "landscapedesign", badge: false },
];
 
export default function Services() {
  return (
    <div>
    <h2 className="font-bold text-center text-3xl m-10">Services We Offer</h2>
    <div className="grid grid-cols-3 p-5 gap-5">
      {

        services.map((service) => (
          <Card key={service.id} className="flex flex-col justify-between">
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src={service.imageUrl} />
                  <AvatarFallback>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>Service #{service.id}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{service.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => {
                window.open(`/services/${service.link}`)
              }}>Learn More</Button>
                {service.badge && <Badge variant="accent1">Top Service</Badge>}
              </CardFooter>
            </Card>
        ))
    
}
    </div>
    </div>
  )
}