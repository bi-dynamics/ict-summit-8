"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { z } from "zod";
import { FormDataSchema } from "../lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "1",
    name: "Personal Information",
    fields: ["participationCategory"],
  },
  {
    id: "2",
    name: "Specify Participation Category",
    fields: ["specifyParticipation"],
  },
  {
    id: "3",
    name: "Ratings",
    fields: [
      "generalOrganizationRating",
      "registrationProceedingsRating",
      "relevanceOfTopicsRating",
      "breakAwaySessionRating",
      "exhibitoionSetupRating",
    ],
  },
  {
    id: "4",
    name: "Benefits",
    fields: ["receivedIctBenefits", "specifyIctBenefits"],
  },
  {
    id: "5",
    name: "Best Describes",
    fields: ["bestDescribes", "participateAgain"],
  },
  {
    id: "6",
    name: "Relevance Ratings",
    fields: [
      "relevanceOfTopicsToWorkRating",
      "relevanceOfThemeToIctArenaRating",
      "relevanceOfSummitToYourInstitutionRating",
      "usefulnessOfInfroFromBreakawayRating",
      "extentWhichProductsMatchedSummitThemeRating",
      "relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating",
    ],
  },
  {
    id: "7",
    name: "Suggestions",
    fields: [
      "topicsForNextYearSuggestion",
      "themeForNextYearSuggestion",
      "townForNextYearSuggestion",
      "anyOtherSuggestions",
    ],
  },
  { id: "8", name: "Complete" },
];

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log("submitted");
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="flex justify-between py-16 px-[100px] relative gap-16">
      <Image
        src="/form-background.jpg"
        alt="Evaluation Questionnaire"
        className="object-cover opacity-20 z-[-1]"
        fill
      />
      <div className="w-full h-full top-0 left-0 bg-headings z-[-2] absolute"></div>
      <motion.div className="w-full h-full bg-white/80 shadow-2xl overflow-hidden transition-all rounded-xl flex flex-col items-start justify-start p-8">
        {/* steps */}
        <nav aria-label="Progress">
          <ol
            role="list"
            className="space-y-4 md:flex md:space-x-8 md:space-y-0"
          >
            {steps.map((step, index) => (
              <li key={step.name} className="md:flex w-fit">
                {currentStep > index ? (
                  <div className="group flex w-full flex-col py-2 pl-4 transition-colors md:pb-0 md:pl-0 md:pt-4">
                    <div className="rounded-full w-10 h-10 bg-primary flex items-center justify-center">
                      <span className="text-sm font-medium text-black transition-colors ">
                        {step.id}
                      </span>
                    </div>
                    {/* <span className="text-sm font-medium">{step.name}</span> */}
                  </div>
                ) : currentStep === index ? (
                  <div
                    className="flex w-full flex-col py-2 pl-4 md:pb-0 md:pl-0 md:pt-4"
                    aria-current="step"
                  >
                    <div className="rounded-full w-10 h-10 bg-primary flex items-center justify-center">
                      <span className="text-sm font-medium text-black transition-colors ">
                        {step.id}
                      </span>
                    </div>
                    {/* <span className="text-sm font-medium">{step.name}</span> */}
                  </div>
                ) : (
                  <div className="group flex w-full flex-col py-2 pl-4 transition-colors md:pb-0 md:pl-0 md:pt-4">
                    <div className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-black transition-colors ">
                        {step.id}
                      </span>
                    </div>
                    {/* <span className="text-sm font-medium">{step.name}</span> */}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Form */}
        <form
          className="py-12 transition-all"
          onSubmit={handleSubmit(processForm)}
        >
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Kindly indicate your participation category at the 7th National
                ICT Summit
              </h2>

              <div className="mt-10">
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="exhibitor"
                      type="radio"
                      value="exhibitor"
                      {...register("participationCategory")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="exhibitor"
                      className="text-sm font-medium text-gray-900"
                    >
                      Exhibitor
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="delegate"
                      type="radio"
                      value="delegate"
                      {...register("participationCategory")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="delegate"
                      className="text-sm font-medium text-gray-900"
                    >
                      Delegate
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="sponsor"
                      type="radio"
                      value="sponsor"
                      {...register("participationCategory")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="sponsor"
                      className="text-sm font-medium text-gray-900"
                    >
                      Sponsor
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="student"
                      type="radio"
                      value="student"
                      {...register("participationCategory")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="student"
                      className="text-sm font-medium text-gray-900"
                    >
                      Student
                    </label>
                  </div>

                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="noneOfTheAbove"
                      type="radio"
                      value="noneOfTheAbove"
                      {...register("participationCategory")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="noneOfTheAbove"
                      className="text-sm font-medium text-gray-900"
                    >
                      None of the Above
                    </label>
                  </div>
                  {errors.participationCategory?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.participationCategory.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                If your previous answer was "None of the above", please specify.
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="specify"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Answer
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="specify"
                      defaultValue=""
                      {...register("specifyParticipation")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.specifyParticipation?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.specifyParticipation.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                On a scale of 1 - 3 <br />
                (where 1 is unsatisfactory, 2 - Satisfactory , 3 - very
                Satisfactory ), <br /> kindly rate the following :
              </h2>

              <div className="mt-10 space-y-8">
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    The general organization of the Summit, the venue and its
                    facilities
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="generalOrganizationRating1"
                      type="radio"
                      value="1"
                      {...register("generalOrganizationRating")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="generalOrganizationRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="generalOrganizationRating2"
                      type="radio"
                      value="2"
                      {...register("generalOrganizationRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="generalOrganizationRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="generalOrganizationRating3"
                      type="radio"
                      value="3"
                      {...register("generalOrganizationRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="generalOrganizationRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>

                  {errors.generalOrganizationRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.generalOrganizationRating.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    The registration proceedings
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="registrationProceedingsRating1"
                      type="radio"
                      value="1"
                      {...register("registrationProceedingsRating")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="registrationProceedingsRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="registrationProceedingsRating2"
                      type="radio"
                      value="2"
                      {...register("registrationProceedingsRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="registrationProceedingsRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="registrationProceedingsRating3"
                      type="radio"
                      value="3"
                      {...register("registrationProceedingsRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="registrationProceedingsRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>

                  {errors.registrationProceedingsRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.registrationProceedingsRating.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    Relevance of the topics and presentations
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsRating1"
                      type="radio"
                      value="1"
                      {...register("relevanceOfTopicsRating")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsRating2"
                      type="radio"
                      value="2"
                      {...register("relevanceOfTopicsRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsRating3"
                      type="radio"
                      value="3"
                      {...register("relevanceOfTopicsRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>

                  {errors.relevanceOfTopicsRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.relevanceOfTopicsRating.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    Break-away sessions and time allocation
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="breakAwaySessionRating1"
                      type="radio"
                      value="1"
                      {...register("breakAwaySessionRating")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="breakAwaySessionRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="breakAwaySessionRating2"
                      type="radio"
                      value="2"
                      {...register("breakAwaySessionRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="breakAwaySessionRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="breakAwaySessionRating3"
                      type="radio"
                      value="3"
                      {...register("breakAwaySessionRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="breakAwaySessionRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>

                  {errors.breakAwaySessionRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.breakAwaySessionRating.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    Exhibitions and stands set-up
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="exhibitoionSetupRating1"
                      type="radio"
                      value="1"
                      {...register("exhibitoionSetupRating")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="exhibitoionSetupRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="exhibitoionSetupRating2"
                      type="radio"
                      value="2"
                      {...register("exhibitoionSetupRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="exhibitoionSetupRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="exhibitoionSetupRating3"
                      type="radio"
                      value="3"
                      {...register("exhibitoionSetupRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="exhibitoionSetupRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>

                  {errors.exhibitoionSetupRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.exhibitoionSetupRating.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Have you ever attended an ICT summit before and derived any
                benefits?
              </h2>

              <div className="mt-10">
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="receivedIctBenefits"
                      type="radio"
                      value="yes"
                      {...register("receivedIctBenefits")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="receivedIctBenefits"
                      className="text-sm font-medium text-gray-900"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="notReceivedIctBenefits"
                      type="radio"
                      value="no"
                      {...register("receivedIctBenefits")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="notReceivedIctBenefits"
                      className="text-sm font-medium text-gray-900"
                    >
                      No
                    </label>
                  </div>
                  {errors.receivedIctBenefits?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.receivedIctBenefits.message}
                    </p>
                  )}
                  <div className="mt-8 flex flex-col gap-4 items-start">
                    <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                      If yes, please specify the benefits.
                    </p>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="specifyIctBenefits"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Your Answer
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            id="specifyIctBenefits"
                            defaultValue=""
                            {...register("specifyIctBenefits")}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {currentStep === 4 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Which word best describes the 7th National ICT Summit from the
                past Summits
              </h2>

              <div className="mt-10 mb-16">
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="bestDescribes1"
                      type="radio"
                      value="VeryExcellent"
                      {...register("bestDescribes")}
                      autoComplete="given-name"
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="bestDescribes1"
                      className="text-sm font-medium text-gray-900"
                    >
                      Very Excellent
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="bestDescribes2"
                      type="radio"
                      value="Excellent"
                      {...register("bestDescribes")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="bestDescribes2"
                      className="text-sm font-medium text-gray-900"
                    >
                      Excellent
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="bestDescribes3"
                      type="radio"
                      value="Average"
                      {...register("bestDescribes")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="bestDescribes3"
                      className="text-sm font-medium text-gray-900"
                    >
                      Average
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="bestDescribes4"
                      type="radio"
                      value="Poor"
                      {...register("bestDescribes")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="bestDescribes4"
                      className="text-sm font-medium text-gray-900"
                    >
                      Poor
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="bestDescribes5"
                      type="radio"
                      value="NothingDifferent"
                      {...register("bestDescribes")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="bestDescribes5"
                      className="text-sm font-medium text-gray-900"
                    >
                      Nothing different from the past Summits
                    </label>
                  </div>

                  {errors.bestDescribes?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.bestDescribes.message}
                    </p>
                  )}
                </div>
              </div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Would you like to participate in the next year’s National ICT
                summit?
              </h2>

              <div className="mt-10">
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="yes"
                      type="radio"
                      value="yes"
                      {...register("participateAgain")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="yes"
                      className="text-sm font-medium text-gray-900"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="no"
                      type="radio"
                      value="no"
                      {...register("participateAgain")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="no"
                      className="text-sm font-medium text-gray-900"
                    >
                      No
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="maybe"
                      type="radio"
                      value="maybe"
                      {...register("participateAgain")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="maybe"
                      className="text-sm font-medium text-gray-900"
                    >
                      Maybe
                    </label>
                  </div>

                  {errors.participateAgain?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.participateAgain.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
          {currentStep === 5 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Kindly use the scale from 1 - 4 to rate the relevance of the
                following elements to either your expectations, work, business
                or academics, <br />
                (where 1 is irrelevant, 2 - least relevant, 3 - relevant and 4 -
                very relevant)
              </h2>

              <div className="mt-10 space-y-8">
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    Relevance of the summit topics to your current job business
                    and field of study
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsToWorkRating1"
                      type="radio"
                      value="1"
                      {...register("relevanceOfTopicsToWorkRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsToWorkRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsToWorkRating2"
                      type="radio"
                      value="2"
                      {...register("relevanceOfTopicsToWorkRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsToWorkRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsToWorkRating3"
                      type="radio"
                      value="3"
                      {...register("relevanceOfTopicsToWorkRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsToWorkRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsToWorkRating4"
                      type="radio"
                      value="4"
                      {...register("relevanceOfTopicsToWorkRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsToWorkRating4"
                      className="text-sm font-medium text-gray-900"
                    >
                      4
                    </label>
                  </div>

                  {errors.relevanceOfTopicsToWorkRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.relevanceOfTopicsToWorkRating.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    Relevance of the summit’ theme “ Digital Transformation for
                    an ICT Smart Namibia” to the trends in ICT Arena
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfThemeToIctArenaRating1"
                      type="radio"
                      value="1"
                      {...register("relevanceOfThemeToIctArenaRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfThemeToIctArenaRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfThemeToIctArenaRating2"
                      type="radio"
                      value="2"
                      {...register("relevanceOfThemeToIctArenaRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfThemeToIctArenaRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfThemeToIctArenaRating3"
                      type="radio"
                      value="3"
                      {...register("relevanceOfThemeToIctArenaRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfThemeToIctArenaRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfThemeToIctArenaRating4"
                      type="radio"
                      value="4"
                      {...register("relevanceOfThemeToIctArenaRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfThemeToIctArenaRating4"
                      className="text-sm font-medium text-gray-900"
                    >
                      4
                    </label>
                  </div>

                  {errors.relevanceOfThemeToIctArenaRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.relevanceOfThemeToIctArenaRating.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    The extent to which the Summit meets your institution's need
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfSummitToYourInstitutionRating1"
                      type="radio"
                      value="1"
                      {...register("relevanceOfSummitToYourInstitutionRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfSummitToYourInstitutionRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfSummitToYourInstitutionRating2"
                      type="radio"
                      value="2"
                      {...register("relevanceOfSummitToYourInstitutionRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfSummitToYourInstitutionRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfSummitToYourInstitutionRating3"
                      type="radio"
                      value="3"
                      {...register("relevanceOfSummitToYourInstitutionRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfSummitToYourInstitutionRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfSummitToYourInstitutionRating4"
                      type="radio"
                      value="4"
                      {...register("relevanceOfSummitToYourInstitutionRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfSummitToYourInstitutionRating4"
                      className="text-sm font-medium text-gray-900"
                    >
                      4
                    </label>
                  </div>

                  {errors.relevanceOfThemeToIctArenaRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.relevanceOfThemeToIctArenaRating.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    Usefulness of the information obtained during breakaway
                    sessions
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="usefulnessOfInfroFromBreakawayRating1"
                      type="radio"
                      value="1"
                      {...register("usefulnessOfInfroFromBreakawayRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="usefulnessOfInfroFromBreakawayRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="usefulnessOfInfroFromBreakawayRating2"
                      type="radio"
                      value="2"
                      {...register("usefulnessOfInfroFromBreakawayRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="usefulnessOfInfroFromBreakawayRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="usefulnessOfInfroFromBreakawayRating3"
                      type="radio"
                      value="3"
                      {...register("usefulnessOfInfroFromBreakawayRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="usefulnessOfInfroFromBreakawayRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="usefulnessOfInfroFromBreakawayRating4"
                      type="radio"
                      value="4"
                      {...register("usefulnessOfInfroFromBreakawayRating")}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="usefulnessOfInfroFromBreakawayRating4"
                      className="text-sm font-medium text-gray-900"
                    >
                      4
                    </label>
                  </div>

                  {errors.usefulnessOfInfroFromBreakawayRating?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.usefulnessOfInfroFromBreakawayRating.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    The extent to which exhibited products and innovation
                    matched the objectives and Theme of the summit
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="extentWhichProductsMatchedSummitThemeRating1"
                      type="radio"
                      value="1"
                      {...register(
                        "extentWhichProductsMatchedSummitThemeRating"
                      )}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="extentWhichProductsMatchedSummitThemeRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="extentWhichProductsMatchedSummitThemeRating2"
                      type="radio"
                      value="2"
                      {...register(
                        "extentWhichProductsMatchedSummitThemeRating"
                      )}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="extentWhichProductsMatchedSummitThemeRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="extentWhichProductsMatchedSummitThemeRating3"
                      type="radio"
                      value="3"
                      {...register(
                        "extentWhichProductsMatchedSummitThemeRating"
                      )}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="extentWhichProductsMatchedSummitThemeRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="extentWhichProductsMatchedSummitThemeRating4"
                      type="radio"
                      value="4"
                      {...register(
                        "extentWhichProductsMatchedSummitThemeRating"
                      )}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="extentWhichProductsMatchedSummitThemeRating4"
                      className="text-sm font-medium text-gray-900"
                    >
                      4
                    </label>
                  </div>

                  {errors.extentWhichProductsMatchedSummitThemeRating
                    ?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {
                        errors.extentWhichProductsMatchedSummitThemeRating
                          .message
                      }
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm pb-2 border-b-2 border-b-slate-200">
                    The relevance of topics and presentations to the
                    predicaments faced by the local ICT market
                  </p>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating1"
                      type="radio"
                      value="1"
                      {...register(
                        "relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating"
                      )}
                      className="h-8 w-8 text-gray-900 sm:text-sm appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating1"
                      className="text-sm font-medium text-gray-900"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating2"
                      type="radio"
                      value="2"
                      {...register(
                        "relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating"
                      )}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating2"
                      className="text-sm font-medium text-gray-900"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating3"
                      type="radio"
                      value="3"
                      {...register(
                        "relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating"
                      )}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating3"
                      className="text-sm font-medium text-gray-900"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex h-fit items-center justify-center gap-4">
                    <input
                      id="relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating4"
                      type="radio"
                      value="4"
                      {...register(
                        "relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating"
                      )}
                      className="h-8 w-8 text-gray-900 sm:text-sm sm:leading-6 appearance-none border-2 border-headings rounded-full scale-75 checked:scale-100 transition-all checked:shadow-form"
                    />
                    <label
                      htmlFor="relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating4"
                      className="text-sm font-medium text-gray-900"
                    >
                      4
                    </label>
                  </div>

                  {errors
                    .relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating
                    ?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {
                        errors
                          .relevanceOfTopicsToPredicamentsFacedByLocalIctMarketRating
                          .message
                      }
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
          {currentStep === 6 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Which topics would you like National ICT Summit to cover next
                year? Please suggest.
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="topicsForNextYearSuggestion"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Answer
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="topicsForNextYearSuggestion"
                      defaultValue=""
                      {...register("topicsForNextYearSuggestion")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.topicsForNextYearSuggestion?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.topicsForNextYearSuggestion.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <h2 className="text-base mt-10 font-semibold leading-7 text-gray-900">
                Can you suggest any Theme for the 8th National ICT Summit?
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="themeForNextYearSuggestion"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Answer
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="themeForNextYearSuggestion"
                      defaultValue=""
                      {...register("themeForNextYearSuggestion")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.themeForNextYearSuggestion?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.themeForNextYearSuggestion.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <h2 className="text-base mt-10 font-semibold leading-7 text-gray-900">
                Can you suggest any Theme for the 8th National ICT Summit?
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="townForNextYearSuggestion"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Answer
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="townForNextYearSuggestion"
                      defaultValue=""
                      {...register("townForNextYearSuggestion")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.townForNextYearSuggestion?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.townForNextYearSuggestion.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <h2 className="text-base mt-10 font-semibold leading-7 text-gray-900">
                Please indicate any other comments/ suggestions for future
                improvement
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="anyOtherSuggestions"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Answer
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="anyOtherSuggestions"
                      defaultValue=""
                      {...register("anyOtherSuggestions")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.anyOtherSuggestions?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.anyOtherSuggestions.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 7 && (
            <>
              <h2 className="text-base font-bold leading-7 text-gray-900">
                Thank you for your feedback!
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                See you in 2025 at the 9th National ICT Summit.
              </p>
            </>
          )}
        </form>

        {/* Navigation */}
        <div>
          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={currentStep === 0}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-headings shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className="rounded bg-primary px-2 py-1 text-sm font-semibold text-headings shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
      <div className="w-full h-full flex flex-col items-center justify-start gap-16">
        <h2 className="text-white font-semibold text-left w-full text-4xl">
          Evaluation Questionnaire
        </h2>
        <div className="w-full h-fit space-y-4">
          <h3 className="text-white font-semibold text-left w-full text-2xl">
            Did you attend the 7th National ICT Summit?
          </h3>
          <p className="text-white text-lg">
            Kindly complete this questionnaire as your inputs are incredibly
            valuable and will enable us to improve our general organization,
            proceedings and future themes (topics).
          </p>
        </div>
      </div>
    </section>
  );
}
