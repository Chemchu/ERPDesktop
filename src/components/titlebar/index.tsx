const Titlebar = () => {
    // document
    //     .getElementById("titlebar-minimize")
    //     .addEventListener("click", () => appWindow.minimize());
    // document
    //     .getElementById("titlebar-maximize")
    //     .addEventListener("click", () => appWindow.toggleMaximize());
    // document
    //     .getElementById("titlebar-close")
    //     .addEventListener("click", () => appWindow.close());

    return (
        <div className='flex w-full h-7 bg-white justify-end'>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 hover:bg-gray-200">
                    <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 hover:bg-gray-200">
                    <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 hover:bg-red-500 hover:text-white">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>

            </div>
        </div>
    )
}

export default Titlebar;