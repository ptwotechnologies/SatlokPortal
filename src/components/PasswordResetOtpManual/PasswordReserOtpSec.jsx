import React from "react";
import logo from "/loginlogo.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import InputOtpSec from "./InputOtpSec";

const PasswordReserOtpSec = () => {
  return (
    <div>
          <div className="flex justify-between items-center  ">
            <div id="left" className=" w-[40%] hidden lg:block mx-auto ">
              <div className="flex flex-col justify-between items-center gap-y-25">
                <div>
                  <img src={logo} alt="Logo" className=" w-100 " />
                  <p className=" text-[#001426] text-xl w-full relative bottom-25 left-17 ">
                    Allows you to get funding,
                  </p>
                  <p className=" text-[#001426] text-xl relative bottom-25 left-17   ">
                    resources and investor connect
                  </p>
                </div>
                <div>
                  <p className="  text-lg w-full  text-[#000000] relative top-10 left-30">
                    Terms, Privacy Disclosures Cookie Settings © norf.kD
                    Technologies LLP
                  </p>
                </div>
              </div>
            </div>
            <div
              id="right"
              className="lg:w-[47%] lg:pl-20 lg:px-10 lg:py-8 text-center h-screen  w-full"
            >
              <div className="bg-[#001426] h-screen lg:h-auto p-5 lg:p-3 w-[100%]  lg:rounded-lg ">
                <Card className="w-full h-[100%] lg:h-auto mx-auto rounded-lg">
                  <CardHeader>
                    <CardTitle>
                      <img src={logo} alt="Logo" className="w-50 h-45 mx-auto" />
                    </CardTitle>
                    <CardDescription className=" mb-1 text-[#001032] text-lg lg:text-sm font-semibold  ">
                       <p className="lg:w-[80%]  mx-auto">Enter the five digit code received in the text or email</p>
    
                    </CardDescription>
    
                    <CardAction></CardAction>
                  </CardHeader>
                  <CardContent className="mx-auto mt-14 lg:mt-8 lg:mb-55 mb-64">
                    <InputOtpSec/>
                  </CardContent>
                  <CardFooter>
                    <Link to="/selectPortal" className="w-full">
                      <Button className="w-full bg-[#001426] mt-20 lg:mt-0">
                        Continue
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PasswordReserOtpSec
