import OutputArea from "@/components/OutputArea";
import Link from "next/link";

import Box from "@/components/Box";
import Tab from "@/components/Tab";

export default function Page({ params }: { params: { to: string } }) {
  const { to } = params;
  return (
    <>
      <Box>
        <div className="flex items-center space-x-4">
          <Link href="/translate/detect/es">
            <Tab label="Spanish" isSelected={to === "es"} />
          </Link>
          <Link href="/translate/detect/en">
            <Tab label="English" isSelected={to === "en"} />
          </Link>
          <Link href="/translate/detect/sv">
            <Tab label="Swedish" isSelected={to === "sv"} />
          </Link>
        </div>
        <OutputArea translatedText="" />
      </Box>
    </>
  );
}
