"use client";
import { useEffect, useState, useRef } from "react";

// Define the props type for StatisticCard
type StatisticCardProps = {
    title: string;
    target: number;
};

const StatisticCard = ({ title, target }: StatisticCardProps) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const currentRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    let start = 0;
                    const end = target; // No need to parseInt since target is already a number
                    if (start === end) return;

                    let totalMilSecDur = 2000;
                    let incrementTime = (totalMilSecDur / end);

                    let timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start === end) {
                            clearInterval(timer);
                            setHasAnimated(true);
                        }
                    }, incrementTime);
                }
            },
            { threshold: 0.5 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [target, hasAnimated]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-8 bg-gray-800 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-4xl font-bold text-white">{count}</h3>
            <p className="text-lg text-gray-400">{title}</p>
        </div>
    );
};

const Statistics = () => {
    const stats = [
        { title: "Happy Clients", target: 120 },
        { title: "Products Delivered", target: 80 },
        { title: "Team Members", target: 15 },
        { title: "Projects Completed", target: 50 },
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 items-center w-full pb-30 max-w-[500px] m-auto justify-center">
            {stats.map((stat, index) => (
                <div key={index} className="max-w-xs mx-auto">
                    <StatisticCard title={stat.title} target={stat.target} />
                </div>
            ))}
        </section>
    );
};

export default Statistics;
