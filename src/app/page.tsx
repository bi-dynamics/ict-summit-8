import Image from "next/image";
import { Metadata } from "next";
import { Button } from "./ui/button";
import {
  LocateFixed,
  Calendar,
  Download,
  Facebook,
  Globe,
  Linkedin,
} from "lucide-react";
import Sponsors2024 from "./ui/sponsors-2024";
import dynamic from "next/dynamic";

const PhotoGallery = dynamic(() => import("./ui/photo-gallery"), {
  ssr: false,
});
const VideoGallery = dynamic(() => import("./ui/video-gallery"), {
  ssr: false,
});
const RegForm = dynamic(() => import("./ui/registration-form"), {
  ssr: false,
});

import Link from "next/link";
import Presentations_2024 from "./ui/presentations-2024";
import Exhibitors_2024 from "./ui/exhibitors-2024";

export const metadata: Metadata = {
  title: "ICT Summit Namibia",

  description:
    "Join us for the 8th National ICT Summit, scheduled for 9 - 11 September, 2024. Located at Mercure Hotel Windhoek, Namibia.",
  openGraph: {
    type: "website",
    url: "https://localhost:3000.com/",
    title: "ICT Summit Namibia",
    description:
      "Join us for the 8th National ICT Summit, scheduled for 9 - 11 September, 2024. Located at Mercure Hotel Windhoek, Namibia.",
    siteName: "ICT Summit Namibia",
  },
  twitter: {
    card: "summary",
    title: "ICT Summit Namibia",

    description:
      "Join us for the 8th National ICT Summit, scheduled for 9 - 11 September, 2024. Located at Mercure Hotel Windhoek, Namibia.",
  },
};

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen flex items-center justify-center"
      >
        <div className="w-full h-full absolute top-0 right-0 -z-10 overflow-hidden">
          <Image
            src="/ict-summit-namibia.jpg"
            alt="8th National ICT SUMMIT NAMIBIA BACKGROUND"
            className="object-cover relative animate-move blur-[2px] sm:blur-[4px] md:blur-none"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={100}
            priority
          />
          {/* gradient layer */}
          <div className="absolute hidden md:block lg:hidden z-[5] h-full w-[70%] left-0 bg-gradient-to-l  from-transparent via-[#eceff8] via-20% to-transparent to-70%"></div>
        </div>
        {/* gradient layer */}
        <div className="absolute -z-[9] h-full w-full bg-gradient-to-b from-transparent via-[#eceff800] via-80% to-[#ECEFF8] to-95%"></div>
        {/* content container */}
        <main className="h-full w-full mt-[172px] md:pt-16 px-4 sm:px-8 lg:px-[100px] flex flex-col items-start justify-center gap-8">
          <div className="w-full md:w-[60%] lg:w-1/2 h-full flex flex-col items-center justify-center gap-6 sm:gap-8 ">
            <h1 className="text-2xl -mb-4 text-headings text-left font-black">
              8th NATIONAL ICT SUMMIT
            </h1>
            <h2 className="text-xl sm:text-2xl z-[20] text-center text-headings sm:leading-snug leading-relaxed font-medium italic py-2 bg-clip-text w-full ">
              &quot;Building resilience to <br />
              <span
                className="font-bold w-full text-[40px] px-4 sm:text-7xl bg-clip-text text-center text-transparent tracking-tight"
                style={{
                  backgroundImage: "radial-gradient(circle, #0095FF , #0077CC)",
                }}
              >
                &quot;ADAPT OR DIE&quot;
              </span>{" "}
              <br />
              in the era of <br />
              <span className="text-primary font-bold">
                Digital Transformation
              </span>{" "}
              <br className="visible sm:hidden" />
              and <br className="visible sm:hidden" />
              <span className="text-primary font-bold">
                Artificial Intelligence (AI)
              </span>
              &quot;
            </h2>
            {/* <Link
              href="/Invitation-to-attend-the-7th-National-ICT-Summit-OMAs.pdf"
              target="_blank"
              referrerPolicy="no-referrer"
              title="Summit Invitation"
              className="w-fit h-fit flex items-center justify-center"
            >
              <Button
                name="ICT Summit Invitation"
                about="ICT Summit invitation"
                className="text-base border rounded-2xl border-headings bg-transparent text-headings hover:bg-primary hover:border-white hover:text-white active:scale-[.99] group transition-all py-7 px-[18px]"
              >
                OPEN ICT SUMMIT INVITATION
                <SquareArrowOutUpRight className="ml-2 h-5 w-5 group-active:scale-[.99]" />
              </Button>
            </Link> */}
            <div className="flex flex-col sm:flex-row md:flex-col items-center w-full justify-center sm:gap-10 md:gap-4 gap-4">
              <div className="text-headings text-lg sm:text-xl font-medium flex items-center justify-center gap-4">
                <LocateFixed className="text-primary" />
                Mercure (Safari) Hotel, Windhoek
              </div>
              <div className="text-headings text-lg sm:text-xl font-medium flex items-center justify-center gap-4">
                <Calendar className="text-primary" />
                9-11 September 2024
              </div>
            </div>
          </div>
        </main>
      </section>
      <section
        id="home"
        className="w-full overflow-hidden flex flex-col items-center justify-center h-fit bg-[#ECEFF8]"
      >
        {/* container */}
        <div className="flex flex-col md:flex-row gap-4 z-10 pt-8  pb-16 px-4 sm:px-8 md:px-[100px] w-full">
          <div className="flex flex-col justify-center items-start sm:items-center md:items-start gap-8 md:gap-16 w-full h-[40dvh] sm:h-[70dvh]">
            <h2 className=" text-2xl md:text-4xl text-center sm:text-left font-bold text-headings w-full">
              NATIONAL ICT SUMMIT
            </h2>
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FMICTNamibia%2Fvideos%2F841037374827966%2F&show_text=false&width=560&t=0"
              className="overflow-hidden w-full h-[600px] border-none"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full relative h-[70dvh] overflow-hidden">
            <Image
              src="/ict-launch.jpg"
              alt="8th National ICT SUMMIT Launch"
              className="object-contain"
              fill
            />
          </div>
        </div>
      </section>
      <Sponsors2024 />
      <section
        id="about"
        className="w-full overflow-hidden flex flex-col items-center justify-center h-fit bg-[#ECEFF8]"
      >
        <div className="w-full absolute h-[80%] z-[1] opacity-10 overflow-hidden">
          <Image
            src="/brief-background.jpg"
            alt="8th National ICT SUMMIT NAMIBIA BACKGROUND"
            className="object-cover"
            fill
          />
        </div>
        {/* container */}
        <div className="flex flex-col gap-16 z-10  py-16 px-4 sm:px-8 md:px-[100px]">
          <div className="flex flex-col justify-center items-start gap-8">
            <h2 className=" text-2xl md:text-4xl font-bold text-headings">
              THE NATIONAL ICT SUMMIT IN BRIEF
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <p className="text-base md:text-lg">
                Hundreds of Information and Communication Technology, (ICT)
                experts and institutions will converge in Windhoek for the 8th
                National ICT Summit scheduled to take place from the 9th - 11th
                September 2024. The Summit will be held under the brand
                “Building resilience to &quot;Adapt or die&quot; in the era of
                Digital Transformation and Artificial Intelligence (AI)”. <br />{" "}
                <br />
                The Summit creates a platform for the ICT industry to discuss
                trends and challenges facing the industry globally and in the
                country. ICT industry players use this platform to showcase
                their ICT solutions and services. The Summit also exposes the
                youth to latest ICT trends and affords them the opportunity to
                also present their latest innovations and inventions.
              </p>
              <p className="text-base md:text-lg">
                This Summit will define the roadmap for development and
                effective integration of technology, as well as the agenda for
                growing ICT for an inclusive society.It will position ICT as a
                vital tool in achieving Government&apos;s main national
                priorities of economic growth and development towards the goals
                of poverty eradication and shared prosperity for all Namibians.
              </p>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col md:flex-row items-start justify-center gap-16">
            <div className="w-full flex flex-col justify-center items-start gap-4 md:gap-8">
              <h2 className="text-headings font-semibold text-xl md:text-3xl">
                Mandate
              </h2>
              <p className="text-base md:text-lg">
                To create a platform for the Information and Communication
                Technology ( ICT) industry to discuss the trends and challenges
                facing the industry globally and in the country. To encourage
                ICT industry players to showcase their ICT solutions as well as
                to expose the youth to latest ICT trends.
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 md:gap-8">
              <h2 className="text-headings font-semibold text-xl md:text-3xl">
                Our Vision
              </h2>
              <p className="text-base md:text-lg">
                To be the ICT Summit for all Namibians joining hands and live up
                to the image of ICT for all Namibians.
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 md:gap-8">
              <h2 className="text-headings font-semibold text-xl md:text-3xl">
                Our Mission
              </h2>
              <p className="text-base md:text-lg">
                To be the main catalyst in empowering Namibians to be ICT
                professionals to be able to unlock the full potential of
                technology and human capital and deliver value to the citizens,
                visitors and investors, so that Namibia becomes a leader in ICT
                development in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="programme"
        className="w-full h-fit flex items-center justify-center sm:px-8 lg:px-[100px] py-16 bg-[#ECEFF8]"
      >
        <div className="border relative overflow-hidden rounded-xl w-full lg:w-fit h-fit flex flex-col md:flex-row items-center sm:items-start md:items-center justify-between py-8 px-4 sm:px-8 gap-8 md:gap-16">
          <Image
            src="/ict-invitation-background.jpg"
            alt="8th National ICT SUMMIT NAMIBIA BACKGROUND"
            className="object-cover z-[1] lg:animate-move"
            fill
          />

          <div className="w-fit h-fit flex flex-col items-center p-2 sm:items-start gap-4 md:gap-2 z-[2]">
            <h2 className="text-white font-semibold text-xl md:text-3xl text-center sm:text-left md:text-center">
              ICT SUMMIT PROGRAMME & BOOKLET 2024
            </h2>
            <h3 className="text-[#cceaff] text-center sm:text-left lg:text-center text-lg">
              Download the ICT Summit Programme & Booklet
            </h3>
          </div>
          <Link
            href="/ICT-SUMMIT-BOOKLET-&-PROGRAMME-2024.pdf"
            target="_blank"
            referrerPolicy="no-referrer"
            title="ICT Summit Programme & Booklet 2024"
            className="w-full md:w-fit h-fit flex items-center justify-center"
          >
            <Button
              name="Download Programme & Booklet"
              className="z-[2] w-full rounded-xl text-headings hover:text-white border-2 border-[#E5F4FF] hover:border-primary font-bold bg-[#E5F4FF] active:scale-[.99] transition-all shadow-lg hover:scale-105"
              size={"lg"}
              about="download programme & booklet"
            >
              {" "}
              DOWNLOAD
            </Button>
          </Link>
        </div>
      </section>
      <RegForm />
      {/* PRESS RELEASE */}
      <section
        id="press-release"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 149, 255, 0.5) , rgba(236, 239, 248, 0.2) 30%)",
        }}
        className="w-full h-fit flex items-center justify-center px-4 sm:px-8 md:px-[100px] py-16 bg-[#ECEFF8]"
      >
        <div className="w-full h-full flex flex-col justify-center items-center md:items-start gap-16">
          <h2 className="text-headings font-semibold text-3xl sm:text-4xl">
            Press Release
          </h2>
          <div className="w-full h-fit flex flex-col md:flex-row md:flex-wrap  items-center md:items-start justify-center gap-8">
            <div className="flex flex-col items-center justify-center w-full md:w-full gap-8">
              <div className="w-full h-[700px] relative bg-white/50 backdrop-blur-lg rounded-xl">
                <Image
                  src="/press-release/media-release-ict-summit-2024.png"
                  alt="Media Release for ICT Summit 2024"
                  fill
                  className=" object-contain"
                />
              </div>
              <div className="w-full h-fit flex items-start justify-start gap-4">
                <h3 className="font-semibold text-headings text-left text-lg md:text-xl">
                  Media Release for ICT Summit 2024
                </h3>
                <Link
                  href="/press-release/media-release-ict-summit-2024.pdf"
                  target="_blank"
                  title="Download Document"
                  className="w-fit h-fit flex items-center justify-center"
                >
                  <Button
                    name="Download"
                    about="download document"
                    className="bg-transparent"
                  >
                    <Download className="text-headings" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Presentations_2024 />
      <PhotoGallery />
      {/* Youth Day */}
      {/* <section
        id="youth-exhibition"
        className="w-full h-fit flex items-center justify-center sm:px-8 md:px-[100px] py-8 bg-[#ECEFF8]"
      >
        <div className="relative overflow-hidden rounded-xl w-full h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-12 px-0 sm:px-6 md:px-12 gap-8">
          <Image
            src="/ict-invitation-background.jpg"
            alt="8th National ICT SUMMIT NAMIBIA BACKGROUND"
            className="object-cover blur-[2px] sm:blur-0 z-[1] brightness-50 md:brightness-80 sm:animate-move"
            fill
          />

          <div className="w-full md:w-1/2 h-fit flex flex-col items-center md:items-start gap-8 z-[2] px-4 sm:px-8">
            <div className="flex flex-col px-2 justify-center items-center md:items-start gap-2">
              <h2 className="text-white font-semibold text-center md:text-left text-3xl md:text-4xl">
                Youth Exhibition Program
              </h2>
              <h3 className="text-white md:text-[#cceaff] text-center md:text-left text-lg w-full">
                For the youth to register and present their ICT projects during
                the national ICT Summit youth day.
              </h3>
            </div>
            <Link
              href="https://bit.ly/ICT_summit2024"
              target="_blank"
              title="Register"
              referrerPolicy="no-referrer"
              className="w-full md:w-fit h-fit flex items-center justify-center"
            >
              <Button
                name="Register"
                className="z-[2] rounded-xl font-bold w-full text-headings hover:text-white border-2 border-[#E5F4FF] hover:border-primary bg-[#E5F4FF] active:scale-[.99] transition-all shadow-lg hover:scale-105"
                size={"lg"}
                about="Register for youth day"
              >
                REGISTER FOR YOUTH DAY
              </Button>
            </Link>
          </div>
          <div className="relative w-full md:w-1/2 h-full rounded-xl ">
            <Image
              src="/ict-youth.jpg"
              alt="Youth Exhibition 2024"
              className="z-[2] object-contain sm:rounded-xl"
              fill
            />
          </div>
        </div>
      </section> */}
      <Exhibitors_2024 />

      <footer id="contact" className="w-full h-fit pt-16 pb-8 bg-[#ECEFF8]">
        {/* container */}
        <div className="w-full max-w-[960px] px-4 md:px-8 mx-auto flex flex-col items-center justify-center gap-16">
          <div className="w-full mx-auto flex flex-col items-center justify-center gap-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-headings">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg text-headings/70 w-full text-center">
              For any queries or contributions please do not hesitate to reach
              us:
            </p>
          </div>
          <div className="w-full mx-auto text-lg md:text-xl flex flex-col text-center items-center justify-center gap-8">
            <h3 className=" font-semibold text-headings">
              Contact Person: Mr. Fillemon Johannes / Ms Johanna Nashipili
            </h3>
            <h3 className="font-semibold text-headings">
              Tel:{" "}
              <Link
                href="tel:+264-81-286-6223"
                title="Mr Fillemon Johannes phone number"
                className="hover:text-primary"
              >
                +264 81 286 6223
              </Link>
              /
              <Link
                href="tel:+264-81-259-8216"
                title="Ms Johanna Nashipili phone number"
                className="hover:text-primary"
              >
                +264 81 259 8216
              </Link>
            </h3>
            <h3 className=" font-semibold text-headings">
              Email:{" "}
              <Link
                href="mailto:ICT.Summit@mict.gov.na"
                className="hover:text-primary"
                title="Email Address"
              >
                ICT.Summit@mict.gov.na
              </Link>
            </h3>
          </div>
          <p className="text-center">
            © Copyright 2024, Government of the Republic of Namibia, MICT
            <br />
            Powered by{" "}
            <Link
              title="BI-Dynamics"
              href="https://bi-dynamics.com/"
              className="text-primary font-bold hover:text-headings"
            >
              BI Dynamics Pty Ltd.
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
