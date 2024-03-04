export function Footer() {
    return (
        <footer className="flex h-24 w-full flex-col bg-purple-900 dark:bg-second_color_lt">
            <article className="flex w-full justify-center gap-3 items-center">
                <div className="bg-white border-white w-full h-0.5 rounded-sm m-2" ></div>
                <div className="flex gap-3 text-white">
                    <a href="">F</a>
                    <a href="">I</a>
                    <a href="">GH</a>
                    <a href="">GM</a>
                </div>
                <div className="bg-white border-white w-full h-0.5 rounded-sm m-2"></div>
            </article>
            <article className="flex flex-col place-content-center m-auto items-center">
                <h1 className="font-bloomsterly text-2xl text-white">BloomSterly</h1>
                <small className="text-white">Copyright 2024 nombregroup</small>
            </article>
        </footer>
    )
}