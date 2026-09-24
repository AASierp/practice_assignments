type HeaderProps = {
        dashTitle: string
    }

export default function Header( { dashTitle }: HeaderProps ){


    return(
        <div className="text-center">
            <header className="w-full">
                <h1>{dashTitle}</h1>
                <nav>
                    <ul className="flex justify-around text-white">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#courses">Courses</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}