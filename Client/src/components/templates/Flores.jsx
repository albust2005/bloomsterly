
export function Flor({ name, positionx, positiony, size}){
    return(
        <div className={`absolute left-[${positionx}px] top-[${positiony}px]`}>
            <img src={`../src/assets/flor_img/lirio${name}.webp`} alt="" className={`w-[${size}vh]`}/>
        </div>
    )
}