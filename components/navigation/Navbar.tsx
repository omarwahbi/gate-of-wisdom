"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import type { Dictionary } from "@/lib/get-dictionary";

interface NavbarProps {
  lang: string;
  dictionary: Dictionary;
}

export function Navbar({ lang, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = dictionary.navigation;
  const common = dictionary.common;

  const getLanguagePath = (newLang: string) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    return segments.join("/");
  };

  const navItems = [
    { title: navigation.home, href: `/${lang}`, hasDropdown: false },
    { title: navigation.services, href: `/${lang}/services`, hasDropdown: true },
    { title: navigation.knowledgeHub, href: `/${lang}/knowledge-hub`, hasDropdown: true },
    { title: navigation.biCenter, href: `/${lang}/bi-center`, hasDropdown: true },
    { title: navigation.legislationLibrary, href: `/${lang}/legislation-library`, hasDropdown: true },
    { title: navigation.successStories, href: `/${lang}/success-stories` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 text-start">
        {/* Left Section: Logo + Desktop Navigation */}
        <div className="flex items-center space-s-8">
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src="/Gate_of_Wisdom_Logo.svg"
              alt="Gate of Wisdom Logo"
              width={200}
              height={200}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-s-2">
                {navItems.map((item) => {
                  const isActive = item.href === `/${lang}`
                    ? pathname === item.href
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                  return (
                  <NavigationMenuItem key={item.href}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className={cn("bg-transparent", isActive && "text-primary")}>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-start">
                            <li className="row-span-3">
                              <NavigationMenuLink
                                render={
                                  <Link
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                                    href={item.href}
                                  />
                                }
                              >
                                <div className="mb-2 mt-4 text-lg font-medium text-white">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-tight text-white/90">
                                  Explore our {item.title.toLowerCase()} and solutions.
                                </p>
                              </NavigationMenuLink>
                            </li>
                            {[1, 2, 3].map((i) => (
                              <li key={i}>
                                <NavigationMenuLink
                                  render={
                                    <Link
                                      href={`${item.href}/item-${i}`}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    />
                                  }
                                >
                                  <div className="text-sm font-medium leading-none font-heading">Sub-page {i}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Description for sub-page {i} of {item.title}.
                                  </p>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        render={
                          <Link
                            href={item.href}
                            className={cn(navigationMenuTriggerStyle(), isActive && "text-primary bg-accent/50")}
                          />
                        }
                      >
                        {item.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                )})}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right Section: Language Switcher & Mobile Menu */}
        <div className="flex items-center space-s-2">
          {/* Desktop Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden lg:flex"
            render={
              <Link href={getLanguagePath(lang === "en" ? "ar" : "en")} />
            }
          >
            <Globe className="h-4 w-4 me-2" />
            {common.switchLanguage}
          </Button>

          {/* Mobile Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            render={
              <Link href={getLanguagePath(lang === "en" ? "ar" : "en")} />
            }
          >
            <Globe className="h-4 w-4 me-2" />
            {lang === "en" ? "AR" : "EN"}
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="ms-2" />
                }
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side={lang === "ar" ? "right" : "left"} className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-start">Gate of Wisdom</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8 text-start">
                  {navItems.map((item) => {
                    const isActive = item.href === `/${lang}`
                      ? pathname === item.href
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);

                    return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        isActive ? "text-primary font-semibold" : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )})}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
