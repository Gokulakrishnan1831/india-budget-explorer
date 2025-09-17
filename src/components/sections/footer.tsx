import Image from 'next/image';

const dashboards = [
  { name: "Union Budget Explorer 2024-25(I)", href: "https://union2024i.openbudgetsindia.org/en/" },
  { name: "Union Budget Explorer 2023-24", href: "https://union.openbudgetsindia.org/" },
  { name: "Union Budget Explorer 2022-23", href: "#" },
  { name: "Union Budget Explorer 2021-22", href: "#" },
  { name: "Union Budget Explorer 2020-21", href: "#" },
  { name: "Union Budget Explorer 2019-20", href: "#" },
  { name: "Union Budget Explorer 2019-20 (I)", href: "#" },
  { name: "Union Budget Explorer 2018-19", href: "#" },
  { name: "Himachal Pradesh Fiscal Data Explorer", href: "#" },
  { name: "Assam Budget Explorer 2023-24", href: "https://assam2023.openbudgetsindia.org/en/" },
  { name: "Assam Budget Explorer 2019-20", href: "#" },
  { name: "Balasore District Treasury", href: "#" },
  { name: "Krishna District Treasury", href: "#" },
  { name: "Schemes Dashboard", href: "https://schemes.openbudgetsindia.org/" },
  { name: "Sector Dashboard", href: "https://sectors.openbudgetsindia.org/" }
];

const datasets = [
  { name: "Government-wise Budget Data", href: "/organization" },
  { name: "Sector-wise Budget Data", href: "/group" },
  { name: "All Datasets", href: "/dataset" }
];

const platform = [
  { name: "How to use the OBI Platform", href: "/pages/how-to-use-the-portal" },
  { name: "FAQs on the Platform", href: "/pages/faqs" },
  { name: "About OBI Platform", href: "/about" },
  { name: "Video: OBI Platform", href: "#" },
  { name: "Video: OBI Platform (Hindi)", href: "#" },
  { name: "Video: Budget Basics", href: "https://budgetbasics.openbudgetsindia.org/" },
  { name: "Video: Budget Basics (Hindi)", href: "#" },
  { name: "Video: Schemes Dashboard", href: "#" },
  { name: "Video: Budget Forum", href: "https://forum.openbudgetsindia.org/" },
  { name: "Video: Budget Forum (Hindi)", href: "#" },
  { name: "Video: Gender Responsive Budgeting", href: "#" }
];

const legalLinks = [
  { name: "Disclaimer", href: "#" },
  { name: "License", href: "#" },
  { name: "Contact us", href: "#" },
  { name: "CKAN API", href: "#" }
];

const socialLinks = [
  { name: "GitHub", href: "#", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/github-icon-23.svg?" },
  { name: "Twitter", href: "#", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/twitter-icon-24.svg?" },
  { name: "Facebook", href: "#", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/facebook-icon-25.svg?" }
];

const Footer = () => {
  return (
    <footer className="bg-[#2B3A67] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <a href="/" className="inline-flex items-baseline gap-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/obi-footer-horizontal-logo-20.svg?"
              alt="Open Budgets India"
              width={195}
              height={22}
              className="h-auto"
            />
            <span className="text-[10px] font-semibold tracking-wider relative -top-0.5">BETA</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Dashboards</h3>
            <ul className="space-y-2.5 text-sm">
              {dashboards.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="underline hover:no-underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Budget Datasets</h3>
            <ul className="space-y-2.5 text-sm">
              {datasets.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="underline hover:no-underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">OBI Platform</h3>
            <ul className="space-y-2.5 text-sm">
              {platform.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="underline hover:no-underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
              {legalLinks.map((item, index) => (
                <a href={item.href} key={index} className="underline hover:no-underline">
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center flex-wrap justify-center gap-x-6 gap-y-4">
              <a href="#">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/cc-by-logo-21.svg?"
                  alt="Creative Commons License"
                  width={88}
                  height={31}
                />
              </a>
              <a href="#">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/open_data_logo-22.png?"
                  alt="Open Data"
                  width={71}
                  height={14}
                />
              </a>
              <div className="flex items-center gap-x-4">
                {socialLinks.map((item) => (
                  <a key={item.name} href={item.href} aria-label={item.name}>
                    <Image src={item.icon} alt={item.name} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;