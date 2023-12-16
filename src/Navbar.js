import Section from './Section'
import img1 from './imagess.png'
function Navbar() {

    let style = {
        flex: { display: 'flex', justifyContent: 'spaceBetween' }

    }
    return (
        <>
            <div className="hearder">
                <div className="logo">
                    <img src={img1} width={100} height={40} style={{ objectFit: 'cover' }} />
                </div>

                <ul className="nav" style={style.flex} >
                    <li style={style.li}>
                        <a href="">running</a>
                    </li>
                    <li>
                        <a href="">crossfit</a>
                    </li>
                    <li>
                        <a href="">training</a>
                    </li>

                </ul>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </>
    )
}
export default Navbar