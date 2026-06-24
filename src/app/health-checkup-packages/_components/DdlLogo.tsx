import Image from "next/image";

export default function DdlLogo() {
  return (
    <div className="flex flex-col items-end">
      <span className="text-[8px] text-gray-400 mb-0.5">Packages by</span>
      <Image
        src="/PhotosAndLogos/ddl-logo.svg"
        alt="Dr. Dangs Lab"
        width={40}
        height={39}
        className="w-10 h-auto"
      />
    </div>
  );
}
