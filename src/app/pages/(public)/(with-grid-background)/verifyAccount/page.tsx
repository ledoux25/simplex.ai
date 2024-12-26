"use client";
import { Input } from "@/app/components/general-components/input";
import React, { useState } from "react";
import { useFormik } from "formik";
import { verificationScheme } from "./_schema/verfiaction-schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Titles from "@/app/components/general-components/Titles";
import MotionButton from "../_components/motion-button";
import verifyEmail from "./_service/verify-email";

const VerifyAccount = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: verificationScheme,
    onSubmit: async (values) => {
      setLoading(true);
      const response = await verifyEmail(values.code);

      if(response.sucess){ toast.success(response.message)}else{toast.error(response.message);}
        
         

      setTimeout(async () => {
        setLoading(false);
        if (response.sucess == true) {
          router.replace(`auth/${"login"}`);
        }
      }, 2000);
    },
  });

  return (
    <>
      <div className="text-center">
        <Titles
          title="Verify Your Email Adrees"
          TitleStyle="!text-[34px]"
          subtitleStyle="!text-khr !text-[16px]"
          subTitle="We have sent a verifaction code to your adress"
        ></Titles>
      </div>
      <div className="">
        <Input
          name="code"
          type="number"
          placeholder="verfication code"
          useLabel={false}
          onChange={formik.handleChange}
          value={formik.values.code}
        />

        <div className="w-[375px] flex justify-center relative">
          <MotionButton
            label="Verify"
            isLoading={loading}
            onclick={formik.submitForm}
            condition={formik.values.code.length == 0}
          ></MotionButton>
        </div>
      </div>
    </>
  );
};

export default VerifyAccount;
