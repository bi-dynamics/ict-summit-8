import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Presentations from "../ui/presentations";
import { Download } from "lucide-react";
import Sponsors2023 from "../ui/sponsors-2023";
import PhotoGallery2023 from "../ui/photo-gallery_2023";
import dynamic from "next/dynamic";

export default function page() {
  return (
    <>
      <section
        id="home-2023"
        className="relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-center"
      >
        <div className="w-full h-[500px] lg:h-full bg-transparent absolute top-8 sm:top-24 md:top-44 lg:top-32 right-0 -z-10 overflow-hidden">
          <Image
            src="/2023-banner.jpeg"
            alt="8th National ICT SUMMIT NAMIBIA BACKGROUND"
            className="object-contain aspect-square relative"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={100}
            priority
          />
        </div>
      </section>
      <section
        id="programme-2023"
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
              ICT SUMMIT PROGRAMME 2023
            </h2>
            <h3 className="text-[#cceaff] text-center sm:text-left lg:text-center text-lg">
              Download the ICT Summit programme PDF
            </h3>
          </div>
          <Link
            href="/ICT-SUMMIT-PROGRAMME-2023.pdf"
            target="_blank"
            referrerPolicy="no-referrer"
            title="ICT Summit Programme"
            className="w-full md:w-fit h-fit flex items-center justify-center"
          >
            <Button
              name="Download Programme"
              className="z-[2] w-full rounded-xl text-headings hover:text-white border-2 border-[#E5F4FF] hover:border-primary font-bold bg-[#E5F4FF] active:scale-[.99] transition-all shadow-lg hover:scale-105"
              size={"lg"}
              about="download programme"
            >
              {" "}
              DOWNLOAD PROGRAMME
            </Button>
          </Link>
        </div>
      </section>
      <section
        id="presenters-2023"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 149, 255, 0.4) , rgba(236, 239, 248, 0.2) 50%)",
        }}
        className="w-full h-fit flex items-center justify-center px-4 sm:px-[64px] md:px-[100px] py-8 bg-[#ECEFF8]"
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-16">
          <h2 className="text-headings font-bold text-3xl sm:text-4xl">
            Presenters
          </h2>
          {/* container */}
          <div className="flex flex-col max-w-screen-lg mx-auto justify-center items-start gap-8">
            {/* top part */}
            <div className="w-full h-fit flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
              {/* presenter 1 */}
              <div className="flex flex-col items-center justify-center w-full sm:w-2/3 gap-4">
                <div className="w-full h-[200px] md:h-[400px] relative">
                  <Image
                    src="/elton-witbooi.jpeg"
                    alt="Presentation by Elton Witbooi"
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                    className=" object-contain"
                  />
                </div>
                <div className="w-full h-fit flex flex-col items-start justify-start gap-0 sm:gap-4">
                  <h3 className="font-semibold text-headings text-lg sm:text-2xl w-full text-center md:text-left">
                    Elton Witbooi
                  </h3>
                  <p className="text-base text-center md:text-left w-full">
                    Executive: Cyber Security & ICT: CRAN
                  </p>
                </div>
              </div>
              {/* presenter 2 */}
              <div className="flex flex-col items-center justify-center w-full sm:w-2/3 gap-4">
                <div className="w-full h-[200px] md:h-[400px] relative">
                  <Image
                    src="/nakale.jpeg"
                    alt="Presentation by Gervasius Nakale"
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                    className=" object-contain"
                  />
                </div>
                <div className="w-full h-fit flex flex-col items-start justify-start gap-0 sm:gap-4">
                  <h3 className="font-semibold text-headings text-lg sm:text-2xl w-full text-center md:text-left">
                    Nashilongo Gervasius Nakale
                  </h3>
                  <p className="text-base w-full text-center md:text-left">
                    Executive Director and Founder: Namtshuew Digital cc
                  </p>
                </div>
              </div>
            </div>

            {/* panel discussion */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
              <div className="w-full h-[300px] md:h-[600px] relative">
                <Image
                  src="/panel-discussion.jpeg"
                  alt="Panel Discussion"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  className=" object-contain"
                />
              </div>
              <div className="w-full h-fit flex flex-col items-center md:items-start justify-start gap-4">
                <h3 className="font-semibold text-headings text-2xl">
                  Panel Discussion
                </h3>

                <p className="text-base text-center md:text-left">
                  <span className="text-headings text-lg font-semibold">
                    Dr. Becky Ndjoze-Ojo:
                  </span>
                  <br />
                  Member of parliament and a member of Parliamentary Standing
                  Committee on ICT and Innovation.
                </p>
                <p className="text-base text-center md:text-left">
                  <span className="text-headings text-lg font-semibold">
                    Mrs. Emilia Nghikembua:
                  </span>
                  <br />
                  CEO: CRAN
                </p>
                <p className="text-base text-center md:text-left">
                  <span className="text-headings text-lg font-semibold">
                    Prof Heike Winschiers - Theophilus
                  </span>
                  <br />
                  Professor, Department: Software Engineering NUST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Presentations />
      {/* PRESS RELEASE */}
      <section
        id="press-release-2023"
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
          <div className="w-full h-fit flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            <div className="flex flex-col items-center justify-center w-full md:w-full gap-8">
              <div className="w-full h-[350px] relative bg-white/50 backdrop-blur-lg rounded-xl">
                <Image
                  src="/press-release/ict-industry-challenge-2019.jpg"
                  alt="Industry challenge for ICT Summit 2019"
                  fill
                  className=" object-contain"
                />
              </div>
              <div className="w-full h-fit flex items-start justify-start gap-4">
                <h3 className="font-semibold text-headings text-left text-lg md:text-xl">
                  Invitation: Industry Challenge for ICT Summit 2019
                </h3>
                <Link
                  href="/press-release/Ict-summit-industry-challenge-2019.pdf"
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

            <div className="flex flex-col items-center sm:items-start justify-center  w-full md:w-full gap-8">
              <div className="w-full h-[350px] relative bg-white/50 backdrop-blur-lg rounded-xl">
                <Image
                  src="/press-release/ict-summit-press-ad-2019.png"
                  alt="ICT Summit Press Ad 2019"
                  fill
                  className=" object-contain"
                />
              </div>
              <div className="w-full h-fit flex items-center justify-start gap-4">
                <h3 className="font-semibold text-headings text-left text-lg md:text-xl">
                  ICT Summit Press Ad 2019
                </h3>
                <Link
                  href="/press-release/Ict-summit-press-ad-2019.pdf"
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

            <div className="flex flex-col items-start justify-center  w-full md:w-full gap-8">
              <div className="w-full h-[350px] relative bg-white/50 backdrop-blur-lg rounded-xl">
                <Image
                  src="/press-release/ict-summit-logo.png"
                  alt="ICT Summit Booklet 2023"
                  fill
                  className=" object-contain scale-50"
                />
              </div>
              <div className="w-full h-fit flex items-center justify-start gap-4">
                <h3 className="font-semibold text-headings text-left text-lg md:text-xl">
                  ICT Summit Booklet 2023
                </h3>
                <Link
                  href="/press-release/Ict-summit-booklet-2023.pdf"
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
      {/* REPORTS */}
      <section
        id="reports-2023"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 149, 255, 0.5) , rgba(236, 239, 248, 0.2) 30%)",
        }}
        className="w-full h-fit flex items-center justify-center px-4 sm:px-8 md:px-[100px] py-16 bg-[#ECEFF8]"
      >
        <div className="w-full h-full flex flex-col justify-center items-center md:items-start gap-16">
          <h2 className="text-headings font-semibold text-3xl sm:text-4xl">
            Summit Reports
          </h2>
          <div className="w-full h-fit flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            <div className="flex flex-col items-center sm:items-start justify-center  w-full md:w-2/3 gap-8">
              <div className="w-full h-[350px] relative bg-white/50 backdrop-blur-lg rounded-xl">
                <Image
                  src="/reports/ICT-Summit-Report-2023-thumb.webp"
                  alt="ICT Summit Report 2023"
                  fill
                  className=" object-contain"
                />
              </div>
              <div className="w-full h-fit flex items-center justify-start gap-4">
                <h3 className="font-semibold text-headings text-left text-lg md:text-xl">
                  ICT Summit Report 2023
                </h3>
                <Link
                  href="/reports/ICT-Summit-Report-2023.pdf"
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

            <div className="flex flex-col items-start justify-center  w-full md:w-2/3 gap-8">
              <div className="w-full h-[350px] relative bg-white/50 backdrop-blur-lg rounded-xl">
                <Image
                  src="/reports/Sponsor-Feedback-Report-thumb.webp"
                  alt="ICT Summit Sponsor Survey Report 2023"
                  fill
                  className=" object-contain"
                />
              </div>
              <div className="w-full h-fit flex items-center justify-start gap-4">
                <h3 className="font-semibold text-headings text-left text-lg md:text-xl">
                  ICT Summit Sponsor Survey Analysis Report 2023
                </h3>
                <Link
                  href="/reports/Sponsor-Feedback-Report.pdf"
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
      <PhotoGallery2023 />
      <Sponsors2023 />
      <footer
        id="contact-2023"
        className="w-full h-fit pt-16 pb-8 bg-[#ECEFF8]"
      >
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
