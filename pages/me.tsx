import DefaultLayout from "@/layouts/default";
import { getImgSource } from "@/utils";
import { format } from "date-fns";
import { useState } from "react";

const personalData = {
    uuid: "D8CDA01B-5C55-6CFD-BA63-E49F3426A56D",
    headUrl: "/personal-info-head.jpg",
    name: "K1ssInn",
    createTime: new Date("2024-4-5")
}

export default function PersonalInfoPage() {

    const [personalInfo, setPersonalInfo] = useState(personalData)

    return (
        <DefaultLayout>
            <section className="flex flex-col lg:flex-row h-full items-center justify-center gap-4 py-8 px-4 md:py-10">
                <div className="w-full lg:w-1/4 p-4 self-start h-fit lg:h-full border-1 border-default-400/80 rounded">
                    <div className="flex flex-col items-center gap-2">
                        <img
                            className="lg:mt-8 rounded-full"
                            alt="head"
                            src={getImgSource(personalInfo.headUrl)}
                            height={96}
                            width={96}
                        />
                        <div className="my-auto">
                            <div className="font-semibold text-2xl">{personalInfo.name}</div>
                            {/* <div className="text-xs">{personalInfo.uuid}</div> */}
                            <div className="text-sm text-default-500 tracking-wider">{format(personalInfo.createTime, "yyyy年M月加入")}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 h-full p-4 border-1 border-default-400/80 rounded">

                </div>
            </section>
        </DefaultLayout>
    )
}