'use client';

import React from 'react';
import Image from 'next/image';

const FunctionalMedicine = () => {
    return (
        <div className="relative bg-white">
            {/* Hero Section with Background Image */}
            <div
                className="w-full h-[600px] mt-5 bg-center bg-no-repeat bg-cover relative flex justify-center items-center text-white overflow-hidden bg-[url('/PhotosAndLogos/OurLabC.jpg')]"
                role="img"
                aria-label="Functional Medicine Testing"
            >
                <div className="bg-black bg-opacity-50 px-8 py-4 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">Functional Medicine Testing</h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="p-8 mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Functional Medicine Testing in Delhi / NCR
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Functional medicine is a holistic approach to healthcare that focuses on identifying and addressing the root causes of disease. It goes beyond traditional diagnostics to look at the whole person, including their lifestyle, diet, environment, and genetics.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Functional medicine testing can be used to assess a variety of health markers, such as:
                </h3>
                <ul className="list-disc pl-5 mb-6">
                    <li className="text-gray-600 mb-2">Gut health</li>
                    <li className="text-gray-600 mb-2">Hormonal balance</li>
                    <li className="text-gray-600 mb-2">Immune function</li>
                    <li className="text-gray-600 mb-2">Nutrient levels</li>
                    <li className="text-gray-600 mb-2">Toxic levels of various metals/moulds etc</li>
                </ul>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                    This information can be used by the physician to create a personalized treatment plan that addresses the individual's unique needs.
                </p>

                {/* Call-to-Action Box */}
                <div className="bg-purple-50 p-6 rounded-lg mb-8 border-l-4 border-purple-600">
                    <h3 className="text-xl font-bold text-purple-700 mb-3">
                        Complete Functional Tests Catalog
                    </h3>
                    <p className="text-gray-600 mb-4">
                        For detailed information on all available functional medicine tests, visit our dedicated portal:
                    </p>
                    <a
                        href="https://functionaltests.drdangslab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                    >
                        Visit Functional Tests Portal
                    </a>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    At Dr. Dangs Lab, we offer a wide range of functional medicine tests in house & also with various lab partners, including:
                </h2>

                {/* Allergy & Food Intolerance */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-blue-700 mb-3">
                        Allergy & Food Intolerance Testing
                    </h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="text-gray-600 mb-2">
                            <strong>Allergy profiles</strong> (Ig E based Allergy Component Testing): Blood test that identifies specific proteins within allergens to which a person is allergic.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>Food intolerance tests:</strong> Tests to identify foods that cause digestive symptoms.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>Endoselect salivary:</strong> Salivary test to identify food intolerances and sensitivities.
                        </li>
                    </ul>
                </div>

                {/* Gut Health & Microbiome */}
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-green-700 mb-3">
                        Gut Health & Microbiome Testing
                    </h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="text-gray-600 mb-2">
                            <strong>Microbiome testing:</strong> Gut microbiome analysis to identify bacteria, fungi, and other microbes present in the gut. Gut microbiome analysis that focuses on identifying and quantifying specific bacterial species.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>GI effects comprehensive profile</strong> (GIFX): A test that analyzes a variety of gut markers, including inflammation, digestive enzymes, and gut microbiota.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>GI map:</strong> Stool test to analyze a variety of markers, including inflammation, digestive enzymes, gut microbiota, and parasites.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>Small intestinal bacterial overgrowth</strong> (SIBO): A test to diagnose an overgrowth of bacteria in the small intestine.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>Intestinal permeability assessment:</strong> A test to measure intestinal permeability, which is a measure of how easily substances can pass from the gut into the bloodstream.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>Urea breath test</strong> (UBT): Breath test to diagnose Helicobacter pylori infection, which is a type of bacteria that can cause stomach ulcers.
                        </li>
                    </ul>
                </div>

                {/* Metabolic & Organic Acids */}
                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-yellow-700 mb-3">
                        Metabolic & Organic Acids Testing
                    </h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="text-gray-600 mb-2">
                            <strong>Organic acids test</strong> (OAT): Urine test to identify organic acids produced by the body, which can be used to diagnose metabolic disorders and other health conditions.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>Microbial organic acids test</strong> (MOAT): Urine test to identify organic acids produced by gut bacteria.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>Metabolomix+</strong>: Blood test that measures levels of hundreds of metabolites in the blood.
                        </li>
                    </ul>
                </div>

                {/* Heavy Metals & Toxicity */}
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-red-700 mb-3">
                        Heavy Metals & Toxicity Testing
                    </h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="text-gray-600 mb-2">
                            <strong>Heavy metals urine test:</strong> Urine test to measure levels of heavy metals, such as lead, mercury, and arsenic.
                        </li>
                        <li className="text-gray-600 mb-2">
                            <strong>Metals hair test:</strong> Hair test to measure levels of heavy metals in the body.
                        </li>
                    </ul>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-6 bg-gray-100 p-4 rounded-lg">
                    <strong>And many more -</strong> For complete information, visit our{' '}
                    <a
                        href="https://functionaltests.drdangslab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 font-bold hover:underline"
                    >
                        Functional Tests Portal
                    </a>{' '}
                    or kindly email us on{' '}
                    <a href="mailto:info@drdangslab.com" className="text-blue-500 hover:underline">
                        info@drdangslab.com
                    </a>{' '}
                    for more information
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Benefits of functional medicine testing
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                    Functional medicine testing can offer a number of benefits, including:
                </p>
                <ul className="list-disc pl-5 mb-6">
                    <li className="text-gray-600 mb-2">Identifying the root causes of illness</li>
                    <li className="text-gray-600 mb-2">Developing personalized treatment plans</li>
                    <li className="text-gray-600 mb-2">Preventing chronic diseases</li>
                    <li className="text-gray-600 mb-2">Improving overall health and well-being</li>
                </ul>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                    If you are looking for a holistic approach to healthcare, functional medicine testing may be a good option for you. To learn more, please contact Dr. Dangs Lab.
                </p>

                {/* Contact Information */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        How to Get Started:
                    </h3>
                    <p className="text-gray-800 mb-2">
                        <strong>🌐 Website:</strong>{' '}
                        <a className="text-blue-500 hover:underline" href="https://www.drdangslab.com">
                            www.drdangslab.com
                        </a>
                    </p>
                    <p className="text-gray-800 mb-2">
                        <strong>🌐 Functional Tests Portal:</strong>{' '}
                        <a className="text-blue-500 hover:underline" href="https://functionaltests.drdangslab.com/" target="_blank" rel="noopener noreferrer">
                            functionaltests.drdangslab.com
                        </a>
                    </p>
                    <p className="text-gray-800 mb-2">
                        <strong>📞 Call us at:</strong> 9999992020
                    </p>
                    <p className="text-gray-800 mb-2">
                        <strong>📧 Email:</strong>{' '}
                        <a className="text-blue-500 hover:underline" href="mailto:info@drdangslab.com">
                            info@drdangslab.com
                        </a>
                    </p>
                    <p className="text-gray-800">
                        <strong>🏠 Home collection available across Delhi / NCR</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FunctionalMedicine;
