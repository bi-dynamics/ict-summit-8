"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import Card from "./sponsor-card";
import { X, XCircle } from "lucide-react";

const images = [
  {
    name: "MTC Namibia",
    description:
      "Mobile Telecommunications Limited is a mobile telecommunications company in Namibia providing cellular access. It is the largest mobile operator in Namibia with over two million active subscribers. MTC was established in 1994 and was the only cellular provider in Namibia at that time.",
    src: "/sponsors/mtc-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "Inclusive And Collaborative Local Tech Innovation Hub",
    description:
      "Inclusive and Collaborative Local Tech Innovation Hub is a project by the Faculty of Computing and Informatics at the Namibia University of Science and technology (NUST). The Hub has been fully funded from November 2017 to October 2019 by the Finnish Embassy in Namibia. Our goal is to become a self-sustaining entity, which will keep on providing inclusive innovation services in Namibia and beyond. To achieve this goal, we work together with partners - private sector companies, parastatals, government entities, NGOs, communities and innovators - who share our vision of a prosperous and inclusive Namibia. What do we offer? Unlike many other innovation Hubs in the world, we are not a physical working space but a network, which brings together people, organisations and resources. Our work includes and empowers those who are usually excluded when new solutions are developed. We are specialised in developing IT innovations, but our approach is people-centric. We understand that technologies in themselves do not solve problems. That is done with people, with help from technologies.",
    src: "/sponsors/techhub-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "NUST",
    description:
      "NUST is at the forefront of higher education in Namibia. The University offers various Certificates (under- and post-graduate), Diplomas, Bachelor, Bachelor Honours, Master’s and Doctoral degrees in more than 60 programmes. NUST is the first Namibian higher education institution to have established a dedicated Quality Assurance Unit; its programmes are accredited by, among others, the Namibia Qualifications Authority (NQA). The University enjoys a cherished partnership with industry, public sector and civic society through various initiatives such as curriculum advisory boards, work intergrated learning and joint research. Students are equipped with a blend of contemporary knowledge, skills and competence acquired in classrooms, simulation laboratories, through field work and job attachments, to drive competitiveness in the knowledge economy. NUST graduates are sought after in the Namibian labour market and beyond, and are accepted for further studies in other universities internationally.",
    src: "/sponsors/nust-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "Schoemans",
    description:
      "Schoemans is a Namibian-owned ICT company, with a legacy spanning over 60 years, specializing in Office, Technology & Digital solutions. The pioneering culture of bringing new, enabling technology to the Namibian market is the driving force for Schoemans since its formative years. Over the years the company has developed into a diverse company with shareholding and staff reflecting a culture of inclusion and equal opportunity for all communities in Namibia. Vision: To be the most innovative digital technology solution provider. Mission: To empower Namibia's businesses by providing them with cutting-edge technology solutions that streamline processes, enhance efficiency, and drive growth. We believe that by leveraging the power of technology, businesses can unlock their full potential and achieve sustainable success. Purpose: We bring enabling technology that improves lives. Core Values: Pioneering, Collaboration, Integrity, and Diversity. Schoemans is a Namibian-owned ICT company, with a legacy spanning over 60 years, specializing in Office, Technology & Digital solutions. The pioneering culture of bringing new, enabling technology to the Namibian market is the driving force for Schoemans since its formative years. Over the years the company has developed into a diverse company with shareholding and staff reflecting a culture of inclusion and equal opportunity for all communities in Namibia.",
    src: "/sponsors/schoemans-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "Telecom Namibia",
    description:
      "Telecom Namibia enabling Namibia’s digital transformation <br/> DEDICATED TO NATION BUILDING Telecom Namibia’s commitment to nation building and the socio-economic development of the country has propelled the transformation of the telecommunication landscape and the broader ICT ecosystem of Namibia. As we transition towards the Fourth Industrial Revolution (4IR), Telecom Namibia remains committed to being at the forefront of the technology frontier by enabling Namibia to reach its digital economy growth needs. The Company has adopted network modernisation and digital infrastructure investment programmes as a key strategic objective in its Integrated Strategic Business and Funding Plan (ISBP 2027) and Beyond, as it plans to invest N$2.3 billion in the next five plus years to achieve just that. Under its ISBP 2027 & Beyond plan, the Company is embarking on a digital transformation journey that will help enable Namibia’s Vision 2030, 4IR, NDP 5, Broadband Policy and HPPII national goals. OUR DIGITAL JOURNEY. From humble beginnings in August 1992, Telecom Namibia has to date invested billions in state-of-the-art networks. These investments have moved the Company beyond a traditional telephone company to become a rightful ICT player, able to transmit high-speed converged data, voice and video simultaneously. The company has over the years evolved into a multi-faceted telecommunications service provider and invested billions of Namibian dollars in infrastructure development across Namibia and at strategic international locations in Southern Africa and Europe. With a transmission network that is 100% digital, Telecom Namibia provides a comprehensive portfolio of communication services and solutions in broadband, data, voice over fixed wire-based connectivity (copper and fibre), fixed wireless and mobile platforms. Telecom Namibia is an investor in some of the world’s largest subsea cable systems such as SAT-3, SEACOM and WACS, and more recently Google’s Equiano cable, thereby enhancing the reliability of Namibia’s connectivity to the global subsea cable network and access to international destinations for voice, data and internet services communication. With its extensive global connectivity, Telecom Namibia is poised as a regional internet hub and digital gateway to the SADC region and beyond. Telecom Namibia’s nationwide digital network now spans across the entire Namibia and is comprised of over 13,000 route kilometres of MetroFibre and has deployed over 500 Ethernet and Internet Protocol Multi-Protocol Label Switching (IP/MPLS) Points of Presence, 228 digital destinations and over 300 towers for fixed wireless and mobile services, operated by its subsidiary, PowerCom. Coming forward with a new vision of embracing the future towards digital transformation, Telecom Namibia has not only expanded its network to remote villages, settlements and lodges but has also made a far-reaching impact on the wireless and mobile broadband front and ICT solutions, which are driving organisations forward and bringing a paradigm shift in business innovation and opportunities for new start-ups. Telecom Namibia boasts the largest fixed-line voice telephony and broadband network in the country, which is the lifeline for thousands of consumers. The country’s first mobile network was also pioneered by Telecom Namibia. Its wireless broadband network provides both voice and internet access in remote areas for schools, clinics, businesses and government offices, and far-reaching initiatives to expand the broadband ecosystem are bringing a visible change in the socio-economic sphere of the country. This access of broadband internet has not only opened new possibilities for the people, but is also enabling them to earn a livelihood, reach out to newer international markets and get access to e-learning and e-health services. To date, Telecom Namibia has achieved a network rollout of over 300 mobile service base stations throughout the country, with several sites equipped with 3G, 4G and 4.5G technology for mobile broadband. Complementing the deployment of additional mobile broadband access technologies, new IP/Ethernet backhauling network stations were deployed across the country. This IP/Ethernet backhaul infrastructure consolidates the existing backhaul for metro Ethernet and other access technologies onto one platform which is in line with Telecom Namibia’s strategy to provide fixed mobile converged products and services. Telecom Namibia is a responsible corporate citizen and identifies with the Namibian community. Through social responsibility initiatives, the Company has made a significant contribution in the sectors of education, business development plus other national priority areas. The brand has supported several causes in the areas of sports, women empowerment, youth projects, community development and charitable giving, among others.",
    src: "/sponsors/telecom-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    src: "/sponsors/bid-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    src: "/sponsors/nepc-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "AVM",

    src: "/sponsors/avm-sponsor.svg",
    sponsorLevel: "Gold",
  },
  {
    src: "/sponsors/green-sponsor.svg",
    sponsorLevel: "Diamond",
  },
  {
    src: "/sponsors/powercom-sponsor.svg",
    sponsorLevel: "Diamond",
  },
  {
    src: "/sponsors/huawei-sponsor.svg",
    sponsorLevel: "Diamond",
  },
  {
    src: "/sponsors/cran-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    src: "/sponsors/dimension-data-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    name: "Salt Essential IT",
    description:
      "alt, at our core, has always been about cloud, even before the term was coined. In our journey over the past two decades, we have become a multiple award winner, providing ground-breaking technology to our customers, that opens a whole new world of possibilities for the business and its employees; to work better, faster, more productively from anywhere. All our solutions have become mainstream as our competitors adopt them. Salt has evolved proudly to consistently create, find and share technology to enable people to do their best work, and businesses to thrive. Salt moved from single to multiple Data Centres, from dedicated servers to virtualisation, from simple back-up through disaster recovery to business continuity. Transformation all the time, but with one constant: Microsoft all the way. Now Microsoft is 365 and Salt is embracing it. Out with hosted exchange, in with Exchange Online. Welcome to Teams; work from anywhere, meetings across the town, country or the globe. Share your documents, collaborate with your customers and co-workers wherever you are, always safely and securely.",
    src: "/sponsors/salt-essential-it-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    src: "/sponsors/paratus-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    src: "/sponsors/kellerman-ict-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    src: "/sponsors/shine-technologies-sponsor.svg",
    sponsorLevel: "Silver",
  },
];

