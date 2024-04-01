
export function Flor({ name, positionx, positiony}){
    return(
        <div className={`absolute left-[${positionx}px] top-[${positiony}px] w-[200px] rotate-45`}>
            <img src={`../src/assets/flor_img/lirio${name}.webp`} alt="" className={``}/>
        </div>
    )
}