import { Badge } from "lucide-react";
import { Link } from "react-router";



const NextPrevBlog = () => {
    return (
        <div className="container mx-auto ">
            <ul className="flex justify-between ">
                <li className=" max-w-[320px] border bg-muted p-4 rounded-lg ">
                    <Link to="/">
                        <h4>
                            Customized Shadcn UI Blocks & Components
                        </h4>
                        <div className="flex items-center gap-3 pt-4">
                            <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                Technology
                            </Badge>
                            <span className="font-medium text-xs text-muted-foreground">
                                5 min read
                            </span>
                        </div>
                    </Link>
                </li>
                <li className=" max-w-[320px] border bg-muted p-4 rounded-lg ">
                    <Link to="/">
                        <h4>
                            Customized Shadcn UI Blocks & Components
                        </h4>
                        <div className="flex items-center gap-3 pt-4">
                            <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                Technology
                            </Badge>
                            <span className="font-medium text-xs text-muted-foreground">
                                5 min read
                            </span>
                        </div>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default NextPrevBlog;