import Card from "@/components/card";
import DownloadButton from "@/components/download-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SectionTitle from "@/components/section-title";
import Wrapper from "@/components/wrapper";
import { arrivalItems, youngFavItems } from "@/constants";
import Image from "next/image";

 
export default function Home() {
  return (
    <>
      <Wrapper className="">
        <Navbar />

        <div className="sm:mt-5 px-6 pb-10 sm:p-8 lg:p-16 flex flex-col sm:flex-row items-center justify-between gap-8 bg-[#F4F6F5] rounded-2xl">
          <div className="flex-1 order-2 sm:order-1 max-w-md flex flex-col gap-5 xl:gap-8">
            <h2 className="flex flex-col banner-text-size font-extrabold uppercase">
              <span className="-rotate-1 px-3 bg-white">let&apos;s</span>
              <span className="px-4">explore</span>
              <span className="-rotate-1 px-3 bg-[#EBD96B]">unique</span>
              <span className="px-4">clothes.</span>
            </h2>
            <p className="text-black/90 text-base sm:text-sm lg:text-lg">
              Live for Influential and Innovative fashion!
            </p>
            <button className="self-start px-6 xl:px-8 py-2.5 xl:py-3.5 text-lg font-medium text-white bg-black hover:bg-black/80 capitalize rounded-lg duration-150">
              shop now
            </button>
          </div>

          <div className="order-1 sm:order-2 relative w-[17rem] sm:w-96 md:w-[30rem] h-[17rem] sm:h-96 md:h-[30rem]">
            <Image
              fill
              loading="lazy"
              src="/assets/banner-img-1.png"
              alt="banner"
              className="object-contain"
            />
          </div>
        </div>
      </Wrapper>

      <section className="w-full mt-8 p-5 flex justify-center bg-[#EBD96B]">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 md:gap-10 lg:gap-20">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="relative w-16 sm:w-24 h-16 sm:h-24">
              <Image
                fill
                src={`/assets/sponser-${item}.svg`}
                alt="sponser"
                className="mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </section>

      <Wrapper className="mt-10">
        <SectionTitle title="NEW ARRIVALS" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-7 place-items-center">
          {arrivalItems.map((item, index) => (
            <Card
              key={index}
              {...item}
              imgSize="w-full sm:w-96 md:w-full h-96"
            />
          ))}
        </div>
      </Wrapper>

      <Wrapper noPadding className="mt-24 relative text-black/90">
        <div className="absolute inset-0 bg-[#E0C340]/70 z-20"></div>
        <div className="p-16 bg-banner bg-cover flex flex-col items-center">
          <div className="max-w-sm xl:max-w-xl flex flex-col gap-6 md:gap-9 z-30">
            <h2 className="flex flex-col gap-2 text-6xl xl:text-7xl font-extrabold uppercase">
              <span className="self-start p-1 bg-white">payday</span>
              <span>sale now</span>
            </h2>
            <p className="text-lg sm:text-xl xl:text-2xl font-medium">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className="text-base sm:text-lg xl:text-xl flex flex-col">
              <span className="font-semibold">1 June - 10 June 2021</span>
              <span>*Terms & Conditions apply</span>
            </p>
            <button className="self-start px-6 xl:px-10 py-2.5 xl:py-4 text-lg font-medium text-white bg-black hover:bg-black/80 uppercase rounded-lg duration-150">
              shop now
            </button>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="mt-20">
        <SectionTitle title="Young’s Favourite" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center">
          {youngFavItems.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Wrapper>

      <Wrapper className="mt-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="order-2 md:order-1 max-w-lg md:max-w-md flex flex-col gap-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-black/80 font-extrabold uppercase">
              download app & get the voucher!
            </h2>
            <p className="text-lg text-black/70">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <div className="flex items-center gap-6 lg:gap-10">
              <DownloadButton type="ios" path="#" />
              <DownloadButton type="android" path="#" />
            </div>
          </div>
          <div className="order-1 md:order-2 relative w-full h-[40rem] lg:h-[50rem]">
            <Image
              fill
              src="/assets/mobile-overview.png"
              alt="mobile overview"
              className="object-contain"
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper className="mt-16 p-20 bg-[#E5C643] flex flex-col items-center">
        <div className="max-w-2xl flex flex-col items-center text-center gap-5">
          <h2 className="text-3xl leading-tight font-extrabold text-white uppercase">
            join shopping community to get monthly promo
          </h2>
          <p className="text-white font-medium">
            Type your email down below and be young wild generation
          </p>
          <div className="relative w-fit flex items-center bg-white rounded-lg overflow-hidden border-2 border-transparent focus-within:border-black duration-150">
            <input
              type="text"
              placeholder="Add your email here"
              className="p-3 focus:outline-none"
            />
            <button className="mx-2 px-4 py-2 bg-black text-sm font-semibold tracking-wide text-white uppercase rounded-lg">
              send
            </button>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="bg-black text-white px-10 lg:px-20 py-20 flex flex-col items-center sm:items-start text-center sm:text-left">
     <Footer />
      </Wrapper>
    </>
  );
}
