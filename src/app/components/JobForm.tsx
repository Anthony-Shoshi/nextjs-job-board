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
import { saveJobPost } from "../actions/JobPostFormAction";
import { redirect } from "next/navigation";

export default function JobForm({ orgId }: { orgId: string }) {

    const [countryId, setCountryId] = useState(0);
    const [stateId, setstateId] = useState(0);
    const [countryName, setCountryName] = useState('');
    const [stateName, setStateName] = useState('');
    const [cityName, setCityName] = useState('');

    async function handleJobForm(data: FormData) {
        data.set('countryName', countryName);
        data.set('stateName', stateName);
        data.set('cityName', cityName);
        data.set('ordId', orgId);
        const jobDoc = await saveJobPost(data);
        console.log(jobDoc);
        redirect(`/job/${orgId}`);
    }

    return (
        <Theme>
            <form action={handleJobForm} className="container mt-6 flex flex-col gap-4">
                <TextField.Root placeholder="Job Title" name="title"></TextField.Root>

                <div className="flex gap-8">
                    <div>
                        <h3>Job Icon</h3>
                        <ImageUpload name="jobIcon" icon={faStar} />
                    </div>

                    <div className="grow">
                        <h3>Contact Person</h3>
                        <div className="flex gap-8">
                            <div>
                                <ImageUpload name="contactPersonImg" icon={faUser} />
                            </div>
                            <div className="grow flex flex-col gap-2">
                                <TextField.Root placeholder="John Doe" name="name">
                                    <TextField.Slot>
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </TextField.Slot>
                                </TextField.Root>
                                <TextField.Root placeholder="+315545645" name="phone">
                                    <TextField.Slot>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                    </TextField.Slot>
                                </TextField.Root>
                                <TextField.Root placeholder="john.doe@gmail.com" name="email">
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
                        <RadioGroup.Root defaultValue="onsite" name="remote">
                            <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
                            <RadioGroup.Item value="hybridremote">Hybrid-remote</RadioGroup.Item>
                            <RadioGroup.Item value="fullyremote">Fully-remote</RadioGroup.Item>
                        </RadioGroup.Root>
                    </div>

                    <div>
                        Full time?
                        <RadioGroup.Root defaultValue="project" name="fullTime">
                            <RadioGroup.Item value="project">Project</RadioGroup.Item>
                            <RadioGroup.Item value="parttime">Part-time</RadioGroup.Item>
                            <RadioGroup.Item value="fulltime">Full-time</RadioGroup.Item>
                        </RadioGroup.Root>
                    </div>

                    <div>
                        Salary
                        <TextField.Root name="salary">
                            <TextField.Slot>$</TextField.Slot>
                            <TextField.Slot>K/Year</TextField.Slot>
                        </TextField.Root>
                    </div>
                </div>

                <h3>Location</h3>
                <div className="flex gap-2 *:grow">
                    <CountrySelect
                        onChange={(e: any) => {
                            setCountryId(e.id);
                            setCountryName(e.name);
                        }}
                        placeHolder="Select Country"
                    />
                    <StateSelect
                        countryid={countryId}
                        onChange={(e: any) => {
                            setstateId(e.id);
                            setStateName(e.name);
                        }}
                        placeHolder="Select State"
                    />
                    <CitySelect
                        countryid={countryId}
                        stateid={stateId}
                        onChange={(e: any) => {
                            setCityName(e.name);
                        }}
                        placeHolder="Select City"
                    />
                </div>

                <TextArea placeholder="Job Description" resize={"vertical"} name="description"></TextArea>

                <div className="flex justify-center">
                    <Button size="3">
                        <span className="px-6">Save</span>
                    </Button>
                </div>

            </form>
        </Theme>
    );
}