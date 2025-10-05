import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { categories, homepage } from "@/data/data";
import { ChevronRight } from "lucide-react";
import { Link } from 'react-router';








const MainSection = () => {
    return (
        <div className=" container mx-auto py-10 mt-10 lg:py-16 px-6 xl:px-0 flex flex-col lg:flex-row items-start gap-8">

            <aside className="sticky top-8 shrink-0 lg:max-w-[200px] w-full">
                <h3 className="text-xl font-bold pb-1">Categories</h3>
                <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="flex items-center justify-between gap-2 bg-muted p-3 rounded-md bg-opacity-15 dark:bg-opacity-25"
                        >
                            <div className="flex items-center gap-3">

                                <Link to={category.link ?? "/"} >{category.name}</Link>
                            </div>
                            <Badge className="px-1.5 rounded-full bg-foreground/7 text-foreground">
                                {category.totalPosts}
                            </Badge>
                        </div>
                    ))}
                </div>
            </aside>
            <div>
                <h2 className="text-xl font-bold pb-1 ">All Books</h2>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {homepage.map((i) => (
                        <Card key={i.id} className="shadow-none overflow-hidden rounded-md py-0 relative">

                            <CardHeader className="p-0">
                                <div className="aspect-video bg-muted w-full border-b">
                                    <img className="h-[310px]" src={i.image} alt="book
                                    " />
                                </div>
                            </CardHeader>
                            <div className="px-15 flex justify-center ">
                                <h4
                                    className=" text-center">
                                    {i.name}
                                </h4>
                            </div >
                            <div className="px-3 flex justify-center mb-2">
                                <Button asChild size="sm" className=" mx-auto">
                                    <a href={i.url} target="_blank" rel="noopener noreferrer" >
                                        Read Book <ChevronRight />
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default MainSection;
