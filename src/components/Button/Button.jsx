import classNames from 'classnames';

export default function Button({ color, ...props }) {
    return <button className={classNames("xl:text-[18px] text-[10px] xl:w-[278px] w-[150px] xl:mb-0 mb-[10px] py-[13px] mx-auto rounded-lg ml-[30px] hover:bg-white transition-colors duration-300",
        { 'bg-[#0065DC] hover:text-[#0065DC]': color === 'blue', 'bg-[#FF5722] hover:text-[#FF5722]': color === 'red' }
    )} {...props} />
}