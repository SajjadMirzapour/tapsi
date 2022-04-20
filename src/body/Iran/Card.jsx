export default function Card({ name1, name2 }) {
    return (
        <div className="text-[#333333]">
            <p className="text-[30px] mb-[10px]">{name1}</p>
            <span className="text-[20px]">{name2}</span>
        </div>
    )
}