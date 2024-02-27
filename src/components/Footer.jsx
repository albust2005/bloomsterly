export function Footer() {
    return (
        <footer className="flex h-24 w-full flex-col bottom-0 absolute bg-dark_theme">
            <article className="flex w-full justify-center gap-3 items-center bg-dark_theme">
                <div className="bg-white border-white w-full h-0.5 rounded-sm m-1" ></div>
                <div className="flex gap-3 text-white">
                    <a href="">F</a>
                    <a href="">I</a>
                    <a href="">GH</a>
                    <a href="">GM</a>
                </div>
                <div className="bg-white border-white w-full h-0.5 rounded-sm m-1 " ></div>
            </article>
            <article className="flex flex-col place-content-center m-auto items-center">
                <h1 className="font-bloomsterly text-2xl text-white">BloomSterly</h1>
                <small className="text-white">Copyright 2024 nombregroup</small>
            </article>
        </footer>
    )
}