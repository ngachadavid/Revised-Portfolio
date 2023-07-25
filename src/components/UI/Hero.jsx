import heroimg from '../../assets/images/hero.svg'
import ngacha from '../../assets/images/ngacha.jpg'
import ngacha2 from '../../assets/images/ngacha2.jpg'
import CountUp from 'react-countup'


const Hero = () => {
    return ( 
      <section className='pt-0' id='about'>
        <div className='container pt-4'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* ======= hero left content ======== */}
                <div className='w-full md:basis-2/3'>
                    <h5
                       data-aos="fade-right"
                       data-aos-duration="1500"
                       className='text-headingColor font-[600] text-[16px]'
                    >
                      Hello welcome
                    </h5>
                    <h1 
                       data-aos="fade-up"
                       data-aos-duration="1500"
                       className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
                       > I'm David Mwangi <br />
                       Software Developer
                    </h1>

                  
                    <p 
                      data-aos="fade-left"
                      data-aos-duration="1500"
                      className='flex gap-2 text-headingColor mt-6 font-[500] text-[15px] leading-7 sm:pl-0 sm:pr-10'
                    >
                    {/* <span>
                        <i class="ri-apps-2-line"></i>
                    </span>     */}
                     Full Stack Developer, with a focus on discovering solutions,
                     skilled at contributing to highly collaborative worked environments.
                     Demonstrated expertise with HTML, CSS, Javascript, ReactJs, Ruby and Ruby on Rails
                     to create websites with a strong focus on the user.
                     Good understanding of user experience and web design best practices.
                     Let's build something extraordinary together

                    </p>

                    <div 
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        data-aos-delay='200'
                        className='flex items-center gap-6 mt-7'
                    >
                    <a
                       href="#contact">
                       <button className='bg-primaryColor text-white font-[500]  flex items-center gap-2
                       hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                        <i class='ri-mail-line'></i>Hire me
                        </button> 
                    </a>   
                    <a
                      href='#portfolio'
                      className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                        see portfolio
                    </a>
                    </div>

                    <div className='flex items-center gap-9 mt-6'>
                        <span className='text-smallTextColor text-[19px] font-[600]'> 
                      
                        </span>
                        <span>
                            <a
                             href='https://github.com/ngachadavid' target='_blank' className='text-smallTextColor text-[20px] font-[600]'
                            >
                              <i class="ri-github-fill"></i>
                            </a>
                        </span>
                        <span>
                            <a
                             href='https://www.linkedin.com/in/david-mwangi01/' target='_blank' className='text-smallTextColor text-[20px] font-[600]'
                            >
                              <i class="ri-linkedin-line"></i>
                            </a>
                        </span>
                        <span>
                            <a
                             href='https://twitter.com/dangsinatra' target='_blank'  className='text-smallTextColor text-[20px] font-[600]'
                            >
                              <i class="ri-twitter-line"></i>
                            </a>
                        </span>
                        <span>
                            <a
                             href='https://www.instagram.com/almostngacha/'  target='_blank' className='text-smallTextColor text-[20px] font-[600]'
                            >
                              <i class="ri-instagram-line"></i>
                            </a>
                        </span> 
                    </div> 
                </div>
                 {/* ======= hero left end ======== */}
                 {/* ======= hero img ======== */}
                 <div className='basis-1/3 mt-10 sm:mt-0'>
                     <figure className='flex  items-center justify-center'>
                        <img className='rounded-full' src={ngacha}></img>
                     </figure>
                 </div>
                {/* ======= hero img end ======== */}
                {/* ======= hero content right ======== */}
                {/* <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={3} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>years of experience</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix='%'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>success Rate</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={50} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Happy Clients</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={50} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>projects Completed</h4>
                    </div>
                </div> */}
            </div>
        </div>
      </section>
     );
}
 
export default Hero;