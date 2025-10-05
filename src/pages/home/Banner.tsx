



const Banner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className=" container mx-auto h-[500px] bg-[url(/images/img01.jpg)] rounded-xl mt-20 flex items-center justify-center">
                <div className="relative z-10 text-center text-white max-w-3xl">

                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                        Online Free Book Library
                    </h1>
                    <p className="mt-6 md:text-lg">
                        Explore a collection of Shadcn UI blocks and components, ready to
                        preview and copy. Streamline your development workflow with
                        easy-to-implement examples.
                    </p>
                    <div className="mt-12 flex items-center justify-center gap-4">

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;
