import { Globe, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "./ds/section-heading";

const exhibitors = [
  {
    src: "/exhibitors/nust-logo.png",
    alt: "NUST Logo",
    name: "Namibia University of Science and Technology",
    linkedIn: "https://www.linkedin.com/school/nust-namibia/",
    website: "https://www.nust.na/",
  },
  {
    src: "/exhibitors/unam-logo.png",
    alt: "UNAM Logo",
    name: "University of Namibia",
    linkedIn: "https://www.linkedin.com/school/university-of-namibia/",
    website: "https://www.unam.edu.na/",
  },
  {
    src: "/exhibitors/ium-logo.png",
    alt: "IUM Logo",
    name: "International University of Management",
    linkedIn:
      "https://www.linkedin.com/company/the-international-university-of-management-ium-/",
    website: "https://ium.edu.na/",
  },
];

/**
 * 2024 exhibitor listing. A plain, even three-up grid — the system's grids are
 * never carousels, and with three entries there is nothing to scroll past.
 */
export default function Exhibitors_2024() {
  return (
    <section
      id="exhibitors"
      className="flex h-fit w-full items-center justify-center bg-white px-4 py-16 sm:px-6 md:px-8 md:py-24"
    >
      <div className="flex h-full w-full max-w-container flex-col items-center justify-center gap-10">
        <SectionHeading
          overline="Exhibitors"
          title="Who exhibited in 2024"
          description="A line-up of industry leaders and game changers exhibited at the 8th National ICT Summit."
          className="w-full"
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exhibitors.map(({ src, alt, name, linkedIn, website }) => (
            <div
              key={name}
              className="flex flex-col overflow-hidden rounded-md border border-line-subtle bg-white transition-all duration-base ease-standard hover:-translate-y-[2px] hover:shadow-md"
            >
              <div className="relative flex h-[220px] items-center justify-center border-b border-line-subtle bg-grey-50 p-8">
                <Image
                  src={src}
                  alt={alt}
                  width={220}
                  height={160}
                  sizes="(max-width: 769px) 90vw, 320px"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div className="flex flex-1 items-center justify-between gap-4 p-5">
                <span className="font-body text-body-sm font-semibold leading-snug text-ink">
                  {name}
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <Link
                    href={linkedIn}
                    className="text-brand transition-colors duration-fast ease-standard hover:text-blue-800"
                    target="_blank"
                    title={`${name} on LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={website}
                    className="text-brand transition-colors duration-fast ease-standard hover:text-blue-800"
                    target="_blank"
                    title={`${name} website`}
                  >
                    <Globe className="h-5 w-5" />
                  </Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
