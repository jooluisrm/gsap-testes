import { ItemCell } from "./itemCell";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const GsapScroll = () => {
    const el = useRef(null);


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".Item",
                    scrub: true,
                    markers: true,
                    start: "top 600px", 
                    end: "bottom 700px"      
                }
            })
                .fromTo("#item-1", { opacity: 0, y: 260 }, { opacity: 1, y: 0 })
                .fromTo("#item-2", { opacity: 0, y: 160 }, { opacity: 1, y: 0 })
                .fromTo("#item-3", { opacity: 0, y: 160 }, { opacity: 1, y: 0 });

        }, el);

    }, []);

    return (
        <section className="p-4 py-10 bg-gray-100 min-h-[700px] gap-5 flex flex-col md:flex-row items-center justify-center" ref={el}>
            <ItemCell
                itemRef={'item-1'}
                img="cell2.jpg"
                name="Samsung Galaxy S24"
                description="O mais novo smartphone da Samsung com câmera potente e desempenho incrível."
                price="R$ 4.999,00"
            />
            <ItemCell
                itemRef={'item-2'}
                img="cell2.jpg"
                name="Samsung Galaxy S24"
                description="O mais novo smartphone da Samsung com câmera potente e desempenho incrível."
                price="R$ 4.999,00"
            />
            <ItemCell
                itemRef={'item-3'}
                img="cell2.jpg"
                name="Samsung Galaxy S24"
                description="O mais novo smartphone da Samsung com câmera potente e desempenho incrível."
                price="R$ 4.999,00"
            />
        </section>
    );
}