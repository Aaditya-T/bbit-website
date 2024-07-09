import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function SecondSection() {
  return (
    (<div
      className="flex flex-col items-center justify-center max-w-[70vw] mx-auto">
      <div className="grid gap-96 md:grid-cols-3">
        <Card className="p-6 rounded-2xl shadow-lg bg-[#D8D1FF] min-w-[30vw]">
          <CardHeader className="pb-4 items-center">
            <CardTitle className="text-3xl font-light font-OrelegaOne">LATEST NEWS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {
              Array.from({ length: 3 }).map((_, index) => (
                <>
                <div key={index} className="flex items-start space-x-4">
                  <CalendarIcon className="w-6 h-6 text-muted-foreground" />
                  <div>
                    <p className="font-medium">25 June 2024</p>
                    <p className="text-sm text-muted-foreground">Create event result declaration</p>
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
        <div className="md:col-span-2 flex flex-col gap-6 ml-32">
          <Card className="p-6 bg-[#D8D1FF] rounded-2xl shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/home/chairman.svg" />
                  <AvatarFallback>BP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold">Er. BHIKHUBHAI B. PATEL</CardTitle>
                  <CardDescription className="text-sm font-medium">CHAIRMAN&apos;S MESSAGE</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm font-semibold">
                Education plays a vital role in the socio-economic development of the country. Education that is
                thorough, purposeful and meets the requirements of today&apos;s technological industry market. It is our
                deepest desire to serve the society by molding the technocrats of tomorrow. READ MORE...
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 bg-[#D8D1FF] rounded-2xl shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/home/principal.svg" />
                  <AvatarFallback>KM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold">Dr. K.M Makwana</CardTitle>
                  <CardDescription className="text-sm font-medium">PRINCIPAL&apos;S MESSAGE</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm font-semibold">
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
