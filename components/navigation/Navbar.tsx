"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
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
    { title: navigation.successStories, href: `/${lang}/success-stories`, hasDropdown: false },
    { title: navigation.contact, href: `/${lang}/contact`, hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 text-start">
        {/* Left Section: Logo + Desktop Navigation */}
        <div className="flex items-center space-s-8">
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src={lang === "ar" ? "/LOGO_WEB_AR.svg" : "/LOGO_WEB_EN.svg"}
              alt="Gate of Wisdom Logo"
              width={200}
              height={200}
              className="h-16 me-8 w-auto object-contain"
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
                          <NavigationMenuTrigger
                            className={cn("bg-transparent font-bold", isActive && "text-primary")}
                            onClick={() => router.push(item.href)}
                          >
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className={cn(
                              "grid gap-2 p-4 text-start font-sans",
                              item.href.includes("services")
                                ? "w-[300px] md:w-[500px] lg:w-[600px] md:grid-cols-2"
                                : item.href.includes("knowledge-hub") 
                                ? "w-[250px] md:w-[300px] grid-cols-1"
                                : "w-[200px] md:w-[250px] grid-cols-1"
                            )}>
                              {item.href.includes("services") && dictionary.services_hub ? (
                                dictionary.services_hub.services.map((subItem: any, i: number) => {
                                  const subHref = `${item.href}/${subItem.slug}`;
                                  const isSubActive = pathname === subHref;
                                  return (
                                    <li key={subItem.slug}>
                                      <NavigationMenuLink
                                        render={
                                          <Link
                                            href={subHref}
                                            className={cn(
                                              "block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                              isSubActive && "bg-accent text-accent-foreground font-semibold"
                                            )}
                                          />
                                        }
                                      >
                                        <div className="text-sm font-medium leading-none font-heading">{subItem.title}</div>
                                      </NavigationMenuLink>
                                    </li>
                                  );
                                })
                              ) : item.href.includes("knowledge-hub") && dictionary.knowledge_hub ? (
                                dictionary.knowledge_hub.categories.map((subItem: any, i: number) => {
                                  const subHref = `${item.href}/${subItem.slug}`;
                                  const isSubActive = pathname === subHref;
                                  const isReady = subItem.slug === 'lectures';
                                  return (
                                    <li key={subItem.slug}>
                                      <NavigationMenuLink
                                        render={
                                          isReady ? (
                                            <Link
                                              href={subHref}
                                              className={cn(
                                                "block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                isSubActive && "bg-accent text-accent-foreground font-semibold"
                                              )}
                                            />
                                          ) : (
                                            <div className="flex items-center justify-between select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors cursor-not-allowed opacity-60 bg-muted/30 hover:bg-muted/50 group" />
                                          )
                                        }
                                      >
                                          {isReady ? (
                                            <div className={cn("text-sm font-medium leading-none font-heading", isSubActive && "font-bold")}>{subItem.title}</div>
                                          ) : (
                                            <>
                                              <div className="text-sm font-medium leading-none font-heading pointer-events-none">{subItem.title}</div>
                                              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-full group-hover:text-primary group-hover:bg-primary/10 transition-colors pointer-events-none">
                                                {lang === 'ar' ? 'قريباً' : 'Soon'}
                                              </span>
                                            </>
                                          )}
                                      </NavigationMenuLink>
                                    </li>
                                  );
                                })
                              ) : item.href.includes("bi-center") && dictionary.bi_center ? (
                                dictionary.bi_center.categories.map((subItem: any, i: number) => {
                                  const subHref = `${item.href}/${subItem.slug}`;
                                  const isSubActive = pathname === subHref;
                                  const isReady = subItem.slug === 'economic-insights' || subItem.slug === 'investment-study' || subItem.slug === 'international-indicators';
                                  return (
                                    <li key={subItem.slug}>
                                      <NavigationMenuLink
                                        render={
                                          isReady ? (
                                            <Link
                                              href={subHref}
                                              className={cn(
                                                "block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                isSubActive && "bg-accent text-accent-foreground font-semibold"
                                              )}
                                            />
                                          ) : (
                                            <div className="flex items-center justify-between select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors cursor-not-allowed opacity-60 bg-muted/30 hover:bg-muted/50 group" />
                                          )
                                        }
                                      >
                                          {isReady ? (
                                            <div className={cn("text-sm font-medium leading-none font-heading", isSubActive && "font-bold")}>{subItem.title}</div>
                                          ) : (
                                            <>
                                              <div className="text-sm font-medium leading-none font-heading pointer-events-none">{subItem.title}</div>
                                              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-full group-hover:text-primary group-hover:bg-primary/10 transition-colors pointer-events-none">
                                                {lang === 'ar' ? 'قريباً' : 'Soon'}
                                              </span>
                                            </>
                                          )}
                                      </NavigationMenuLink>
                                    </li>
                                  );
                                })
                              ) : item.href.includes("legislation-library") && dictionary.legislation_library ? (
                                dictionary.legislation_library.categories.map((subItem: any, i: number) => {
                                  const subHref = `${item.href}/${subItem.slug}`;
                                  const isSubActive = pathname === subHref;
                                  const isReady = subItem.isReady;
                                  return (
                                    <li key={subItem.slug}>
                                      <NavigationMenuLink
                                        render={
                                          isReady ? (
                                            <Link
                                              href={subHref}
                                              className={cn(
                                                "block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                isSubActive && "bg-accent text-accent-foreground font-semibold"
                                              )}
                                            />
                                          ) : (
                                            <div className="flex items-center justify-between select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors cursor-not-allowed opacity-60 bg-muted/30 hover:bg-muted/50 group" />
                                          )
                                        }
                                      >
                                          {isReady ? (
                                            <div className={cn("text-sm font-medium leading-none font-heading", isSubActive && "font-bold")}>{subItem.title}</div>
                                          ) : (
                                            <>
                                              <div className="text-sm font-medium leading-none font-heading pointer-events-none">{subItem.title}</div>
                                              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-full group-hover:text-primary group-hover:bg-primary/10 transition-colors pointer-events-none">
                                                {lang === 'ar' ? 'قريباً' : 'Soon'}
                                              </span>
                                            </>
                                          )}
                                      </NavigationMenuLink>
                                    </li>
                                  );
                                })
                              ) : (
                                [1, 2, 3].map((i) => (
                                  <li key={i}>
                                    <NavigationMenuLink
                                      render={
                                        <Link
                                          href={`${item.href}/item-${i}`}
                                          className="block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        />
                                      }
                                    >
                                      <div className="text-sm font-medium leading-none font-heading">Sub-page {i}</div>
                                    </NavigationMenuLink>
                                  </li>
                                ))
                              )}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink
                          render={
                            <Link
                              href={item.href}
                              className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-bold", isActive && "text-primary")}
                            />
                          }
                        >
                          {item.title}
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  )
                })}
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
            nativeButton={false}
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
            nativeButton={false}
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
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
