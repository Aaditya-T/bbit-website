import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function SecondSection() {
  return (
    (<div
      className="flex flex-col items-center justify-center max-w-[70vw] mx-auto">
      <div className="grid gap-[10vw] md:grid-cols-3">
        <Card className="p-[2vw] rounded-2xl shadow-lg bg-[#D8D1FF] min-w-[30vw] max-w-[30vw]">
          <CardHeader className="items-center">
            <CardTitle className="text-[2vw] font-light font-OrelegaOne">LATEST NEWS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {
              Array.from({ length: 3 }).map((_, index) => (
                <>
                <div key={index} className="flex items-start space-x-4">
                  <CalendarIcon className="w-[2vw] h-[3vh] text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-[1vw]">25 June 2024</p>
                    <p className="text-[1vw] text-muted-foreground">Create event result declaration</p>
                  </div>
                </div>
                <hr className="h-1 bg-[#27066F] rounded-2xl" />
                </>
              ))
            }
          </CardContent>
          <CardFooter>
            <Button variant="default" className="bg-[#EAE6FF] rounded-xl">View More</Button>
          </CardFooter>
        </Card>
        <div className="md:col-span-2 flex flex-col gap-6 ml-[7vw]">
          <Card className="p-[1vw] bg-[#D8D1FF] rounded-2xl shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-[5vw] h-[5vw]">
                  <AvatarImage src="/home/chairman.svg" />
                  <AvatarFallback>BP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-[2vw] font-bold">Chairman{"'"}s Message</CardTitle>
                  <CardDescription className="text-[1.5vw] font-medium">Er. BHIKHUBHAI B. PATEL</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[1vw] font-semibold">
                Education plays a vital role in the socio-economic development of the country. Education that is
                thorough, purposeful and meets the requirements of today&apos;s technological industry market. It is our
                deepest desire to serve the society by molding the technocrats of tomorrow.
              </p>
            </CardContent>
          </Card>
          <Card className="p-[1vw] bg-[#D8D1FF] rounded-2xl shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-[5vw] h-[5vw]">
                  <AvatarImage src="/home/principal.svg" />
                  <AvatarFallback>KM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-[2vw] font-bold">Principal{"'"}s Message</CardTitle>
                  <CardDescription className="text-[1.5vw] font-medium">Dr. K.M Makwana</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[1vw] font-semibold">
                I am proud of being the Principal of such a wonderful institution dedicated to the causes of better
                India. Through education and their real empowerment, come on let&apos;s give our best and make this
                institution a modern temple of learning through our diligence, devotion and dedication. READ MORE...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>)
  );
}

function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}
