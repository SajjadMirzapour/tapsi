import Card from "./Card";
import { Cities } from "./Cities";

export default function IranCities() {
    return (
        <div className="lg:flex hidden">
            <div className="my-[51px] w-full" >
                <h1 className="text-[50px] mb-5"> تپسی در ایران</h1>
                <div className="grid grid-cols-8 gap-7">
                    {Cities.map(C =>
                        < Card
                            name1={C.name1}
                            name2={C.name2} />
                    )}
                </div>
            </div>
        </div>
    )
}