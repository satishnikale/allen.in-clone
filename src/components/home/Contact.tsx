import { Input } from "../ui/Input"
import { MainContent } from "../ui/MainContent"

export const Contact = () => {
    return (
        <MainContent>
            <div className="w-full h-auto flex  my-10 gap-4">
                {/* left dev image  */}
                <div className="flex flex-col justify-center items-center">
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
                            <Input label="Class*" placeholder="Ex: Satish Nikale" />
                            <Input label="Goals*" placeholder="Ex: Satish Nikale" />
                            <Input label="Preffered Courses*" placeholder="Ex: Satish Nikale" />
                            <Input label="States*" placeholder="Ex: Satish Nikale" />
                            <label className="my-2 font-poppins" htmlFor="">Class*</label>
                            <select className="shadow appearance-none py-2 px-3 outline-none bg-white font-poppins text-sm hover:outline-black outline-[2px] rounded transition-all duration-200">
                                <div>
                                    <option className="border-none">6th</option>
                                    <option className="border-none">7th</option>
                                    <option className="border-none">8th</option>
                                    <option className="border-none">9th</option>
                                    <option className="border-none">10th</option>
                                    <option className="border-none">11th</option>
                                    <option className="border-none">12th</option>
                                    <option className="border-none">12+th</option>
                                </div>
                            </select>
                        </div>
                    </div>
                    {/* submit button  */}
                    <div>

                    </div>
                </div>
            </div>
        </MainContent>
    )
}