"use client";

import { faEnvelope, faPhone, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, RadioGroup, TextArea, TextField, Theme } from "@radix-ui/themes";
import { useState } from "react";
import {
    CitySelect,
    CountrySelect,
    StateSelect
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import ImageUpload from "./ImageUpload";

export default function JobForm() {

    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    return (
        <Theme>
            <form className="container mt-6 flex flex-col gap-4">
                <TextField.Root placeholder="Job Title"></TextField.Root>

                <div className="flex gap-8">
                    <div>
                        <h3>Job Icon</h3>
                        <ImageUpload icon={faStar} />
                    </div>

                    <div className="grow">
                        <h3>Contact Person</h3>
                        <div className="flex gap-8">
                            <div>
                                <ImageUpload icon={faUser} />
                            </div>
                            <div className="grow flex flex-col gap-2">
                                <TextField.Root placeholder="John Doe">
                                    <TextField.Slot>
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </TextField.Slot>
                                </TextField.Root>
                                <TextField.Root placeholder="+315545645">
                                    <TextField.Slot>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                    </TextField.Slot>
                                </TextField.Root>
                                <TextField.Root placeholder="john.doe@gmail.com">
                                    <TextField.Slot>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </TextField.Slot>
                                </TextField.Root>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3">
                    <div>
                        Remote?
                        <RadioGroup.Root defaultValue="onsite" name="example">
                            <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
                            <RadioGroup.Item value="hybridremote">Hybrid-remote</RadioGroup.Item>
                            <RadioGroup.Item value="fullyremote">Fully-remote</RadioGroup.Item>
                        </RadioGroup.Root>
                    </div>

                    <div>
                        Full time?
                        <RadioGroup.Root defaultValue="project" name="example">
                            <RadioGroup.Item value="project">Project</RadioGroup.Item>
                            <RadioGroup.Item value="parttime">Part-time</RadioGroup.Item>
                            <RadioGroup.Item value="fulltime">Full-time</RadioGroup.Item>
                        </RadioGroup.Root>
                    </div>

                    <div>
                        Salary
                        <TextField.Root>
                            <TextField.Slot>$</TextField.Slot>
                            <TextField.Slot>K/Year</TextField.Slot>
                        </TextField.Root>
                    </div>
                </div>

                <h3>Location</h3>
                <div className="flex gap-2 *:grow">
                    <CountrySelect
                        onChange={(e: any) => {
                            setCountryid(e.id);
                        }}
                        placeHolder="Select Country"
                    />
                    <StateSelect
                        countryid={countryid}
                        onChange={(e: any) => {
                            setstateid(e.id);
                        }}
                        placeHolder="Select State"
                    />
                    <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        onChange={(e: any) => {
                            console.log(e);
                        }}
                        placeHolder="Select City"
                    />
                </div>

                <TextArea placeholder="Job Description" resize={"vertical"}></TextArea>

                <div className="flex justify-center">
                    <Button size="3">
                        <span className="px-6">Save</span>
                    </Button>
                </div>

            </form>
        </Theme>
    );
}