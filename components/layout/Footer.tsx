import Link from "next/link";

const Footer: React.FC = () => {
    const year = (): number => new Date().getFullYear(); 
    return (
        <div>
            <div className="flex flex-wrap gap-4 py-3">
                <Link href="#" className="footer-link">Home</Link>
                <Link href="#" className="footer-link">Explore</Link>
                <Link href="#" className="footer-link">About</Link>
                <Link href="#" className="footer-link">FAQ</Link>
                <Link href="#" className="footer-link">Press</Link>
                <Link href="#" className="footer-link">Blog</Link>
                <Link href="#" className="footer-link">Contact</Link>
                <Link href="#" className="footer-link">Jobs</Link>
            </div>
            <hr />
            <div className="flex flex-wrap gap-4 py-3">
                <p>&copy; {year()} MovieZone.com All Rights Reserved</p>
                <Link href="#" className="footer-link">Privacy</Link>
                <Link href="#" className="footer-link">Terms</Link>
            </div>
        </div>
    )
}

export default Footer;