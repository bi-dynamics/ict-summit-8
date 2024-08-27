"use client";

import Link from "next/link";
import { Button } from "./button";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function SponsorshipPackages() {
  const [sponsorshipPackage, setSponsorshipPackage] = useState("PLATINUM");
  const [packageMenu, setPackageMenu] = useState(false);

  return (
    <main
      id="sponsorship-packages"
      className="w-full h-fit flex flex-col gap-16 items-center justify-center px-4 sm:px-8 md:px-[100px] py-16 bg-[#ECEFF8]"
    >
      <h2 className="text-headings font-semibold text-3xl sm:text-4xl w-full text-center">
        Sponsorship Packages
      </h2>
      {/* container */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-16">
        <div className="md:hidden relative flex justify-center items-center gap-4 w-full font-medium border-t border-slate-300 p-4">
          Choose
          <Button
            name="Download Programme"
            className="z-[2] w-full rounded-full text-headings hover:text-white border-2 border-[#E5F4FF] hover:border-primary font-bold bg-[#E5F4FF] active:scale-[.99] transition-all shadow-lg"
            size={"lg"}
            about="download programme"
            onClick={() => setPackageMenu((prev) => !prev)}
          >
            {sponsorshipPackage}
            {packageMenu ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {packageMenu && (
            <div className="z-10 absolute top-20 bg-white w-[95%] p-4 flex flex-col items-start justify-start shadow-md rounded-md">
              <h3 className="text-slate-500 font-light">View a package</h3>
              <Button
                variant="ghost"
                className="m-0 text-headings underline p-0"
                onClick={() => {
                  setSponsorshipPackage("SILVER");
                  setPackageMenu(false);
                }}
              >
                Silver
              </Button>
              <Button
                variant="ghost"
                className="m-0 text-headings underline p-0"
                onClick={() => {
                  setSponsorshipPackage("DIAMOND");
                  setPackageMenu(false);
                }}
              >
                Diamond
              </Button>
              <Button
                variant="ghost"
                className="m-0 text-headings underline p-0"
                onClick={() => {
                  setSponsorshipPackage("GOLD");
                  setPackageMenu(false);
                }}
              >
                Gold
              </Button>
              <Button
                variant="ghost"
                className="m-0 text-headings underline p-0"
                onClick={() => {
                  setSponsorshipPackage("PLATINUM");
                  setPackageMenu(false);
                }}
              >
                Platinum
              </Button>
            </div>
          )}
        </div>

        {/* MOBILE VIEWS */}
        {/* SILVER TABLE */}
        {sponsorshipPackage.includes("SILVER") && (
          <table className="table-auto w-full h-full md:hidden">
            <thead className="bg-[#ECEFF8]">
              <tr className="text-lg">
                <th></th>
                <th colSpan={3}>
                  <p className=" font-light">SILVER</p>
                </th>
              </tr>

              <tr className="text-2xl font-medium h-10">
                <th></th>

                <th colSpan={3}>N$ 30 000</th>
              </tr>

              <tr className="h-24">
                <th></th>

                <th colSpan={3} className="content-start px-6">
                  <Link
                    className="flex mx-auto mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                    href={"https://www.facebook.com/MICTNamibia/"}
                    target="_blank"
                    title="Choose Silver"
                  >
                    Choose Silver <ChevronRight />
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-y border-slate-300 h-20">
                <td colSpan={3} className="text-primary font-medium text-base">
                  SPECIFIC BENEFITS
                </td>
              </tr>
              <tr className="h-20">
                <td className="font-medium">Advertising</td>
                <td className="bg-slate-200 text-center" colSpan={3}>
                  -
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Acknowledgment</td>

                <td className="text-center p-6">
                  Listing of the Company Logo on the ICT Summit Website and
                  booklet as a Silver Sponsor
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Panel Discussion</td>

                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Break-away Session</td>

                <td className="text-center p-6">-</td>
              </tr>

              <tr>
                <td className="font-medium">Exhibition Stand</td>

                <td className="bg-slate-200 text-center p-6">Available</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Stand Opportunities</td>

                <td className="text-center p-6">
                  Invite your customers and partners to visit your exhibition
                  stand
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Company Banner</td>

                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Exhibition Presentation</td>

                <td className="text-center p-6">-</td>
              </tr>

              <tr className="border-y border-slate-300 h-20">
                <td colSpan={3} className="text-primary font-medium text-base">
                  NB: The following information is required for the Summit
                  Website and booklet (program guide):
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Company Profile</td>

                <td className="bg-slate-200 text-center p-6">
                  500 words maximum, Arial size 11
                </td>
              </tr>

              <tr>
                <td className="font-medium">Company Logo</td>

                <td className="text-center p-6">
                  Company logo (PDF, vector or PNG format, High Resolution 300)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Official Photo</td>

                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Presenters' Topics</td>

                <td className="text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Adverts</td>

                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>
            </tbody>

            <tfoot>
              <tr className="h-40">
                <th></th>

                <th className="px-6" colSpan={3}>
                  <Link
                    className="mx-auto flex mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                    href={"https://www.facebook.com/MICTNamibia/"}
                    target="_blank"
                    title="Choose Silver"
                  >
                    Choose Silver <ChevronRight />
                  </Link>
                </th>
              </tr>
            </tfoot>
          </table>
        )}

        {/* DIAMOND PACKAGE */}
        {sponsorshipPackage.includes("DIAMOND") && (
          <table className="md:hidden table-auto w-full h-full">
            <thead className="bg-[#ECEFF8]">
              <tr className="text-lg">
                <th></th>

                <th>
                  <p className=" font-light">DIAMOND</p>
                </th>
              </tr>

              <tr className="text-2xl font-medium h-10">
                <th></th>

                <th>N$ 50 000</th>
              </tr>

              <tr className="h-24">
                <th></th>

                <th className="content-start px-6">
                  <Link
                    className="flex mx-auto mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                    href={"https://www.facebook.com/MICTNamibia/"}
                    target="_blank"
                    title="Choose Diamond"
                  >
                    Choose Diamond <ChevronRight />
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-y border-slate-300 h-20">
                <td colSpan={6} className="text-primary font-medium text-base">
                  SPECIFIC BENEFITS
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="h-20">
                <td className="font-medium">Advertising</td>

                <td className="bg-slate-200 text-center px-6">
                  Company name included in advert materials (TV and print media)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Acknowledgment</td>

                <td className="text-center p-6">
                  Acknowledged as a Diamond Sponsor at the Launch: Opening and
                  Closing ceremonies
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Panel Discussion</td>

                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Break-away Session</td>

                <td className="text-center p-6">-</td>
              </tr>

              <tr>
                <td className="font-medium">Exhibition Stand</td>

                <td className="bg-slate-200 text-center p-6">Available</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Stand Opportunities</td>

                <td className="text-center p-6">
                  Invite your customers and partners to visit your exhibition
                  stand
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Company Banner</td>
                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Exhibition Presentation</td>

                <td className="text-center p-6">
                  Allocated 15 Minutes exhibition presentation
                </td>
              </tr>

              <tr className="border-y border-slate-300 h-20">
                <td colSpan={5} className="text-primary font-medium text-base">
                  NB: The following information is required for the Summit
                  Website and booklet (program guide):
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Company Profile</td>

                <td className="bg-slate-200 text-center p-6">
                  500 words maximum, Arial size 11
                </td>
              </tr>

              <tr>
                <td className="font-medium">Company Logo</td>

                <td className="text-center p-6">
                  Company logo (PDF, vector or PNG format, High Resolution 300)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Official Photo</td>

                <td className="bg-slate-200 text-center p-6">
                  Official photo and full names for the Head of the Institution
                  (JPG format)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Presenters' Topics</td>

                <td className="text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Adverts</td>
                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>
            </tbody>

            <tfoot>
              <tr className="h-40">
                <th></th>

                <th className="px-6">
                  <Link
                    className="mx-auto flex mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                    href={"https://www.facebook.com/MICTNamibia/"}
                    target="_blank"
                    title="Choose Diamond"
                  >
                    Choose Diamond <ChevronRight />
                  </Link>
                </th>
              </tr>
            </tfoot>
          </table>
        )}

        {/* GOLD PACKAGE not done*/}
        {sponsorshipPackage.includes("GOLD") && (
          <table className="md:hidden table-auto w-full h-full">
            <thead className="bg-[#ECEFF8]">
              <tr className="text-lg">
                <th></th>

                <th>
                  <p className=" font-light">GOLD</p>
                </th>
              </tr>

              <tr className="text-2xl font-medium h-10">
                <th></th>

                <th>N$ 70 000</th>
              </tr>

              <tr className="h-24">
                <th></th>

                <th className="content-start px-6">
                  <Link
                    className="flex mx-auto mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                    href={"https://www.facebook.com/MICTNamibia/"}
                    target="_blank"
                    title="Choose Gold"
                  >
                    Choose Gold <ChevronRight />
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-y border-slate-300 h-20">
                <td colSpan={6} className="text-primary font-medium text-base">
                  SPECIFIC BENEFITS
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="h-20">
                <td className="font-medium">Advertising</td>

                <td className="bg-slate-200 text-center px-6">
                  Company name included in advert materials (TV and print media
                  adverts)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Acknowledgment</td>

                <td className="text-center p-6">
                  Acknowledged as a Gold Sponsor at the Launch: Opening and
                  Closing ceremonies
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Panel Discussion</td>

                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Break-away Session</td>

                <td className="text-center p-6">
                  One break-away session for 45 Minutes.
                </td>
              </tr>

              <tr>
                <td className="font-medium">Exhibition Stand</td>

                <td className="bg-slate-200 text-center p-6">Available</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Stand Opportunities</td>

                <td className="text-center p-6">
                  Invite your customers and partners to visit your exhibition
                  stand, attend/follow virtual breakaway presentations
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Company Banner</td>

                <td className="bg-slate-200 text-center p-6">-</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Exhibition Presentation</td>

                <td className="text-center p-6">
                  Allocated 15 Minutes exhibition presentation
                </td>
              </tr>

              <tr className="border-y border-slate-300 h-20">
                <td colSpan={5} className="text-primary font-medium text-base">
                  NB: The following information is required for the Summit
                  Website and booklet (program guide):
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Company Profile</td>

                <td className="bg-slate-200 text-center p-6">
                  500 words maximum, Arial size 11
                </td>
              </tr>

              <tr>
                <td className="font-medium">Company Logo</td>

                <td className="text-center p-6">
                  Company logo (PDF, vector or PNG format, High Resolution 300)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Official Photo</td>

                <td className="bg-slate-200 text-center p-6">
                  Official photo and full names for the Head of the Institution
                  (JPG format)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Presenters' Topics</td>

                <td className="text-center p-6">
                  Presenters' topics and synopsis (200 words maximum)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Adverts</td>

                <td className="bg-slate-200 text-center p-6">
                  One A5 advert (PDF format, standard size)
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr className="h-40">
                <th></th>

                <th className="px-6">
                  <Link
                    className="mx-auto flex mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                    href={"https://www.facebook.com/MICTNamibia/"}
                    target="_blank"
                    title="Choose Gold"
                  >
                    Choose Gold <ChevronRight />
                  </Link>
                </th>
              </tr>
            </tfoot>
          </table>
        )}

        {/* PLATINUM PACKAGE not done */}
        {sponsorshipPackage.includes("PLATINUM") && (
          <table className="md:hidden table-auto w-full h-full">
            <thead className="bg-[#ECEFF8]">
              <tr className="text-lg">
                <th></th>

                <th>
                  <p className=" font-light">PLATINUM</p>
                </th>
              </tr>

              <tr className="text-2xl font-medium h-10">
                <th></th>

                <th>N$ 110 000</th>
              </tr>

              <tr className="h-24">
                <th></th>

                <th className="content-start px-6">
                  <Link
                    className="flex mx-auto mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                    href={"https://www.facebook.com/MICTNamibia/"}
                    target="_blank"
                    title="Choose Platinum"
                  >
                    Choose Platinum <ChevronRight />
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-y border-slate-300 h-20">
                <td colSpan={6} className="text-primary font-medium text-base">
                  SPECIFIC BENEFITS
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="h-20">
                <td className="font-medium">Advertising</td>

                <td className="bg-slate-200 text-center px-6">
                  Company logo and name included in adverts materials (TV, print
                  media and radio)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Acknowledgment</td>

                <td className="text-center p-6">
                  Acknowledged as a Major Sponsor at the Launch: Opening and
                  Closing Ceremonies
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Panel Discussion</td>

                <td className="bg-slate-200 text-center p-6">
                  Company CEO/MD will be a panellist on the Executive panel
                  discussion
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Break-away Session</td>

                <td className="text-center p-6">
                  One break-away session presentation on any agreed topic for 40
                  Minutes.
                </td>
              </tr>

              <tr>
                <td className="font-medium">Exhibition Stand</td>

                <td className="bg-slate-200 text-center p-6">Available</td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Stand Opportunities</td>

                <td className="text-center p-6">
                  Invite your customers and partners to visit your exhibition
                  stand, attend/follow virtual the panel discussion and
                  breakaway presentation
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Company Banner</td>

                <td className="bg-slate-200 text-center p-6">
                  Company Banner to be displayed at the launch and prominent
                  locations at the venue throughout the Summit
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Exhibition Presentation</td>

                <td className="text-center p-6">
                  Allocated 15 Minutes exhibition presentation
                </td>
              </tr>

              <tr className="border-y border-slate-300 h-20">
                <td colSpan={5} className="text-primary font-medium text-base">
                  NB: The following information is required for the Summit
                  Website and booklet (program guide):
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Company Profile</td>

                <td className="bg-slate-200 text-center p-6">
                  500 words maximum, Arial size 11
                </td>
              </tr>

              <tr>
                <td className="font-medium">Company Logo</td>

                <td className="text-center p-6">
                  Company logo (PDF, vector or PNG format, High Resolution 300)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Official Photo</td>

                <td className="bg-slate-200 text-center p-6">
                  Official photo and full names for the Head of the Institution
                  (JPG format, standard sizes)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Presenters' Topics</td>

                <td className="text-center p-6">
                  Presenters' topics and synopsis (200 words maximum)
                </td>
              </tr>

              <tr className="h-20">
                <td className="font-medium">Adverts</td>

                <td className="bg-slate-200 text-center p-6">
                  Two A5 adverts (PDF format, standard size)
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr className="h-40">
                <th></th>

                <th className="px-6">
                  <Link
                    className="mx-auto flex mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                    href={"https://www.facebook.com/MICTNamibia/"}
                    target="_blank"
                    title="Choose Platinum"
                  >
                    Choose Platinum <ChevronRight />
                  </Link>
                </th>
              </tr>
            </tfoot>
          </table>
        )}

        {/* DESKTOP */}
        <table className="hidden md:block table-auto w-full h-full">
          <thead className="bg-[#ECEFF8]">
            <tr className="text-lg">
              <th></th>

              <th>
                <p className=" font-light">SILVER</p>
              </th>

              <th>
                <p className=" font-light">DIAMOND</p>
              </th>

              <th>
                <p className=" font-light">GOLD</p>
              </th>

              <th>
                <p className=" font-light">PLATINUM</p>
              </th>
            </tr>

            <tr className="text-2xl font-medium h-10">
              <th></th>

              <th>N$ 30 000</th>

              <th>N$ 50 000</th>

              <th>N$ 70 000</th>

              <th>N$ 110 000</th>
            </tr>

            <tr className="h-24">
              <th></th>
              <th className="content-start px-6">
                <Link
                  className="flex mx-auto mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                  href={"https://www.facebook.com/MICTNamibia/"}
                  target="_blank"
                  title="Choose Silver"
                >
                  Choose Silver <ChevronRight />
                </Link>
              </th>

              <th className="content-start px-6">
                <Link
                  className="flex mx-auto mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                  href={"https://www.facebook.com/MICTNamibia/"}
                  target="_blank"
                  title="Choose Diamond"
                >
                  Choose Diamond <ChevronRight />
                </Link>
              </th>

              <th className="content-start px-6">
                <Link
                  className="flex mx-auto mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                  href={"https://www.facebook.com/MICTNamibia/"}
                  target="_blank"
                  title="Choose Gold"
                >
                  Choose Gold <ChevronRight />
                </Link>
              </th>

              <th className="content-start px-6">
                <Link
                  className="flex mx-auto mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                  href={"https://www.facebook.com/MICTNamibia/"}
                  target="_blank"
                  title="Choose Platinum"
                >
                  Choose Platinum <ChevronRight />
                </Link>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-y border-slate-300 h-20">
              <td colSpan={6} className="text-primary font-medium text-base">
                SPECIFIC BENEFITS
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="h-20">
              <td className="font-medium">Advertising</td>
              <td className="bg-slate-200 text-center">-</td>

              <td className="bg-slate-200 text-center px-6">
                Company name included in advert materials (TV and print media)
              </td>

              <td className="bg-slate-200 text-center px-6">
                Company name included in advert materials (TV and print media
                adverts)
              </td>

              <td className="bg-slate-200 text-center px-6">
                Company logo and name included in adverts materials (TV, print
                media and radio)
              </td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Acknowledgment</td>
              {sponsorshipPackage === "SILVER" ||
                ("ALL" && (
                  <td className="text-center p-6">
                    Listing of the Company Logo on the ICT Summit Website and
                    booklet as a Silver Sponsor
                  </td>
                ))}
              {sponsorshipPackage === "DIAMOND" ||
                ("ALL" && (
                  <td className="text-center p-6">
                    Acknowledged as a Diamond Sponsor at the Launch: Opening and
                    Closing ceremonies
                  </td>
                ))}
              <td className="text-center p-6">
                Acknowledged as a Gold Sponsor at the Launch: Opening and
                Closing ceremonies
              </td>
              <td className="text-center p-6">
                Acknowledged as a Major Sponsor at the Launch: Opening and
                Closing Ceremonies
              </td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Panel Discussion</td>

              <td className="bg-slate-200 text-center p-6">-</td>

              <td className="bg-slate-200 text-center p-6">-</td>

              <td className="bg-slate-200 text-center p-6">-</td>

              <td className="bg-slate-200 text-center p-6">
                Company CEO/MD will be a panellist on the Executive panel
                discussion
              </td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Break-away Session</td>

              <td className="text-center p-6">-</td>
              <td className="text-center p-6">-</td>

              <td className="text-center p-6">
                One break-away session for 45 Minutes.
              </td>

              <td className="text-center p-6">
                One break-away session presentation on any agreed topic for 40
                Minutes.
              </td>
            </tr>

            <tr>
              <td className="font-medium">Exhibition Stand</td>

              <td className="bg-slate-200 text-center p-6">Available</td>

              <td className="bg-slate-200 text-center p-6">Available</td>

              <td className="bg-slate-200 text-center p-6">Available</td>

              <td className="bg-slate-200 text-center p-6">Available</td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Stand Opportunities</td>

              <td className="text-center p-6">
                Invite your customers and partners to visit your exhibition
                stand
              </td>

              <td className="text-center p-6">
                Invite your customers and partners to visit your exhibition
                stand
              </td>

              <td className="text-center p-6">
                Invite your customers and partners to visit your exhibition
                stand, attend/follow virtual breakaway presentations
              </td>

              <td className="text-center p-6">
                Invite your customers and partners to visit your exhibition
                stand, attend/follow virtual the panel discussion and breakaway
                presentation
              </td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Company Banner</td>
              <td className="bg-slate-200 text-center p-6">-</td>
              <td className="bg-slate-200 text-center p-6">-</td>
              <td className="bg-slate-200 text-center p-6">-</td>

              <td className="bg-slate-200 text-center p-6">
                Company Banner to be displayed at the launch and prominent
                locations at the venue throughout the Summit
              </td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Exhibition Presentation</td>
              <td className="text-center p-6">-</td>

              <td className="text-center p-6">
                Allocated 15 Minutes exhibition presentation
              </td>

              <td className="text-center p-6">
                Allocated 15 Minutes exhibition presentation
              </td>

              <td className="text-center p-6">
                Allocated 15 Minutes exhibition presentation
              </td>
            </tr>

            <tr className="border-y border-slate-300 h-20">
              <td colSpan={5} className="text-primary font-medium text-base">
                NB: The following information is required for the Summit Website
                and booklet (program guide):
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Company Profile</td>

              <td className="bg-slate-200 text-center p-6">
                500 words maximum, Arial size 11
              </td>

              <td className="bg-slate-200 text-center p-6">
                500 words maximum, Arial size 11
              </td>

              <td className="bg-slate-200 text-center p-6">
                500 words maximum, Arial size 11
              </td>

              <td className="bg-slate-200 text-center p-6">
                500 words maximum, Arial size 11
              </td>
            </tr>

            <tr>
              <td className="font-medium">Company Logo</td>

              <td className="text-center p-6">
                Company logo (PDF, vector or PNG format, High Resolution 300)
              </td>

              <td className="text-center p-6">
                Company logo (PDF, vector or PNG format, High Resolution 300)
              </td>

              <td className="text-center p-6">
                Company logo (PDF, vector or PNG format, High Resolution 300)
              </td>

              <td className="text-center p-6">
                Company logo (PDF, vector or PNG format, High Resolution 300)
              </td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Official Photo</td>

              <td className="bg-slate-200 text-center p-6">-</td>

              <td className="bg-slate-200 text-center p-6">
                Official photo and full names for the Head of the Institution
                (JPG format)
              </td>

              <td className="bg-slate-200 text-center p-6">
                Official photo and full names for the Head of the Institution
                (JPG format)
              </td>

              <td className="bg-slate-200 text-center p-6">
                Official photo and full names for the Head of the Institution
                (JPG format, standard sizes)
              </td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Presenters' Topics</td>
              <td className="text-center p-6">-</td>
              <td className="text-center p-6">-</td>

              <td className="text-center p-6">
                Presenters' topics and synopsis (200 words maximum)
              </td>

              <td className="text-center p-6">
                Presenters' topics and synopsis (200 words maximum)
              </td>
            </tr>

            <tr className="h-20">
              <td className="font-medium">Adverts</td>
              <td className="bg-slate-200 text-center p-6">-</td>
              <td className="bg-slate-200 text-center p-6">-</td>

              <td className="bg-slate-200 text-center p-6">
                One A5 advert (PDF format, standard size)
              </td>

              <td className="bg-slate-200 text-center p-6">
                Two A5 adverts (PDF format, standard size)
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr className="h-40">
              <th></th>

              <th className="px-6">
                <Link
                  className="mx-auto flex mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                  href={"https://www.facebook.com/MICTNamibia/"}
                  target="_blank"
                  title="Choose Silver"
                >
                  Choose Silver <ChevronRight />
                </Link>
              </th>

              <th className="px-6">
                <Link
                  className="mx-auto flex mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                  href={"https://www.facebook.com/MICTNamibia/"}
                  target="_blank"
                  title="Choose Diamond"
                >
                  Choose Diamond <ChevronRight />
                </Link>
              </th>

              <th className="px-6">
                <Link
                  className="mx-auto flex mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                  href={"https://www.facebook.com/MICTNamibia/"}
                  target="_blank"
                  title="Choose Gold"
                >
                  Choose Gold <ChevronRight />
                </Link>
              </th>

              <th className="px-6">
                <Link
                  className="mx-auto flex mt-4 gap-2 transition-all bg-primary hover:bg-headings text-white hover:text-primary px-[16px] py-[8px] w-full items-center justify-center rounded-lg"
                  href={"https://www.facebook.com/MICTNamibia/"}
                  target="_blank"
                  title="Choose Platinum"
                >
                  Choose Platinum <ChevronRight />
                </Link>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}
