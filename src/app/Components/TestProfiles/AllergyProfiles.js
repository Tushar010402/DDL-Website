// src/app/Components/AllergyTest/AllergyPackages.jsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './AllergyPackages.module.css';
import Link from 'next/link';
import Image from 'next/image'; // <-- Import Image from next/image

const AllergyPackages = () => {
  const router = useRouter();

  const respiratoryAllergens = [
    "Bermuda grass",
    "Perennial Ryegrass",
    "Timothy grass",
    "Common reed",
    "Cultivatedrye Pollen",
    "Acacia",
    "Tree of Heaven",
    "Alder",
    "Silver birch",
    "Paper mulberry",
    "Hazel pollen",
    "Sugi",
    "Cypress",
    "Beech",
    "Ash",
    "Walnut pollen",
    "Mountain cedar",
    "Mulberry",
    "Olive",
    "Date palm",
    "London plane tree",
    "Cottonwood",
    "Elm",
    "Common Pigweed",
    "Ragweed",
    "Mugwort",
    "Hemp",
    "Lamb's quarter",
    "Annual mercury",
    "Wall pellitory",
    "Ribwort",
    "Russian thistle",
    "Nettle",
    "American house dust mite",
    "European house dust mite",
    "Acarus siro",
    "Blomia tropicalis",
    "Glycyphagus domesticus",
    "Lepidoglyphus destructor",
    "Tyrophagus putrescentiae",
    "German Cockroach",
    "American Cockroach",
    "Male dog urine",
    "Dog",
    "Guinea pig",
    "Cat",
    "House mouse",
    "Rabbit, epithel",
    "Dungarian hamster",
    "Rat",
    "Cattle",
    "Goat, epithel",
    "Horse, epithel",
    "Sheep, epithel",
    "Pig",
    "Malassezia sympodialis",
    "Yeast",
    "Alternaria alternata",
    "Aspergillus fumigatus",
    "Cladosporium herbarum",
    "Penicillium chrysogenum"
  ];

  const foodAllergens = [
    "Chickpea",
    "Soy",
    "Lentil",
    "White bean",
    "Pea",
    "Oat",
    "Quinoa",
    "Common buckwheat",
    "Barley",
    "Lupine seed",
    "Rice",
    "Millet",
    "Cultivated rye",
    "Wheat",
    "Spelt",
    "Maize",
    "Paprika",
    "Caraway",
    "Oregano",
    "Parsley",
    "Anise",
    "Mustard",
    "Kiwi",
    "Papaya",
    "Orange",
    "Melon",
    "Fig",
    "Strawberry",
    "Apple",
    "Mango",
    "Banana",
    "Avocado",
    "Cherry",
    "Peach",
    "Pear",
    "Blueberry",
    "Grapes",
    "Onion",
    "Garlic",
    "Celery",
    "Carrot",
    "Potato",
    "Tomato",
    "Peanut",
    "Cashew",
    "Brazil nut",
    "Pecan",
    "Hazelnut",
    "Walnut",
    "Macadamia",
    "Pistachio",
    "Almond",
    "Pumpkin seed",
    "Sunflower seed",
    "Poppy seed",
    "Sesame",
    "Fenugreek seeds",
    "Cow, milk",
    "Camel, milk",
    "Goat, milk",
    "Mare's milk",
    "Sheep, milk",
    "Egg white",
    "Egg yolk",
    "Herring worm",
    "Crab",
    "Herring",
    "Brown shrimp",
    "Carp",
    "Atlantic cod",
    "Lobster",
    "Shrimp",
    "Squid",
    "Common mussel",
    "Scallop",
    "Black Tiger Shrimp",
    "Thornback ray",
    "Clam",
    "Salmon",
    "Atlantic mackerel",
    "Tuna",
    "Swordfish",
    "House cricket",
    "Cattle, meat",
    "Horse, meat",
    "Chicken meat",
    "Migratory locust",
    "Turkey",
    "Rabbit, meat",
    "Sheep, meat",
    "Pork",
    "Mealworm",
    "Yeast",
    "Oyster"
  ];

  const basicFoodAllergens = [
    "Egg white",
    "Cow's milk",
    "Yogurt",
    "Wheat flour",
    "Rice",
    "Soy bean",
    "Peanut",
    "Coconut",
    "Apple",
    "Grape",
    "Potato",
    "Spinach",
    "Onion",
    "Cucumber",
    "Chicken",
    "Mustard",
    "Ginger",
    "Crab",
    "Shrimp / Prawn",
    "Coffee"
  ];

  const basicRespiratoryAllergens = [
    "Timothy grass",
    "Cultivated rye",
    "Cultivated corn",
    "Eucalyptus",
    "False ragweed",
    "Dandelion",
    "Goldenrod",
    "Sunflower",
    "D. pteronyssinus",
    "D. farinae",
    "Cockroach",
    "Cat",
    "Dog",
    "Cow",
    "Pigeon feathers",
    "Chicken feathers",
    "Aspergillus fumigatus",
    "Trichophyton"
  ];

  const handleBookPackage = (packageName) => {
    const encodedPackageName = encodeURIComponent(packageName);
    router.push(`/HomeCollection?package=${encodedPackageName}`);
  };
  return (
    <>
          <div className={styles.TestProfileHeaderImagae}>
        <Image
          src="/PhotosAndLogos/allergycomponent.jpeg"
          alt="Test Profile Background"
          width={1000}
          height={400}
          priority
        />
      </div>

      <div className={styles.healthCheckupSection}>
        <h2>Food & Respiratory Allergy Testing in Delhi & Gurgaon</h2>
        <p className={styles.subtitle}>
        We provide home collection services in Delhi-NCR region including Gurgaon, Faridabad, Noida and Ghaziabad.


        </p>

    

        <p className={styles.description}>
        Allergy component testing is a type of allergy testing that identifies specific allergenic proteins (components) in an individual's immune system that cause an allergic reaction. The test results can help identify which specific components of an
         allergen an individual is allergic to, which can be useful in guiding treatment options. For example, if a person is allergic to multiple components of a particular allergen, such as peanuts, allergy component testing can identify the
          specific components that trigger the allergic reaction. This information can be used to develop a personalized treatment plan that targets the specific allergenic components.
        </p>
  

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgile40years.png"
              alt="40 Years of Service"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>40 Years of Service</p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgilegoogleRating.png"
              alt="Rated 4.9/5"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>
              Rated 4.9/5<br />Customers love us!
            </p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgileNABL.png"
              alt="NABL Accredited"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>NABL Accredited</p>
          </div>
          <Link href="https://discoverbydrdangs.com/#">
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgileDiscover.png"
              alt="Get Personalized Test Package"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>Get Personalized Test Package</p>
          </div>
          </Link>
        </div>
      </div>

    
    <div className={styles.packageContainer}>
        
      <div className={styles.packageRow}>
        {/* Respiratory Profile Card */}
        <div className={styles.packageCard}>
          <h2 className={styles.packageTitle}>RESPIRATORY PROFILE - ALLERGYNIUS Dx </h2>
          <p className={styles.componentCount}>(62 Allergens & 122 Components)</p>
          
          <div className={styles.testSection}>
            <p className={styles.testLabel}>Tests:</p>
            <div className={styles.testColumns}>
              <div className={styles.leftColumn}>
                {respiratoryAllergens.slice(0, Math.ceil(respiratoryAllergens.length/2)).map((allergen, index) => (
                  <div key={index} className={styles.allergenItem}>• {allergen}</div>
                ))}
              </div>
              <div className={styles.rightColumn}>
                {respiratoryAllergens.slice(Math.ceil(respiratoryAllergens.length/2)).map((allergen, index) => (
                  <div key={index} className={styles.allergenItem}>• {allergen}</div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.priceSection}>
            <div className={styles.priceLabel}>Price:-</div>
            <div className={styles.priceValue}>₹ 25,000</div>
          </div>

          <button 
            className={styles.bookButton}
            onClick={() => handleBookPackage('RESPIRATORY PROFILE - ALLERGYNIUS Dx ')}
          >
            Book this package
          </button>
        </div>

        {/* Food Profile Card */}
        <div className={styles.packageCard}>
          <h2 className={styles.packageTitle}> FOOD PROFILE - ALLERGYNIUS Dx</h2>
          <p className={styles.componentCount}>(94 Allergens & 155 Components)</p>
          
          <div className={styles.testSection}>
            <p className={styles.testLabel}>Tests:</p>
            <div className={styles.testColumns}>
              <div className={styles.leftColumn}>
                {foodAllergens.slice(0, Math.ceil(foodAllergens.length/2)).map((allergen, index) => (
                  <div key={index} className={styles.allergenItem}>• {allergen}</div>
                ))}
              </div>
              <div className={styles.rightColumn}>
                {foodAllergens.slice(Math.ceil(foodAllergens.length/2)).map((allergen, index) => (
                  <div key={index} className={styles.allergenItem}>• {allergen}</div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.priceSection}>
            <div className={styles.priceLabel}>Price:-</div>
            <div className={styles.priceValue}>₹ 25,500</div>
          </div>

          <button 
            className={styles.bookButton}
            onClick={() => handleBookPackage('FOOD PROFILE - ALLERGYNIUS Dx ')}
          >
            Book this package
          </button>
        </div>

        {/* Customise Your Allergens Card */}
        <div className={styles.packageCard}>
          <h2 className={styles.packageTitle}>CUSTOMISE YOUR ALLERGENS - BASIC ALLERGY PANEL</h2>
          
          <div className={styles.customPricing}>
            <div className={styles.pricingItem}>
              Any 3 Allergens from Basic Respiratory Allergens : INR 4,500
            </div>
            <div className={styles.pricingItem}>
              Any 5 Allergens from Basic Respiratory Allergens : INR 6,000
            </div>
            <div className={styles.pricingItem}>
              Any 3 Allergens from Basic Food Allergens : INR 4,500
            </div>
            <div className={styles.pricingItem}>
              Any 5 Allergens from Basic Food Allergens : INR 6,000
            </div>
          </div>

          <div className={styles.allergenLists}>
            <div className={styles.allergenGroup}>
              <h3 className={styles.allergenGroupTitle}>Basic Food Allergens - ALLERGYNIUS Dx </h3>
              <div className={styles.allergenItems}>
                {basicFoodAllergens.map((allergen, index) => (
                  <div key={index} className={styles.allergenItem}>• {allergen}</div>
                ))}
              </div>
            </div>

            <div className={styles.allergenGroup}>
              <h3 className={styles.allergenGroupTitle}>Basic Respiratory Allergens - ALLERGYNIUS Dx </h3>
              <div className={styles.allergenItems}>
                {basicRespiratoryAllergens.map((allergen, index) => (
                  <div key={index} className={styles.allergenItem}>• {allergen}</div>
                ))}
              </div>
            </div>
          </div>

          <button 
            className={styles.bookButton}
            onClick={() => handleBookPackage('CUSTOMISE YOUR ALLERGENS - ALLERGYNIUS Dx')}
          >
            Book this package
          </button>
        </div>
      </div>
      <div className={styles.packageRow}>
        {/* Comprehensive Profile Card */}
        <div className={styles.packageCard}>
          <h2 className={styles.packageTitle}>Comprehensive Profile - ALLERGYNIUS Dx</h2>
          <p className={styles.componentCount}>(163 Allergens & 294 Components)</p>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>• 4th Generation allergy testing technology</div>
            <div className={styles.featureItem}>• Based on microarray and nanotechnology</div>
            <div className={styles.featureItem}>• Provides information about proteins/components of various allergens</div>
            <div className={styles.featureItem}>• Predicts severity of the allergic reaction</div>
            <div className={styles.featureItem}>• Predicts the probability of immunotherapeutic success</div>
            <div className={styles.featureItem}>• Discriminates allergens susceptible to denaturation(heat sensitive) and digestion</div>
            <div className={styles.featureItem}>• Preventing cross-reactivity and false positives</div>
            <div className={styles.featureItem}>• In children, it predicts the likelihood of developing tolerance</div>
            <div className={styles.featureItem}>• Interpretation of test results provided by an AI-driven algorithm along with the report</div>
          </div>

          <div className={styles.profilePricing}>
            <div className={styles.pricingDetail}>• Skin Allergy (Rashes/Hives/Urticaria) Profile (100 Allergens & 180 Components, It Includes 94 food allergens & allergens marked with INR - 26,800</div>
            <div className={styles.pricingDetail}>• Vegetarian - Food Allergy Profile(55 Allergens & 112 Components )INR - 23,500</div>
            <div className={styles.pricingDetail}>• Nuts Allergy Profile(9 Allergens & 29 Components) INR - 15,500</div>
            <div className={styles.pricingDetail}>• Moulds & Yeast Allergy Profile (6 Allergens & 13 Components) INR - 15,500</div>
          </div>

          <div className={styles.miscSection}>
            <h3 className={styles.miscTitle}>Miscellaneous</h3>
            <div className={styles.miscGrid}>
              <div className={styles.miscItem}>• Fire ant</div>
              <div className={styles.miscItem}>• Honey bee</div>
              <div className={styles.miscItem}>• Hornet</div>
              <div className={styles.miscItem}>• Paper wasp venom</div>
              <div className={styles.miscItem}>• Wasp venom</div>
              <div className={styles.miscItem}>• Latex</div>
              <div className={styles.miscItem}>• Pigeon tick</div>
              <div className={styles.miscItem}>• Weeping fig</div>
            </div>
          </div>

          <button 
            className={styles.bookButton}
            onClick={() => handleBookPackage('Comprehensive Profile - ALLERGYNIUS Dx ')}
          >
            Book this package
          </button>
        </div>

        {/* Common Allergies Card */}
        <div className={styles.packageCard}>
          <h2 className={styles.packageTitle}> COMMON ALLERGIES & RELATED SYMPTOMS - ALLERGYNIUS Dx</h2>

          <div className={styles.allergyCategories}>
            <div className={styles.allergyCategory}>
              <h3 className={styles.categoryTitle}>Rhinitis / Respiratory</h3>
              
              <div className={styles.subSection}>
                <h4 className={styles.subTitle}>Common Aeroallergens</h4>
                <div className={styles.allergenList}>
                  <div>• Dust mites</div>
                  <div>• Pollen</div>
                  <div>• Moulds</div>
                  <div>• Pets</div>
                  <div>• Cockroaches</div>
                </div>
              </div>

              <div className={styles.subSection}>
                <h4 className={styles.subTitle}>Common Respiratory Symptoms</h4>
                <div className={styles.symptomList}>
                  <div>• Sneezing</div>
                  <div>• Breathlessness</div>
                  <div>• Chest tightness</div>
                  <div>• Coughing</div>
                  <div>• Wheezing</div>
                </div>
              </div>
            </div>

            <div className={styles.allergyCategory}>
              <h3 className={styles.categoryTitle}>Skin Related</h3>
              
              <div className={styles.subSection}>
                <h4 className={styles.subTitle}>Allergy Triggers</h4>
                <div className={styles.triggerList}>
                  <div>• Wheat</div>
                  <div>• Milk</div>
                  <div>• Eggs</div>
                  <div>• Soy</div>
                  <div>• Dust mites</div>
                  <div>• Cockroaches</div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ padding: '20px',  fontFamily: 'Arial, sans-serif' }} id={styles.AllergyPackagesContent}>
      <h1 >Click here to
        <span className='underline '><Link href="https://www.drdangslab.com/FOODALLEGRY.PDf"> Download the Brochure</Link> </span> 
        and <span className='underline'><Link href=" https://www.drdangslab.com/Food&Respiratory_SAMPLE_REPORT.PDf"> Sample Report </Link>  </span></h1>

      <h2>Benefits of ALLERGYLINUS Dx:</h2>
      <ul>
        <li>Identifying specific components of an allergen that trigger an allergic reaction, allowing for targeted treatment and management of allergies.</li>
        <li>Improving accuracy and specificity of allergy diagnosis, especially in cases where traditional allergy testing has been inconclusive.</li>
        <li>Allowing for the identification of cross-reactivity between allergens, which can be important in cases where an individual is allergic to multiple allergens.</li>
        <li>Providing valuable information to guide treatment decisions, such as the choice of allergen immunotherapy.</li>
      </ul>

      <h2>Why is allergy component testing helpful?</h2>
      <p>
        By understanding the specific allergenic components that trigger your allergy, you can take steps to avoid those components and reduce your risk of an allergic reaction. This information can also be used to create a personalized treatment plan that targets the specific allergenic components.
      </p>

      <h2>How is CRD allergy testing done?</h2>
      <p>
        During the test, a blood sample is taken and tested for the presence of specific allergenic components. A minimal amount of blood sample needs to be taken for this test, therefore it can also be performed along with your routine blood sample for testing.
      </p>

      <h2>When will the test results for Allergylinus Dx be available?</h2>
      <p>It takes 1 week for the test results to be made available.</p>

      <h2>How accurate is CRD allergy testing?</h2>
      <p>
        CRD allergy testing is generally considered to be very accurate. Studies have shown that it can improve the accuracy and specificity of allergy diagnosis, especially in cases where traditional allergy testing has been inconclusive.
      </p>

      <h2>Rise in Allergies and Role of IVD in Allergy Management</h2>
      <p>
        Allergies are a growing health concern in India, with changing lifestyles, environmental factors, and genetic predisposition contributing to their increasing prevalence and complexity. People are at risk of respiratory allergies (such as allergic rhinitis, asthma), skin allergies (such as atopic dermatitis), food allergies, drug allergies, and insect sting allergies, among others. The prevalence of allergies in India has been steadily increasing over the past few decades, with respiratory allergies being the most common type.
      </p>
      <p>
        The management of allergies involves identifying the specific allergens to which an individual is allergic, avoiding exposure to these allergens, and providing appropriate treatment, including medication and allergen immunotherapy (AIT) or allergy shots. This is where the IVD sector plays a pivotal role by providing accurate and reliable diagnostic tools for identifying allergens and designing personalized treatment plans.
      </p>

      <h2>Traditional Allergy Testing vs. Allergy Component Testing</h2>
      <p>
        Traditional allergy testing methods, such as skin prick tests or total immunoglobulin E (IgE) blood tests, have been widely used for allergy diagnosis. However, these methods have limitations in terms of accuracy and specificity. Skin prick tests can be uncomfortable for patients, require skilled practitioners, and can have false-positive or false-negative results. Total IgE blood tests, on the other hand, can provide a broad response without identifying specific allergenic proteins, leading to overdiagnosis and overtreatment. This is where the breakthrough technology of allergy component testing comes into play.
      </p>

      <h2>Allergy Component Testing: The Future of Allergy Diagnosis</h2>
      <p>
        Allergy component testing, also known as component-resolved diagnosis (CRD) or molecular allergy testing, is a cutting-edge diagnostic approach that offers several advantages over traditional methods. Unlike skin prick tests or total IgE blood tests that provide a broad response, allergy component testing identifies specific allergenic proteins that trigger allergic reactions. This advanced testing method involves analyzing an individual's blood sample for the presence of specific allergenic proteins, such as pollen, dust mites, pet dander, food proteins, or venom proteins, using highly sensitive and specific assays.
      </p>

      <p>
        One of the key advantages of allergy component testing is its ability to provide a more precise identification of the specific allergens to which an individual is allergic. Traditional allergy testing methods may only provide a general indication of sensitization to a particular allergen group, but allergy component testing can pinpoint the exact allergenic proteins that an individual's immune system is sensitized to. This detailed information can help determine if the sensation is clinically relevant and requires treatment, or if it is a false positive result. This avoids unnecessary avoidance of allergens and treatments, reducing the risk of overdiagnosis and overtreatment.
      </p>

      <p>
        Another significant advantage of allergy component testing is its ability to enable the design of personalized treatment plans. Based on the specific allergenic proteins identified through allergy component testing, healthcare providers can create treatment regimens that are tailored to each patient's needs. For example, allergen immunotherapy, also known as allergy shots, can be customized based on the specific allergens identified through component testing. This allows for a more targeted and effective treatment approach, potentially improving patient outcomes and reducing the overall burden of allergies on healthcare resources.
      </p>

      <p>
        Allergy component testing also has the potential to revolutionize the field of food allergy diagnosis and management. Food allergies are a growing concern worldwide, and accurate identification of the specific allergenic proteins in foods can be crucial in managing food allergies effectively. Traditional methods, such as skin prick tests or blood tests, may not provide accurate information about the specific proteins that trigger an individual's food allergy. However, allergy component testing can provide precise information about the allergenic proteins in foods, allowing for better management strategies, such as targeted avoidance and personalized dietary plans.
      </p>

      <p>
        In addition to its diagnostic and management benefits, allergy component testing also has the potential to contribute to advancements in the field of allergies. By identifying specific allergenic proteins and their different allergens, component testing can help researchers better understand the molecular mechanisms underlying allergies, leading to the development of new treatments and interventions. This can contribute to the advancement of the field of allergy research and ultimately lead to better outcomes for patients with allergies.
      </p>
<div className={styles.EndBotton}>
      <a href="/food-allergy-test" >Click here to book the test</a>
    </div>
    </div>
    </>
  );
};

export default AllergyPackages;