import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="container">
                <h1 className="header">Adventure awaits! Let's go exploring.</h1>
            </div>
            <nav className='navBar'>
                <ul>
                    <li>
                        <Link href="/" >
                            <a className="home-button">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/travelCosts" >
                            <a className="cost-button">Travel Costs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/DnDOfTravel" >
                            <a className="dos-and-donts-button">Do's and Dont's of Travel</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}