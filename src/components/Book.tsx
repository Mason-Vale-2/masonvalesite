import React, { useState, useEffect, useRef } from "react";

const FlipBook: React.FC = () => {
    const count = 12; // pages count, must be even
    const images = Array.from({ length: count }, (_, i) =>
        `./brochure/brochure-${String(i + 1).padStart(2, "0")}.jpg`
    );

    const papers: { id: number; front: string; back: string | null }[] = [];
    for (let i = 0; i < images.length; i += 2) {
        papers.push({
            id: Math.floor(i / 2) + 1,
            front: images[i],
            back: images[i + 1] || null,
        });
    }

    const totalPapers = papers.length;
    const maxLocation = totalPapers + 1;

    const [activePageIndex, setActivePageIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);


    const touchStartRef = useRef<number | null>(null);
    const touchEndRef = useRef<number | null>(null);
    const minSwipeDistance = 35;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getDesktopLocation = (index: number) => {
        if (index === 0) return 1;
        if (index === images.length - 1) return totalPapers + 1;
        return Math.floor((index - 1) / 2) + 2;
    };

    const getPageIndexFromLocation = (loc: number) => {
        if (loc === 1) return 0;
        if (loc === totalPapers + 1) return images.length - 1;
        return (loc - 2) * 2 + 1;
    };

    const goNextPage = () => {
        if (isMobile) {
            setActivePageIndex((prev) => Math.min(prev + 1, images.length - 1));
        } else {
            const currentLoc = getDesktopLocation(activePageIndex);
            if (currentLoc < maxLocation) {
                setActivePageIndex(getPageIndexFromLocation(currentLoc + 1));
            }
        }
    };

    const goPrevPage = () => {
        if (isMobile) {
            setActivePageIndex((prev) => Math.max(prev - 1, 0));
        } else {
            const currentLoc = getDesktopLocation(activePageIndex);
            if (currentLoc > 1) {
                setActivePageIndex(getPageIndexFromLocation(currentLoc - 1));
            }
        }
    };

    const goToFirstPage = () => {
        setActivePageIndex(0);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchEndRef.current = null;
        touchStartRef.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndRef.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartRef.current === null || touchEndRef.current === null) return;

        const distance = touchStartRef.current - touchEndRef.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goNextPage();
        } else if (isRightSwipe) {
            goPrevPage();
        }

        touchStartRef.current = null;
        touchEndRef.current = null;
    };

    const getBookTransform = () => {
        const loc = getDesktopLocation(activePageIndex);
        if (loc === 1) return "translateX(50%)";
        if (loc === maxLocation) return "translateX(150%)";
        return "translateX(100%)";
    };

    return (
        <div className="flex flex-col items-center justify-between h-[100dvh] p-2 md:p-6 font-sans select-none overflow-hidden text-slate-200 flipbook-container">
            <style>{`
                .flipbook-container {
                    --book-page-w: min(88vw, 360px);
                    --book-page-h: min(60vh, 520px);
                }
                @media (min-width: 480px) {
                    .flipbook-container {
                        --book-page-w: min(85vw, 420px);
                        --book-page-h: min(65vh, 600px);
                    }
                }
                @media (min-width: 768px) {
                    .flipbook-container {
                        --book-page-w: min(calc((100vw - 120px) / 2), 340px);
                        --book-page-h: calc(var(--book-page-w) * 1.45);
                    }
                }
                @media (min-width: 1024px) {
                    .flipbook-container {
                        --book-page-w: min(calc((100vw - 160px) / 2), 430px);
                        --book-page-h: calc(var(--book-page-w) * 1.43);
                    }
                }
                @media (min-width: 1380px) {
                    .flipbook-container {
                        --book-page-w: min(calc((100vw - 200px) / 2), 500px);
                        --book-page-h: calc(var(--book-page-w) * 1.41);
                    }
                }
                @media (min-width: 1536px) {
                    .flipbook-container {
                        --book-page-w: min(calc((100vw - 240px) / 2), 650px);
                        --book-page-h: calc(var(--book-page-w) * 1.4);
                    }
                }
            `}</style>

            {/* main zone of the book */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-2 md:gap-4 lg:gap-6 relative my-auto">
                <button
                    onClick={goPrevPage}
                    disabled={activePageIndex === 0}
                    className="hidden md:flex items-center justify-center p-4 m-2 bg-gold-500 hover:bg-gold-600 rounded-full shadow-lg whitespace-nowrap backdrop-blur-md transition-all duration-300 active:scale-90 disabled:opacity-10 disabled:pointer-events-none flex-shrink-0 text-black"
                    aria-label="Previous page"
                >
                    <svg className="w-8 h-8 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {isMobile ? (
                    <div
                        className="relative cursor-grab active:cursor-grabbing flex-shrink-0 touch-pan-y"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ width: "var(--book-page-w)", height: "var(--book-page-h)" }}
                    >
                        {images.map((image, idx) => {
                            const isFlipped = idx < activePageIndex;
                            const isActive = idx === activePageIndex;

                            if (Math.abs(idx - activePageIndex) > 1 && !isFlipped) {
                                return null;
                            }

                            return (
                                <div
                                    key={idx}
                                    className="absolute top-0 left-0 w-full h-full transition-all duration-800 ease-in-out shadow-2xl rounded-2xl overflow-hidden"
                                    style={{
                                        zIndex: isActive ? 20 : isFlipped ? 0 : 10,
                                        opacity: isActive ? 1 : 0,
                                        transform: isActive
                                            ? "scale(1) translateX(0)"
                                            : isFlipped
                                                ? "scale(0.95) translateX(-50px)"
                                                : "scale(0.95) translateX(50px)",
                                        pointerEvents: isActive ? "auto" : "none",
                                        visibility: Math.abs(idx - activePageIndex) > 1 ? "hidden" : "visible",
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={`Page ${idx + 1}`}
                                        className="w-full h-full object-cover rounded-2xl pointer-events-none"
                                        draggable={false}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div
                        className="relative cursor-grab active:cursor-grabbing flex-shrink-0"
                        style={{
                            width: "calc(2 * var(--book-page-w))",
                            height: "var(--book-page-h)",
                            perspective: "1800px",
                        }}
                    >
                            <div className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
                            <div
                                className="absolute top-0 left-0 h-full transition-transform duration-500 ease-in-out"
                                style={{
                                    width: "var(--book-page-w)",
                                    transformStyle: "preserve-3d",
                                    transform: getBookTransform(),
                                }}
                            >
                                    {getDesktopLocation(activePageIndex) > 1 &&
                                        getDesktopLocation(activePageIndex) < maxLocation && (
                                            <div
                                                className="absolute top-0 bottom-0 left-0 w-[5px] bg-gradient-to-r from-black/40 via-black/60 to-black/40 z-[100] -translate-x-1/2 pointer-events-none rounded-full"
                                                style={{ transformStyle: "preserve-3d" }}
                                            />
                                        )}

                                {papers.map((paper, index) => {
                                    const paperIndex = index + 1;
                                    const isFlipped = paperIndex < getDesktopLocation(activePageIndex);
                                    const zIndex = isFlipped ? paperIndex : totalPapers - paperIndex + 1;
                                    const rotateY = isFlipped ? -180 : 0;

                                    return (
                                        <div
                                            key={paper.id}
                                            className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
                                            style={{
                                                transformOrigin: "left center",
                                                transform: `rotateY(${rotateY}deg)`,
                                                transformStyle: "preserve-3d",
                                                zIndex,
                                            }}
                                        >
                                            <div
                                                className="absolute top-0 left-0 w-full h-full select-none shadow-md rounded-r-2xl"
                                                style={{
                                                    WebkitBackfaceVisibility: "hidden",
                                                    backfaceVisibility: "hidden",
                                                    transformStyle: "preserve-3d",
                                                    transform: "rotateY(0deg) translateZ(0.2px)",
                                                }}
                                            >
                                                <img
                                                    src={paper.front}
                                                    alt={`Page ${paper.id * 2 - 1}`}
                                                    className="w-full h-full object-cover rounded-r-2xl"
                                                    draggable={false}
                                                />
                                            </div>

                                            <div
                                                className="absolute top-0 left-0 w-full h-full select-none shadow-md rounded-l-2xl"
                                                style={{
                                                    transform: "rotateY(180deg) translateZ(0.2px)",
                                                    WebkitBackfaceVisibility: "hidden",
                                                    backfaceVisibility: "hidden",
                                                    transformStyle: "preserve-3d",
                                                }}
                                            >
                                                {paper.back && (
                                                    <img
                                                        src={paper.back}
                                                        alt={`Page ${paper.id * 2}`}
                                                        className="w-full h-full object-cover rounded-l-2xl"
                                                        draggable={false}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                <button
                    onClick={goNextPage}
                    disabled={activePageIndex === images.length - 1}
                    className="hidden md:flex items-center justify-center p-4 rounded-full active:scale-90 bg-gold-500 hover:bg-gold-600 shadow-lg whitespace-nowrap backdrop-blur-md transition-all duration-300 disabled:opacity-10 disabled:pointer-events-none flex-shrink-0 text-black"
                    aria-label="Next page"
                >
                    <svg className="w-8 h-8 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Mobile page info */}
            <div className="flex md:hidden flex-col items-center gap-2 mb-2 z-50 flex-shrink-0">
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={goPrevPage}
                        disabled={activePageIndex === 0}
                        className="p-3.5 rounded-full text-black  bg-gold-500 hover:bg-gold-600 shadow-xl border-none active:scale-95 disabled:opacity-20"
                        aria-label="Previous page"
                    >
                        <svg className="w-5 h-5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToFirstPage}
                        className="text-xs font-semibold text-black  bg-gold-500 hover:bg-gold-600 px-4 py-2.5 rounded-full font-mono shadow-md border border-none active:scale-95"
                    >
                        {activePageIndex + 1} / {images.length}
                    </button>

                    <button
                        onClick={goNextPage}
                        disabled={activePageIndex === images.length - 1}
                        className="p-3.5 rounded-full text-black  bg-gold-500 hover:bg-gold-600 shadow-xl border-none active:scale-95 disabled:opacity-20"
                        aria-label="Next page"
                    >
                        <svg className="w-5 h-5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop page info */}
            <div className="hidden md:block mb-4 px-6 py-3 md:text-lg font-semibold text-black bg-gold-500 hover:bg-gold-600 backdrop-blur-md rounded-full shadow-lg whitespace-nowrap transition-colors duration-300 flex-shrink-0">
                {activePageIndex === 0 ? (
                    <span>Pages</span>
                ) : activePageIndex === images.length - 1 ? (
                        <span>Back Cover (Page {images.length})</span>
                ) : (
                    <span>
                                Pages {activePageIndex + 1} - {activePageIndex + 2} of {images.length}
                    </span>
                )}
            </div>
        </div>
    );
};

export default FlipBook;