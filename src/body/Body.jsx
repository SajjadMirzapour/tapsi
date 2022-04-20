import Services from "./Services";
import Classic from "./Classic";
import Special from "./Specisl";
import Code from "./Code";
import Pack from "./Pack";
import Benefits from "./Benefits";
import News from "./News";
import IranCities from "./Iran/IranCities";

export default function Body() {
    return (
        <div>
            <div className="w-5/6 mx-auto">
                <Services />
                <Classic />
                <Special />
                <Code />
            </div>
            <Pack />
            <div className="w-5/6 mx-auto mt-[88px]">
                <Benefits />
                <News />
                <IranCities />
            </div>
        </div>
    )
}