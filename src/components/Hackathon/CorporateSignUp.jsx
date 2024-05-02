import React from "react";
import leftBg from "/leftBg.jpg";
import arrowLeft from "/arrowLeft.png";
import tablet from "/Tablet.png";
import message from "/message.png";
import userProfile from "/userProfile.png";
import viewHideIcon from "/View_hide_light.png";

function CorporateSignUp() {
	return (
		<div className="min-h-screen relative w-full lg:w-1/2 flex justify-center items-center">
			<div className="absolute inset-0 z-[-1] overflow-hidden min-h-screen">
				<img
					src={leftBg}
					alt=""
					className="w-full h-full absolute inset-0 object-fill"
				/>
			</div>
			<div className="bg-[#ffffff] h-[460px] w-3/4 lg:w-4/5 xl:w-2/3 rounded-3xl p-6 flex flex-col gap-4 relative z-10">
				<div className="flex flex-col gap-6 overflow-y-scroll px-2">
					<div className="flex justify-between items-center">
						<img
							src={arrowLeft}
							alt=""
							className="bg-[#1C4481] w-6 h-6 rounded-full"
						/>
						<div className="flex flex-col items-end">
							<span className="font-semibold text-[#AFAFAF]">
								Create
							</span>
							<span className="font-semibold text-[#222222]">
								an Account
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<div className="border border-black h-14 rounded-md px-2 py-1 flex justify-between items-center">
							<div className="flex text-sm items-center gap-2 text-[#1C4481]">
								<img
									src={userProfile}
									alt=""
									className="h-5 w-5"
								/>
								<input
									className="outline-none"
									placeholder={"Name*"}
								></input>
							</div>
						</div>
						<div className="border border-black h-14 rounded-md px-2 py-1 flex justify-between items-center">
							<div className="flex items-center text-sm gap-2 text-[#1C4481]">
								<img src={message} alt="" className="h-5 w-5" />
								<input
									className="outline-none"
									placeholder={"Email*"}
								></input>
							</div>
						</div>
						<div className="border border-black h-14 rounded-md px-2 py-1 flex justify-between items-center">
							<div className="flex items-center text-sm gap-2 text-[#1C4481]">
								<img src={tablet} alt="" className="h-5 w-5" />
								<input
									className="outline-none"
									placeholder={"Mobile Number*"}
								></input>
							</div>
						</div>
						<div className="border border-black h-14 rounded-md px-2 py-1 flex justify-between items-center">
							<div className="flex items-center text-sm gap-2 text-[#1C4481]">
								<img
									src={userProfile}
									alt=""
									className="h-5 w-5"
								/>
								<input
									className="outline-none"
									placeholder={"Location"}
								></input>
							</div>
						</div>
						<div className="border border-black h-14 rounded-md px-2 py-1 flex justify-between items-center">
							<div className="flex items-center text-sm gap-2 text-[#1C4481]">
								<img
									src={userProfile}
									alt=""
									className="h-5 w-5"
								/>
								<input
									className="outline-none"
									placeholder={"User ID*"}
								></input>
							</div>
						</div>
						<div className="border border-black h-14 rounded-md px-2 py-1 flex justify-between items-center">
							<div className="flex items-center text-sm gap-2 text-[#1C4481]">
								<img src={message} alt="" className="h-5 w-5" />
								<input
									className="outline-none"
									placeholder={"Password*"}
								></input>
							</div>
							<div className="flex items-center justify-between">
								<img
									src={viewHideIcon}
									alt=""
									className="h-5 w-5"
								/>
							</div>
						</div>
						<div className="flex justify-center items-center gap-2">
							<input type="checkbox" />
							<span className="font-semibold">
								I agree to the Terms & Conditions
							</span>
						</div>
						<div>
							<div className="bg-[#1b4581] text-white h-12 p-2 flex justify-center items-center rounded-3xl hover:cursor-pointer">
								<p className="font-medium">Register</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CorporateSignUp;