export default function Sponsors2024() {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [showModal, setShowModal] = useState(false);

  interface ModalInfoProps {
    heading: string | undefined;
    bodyText: string | undefined;
    sponsorLevel: string | undefined;
  }
  const [modalInfo, setModalInfo] = useState<ModalInfoProps | null>(null);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <main
      id="sponsors2024"
      className="py-16 overflow-hidden relative bg-[#ECEFF8] flex flex-col items-center justify-center space-y-4"
    >
      <h2 className=" text-headings font-bold text-lg sm:text-2xl z-[12]">
        Proudly welcoming our 2024 sponsors
      </h2>
      <p className="text-headings text-base sm:text-lg max-w-screen-md text-center z-[12] px-4 sm:px-8">
        The ICT Summit greatly appreciates the contributions made by its
        sponsors who have chosen to take ownership and responsibility for
        growing the ICT industry.
      </p>
      {/* gradient layer */}
      <div className="absolute left-0 top-0 z-[11] h-full w-1/4 bg-gradient-to-r from-[#ECEFF8] to-transparent"></div>
      {/* gradient layer */}
      <div className="absolute right-0 top-0 z-[11] h-full w-1/4 bg-gradient-to-l from-[#ECEFF8] to-transparent"></div>
      <motion.div
        className="relative left-0 z-10 flex gap-4 overflow-hidden"
        style={{ x: xTranslation, width: "max-content" }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map(
          ({ src, sponsorLevel, name, description }, idx) => (
            <Card
              image={`${src}`}
              sponsorLevel={sponsorLevel}
              key={idx}
              onShowModal={() => {
                setShowModal(true),
                  setModalInfo({
                    heading: name,
                    bodyText: description,
                    sponsorLevel: sponsorLevel,
                  });
              }}
            />
          )
        )}
      </motion.div>
      <AnimatePresence>
        {showModal && (
          <Modal
            heading={modalInfo?.heading}
            bodyText={modalInfo?.bodyText}
            sponsorLevel={modalInfo?.sponsorLevel}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

interface ModalProps {
  onClose: () => void;
  heading: string | undefined;
  bodyText: string | undefined;
  sponsorLevel: string | undefined;
}

const Modal = ({ onClose, heading, bodyText, sponsorLevel }: ModalProps) => {
  const modalRef = useRef<any>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
        className="w-[60vw] mx-auto max-h-[40vh] overflow-y-auto fixed bottom-4 z-20 bg-white/95 border-4 border-primary/50 rounded-xl p-8 flex"
        ref={modalRef}
      >
        <div className="w-full flex flex-col items-center justify-start gap-6">
          <h2 className="font-bold text-3xl">{heading}</h2>
          <p className="py-2 px-4 rounded-full bg-primary text-white text-lg font-bold">
            {sponsorLevel} Sponsor
          </p>
          <div className="flex flex-col w-full h-full gap-4">
            <p>{bodyText?.split("<br/>")[0]}</p>

            <p>{bodyText?.split("<br/>")[1]}</p>
          </div>
        </div>
        <XCircle onClick={onClose} className="w-8 h-8 text-primary" />
      </motion.div>
    </>
  );
};
