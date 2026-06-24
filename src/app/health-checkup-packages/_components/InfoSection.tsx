import Image from "next/image";

export default function InfoSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Health Checkup Packages in Delhi / NCR
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        We provide home collection services in Delhi-NCR region including
        Gurgaon, Faridabad, Noida, and Ghaziabad.
      </p>
      <div className="flex justify-center">
        <a
          href="https://testprofiles.drdangslab.com/static/files/Towards-Better-Health-28-April-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Download Health Test Package Brochure
        </a>
      </div>

      <p className="text-gray-600 mt-6">
        Dr. Dangs Lab provides an extensive range of health packages that are
        specifically curated by the Dr. Dangs to include effective diagnostic
        tests according to varied diagnostic requirements. Preventive checks are
        an important part of disease prevention and are the most important tools
        in the hands of doctors to identify diseases and risk factors early.
      </p>

      <div className="flex justify-center items-center gap-[5rem] flex-wrap py-6">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/PhotosAndLogos/TestProgile40years.webp"
            alt="40 Years of Service"
            width={60}
            height={60}
          />
          <p className="mt-2 text-sm text-black font-medium">
            40 Years of Service
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/PhotosAndLogos/TestProgilegoogleRating.webp"
            alt="Rated 4.9/5"
            width={60}
            height={60}
          />
          <p className="mt-2 text-black text-sm font-medium">
            Rated 4.9/5
            <br />
            Customers love us!
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/PhotosAndLogos/TestProgileNABL.webp"
            alt="NABL Accredited"
            width={60}
            height={60}
          />
          <p className="mt-2 text-sm text-black font-medium">
            NABL Accredited
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/PhotosAndLogos/TestProgileDiscover.webp"
            alt="Get Personalized Test Package"
            width={60}
            height={60}
          />
          <p className="mt-2 text-sm text-black font-medium">
            Get Personalized Test Package
          </p>
        </div>
      </div>
    </div>
  );
}
