export function Footer() {
    return (
        <footer className="flex bg-rose-300 h-24 w-full flex-col bottom-0 absolute">
            <article className="flex w-full bg-green-200 justify-center gap-3 items-center">
                <div className="bg-black border-black w-full h-0.5 rounded-sm m-1" ></div>
                <div className="flex gap-3 ">
                    <a href="">F</a>
                    <a href="">I</a>
                    <a href="">GH</a>
                    <a href="">GM</a>
                </div>
                <div className="bg-black border-black w-full h-0.5 rounded-sm m-1 " ></div>
            </article>
            <article className="flex flex-col place-content-center m-auto items-center">
                <h1>BloomSterly</h1>
                <small>Copyright 2024_nombregroup</small>
            </article>
        </footer>
    )
}