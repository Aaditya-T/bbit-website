import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";

export function SecondSection() {
  return (
    <div className="mt-[10vh] flex flex-col items-center justify-center max-w-[70vw] mx-auto">
      <div className="grid gap-[10vw] md:grid-cols-3">
        <Card className="p-[2vw] rounded-2xl bg-[#D8D1FF] min-w-[30vw] max-w-[30vw]">
          <CardHeader className="items-center">
            <CardTitle className="text-[2vw] text-[#27066F] font-bold">
              LATEST NEWS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <>
                <div key={index} className="flex items-start space-x-4">
                  <CalendarIcon className="w-[2vw] h-[3vh] text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-[1vw]">25 June 2024</p>
                    <p className="text-[1vw] text-muted-foreground">
                      Create event result declaration
                    </p>
                  </div>
                </div>
                <hr className="h-1 bg-[#27066F] rounded-2xl" />
              </>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="default" className="bg-[#EAE6FF] rounded-xl">
              View More
            </Button>
          </CardFooter>
        </Card>

        <div className=" left-[16vw] h-full flex flex-col justify-center items-center relative">
          <Card className="bg-[#D8D1FF] rounded-[2vh] w-[40vw] h-[25vh] text-[#27066F] absolute mb-[39vh]">
            <CardHeader className="pb-[0vh]">
              <div className="flex items-center space-x-[2vh] mx-auto">
                <div>
                  <CardTitle className="text-[2.7vh] font-bold -mt-[1vh]">
                    Our Vision
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-[2vh]">
              <p className="text-[1.9vh] md:text-[1.7vh] font-semibold">
                At BBIT our vision is to create a nurturing and innovative
                environment where every student can thrive academically,
                socially, and personally. We aspire to be a leading institution
                recognized for excellence in education, fostering a culture of
                inclusivity, critical thinking, and lifelong learning. Through
                cutting-edge research, community engagement, and a commitment to
                sustainability, we aim to empower our students to become
                compassionate leaders and impactful global citizens.
              </p>
            </CardContent>
          </Card>

          <Card className="p-[2.5vh] bg-[#D8D1FF] rounded-[2vh] w-[40vw] h-[37vh] mt-[27vh] text-[#27066F]">
            <CardHeader className="pb-[0vh]">
              <div className="flex items-center space-x-[2vh] mx-auto">
                <div>
                  <CardTitle className="text-[2.7vh] font-bold -mt-[4vh] mb-[1vh]">
                    Our Mission
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-[2vh]">
              <ul className="list-disc">
                <li className="text-[2vh] md:text-[1.7vh] font-semibold mb-[1.7vh]">
                  Develop strong fundamental concepts, analytical abilities, and
                  problem-solving skills.
                </li>
                <li className="text-[2vh] md:text-[1.7vh] font-semibold mb-[1.7vh]">
                  Provide an environment that fosters creativity and innovation.
                </li>
                <li className="text-[2vh] md:text-[1.7vh] font-semibold mb-[1.7vh]">
                  Deliver quality training to enhance skills and
                  entrepreneurship.
                </li>
                <li className="text-[2vh] md:text-[1.7vh] font-semibold mb-[1.7vh]">
                  Create opportunities for lifelong learning to meet evolving
                  global technological standards.
                </li>
                <li className="text-[2vh] md:text-[1.7vh] font-semibold">
                  Encourage excellence in technical education.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
