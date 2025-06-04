import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { MainContent } from "../ui/MainContent"

export const Contact = () => {
    return (
        <MainContent>
            <div className="w-full h-auto flex  my-10 gap-4">
                {/* left dev image  */}
                <div className="hidden lg:flex flex-col justify-center items-center">
                    <img
                        className="w-[400px]"
                        src="src/assets/images/contact-img.avif" alt="" />
                </div>
                {/* right div contact card  */}
                <div className="w-full h-auto p-4  bg-lightSky rounded-xl">
                    {/* contact form  */}
                    <div className="w-full h-auto">
                        <h1 className="font-poppins text-xl font-medium my-3">Request a callback</h1>
                        <div className="h-[1px] w-full bg-white"></div>
                        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {/* input element with label*/}
                            <Input label="Student's full Name*" placeholder="Ex: Satish Nikale" />
                            <Input label="Mobile No*" placeholder="Ex: +7387432046" />
                            <Input label="Class*" placeholder="Ex: 12th" />
                            <Input label="Goals*" placeholder="Ex: NEET" />
                            <Input label="Preffered Courses" placeholder="Ex: Online Course" />
                            <Input label="State*" placeholder="Ex: Maharashtra" />

                            {/* <label htmlFor="">Class*</label>
                            <select className="shadow appearance-none py-2 px-3 outline-none bg-white font-poppins text-sm hover:outline-black outline-[2px] rounded transition-all duration-200">
                                <option>6th</option>
                                <option>7th</option>
                                <option>8th</option>
                                <option>9th</option>
                                <option>10th</option>
                                <option>11th</option>
                                <option>12th</option>
                                <option>12+th</option>
                            </select> */}
                        </div>
                        <p className="font-poppins text-sm text-gray-600 pt-6 text-center">
                            By continuing, you agree to our
                            <span className="text-lightBlack ml-2 underline cursor-pointer">Terms & Conditions</span>
                        </p>
                    </div>
                    {/* submit button  */}
                    <div className="w-full h-auto mt-8 text-center">
                        <Button varient="secondary" size="md" text="Submit" />
                    </div>
                </div>
            </div>
        </MainContent>
    )
}