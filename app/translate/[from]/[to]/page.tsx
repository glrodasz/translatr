import OutputArea from "@/components/OutputArea";

import Box from "@/components/Box";
import Tab from "@/components/Tab";

export default function Page({ params }: { params: { to: string }}) {

  const { to } = params;

  console.log({ to })
  return (
    <>
      <Box>
        <div className="flex items-center space-x-4">
          <Tab label="Spanish" isSelected={to === "es"} />
          <Tab label="English" isSelected={to === "en"} />
          <Tab label="Swedish" isSelected={to === "sv"} />
        </div>
        <OutputArea translatedText="" />
      </Box>
    </>
  );
}
