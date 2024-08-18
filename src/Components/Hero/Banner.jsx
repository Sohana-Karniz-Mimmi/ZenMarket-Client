import slider1 from '../../assets/images/slide.jpg'
import slider2 from '../../assets/images/slide2.jpg'
import slider3 from '../../assets/images/slide3.jpg'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';




const Banner = () => {
    return (
        <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Autoplay, EffectFade, Pagination]}
            // autoplay={{
            //     delay: 9000,
            //   }}
            loop={true}
        >


            <SwiperSlide>
                <section className="relative -z-50 bg-cover bg-fixed bg-center bg-no-repeat md:h-[620px] h-[500px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slider1})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center"
                    >
                        <div className='flex items-center justify-center md:h-[540px] h-[250px]'>
                            <div className=" md:mt-14 mt-64 text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <i className="md:text-3xl text-sm mt-4max-w-2xl">
                                    It has finally started
                                </i>
                                <h1 className="text-3xl my-5 font-bold md:text-7xl uppercase">
                                    Huge Sale
                                </h1>
                                <p className="md:text-5xl text-sm mt-4 mb-10 max-w-2xl uppercase">
                                    Up to 70% off
                                </p>
                                <div className='md:gap-5 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-white hover:text-black px-6 font-semibold uppercase'> shop men </button>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-white hover:text-black px-6 font-semibold uppercase'> shop women </button>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-white hover:text-black px-6 font-semibold uppercase'> shop all </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="relative bg-cover bg-fixed bg-top bg-no-repeat md:h-[620px] h-[500px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${slider2})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div className="relative md:mr-[300px] lg:h-screen lg:items-center">
                        <div className='flex justify-center items-center md:h-[540px] h-[250px]'>
                            <div className="md:mt-14 mt-64 text-black md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <i className="md:text-2xl text-sm mt-4max-w-2xl">
                                    Women Clothing
                                </i>
                                <h1 className="text-xl mt-5 mb-3 font-bold md:text-5xl uppercase w-[500px]">
                                    Hot summer fashion
                                </h1>
                                <p className="md:text-2xl text-sm mb-10 max-w-2xl uppercase">
                                    From 19$
                                </p>
                                <div className='space-x-5'>
                                    <button className='border border-[#446084] py-[9px] text-[#446084] bg-transparent hover:bg-[#446084] hover:text-white px-6 font-semibold uppercase'> shop now </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="relative bg-cover bg-fixed bg-top bg-no-repeat md:h-[620px] h-[500px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${slider3})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div className="relative md:ml-[300px] lg:ml-[500px] lg:h-screen lg:items-center">
                        <div className='flex justify-center items-center md:h-[540px] h-[250px]'>
                            <div className="md:mt-14 mt-64 text-white md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <i className="md:text-2xl text-sm mt-4 max-w-2xl">
                                    Women Clothing
                                </i>
                                <h1 className="text-xl mt-5 mb-3 font-bold md:text-5xl uppercase w-[500px]">
                                    Hot summer fashion
                                </h1>
                                <p className="md:text-2xl text-sm mb-10 max-w-2xl uppercase">
                                    From 19$
                                </p>
                                <div className='space-x-5'>
                                    <button className='border hover:border-white border-[#446084] py-[9px] hover:bg-transparent bg-[#446084] text-white px-6 font-semibold uppercase'> shop now </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>
            


        </Swiper>
    );
};

export default Banner;