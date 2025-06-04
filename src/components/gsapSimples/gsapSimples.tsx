"use client"

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const GsapSimples = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1 } });

        const title = titleRef.current;
        const description = descriptionRef.current;
        const button = buttonRef.current;

        tl.fromTo(title, { opacity: 0, y: -100 }, { opacity: 100, y: 0 })
            .fromTo(description, { opacity: 0, y: 100 }, { opacity: 100, y: 0 }, "-=0.75")
            .fromTo(button, { opacity: 0, y: 100 }, { opacity: 100, y: 0 }, "-=0.75");
    }, []);
    
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="max-w-6xl">
                <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center" ref={titleRef}>
                    Rapidly build modern websites without ever leaving your HTML.
                </h1>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto " ref={descriptionRef}>
                    A utility-first CSS framework packed with classes like
                    <span> flex</span>, <span>pt-4</span>, <span>text-center</span> and
                    <span> rotate-90</span> that can be composed to build any design, directly in your markup.
                </p>
            </div>
            <div>
                <button
                    className="mt-5 cursor-pointer bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
                    ref={buttonRef}
                >
                    Get started
                </button>
            </div>
        </section>
    )
}