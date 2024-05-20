"use client";
import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { ThemeProvider, Button } from "@material-tailwind/react";

export { ThemeProvider, Button };

const SectionOne = () => {
    const [activeTab, setActiveTab] = React.useState("Description");

    const data = [
        {
            label: "Description",
            value: "Description",
            desc: `Italian cheese is known for its wide variety and unique, delicious flavors. Here are some famous types of Italian cheese:

1. Mozzarella: Mozzarella cheese is one of the most famous types of Italian cheese. It is characterized by its fresh flavor and unique texture, and it is commonly used in making pizza, salads, and pasta.

3. Ricotta: Ricotta cheese is known for its soft and creamy texture, and it is commonly used in making Italian desserts such as cannoli and lasagna.

4. Burrata cheese: Burrata cheese is a type of fresh Italian cheese known for its creamy texture and delicate flavor. It is made from cow's milk, similar to mozzarella cheese, but it stands out with a unique filling of cream and soft curd pieces, giving it a rich and delicious taste.`,
        },
        {
            label: "Specification",
            value: "Specification",
            desc: `When choosing Italian cheese, you can consider several criteria to ensure high quality and enjoy the authentic flavor of Italian cheese:

Origin and Traditional Methods: Choose Italian cheese known for its long-standing and traditional production methods in Italy. This includes varieties such as Parmesan, Mozzarella, Provolone, and others.

Taste and Aroma: Look for cheese with a rich and deep flavor, accompanied by a strong and distinctive aroma. Italian cheese should be fresh and have a balanced flavor, without any unpleasant or burnt taste.

Appearance and Texture: Ensure that the cheese has a smooth surface and is free from defects and damage, with no signs of mold or spoilage.

Natural Ingredients: Make sure that the cheese is made from high-quality natural ingredients, without the addition of preservatives or other chemical additives.

Protected Geographical Indication: Look for Italian cheese that bears the Protected Designation of Origin (PDO) or Protected Geographical Indication (PGI) label, which ensures quality and authenticity.

Trusted Brands: Choose Italian cheese from trusted brands known for the quality of their products and compliance with high food standards.

By carefully selecting Italian cheese according to these criteria, you can enjoy a unique taste experience and authentic flavor characteristic of Italian cuisine.`,
        },
        {
            label: "Reviews",
            value: "Reviews",
            desc: `1-"When it comes to Italian cheese, Sana is the perfect choice, where supreme quality and high cleanliness meet in every bite."

2-"The authentic Italian flavors breathe life into every bite of your cheese, unmatched quality and cleanliness are accounted for in every second."

3-"The experience of cheese from Sana is a soul-nourishing journey; it's not just food, but an art in the world of exquisite flavors and guaranteed cleanliness."`,
        },
    ];

    return (
        <div className='flex justify-center items-center z-1 my-20'>
            <div className='lg:w-9/12'>
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                            className: "bg-transparent border-b-2 border-[#D62923] shadow-none rounded-none",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "text-[#D62923] font-Inter font-medium md:text-2xl" : "font-Inter font-medium md:text-2xl"}
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                <div className='text-[#191919] font-Inter md:text-lg font-normal'>
                                    {desc.split('\n').map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
};

export default SectionOne;
