import Shadow from "./Shadow"

export default function BackGround() {
    return (
        <div className="back">
            <div className="relative md:pb-[90px] lg:pt-0 py-5">
                <Shadow />
                <img className="xl:flex hidden absolute top-[70px] left-0" src="/images/mockup-phone 1.png" alt="#" />
            </div>
        </div>
    )
}