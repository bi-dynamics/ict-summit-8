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
import { XCircle } from "lucide-react";

const images = [
  {
    name: "MTC Namibia",
    description:
      "Mobile Telecommunications Limited is a mobile telecommunications company in Namibia providing cellular access. It is the largest mobile operator in Namibia with over two million active subscribers. MTC was established in 1994 and was the only cellular provider in Namibia at that time.",
    src: "/sponsors/mtc-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  // {
  //   name: "Inclusive And Collaborative Local Tech Innovation Hub",
  //   description:
  //     "Inclusive and Collaborative Local Tech Innovation Hub is a project by the Faculty of Computing and Informatics at the Namibia University of Science and technology (NUST). The Hub has been fully funded from November 2017 to October 2019 by the Finnish Embassy in Namibia. Our goal is to become a self-sustaining entity, which will keep on providing inclusive innovation services in Namibia and beyond. To achieve this goal, we work together with partners - private sector companies, parastatals, government entities, NGOs, communities and innovators - who share our vision of a prosperous and inclusive Namibia. What do we offer? Unlike many other innovation Hubs in the world, we are not a physical working space but a network, which brings together people, organisations and resources. Our work includes and empowers those who are usually excluded when new solutions are developed. We are specialised in developing IT innovations, but our approach is people-centric. We understand that technologies in themselves do not solve problems. That is done with people, with help from technologies.",
  //   src: "/sponsors/techhub-sponsor.svg",
  //   sponsorLevel: "Platinum",
  // },
  // {
  //   name: "NUST",
  //   description:
  //     "NUST is at the forefront of higher education in Namibia. The University offers various Certificates (under- and post-graduate), Diplomas, Bachelor, Bachelor Honours, Master's and Doctoral degrees in more than 60 programmes. NUST is the first Namibian higher education institution to have established a dedicated Quality Assurance Unit; its programmes are accredited by, among others, the Namibia Qualifications Authority (NQA). The University enjoys a cherished partnership with industry, public sector and civic society through various initiatives such as curriculum advisory boards, work intergrated learning and joint research. Students are equipped with a blend of contemporary knowledge, skills and competence acquired in classrooms, simulation laboratories, through field work and job attachments, to drive competitiveness in the knowledge economy. NUST graduates are sought after in the Namibian labour market and beyond, and are accepted for further studies in other universities internationally.",
  //   src: "/sponsors/nust-sponsor.svg",
  //   sponsorLevel: "Platinum",
  // },
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
      "Telecom Namibia enabling Namibia's digital transformation <br/> DEDICATED TO NATION BUILDING Telecom Namibia's commitment to nation building and the socio-economic development of the country has propelled the transformation of the telecommunication landscape and the broader ICT ecosystem of Namibia. As we transition towards the Fourth Industrial Revolution (4IR), Telecom Namibia remains committed to being at the forefront of the technology frontier by enabling Namibia to reach its digital economy growth needs. The Company has adopted network modernisation and digital infrastructure investment programmes as a key strategic objective in its Integrated Strategic Business and Funding Plan (ISBP 2027) and Beyond, as it plans to invest N$2.3 billion in the next five plus years to achieve just that. Under its ISBP 2027 & Beyond plan, the Company is embarking on a digital transformation journey that will help enable Namibia's Vision 2030, 4IR, NDP 5, Broadband Policy and HPPII national goals. OUR DIGITAL JOURNEY. From humble beginnings in August 1992, Telecom Namibia has to date invested billions in state-of-the-art networks. These investments have moved the Company beyond a traditional telephone company to become a rightful ICT player, able to transmit high-speed converged data, voice and video simultaneously. The company has over the years evolved into a multi-faceted telecommunications service provider and invested billions of Namibian dollars in infrastructure development across Namibia and at strategic international locations in Southern Africa and Europe. With a transmission network that is 100% digital, Telecom Namibia provides a comprehensive portfolio of communication services and solutions in broadband, data, voice over fixed wire-based connectivity (copper and fibre), fixed wireless and mobile platforms. Telecom Namibia is an investor in some of the world's largest subsea cable systems such as SAT-3, SEACOM and WACS, and more recently Google's Equiano cable, thereby enhancing the reliability of Namibia's connectivity to the global subsea cable network and access to international destinations for voice, data and internet services communication. With its extensive global connectivity, Telecom Namibia is poised as a regional internet hub and digital gateway to the SADC region and beyond. Telecom Namibia's nationwide digital network now spans across the entire Namibia and is comprised of over 13,000 route kilometres of MetroFibre and has deployed over 500 Ethernet and Internet Protocol Multi-Protocol Label Switching (IP/MPLS) Points of Presence, 228 digital destinations and over 300 towers for fixed wireless and mobile services, operated by its subsidiary, PowerCom. Coming forward with a new vision of embracing the future towards digital transformation, Telecom Namibia has not only expanded its network to remote villages, settlements and lodges but has also made a far-reaching impact on the wireless and mobile broadband front and ICT solutions, which are driving organisations forward and bringing a paradigm shift in business innovation and opportunities for new start-ups. Telecom Namibia boasts the largest fixed-line voice telephony and broadband network in the country, which is the lifeline for thousands of consumers. The country's first mobile network was also pioneered by Telecom Namibia. Its wireless broadband network provides both voice and internet access in remote areas for schools, clinics, businesses and government offices, and far-reaching initiatives to expand the broadband ecosystem are bringing a visible change in the socio-economic sphere of the country. This access of broadband internet has not only opened new possibilities for the people, but is also enabling them to earn a livelihood, reach out to newer international markets and get access to e-learning and e-health services. To date, Telecom Namibia has achieved a network rollout of over 300 mobile service base stations throughout the country, with several sites equipped with 3G, 4G and 4.5G technology for mobile broadband. Complementing the deployment of additional mobile broadband access technologies, new IP/Ethernet backhauling network stations were deployed across the country. This IP/Ethernet backhaul infrastructure consolidates the existing backhaul for metro Ethernet and other access technologies onto one platform which is in line with Telecom Namibia's strategy to provide fixed mobile converged products and services. Telecom Namibia is a responsible corporate citizen and identifies with the Namibian community. Through social responsibility initiatives, the Company has made a significant contribution in the sectors of education, business development plus other national priority areas. The brand has supported several causes in the areas of sports, women empowerment, youth projects, community development and charitable giving, among others.",
    src: "/sponsors/telecom-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "Business Intelligence Dynamics",
    description:
      "BI-Dynamics is a technology company that specializes in the provision of professional ICT Consultancy and technical Services. We are specialists in everything tech including: Software and App Development; Data Warehousing and Data Mining; Business Intelligence Services, Business Process, Development & Mapping; Multimedia, Graphic Design & Marketing Management",
    src: "/sponsors/bid-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "The Free Press of Namibia Pty Ltd",
    description:
      "BI-Dynamics is a technology company that specializes in the provision of professional ICT Consultancy and technical Services. We are specialists in everything tech including: Software and App Development; Data Warehousing and Data Mining; Business Intelligence Services, Business Process, Development & Mapping; Multimedia, Graphic Design & Marketing Management",
    src: "/sponsors/namibian-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "New Era Publication Corporation",
    description:
      "As one of the leading national news and information institutions, New Era Publication Corporation, a wholly-owned publishing corporation of the Government of the Republic of Namibia, is committed to providing an objective and factual information service to various readership groups, within its authorising environment. The Corporation, established in terms of the New Era Publication Corporation Act, No1 of 1992, publishes newspapers as well as providing content online and on various mobile platforms. New Era is the flagship English daily national newspaper, and Kundana, a weekly national national newspaper published in the indigenous language of Oshiwambo.",
    src: "/sponsors/nepc-sponsor.svg",
    sponsorLevel: "Platinum",
  },
  {
    name: "FNB Namibia",
    description:
      "FNB Namibia Ltd. provides a full range of banking services to individuals, while our Business and Corporate Divisions offer services and solutions that meet the needs of enterprises - both large and small - throughout the country. Our extensive countrywide branch and automated teller machine (ATM) networks, as well as FNB Namibia Online Banking, ensure that you have access to your accounts around the clock. Investing in the community and future of our country is a priority. The FNB Namibia Foundation is the vehicle through which we support non-profit organisations and institutions working towards the development and empowerment of the broader community.",
    src: "/sponsors/fnb-sponsor.svg",
    sponsorLevel: "Gold",
  },
  {
    name: "Green Enterprise Solutions",
    description:
      "OUR HISTORY - Our company was launched in 2010 as a simple Infrastructure department. During the founding phase, we expanded rapidly, introducing a Software division and a Network and Security department within the first five years. Today we stand as one of the largest ICT solution providers to corporate Namibia. OUR SOLUTIONS -  We are a 360-degree ICT solutions provider. We help clients with custom software, cloud storage, infrastructure, networking, printing and a multitude of other business needs. We have a proven track record of satisfied clients and over forty-five projects completed in the past six years. Our Software solutions focus on a range of different areas covering productivity, enterprise resource planning (ERP) solutions, mobile apps and tailor-made software. These software applications are aimed to facilitate the running of businesses, connect people, increase productivity and efficiency, and improve operations and communications between stakeholders in any business. OUR PRODUCTS - Our range of products, which include Attendance Tracker, Tap A Meal, Mobile World Online, Sendit, MetroGrid and EstApp serve a number of functions and aim to facilitate the running of everyday life more efficiently.",
    src: "/sponsors/green-enterprise-sponsor.svg",
    sponsorLevel: "Gold",
  },
  {
    name: "AVM ICT GmbH",
    description:
      "AVM offers an extensive selection of products for high-speed broadband connectivity and smart home networking. With the FRITZ! product range, AVM is a leading manufacturer of broadband devices for DSL, cable, LTE (4G) and fiber optics in Germany and Europe. Our Smart Home products, based on wireless LAN, DECT and powerline standards, ensure an intelligent and secure home network. Thanks to the FRITZ!OS operating system, FRITZ! products are intuitive and easy to use. Regular free updates provide new functions for greater convenience and increased security. FRITZ! is the leading brand for home networking in Germany. Since it started out in Berlin in 1986, AVM's focus has been on developing secure, innovative products for broadband connections in-house.",
    src: "/sponsors/avm-sponsor.svg",
    sponsorLevel: "Gold",
  },
  {
    name: "Huawei",
    description:
      "Founded in 1987, Huawei is a leading global provider of information and communications technology (ICT) infrastructure and smart devices. We have 207,000 employees and operate in over 170 countries and regions, serving more than three billion people around the world. We are committed to bringing digital to every person, home and organization for a fully connected, intelligent world.",
    src: "/sponsors/huawei-sponsor.svg",
    sponsorLevel: "Gold",
  },
  {
    name: "PowerCom",
    description:
      "POWERCOM (Pty) Ltd was established in 2007 and later acquired by Telecom Namibia in 2013 and is a 100% subsidiary of Telecom Namibia. Its mandate is defined by the licence issued in accordance with Communications Act (No.8 of 2009) by CRAN, a Class Network Facilities Service Licence which empowers PowerCom to serve as an ICT infrastructure and equipment provider. Since 2013, the company has predominantly focused on building towers to enable service providers and operators to lease space on the towers and provide services ssuch as network coverage, broadcasting, internet and security.",
    src: "/sponsors/powercom-sponsor.svg",
    sponsorLevel: "Gold",
  },
  {
    name: "Shine Technologies",
    description:
      "Shine Technologies Solutions (PTY)Ltd is a Namibian Information, Communication and Technology (ICT) Company. The firm was established in 2011 and was founded in response to the nation's need for better monitoring services and increased innovation in the local ICT sector. STS is championed by a team of proudly Namibian citizens who are committed to providing state-of-the-art technologies and management systems to their clients and stakeholders With the establishment of Vision 2030, and the more recent launch of the “E-Gov” strategic plan, the STS team recognizes its responsibility in contributing to Namibi's development and growth. Objectives - To provide superior Security, Monitoring and ICT business solutions to the Namibian, African and Global Market; To provide state-of-the-art technology and solutions to our customers and stakeholders; To be on the forefront of efficient and effective service delivery by streamlining operations; To constantly seek opportunities for growth and expansion; To facilitate mentorship and job creation in Namibia; To facilitate appropriate ICT development in rural areas in particular; To encourage the youth in particular to contribute to the sustainable development of the country though ICT.",
    src: "/sponsors/shine-technologies-sponsor.svg",
    sponsorLevel: "Diamond",
  },
  {
    name: "Communications Regulatory Authority Of Namibia(CRAN)",
    description:
      "The Communications Regulatory Authority of Namibia, established by the Namibian Communication Act on 18 May 2011 with the mandate to regulate postal and telecommunication services. It merged the former Namibia Communications Commission.",
    src: "/sponsors/cran-sponsor.svg",
    sponsorLevel: "Diamond",
  },
  {
    name: "Demshi Investments Holdings (Pty) Ltd",
    description:
      "At Demshi Investments Holdings (Pty) Ltd, we believe that access to high-speed, reliable internet is not just a service; it's a fundamental right. Our mission is to bridge the digital divide, ensuring that every individual and community has the opportunity to thrive in the digital age. We take pride in our open access philosophy. Unlike traditional models, we believe in providing a platform for multiple service providers to offer their services over our robust fiber-optic infrastructure. This open ecosystem promotes healthy competition, innovation, and diverse options for our users.",
    src: "/sponsors/demshi-sponsor.svg",
    sponsorLevel: "Diamond",
  },
  {
    name: "Paratus Group Holdings Ltd",
    description:
      "Founded in 2005 and listed on the Namibian Stock Exchange, Paratus Namibia is a 100% Namibian-owned telecommunications company that has gained prominence as a comprehensive service provider with a Class Comprehensive Telecommunications Service Licence (ECS & ECNS). Recognizing the importance of investing in its infrastructure, the company strives to maintain a competitive edge, meet customer demands, and uphold stringent service quality expectations. A key aspect of Paratus Namibia's success lies in its diverse offering of access technologies, including fiber, microwave, and Mobile-LTE. By leveraging these technologies, the company ensures a stable and reliable network that can easily scale to meet growing capacity requirements while providing the much-needed resilience and route diversity for always-on connectivity. At the heart of Paratus Namibia's connectivity lies its extensive fiber network, which forms the backbone of their operations. This robust fiber infrastructure enables the delivery of seamless connectivity nationwide, even in remote areas. Additionally, Paratus complements its fiber network with satellite connectivity and LTE services, further enhancing their connectivity offerings. Through a suite of connectivity products, the company provides a diverse range of services, including internet connectivity, telephony, Point-of-Sale connections, and cloud services. This comprehensive approach caters to a wide range of customers and solidifies Paratus Namibia's position as a leading telecommunications service provider in the region. Moreover, the company has played a vital role as the landing partner for the Equiano subsea cable system in Namibia, reinforcing its commitment to enhancing digital infrastructure in the region. In August 2022, Paratus Namibia further solidified its position as a telecommunications leader by launching the Armada Data Center, the country's largest and first carrier-neutral Tier-III by design facility located 20 km north of Windhoek. This state-of-the-art data center offers world-class data storage and hosting services, contributing significantly to Namibia's technological advancement. Paratus Namibia is a proud member of the Paratus Group, a prominent player in Africa's telecommunication landscape. The Group's operations extend beyond Namibia, with a presence in Angola, Botswana, the Democratic Republic of Congo (DRC), Mozambique, South Africa, and Zambia. The company's focus on investing in infrastructure demonstrates its long-term commitment to transforming Africa's digital landscape while providing exceptional customer service. This extensive network fosters connectivity between African businesses across the continent, offering end-to-end service excellence. Additionally, the Group's international points of presence (PoPs) in Europe, the UK, and the USA further enhance its global reach.",
    src: "/sponsors/paratus-sponsor.svg",
    sponsorLevel: "Diamond",
  },
  {
    name: "Dimension Data",
    description:
      "Dimension Data is a leader in providing specialized IT infrastructure solutions and services, driven by the belief in the transformative power of technology, to ensure digital transformation and support your organisation in your journey towards a software-defined future. With the majority ownership by the Ohlthaver & List Group of Companies (O&L) and a strategic partnership with NTT, the largest telecommunications company globally, Dimension Data shares a common vision for the evolution of the ICT industry. We have access to the very best technology and cutting-edge insights into global best practices. At the core of Dimension Data's mission is our passion for utilizing ICT to improve our client's businesses, turning ambitions into achievements. Dimension Data offers targeted, relevant IT services and solutions to help organizations address current challenges. Our expertise extends to robust networking platforms, optimizing system performance, and ensuring secure infrastructure, including data centers and cloud computing deployments. Dimension Data Namibia collaborates with expert companies within the Dimension Data & NTT group, providing solutions for leading organizations. Accredited as Cisco Gold, Microsoft Gold, Dell EMC Platinum, HPE Enterprise and FortiNet Platinum partner, we support clients across Namibia with headquarters in Windhoek and a regional office in Walvis Bay. Dimension Data emphasizes delivering solutions rather than just products. Our focus is on striking a balance between reducing operational costs and improving reliability, flexibility, and service quality. We aid organizations in enhancing collaboration, employee productivity, information sharing, knowledge management, and risk reduction against internal and external threats. With a sustainable approach, Dimension Data helps clients reduce their environmental impact while maximizing returns on investment. We specialize in six Lines of Business, including Network Integration, Security, Converged Communications, Customer Interactive Solutions, Microsoft Solutions, and Data Centre Solutions, covering all essential technology areas addressing market trends. Dimension Data takes a partner-oriented approach, assisting clients throughout their IT journey. Our services span across professional services, support, managed services, IT outsourcing, and global procurement. By aligning our people, systems, and processes through ITIL, we deliver standardized services and effectively support and manage IT environments. Understanding that one size does not fit all, Dimension Data offers a suite of support services tailored to clients' multi-geography, multi-vendor needs. These services range from maintenance tasks with agreed service levels to proactive IT issue resolution and scheduled activities. Our managed services teams focus on anticipating client requirements, extracting maximum business value from IT investments, and managing the convergence between technology layers. By outsourcing IT infrastructure operations, clients benefit from comprehensive management reports and performance recommendations. In summary, Dimension Data's comprehensive approach, global reach, expertise across various technologies, and strategic partnerships makes us a preferred choice for organizations seeking to harness the full potential of technology in achieving their business objectives",
    src: "/sponsors/dimension-data-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    name: "Datacom Technologies - Namibia",
    description:
      "DATACOM TECHNOLOGIES is an IT company providing Information and Communication Technology (ICT) services to corporate Namibia. The company is a 100% Namibian company owned and managed by previously disadvantaged Namibians who are ambitious and focused on corroborating a finer ICT industry. Our services make potential and existing clients happy and worry less about their technological solutions.",
    src: "/sponsors/datacom-technologies-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    name: "Salt Essential IT",
    description:
      "Salt, at our core, has always been about cloud, even before the term was coined. In our journey over the past two decades, we have become a multiple award winner, providing ground-breaking technology to our customers, that opens a whole new world of possibilities for the business and its employees; to work better, faster, more productively from anywhere. All our solutions have become mainstream as our competitors adopt them. Salt has evolved proudly to consistently create, find and share technology to enable people to do their best work, and businesses to thrive. Salt moved from single to multiple Data Centres, from dedicated servers to virtualisation, from simple back-up through disaster recovery to business continuity. Transformation all the time, but with one constant: Microsoft all the way. Now Microsoft is 365 and Salt is embracing it. Out with hosted exchange, in with Exchange Online. Welcome to Teams; work from anywhere, meetings across the town, country or the globe. Share your documents, collaborate with your customers and co-workers wherever you are, always safely and securely.",
    src: "/sponsors/salt-essential-it-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    name: "Collexia Payments Pty Ltd",
    description:
      "Collexia was founded in 2016 to fill the void of a truly Namibian payments service provider in the market. At our disposal is a vast pool of expertise in the payments and loans landscape, as well as the enabling technology, thanks to many years of experience and collaborations in the field. Collexia is a PISP (Payments Intermediary Service Provider) registered with the Payments Association of Namibia (PAN), and most of its shareholders are locals to Namibia. Over time, we intend to expand our product offering by including support for other payment options in Namibia and by going global.",
    src: "/sponsors/collexia-payments-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    name: "Twinrain Technologies Solutions (PTY) Ltd",
    description:
      "TwinRain Solutions is a technology company that provides end-to-end mission-critical solutions for businesses that want to grow and scale their organisations. We have a geographical footprint in Namibia, South Africa, the Democratic Republic of Congo and the United Arab Emirates.Our Mission​: We strives to be the best technology partner possible. We provide innovative solutions and aim to make a difference in the world. We are constantly looking for new ways to improve our services and products. Our goal is to be a trusted resource for our clients, providing them with the tools they need to succeed.",
    src: "/sponsors/twinrain-technologies-solutions-sponsor.svg",
    sponsorLevel: "Silver",
  },
  {
    name: "TMU Supplies Pty Ltd",
    description:
      "At TMU SDS Pty Ltd, we are committed to delivering exceptional ICT supplies.",
    src: "/sponsors/tmu-sds-sponsor.svg",
    sponsorLevel: "Silver",
  },
  // {
  //   name: "Kellerman ICT",
  //   description:
  //     "Kellerman ICT is a professional Managed Service House that specializes in delivering holistic and sustainable ICT solutions for businesses of all sizes. Our primary objective is to help organisations achieve advantageous positions by providing expert guidance in the field of Information and Communication Technology (ICT). After conducting extensive industry research, we have discovered that many organisations are not fully capitalizing on the potential benefits our business has to offer. With the complex nature of the ICT landscape, it can be overwhelming for businesses to navigate. That's where Kellerman ICT comes in - we offer simplified solutions that align with each organisation's short, mid, and long-term business strategies. We firmly believe that when your ICT needs are aligned with your overall business strategy, it creates sustainable solutions that are purpose-built and scalable. At Kellerman ICT, we have a national footprint and collaborate with multiple partners to provide businesses with a comprehensive and sustainable approach. This allows us to consistently deliver high-quality results and solutions across the board. Our vision is for organisations to recognise the integral role that ICT plays in their business and to understand the benefits we can offer in helping them achieve their business goals. Our mission is to create a platform where ICT content and consultation are readily available, empowering organisations to make positive and informed decisions. We work with both small and medium-sized enterprises (SMEs) and corporations, leveraging our organic growth from start-up to SME to better understand the unique challenges and needs of our customers. We strive to build sustainable and mutually beneficial relationships with our clients, providing proactive support and strategic advantages to help scale their businesses. At Kellerman ICT, we are passionate about assisting organisations in harnessing the full potential of ICT to propel their success. At Kellerman ICT, we pride ourselves on providing impressive end-to-end digital solutions with meticulous attention to detail. Our wide range of services includes Strategic Technology Planning,Solution Design, ICT Business Consultation, Application Development and Advisory, Network and Email System Monitoring, Technical Support, Remote Backup, as well IT Policy Review & Development, among others. We have had the privilege of working on various projects and collaborations, including software maintenance and development for Old Mutual in the financial services sector. Experian API data integration to build user's software products, payment gateway solutions for Selcom Namibia, digital system transformation for paperless solutions in audit and integration, data management for Onaani Investment, and QR code solutions for large manufacturers. Our online platforms encompass various technologies, such as Microsoft Development Power BI & Power Automate, Dynamics, SharePoint, Amazon Web Services, and many more. This broad range of expertise allows us to cater to clients from various industries, including financial, retail, education, health, public, telecom, and hospitality. At Kellerman ICT, we are committed to delivering comprehensive and innovative solutions that meet the unique needs of each client. Our goal is to help organisations leverage technology to optimize their operations, enhance efficiency, and achieve sustainable growth.",
  //   src: "/sponsors/kellerman-ict-sponsor.svg",
  //   sponsorLevel: "Silver",
  // },
];

export default function Sponsors2023() {
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
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <main
      id="sponsors2024"
      className="py-16 overflow-hidden relative bg-[#ECEFF8] flex flex-col items-center justify-center space-y-4"
    >
      <h2 className=" text-headings font-bold w-full text-center text-2xl sm:text-4xl z-[12]">
        Proudly Welcoming Our 2024 Sponsors
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
              onClick={() => {
                setShowModal(true),
                  setModalInfo({
                    heading: name,
                    bodyText: description,
                    sponsorLevel: sponsorLevel,
                  });
              }}
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
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
        className="w-[95vw] md:w-[60vw] mx-auto max-h-[40vh] overflow-y-auto fixed bottom-4 z-20 bg-white/95 border-4 border-primary/50 rounded-xl p-8 flex"
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
