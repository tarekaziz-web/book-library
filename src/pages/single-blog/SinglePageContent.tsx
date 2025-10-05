import { Badge } from "@/components/ui/badge";


const SinglePageContent = () => {
    return (
        <>
            <div className="text-center max-w-3xl">

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                    Customized Shadcn UI Blocks & Components
                </h1>
                <div className="flex items-center gap-3 justify-center py-6">
                    <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                        Technology
                    </Badge>
                    <span className="font-medium text-xs text-muted-foreground">
                        5 min read
                    </span>
                </div>

                <div className=" container mx-auto " >
                    <img className="w-full h-[450px] " src="https://i.postimg.cc/tgcVdw95/pexels-shkrabaanthony-5475752.jpg" alt="image" />
                </div>

            </div>
            <div className=" mx-auto p-6 bg-accent rounded-xl" >
                <div>
                    <p className=" text-foreground leading-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore placeat, illum sapiente aliquam maiores eveniet possimus dolorum doloremque excepturi doloribus necessitatibus nam odit? Voluptatibus maiores vero accusamus dolor magnam consequatur ut unde asperiores nostrum! Perspiciatis eligendi quasi dolore eaque doloribus error totam soluta quo laudantium in accusamus autem quisquam veniam nulla nisi nihil enim beatae tempore reprehenderit, et dolorum! Possimus nisi adipisci et, tempore rerum velit suscipit aut ullam odit ipsum magnam repellendus dolorem aperiam voluptatibus. Corrupti eius accusantium reiciendis quod animi eaque beatae ad eveniet molestias vero voluptate, tenetur inventore! Ut, cumque? Perspiciatis voluptatum, nisi mollitia ullam delectus odit omnis cupiditate sint eligendi quas possimus cum facilis! Ut nemo quis quisquam architecto, voluptatibus totam. Ex, non omnis officiis aspernatur sequi rerum inventore est harum vel? Placeat necessitatibus odit consequatur deleniti, cum totam fugiat omnis sit officia, tenetur ab non, vel molestias qui minus illum quis quaerat fuga at repellendus. Repudiandae commodi deleniti voluptatum ducimus officia quaerat velit assumenda ea tempore ipsam tenetur accusantium, ipsum ut in doloribus quos excepturi. Adipisci sit animi ut esse, necessitatibus facere nostrum eligendi cupiditate modi deserunt iure dicta exercitationem explicabo architecto pariatur enim dignissimos voluptatem incidunt quis. Perferendis iure nisi aliquid reiciendis eaque earum praesentium voluptas alias mollitia, impedit odio placeat dignissimos molestias unde doloremque consectetur aspernatur laudantium. </p>
                </div>
            </div>

        </>
    );
};

export default SinglePageContent;