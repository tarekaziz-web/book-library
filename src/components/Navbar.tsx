import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { NavMenu } from "@/components/ui/nav-menu";
import { NavigationSheet } from "@/components/ui/navigation-sheet";
import { SearchBar } from "@/components/ui/searchbar";
import { Link } from "react-router";


const Navbar = () => {
    return (
        <div className=" bg-white relative z-20">
            <nav className=" absolute top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
                <div className="h-full flex items-center justify-between mx-auto px-4">
                    <Logo />

                    {/* Desktop Menu */}
                    <NavMenu className="hidden md:block" />

                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            className="hidden sm:inline-flex rounded-full"
                        >
                            <Link to="/login" >
                                Login
                            </Link>
                        </Button>
                        <SearchBar />
                        <ModeToggle />

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
