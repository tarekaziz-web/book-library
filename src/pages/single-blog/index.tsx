import NextPrevBlog from "@/pages/single-blog/NextPrevBlog";
import SinglePageContent from "@/pages/single-blog/SinglePageContent";



const SingleBlog = () => {
    return (

        <>
            <div className=" w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
                <SinglePageContent />
                <NextPrevBlog />

            </div>
        </>
    );
};

export default SingleBlog;
