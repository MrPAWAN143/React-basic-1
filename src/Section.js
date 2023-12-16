
import sho from './nikeshoes.png'
import Navbar from './Navbar'
import cdn from './font-awesome-4.7.0/css/font-awesome.css'


function Section() {
    const section = {
        width: '1000px',
        height: '600px',
        margin: 'auto',
        marginTop:'50px',
        background: 'linear-gradient(50deg, rgba(255, 25, 0, 0.962), rgb(159, 255, 4))',
        borderRadius: '20px'

    }
    const flex_div = {
        width: '1000px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
    }
    const item = {
        width: '850px',
        height: '320px',
        border: '1px solid black',
        margin: 'auto',
        backgroundColor: '#262529',
        position: 'relative'
    }

    const shoes = {
        width: '280px',
        height: '450px',
        border: '1px solid red',
        backgroundColor: '#F03404',
        position: 'absolute',
        top: '-50px',
        left: '150px'

    }
    const nike = {
        marginLeft: '30px',
        color: 'white',
        fontSize: '28px',
        fontWeight: 900,


    }
    const img = {
        position: 'absolute',
        zIndex: 5,
        width: '480px',
        height: 'auto',
        top: '0px',
        right: '-100px',
        transform: 'rotate(10deg)'

    }
    const price = {
        position: 'absolute',
        bottom: '10px',
        left: '20px',
        fontSize: '20px',
        color: 'white',
        fontWeight: '600',

    }
    const blue = {
        position: 'absolute',
        zIndex: 3,
        width: '15px',
        height: '15px',
        backgroundColor: '#00044A',
        borderRadius: '50%',
        bottom: '10px',
        right: '70px'

    }

    const megenta = {
        position: 'absolute',
        zIndex: 3,
        width: '15px',
        height: '15px',
        backgroundColor: '#DD070A',
        borderRadius: '50%',
        bottom: '10px',
        right: '50px'
    }
    const yellow = {
        position: 'absolute',
        zIndex: 3,
        width: '15px',
        height: '15px',
        backgroundColor: '#FB9F14',
        borderRadius: '50%',
        bottom: '10px',
        right: '30px'
    }
    const content = {
        width: '330px',
        height: '320px',
        position: 'absolute',
        right: '0px'

    }
    const h3 = {
        color: 'white',
        fontSize: '23px',
        fontWeight: 500,
        marginBottom: '10px',
    }
    const learnmore = {
        display:'block',
        marginTop:'20px',
        fontSize:'13px',
        padding:'5px 10px',
        marginLeft:'20px',
        border:'1px solid white',
        backgroundColor:'transparent',
        color:'white'
    }

    return (
        <>
            <div className='Section' style={section}>
                <Navbar />
                <div className="flex_div" style={flex_div}>
                    <div className='flex_div' style={item}>

                        <div className='shere'>
                                <div className='first'>Shere</div>
                              <a href=''>  <i className='fa fa-instagram fa-1x'></i></a>
                              <a href=''>  <i className='fa fa-twitter fa-1x'></i></a>
                              <a href=''>  <i className='fa fa-facebook fa-1x'></i></a>
                              <a href=''>  <i className='fa fa-linkedin fa-1x'></i></a>
                        </div>
                        <div className='shoes' style={shoes}>
                            <h2 className='nike' style={nike} >NIKE <br /> CROSSFIT <br /> NANO 7</h2>

                            <img src={sho} style={img} />

                            <span style={price} >Price:<span> 8500 $</span></span>
                            <span >
                                <span style={blue}></span>
                                <span style={megenta}></span>
                                <span style={yellow}></span>
                            </span>

                        </div>
                        <div className='content' style={content}>
                            <h3 style={h3}>DESIGNED BY CROSSFITTERS FOR CROSSFITTERS</h3>
                            <span className='lorem' style={h3} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Itaque voluptatem error voluptatum deleniti deserunt possimus,
                                quam ratione, molestiae mollitia,

                            </span>

                            <button className='learnmore' style={learnmore}>learn more</button>

                            <button  className='addTocard'> + Add to Card </button>


                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
export default Section